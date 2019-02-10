Title: Django Model Behaviors
Date: 2013-05-12
Category: Coding
Tags: Django, Python
Summary: How do we manage the growing complexity of our Django models?  Leverage the behavior pattern to keep them compartmentalized into discrete reusable functionality.

As Django projects scale in complexity beyond the neat and tidy tutorial phase, how can we structure our models to keep things manageable?  We're talking 10s to 100s of models, used across numerous views, templates and tests...

[TOC]

# Compositional Model Behaviors
The Compositional Model pattern allows you to manage the complexity of your models through compartmentalization of functionality into manageable components.

### The Benefits of Fat Models
- Encapsulation
- Single Path
- Separation of Concerns (MVC)

### Without the Maintenance Cost
- DRY
- Readability
- Reusability
- Single Responsibility Principle
- Testability

# Model Behaviors Example

### Traditional Model
```python
class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    slug = models.SlugField()
    author = models.ForeignKey(User, related_name='posts')
    create_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    publish_date = models.DateTimeField(null=True)
```

### Decomposed into Discrete Behaviors

The goal of the behavior pattern is to decompose your models into core, reusable mixins.  Create a higher level abstraction than the model field that encapsulates the intended business logic.

```python
from .behaviors import Authorable, Permalinkable, Timestampable, Publishable


class BlogPost(Authorable, Permalinkable, Timestampable, Publishable, models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
```

### Reusable Behaviors
```python
class Authorable(models.Model):
    author = models.ForeignKey(User)
    
    class Meta:
        abstract = True


class Permalinkable(models.Model):
    slug = models.SlugField()
    
    class Meta:
        abstract = True


class Publishable(models.Model):
    publish_date = models.DateTimeField(null=True)
    
    class Meta:
        abstract = True


class Timestampable(models.Model):
    create_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    
    class Meta:
        abstract = True
```

# Models are more than just Fields
Our first cut at common behaviors just captured common fields, but what about everything else models encapsulate?

- Properties
- Custom Methods
- Method Overloads (save(), etc...)
- Validation
- Querysets

### Capturing Model Methods
Let's extend our traditional fat model with some of these encapsulated busuiness logic
```python
class BlogPost(models.Model):
    ...

    @property
    def is_published(self):
        from django.utils import timezone
        return self.publish_date < timezone.now()

    @models.permalink
    def get_absolute_url(self):
        return ('blog-post', (), {
            "slug": self.slug,
        })

    def pre_save(self, instance, add):
        from django.utils.text import slugify
        if not instance.slug:
            instance.slug = slugify(self.title)
```

### Behaviors with Methods
In actuality, these same methods can be generalized and extracted into our behavior models
```python
class Permalinkable(models.Model):
    slug = models.SlugField()
    
    class Meta:
        abstract = True
    
    def get_url_kwargs(self, **kwargs):
        kwargs.update(getattr(self, 'url_kwargs', {}))
        return kwargs
    
    @models.permalink
    def get_absolute_url(self):
        url_kwargs = self.get_url_kwargs(slug=self.slug)        
        return (self.url_name, (), url_kwargs)
    
    def pre_save(self, instance, add):
        from django.utils.text import slugify
        if not instance.slug:
            instance.slug = slugify(self.slug_source)


class Publishable(models.Model):
    publish_date = models.DateTimeField(null=True)
    
    class Meta:
        abstract = True
    
    objects = PassThroughManager.for_queryset_class(PublishableQuerySet)()

    def publish_on(self, date=None):
        from django.utils import timezone
        if not date:
            date = timezone.now()
        self.publish_date = date
        self.save()

    @property
    def is_published(self):
        from django.utils import timezone
        return self.publish_date < timezone.now()
```

### Wire up the Concrete Model
Since we generalized our behaviors, we need to add some helpers on our concrete models to complete the functionality.

```python
from .behaviors import Authorable, Permalinkable, Timestampable, Publishable


class BlogPost(Authorable, Permalinkable, Timestampable, Publishable, models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    
    url_name = "blog-post"

    @property
    def slug_source(self):
        return self.title
```

# Naming Tips

