(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{261:function(e,t,n){"use strict";n.r(t);var o=n(1),r=(n(0),n(19)),i=(n(8),n(259)),u=n(265),s=n(266);var a=function(e){var t=e.id,n=e.title,r=u.data.site.siteMetadata.disqusShortname;return r?Object(o.c)(s.DiscussionEmbed,{shortname:r,config:{id:t,title:n}}):null},c=n(258),l=n(13),d=n(84),f=n(64);function p(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  background-position: center;\n  background-size: cover;\n  color: white;\n  margin-bottom: ",";\n  padding: "," 0;\n  text-align: center;\n  ","\n  ","\n"]);return p=function(){return e},e}var m=r.a.div(p(),Object(l.d)(1.5),Object(l.d)(2),(function(e){return e.theme.shadow}),(function(e){return e.img?(t=e.img,Object(o.b)("background-image:url(",t.src,"),url(",t.base64,");")):e.theme.gradient;var t})),h=function(e){var t=e.hero,n=e.children,r=Object(f.a)(t).mapNullable((function(e){return e.childImageSharp})).mapNullable((function(e){return e.fluid}));return Object(o.c)(m,{img:r.unwrapNullable()},n)};function b(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  margin-top: ",";\n"]);return b=function(){return e},e}var w=r.a.p(b(),Object(l.d)(-.5)),y=function(e){var t=e.title,n=e.date,r=e.hero;return Object(o.c)(h,{hero:r},Object(o.c)(d.a,null,Object(o.c)("h1",null,t),Object(o.c)(w,null,n)))};function v(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: ",";\n  }\n"]);return v=function(){return e},e}n.d(t,"query",(function(){return _}));var g=r.a.article(v(),(function(e){return e.theme.colors.primary})),_=(t.default=function(e){var t,n=e.data.markdownRemark,r=e.pageContext;return Object(o.c)(i.a,{header:Object(o.c)(y,n.frontmatter)},Object(o.c)(c.a,{title:n.frontmatter.title,description:n.excerpt,keywords:n.frontmatter.tags}),Object(o.c)(g,{dangerouslySetInnerHTML:{__html:n.html}}),Object(o.c)(a,{id:(t=r.slug,t.replace(/^\/*(.*)\/*$/,"$1")),title:n.frontmatter.title}))},"921560554")},264:function(e,t,n){"use strict";n(34),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var r=this,i=arguments,u=function(){o=null,n||e.apply(r,i)},s=n&&!o;window.clearTimeout(o),o=setTimeout(u,t),s&&e.apply(r,i)}}},265:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"disqusShortname":"kevinstone"}}}}')},266:function(e,t,n){"use strict";n(34),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n(267),r=n(268),i=n(270);t.CommentCount=o.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var u={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=u},267:function(e,t,n){"use strict";n(86),n(44),n(34),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),u=(o=i)&&o.__esModule?o:{default:o},s=n(264);var a=(0,s.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url||t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?a():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return u.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(u.default.Component)},268:function(e,t,n){"use strict";n(269),n(35),n(38),n(4),n(86),n(44),n(34),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),u=(o=i)&&o.__esModule?o:{default:o};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return u.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(u.default.Component)).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},269:function(e,t,n){"use strict";var o=n(14),r=n(45),i=n(67),u=n(136),s=n(87),a=n(21),c=n(89).f,l=n(110).f,d=n(26).f,f=n(179).trim,p=o.Number,m=p,h=p.prototype,b="Number"==i(n(88)(h)),w="trim"in String.prototype,y=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var n,o,r,i=(t=w?t.trim():f(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+t}for(var u,a=t.slice(2),c=0,l=a.length;c<l;c++)if((u=a.charCodeAt(c))<48||u>r)return NaN;return parseInt(a,o)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(b?a((function(){h.valueOf.call(n)})):"Number"!=i(n))?u(new m(y(t)),n,p):y(t)};for(var v,g=n(20)?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;g.length>_;_++)r(m,v=g[_])&&!r(p,v)&&d(p,v,l(m,v));p.prototype=h,h.constructor=p,n(29)(o,"Number",p)}},270:function(e,t,n){"use strict";n(86),n(44),n(34),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),u=(o=i)&&o.__esModule?o:{default:o},s=n(264);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url||t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return u.default.createElement("div",{id:"disqus_thread"})}}]),t}(u.default.Component)}}]);
//# sourceMappingURL=component---src-components-blog-post-tsx-95ba1c1432d18f75ab19.js.map