Use "&lt;verb&gt;-able" naming pattern for behaviors.  The "-able" suffix ensures the behaviors are readily identifiable.  It also prevents yet another use of the word Mixin.  (Don't worry when the naming deviates from decent english such as in the case of `OptionallyGenericRelateable`)

# Custom Queryset Chaining

We all know to chain queryset methods, but what about adding custom manager methods?

Let's Find Posts from a Given Author (username1) that are Published (publish_date in the past)

### QuerySet without Encapsulation

```python
from django.utils import timezone
from .models import BlogPost

>>> BlogPost.objects.filter(author__username='username1') \
.filter(publish_date__lte=timezone.now())
```

### Custom Managers

Let's create methods on a custom Manager to handle the past-publication date and author filters.

```python
class BlogPostManager(models.Manager):
    
    def published(self):
        from django.utils import timezone
        return self.filter(publish_date__lte=timezone.now())
    
    def authored_by(self, author):
        return self.filter(author__username=author)


class BlogPost(models.Model):
    ...
    
    objects = BlogPostManager()
```

```python
>>> published_posts = BlogPost.objects.published()
>>> posts_by_author = BlockPost.objects.authored_by('username1')
```

### Chaining our Filters?

What if we try to chain our custom filters?

```python
>>> BlogPost.objects.authored_by('username1').published()
AttributeError: 'QuerySet' object has no attribute 'published'

>>> type(Blogpost.objects.authored_by('username1'))
<class 'django.db.models.query.QuerySet'>
```

### _Solution_: Custom Querysets

Leverage `PassthroughManager` from [django-model-utils][django-model-utils] to allow chaining of custom manager methods.

```python

from model_utils.managers import PassThroughManager

class PublishableQuerySet(models.query.QuerySet):
    def published(self):
        from django.utils import timezone
        return self.filter(publish_date__lte=timezone.now())


class AuthorableQuerySet(models.query.QuerySet):
    def authored_by(self, author):
        return self.filter(author__username=author)

class BlogPostQuerySet(AuthorableQuerySet, PublishableQuerySet):
    pass


class BlogPost(Authorable, Permalinkable, Timestampable, Publishable, models.Model):
    ...
    
    objects = PassThroughManager.for_queryset_class(BlogPostQuerySet)()
```

Now you can chain custom methods inherited from multiple behaviors.

```python
>>> author_public_posts = BlogPost.objects.authored_by('username1').published()

>>> type(Blogpost.objects.authored_by('username1'))
<class 'example.queryset.BlogPostQuerySet'>
```

[django-model-utils]: https://github.com/carljm/django-model-utils

### Ensulated Business Logic

What's more legible and maintainable?

```python
BlogPost.objects.filter(author__username='username1').filter(publish_date__lte=timezone.now())
```

or

```python
BlogPost.objects.authored_by('username1').published()
```

# Testing Behaviors

Create matching Behavior tests to validate our models.

### Same Benefits as for Models
- DRY
- Readability
- Reusability
- Single Responsibility

# Unit Test Example

We can create reusuable test components that validate our behaviors.  The list of test mixins then become documentation for the expected role of the model.

### Traditional Test

```python
from django.test import TestCase

from .models import BlogPost


class BlogPostTestCase(TestCase):
    def test_published_blogpost(self):
        from django.utils import timezone
        blogpost = BlogPost.objects.create(publish_date=timezone.now())
        self.assertTrue(blogpost.is_published)
        self.assertIn(blogpost, BlogPost.objects.published())
```

### Converted to a Behavior Test Mixin

```python
class BehaviorTestCaseMixin(object):
    def get_model(self):
            return getattr(self, 'model')
    
    def create_instance(self, **kwargs):
        raise NotImplementedError("Implement me")


class PublishableTests(BehaviorTestCaseMixin):
    def test_published_blogpost(self):
        from django.utils import timezone
        obj = self.create_instance(publish_date=timezone.now())
        self.assertTrue(obj.is_published)
        self.assertIn(obj, self.model.objects.published())
```

### The Updated Unit Test

```python
from django.test import TestCase

from .models import BlogPost
from .behaviors.tests import PublishableTests


class BlogPostTestCase(PublishableTests, TestCase):
    model = BlogPost
    
    def create_instance(self, **kwargs):
        return BlogPost.objects.create(**kwargs)
```

### Combine with Model Specific Tests

```python
class BlogPostTestCase(PublishableTests, AuthorableTests, PermalinkableTests, TimestampableTests, TestCase):
    model = BlogPost
    
    def create_instance(self, **kwargs):
        return BlogPost.objects.create(**kwargs)

    def test_blog_specific_functionality(self):
        ...
```

# Additional Model Testing Tips

- Use [Factory Boy][factory-boy] for creating test instances/fixtures
- Use Inherited TestCases to validate different scenarios

```python
class StaffBlogPostTestCase(PublishableTests, AuthorableTests, PermalinkableTests, TimestampableTests, BaseBlogPostTestCase):
    det setUp(self):
        self.user = StaffUser()

class AuthorizedUserBlogPostTestCase(PublishableTests, AuthorableTests, PermalinkableTests, TimestampableTests, BaseBlogPostTestCase):
    det setUp(self):
        self.user = AuthorizedUser()
```

(Same behavior expected for Staff or Authorized User)

[factory-boy]: https://github.com/dnerdy/factory_boy

# Reusability

### Eventually Build a Libray of Behaviors

- *Permalinkable*
- *Publishable*
- *Authorable*
- *Timestampable*

### Reusable both across our own Apps and shareable through the Community

More Examples
- *Moderatable* - `BooleanField('approved')`
- *Scheduleable* - (`start_date` and `end_date` with range queries)
- *GenericRelatable* (the triplet of `content_type`, `object_id` and `GenericForeignKey`)
- *Orderable* - `PositiveSmallIntegerField('position')`

# Recommended App Layout

- querysets.py
- behaviors.py (uses querysets)
- models.py (composition of querysets and behaviors)
- factories.py (uses models)
- tests.py (uses all, split this into a module for larger apps)

I usually have a *common* app that has the shared behaviors, model and behavior test mixins with no dependencies on other apps.

# Limitations/Pitfalls

Basically the challenges of Django Model Inheritance.

### Leak Abstractions

- Meta Options don't implicitly inherit (ordering, etc)
- Manager vs Queryset vs Model (some duplication of logic)
- ModelField options (toggling `default=True` vs `default=False`)

You often need to handle the composition yourself such as merging custom QuerySet classes or combining Meta Options.

# 3rd Party Helpers

Don't reinvent the wheel if you don't have to.

- [Django Extensions][django-extensions] (UUIDField, AutoSlugField, etc)
- [Django Model Utils][django-model-utils] (already mentioned)
- Filters ([django-filter][django-filter])

[django-extensions]: https://github.com/django-extensions/django-extensions
[django-filter]: https://github.com/alex/django-filter

### Test Helpers

- Factories ([factory boy][factory-boy])
Mocking ([mock][mock])

[mock]: http://www.voidspace.org.uk/python/mock/

# Conclusion

All the example code from this post is available on a [GitHub Project][project].

[project]: https://github.com/kevinastone/django-model-behaviors-example
