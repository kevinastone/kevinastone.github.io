(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{160:function(t,e,r){"use strict";r.r(e);var a=r(165),n=r(7),c=(r(0),r(186)),i=(r(41),r(163)),o=r(166),s=r(169),d=r(162),u=r(36),b=r(218),l=r.n(b),p={name:"13rqe9d",styles:"background-size:cover;background-position:center;color:white;"},g=Object(n.b)("padding:",Object(d.a)(2)," 0;margin-bottom:",Object(d.a)(1.5),";text-align:center;",i.c,""),f=function(t){var e,r=t.hero,a=t.children,c=l()(r,function(t){return t.childImageSharp.fluid});return Object(n.c)("div",{css:Object(u.a)([g,c?(e=c,Object(n.b)("background-image:url(",e.base64,");background-image:url(",e.src,");",p,"")):Object(n.b)(i.a," ",p,"")],"")},a)},h=Object(a.a)("h1",{target:"eywqi3t0"})(""),j=function(t){var e=t.title,r=t.date,a=t.hero;return Object(n.c)(f,{hero:a,seed:e},Object(n.c)(o.a,null,Object(n.c)(h,null,e),Object(n.c)("p",{css:Object(n.b)("margin-top:",Object(d.a)(-.5),";")},r)))};r.d(e,"query",function(){return m});var O=Object(a.a)("div",{target:"ec32is30"})("h1,h2,h3,h4,h5,h6{color:",i.b,";}"),m=(e.default=function(t){var e,r=t.data,a=t.pageContext,i=r.markdownRemark;return Object(n.c)(o.b,{header:Object(n.c)(j,i.frontmatter)},Object(n.c)(s.a,{title:i.frontmatter.title,description:i.excerpt,keywords:i.frontmatter.tags}),Object(n.c)(O,{dangerouslySetInnerHTML:{__html:i.html}}),Object(n.c)(c.DiscussionEmbed,{shortname:"kevinstone",config:{id:(e=a.slug,e.replace(/\/+$/,"").replace(/^\/+/,"")),title:i.frontmatter.title}}))},"837584300")},162:function(t,e,r){"use strict";r.d(e,"a",function(){return d});r(40);var a=r(174),n=r.n(a),c=r(175),i=r.n(c),o=r(163);i.a.overrideThemeStyles=function(t){var e=t.rhythm,r=t.scale;return{a:{color:o.b},code:Object.assign({"border-radius":"2px",color:"#333333","background-color":"#f5f5f5",padding:e(1/8)},r(-1/8))}};var s=new n.a(i.a),d=s.rhythm;s.scale},163:function(t,e,r){"use strict";r.d(e,"b",function(){return n}),r.d(e,"a",function(){return i}),r.d(e,"c",function(){return o});var a=r(7),n="#ff6f69",c=["#0e9aa7","#96ceb4","#ffcc5c","#ff6f69","#ced07d"],i=Object(a.b)("background-color:",n,";background:linear-gradient( to right,",c[0],",",c[1],",",c[2],",",c[3],",",c[4]," );"),o={name:"1wagsho",styles:"box-shadow:0px 2px 2px 0px #ccc;"}},166:function(t,e,r){"use strict";var a=r(165),n=r(7),c=r(168),i=r(0),o=r.n(i),s=r(39),d=r(1),u=r.n(d),b=r(162),l=r(163),p=function(t){var e=t.siteTitle;return Object(n.c)("header",{css:Object(n.b)(l.a," ",l.c,"")},Object(n.c)(f,{css:Object(n.b)("padding-top:",Object(b.a)(.5),";padding-bottom:",Object(b.a)(.5),";")},Object(n.c)("h3",{style:{margin:0}},Object(n.c)(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};p.propTypes={siteTitle:u.a.string},p.defaultProps={siteTitle:""};var g=p;r.d(e,"a",function(){return f});var f=Object(a.a)("div",{target:"e1wsq9gq0"})("margin:0 auto;max-width:960px;padding:0 ",Object(b.a)(1),";"),h=function(t){var e=t.children,r=t.header;return Object(n.c)(s.StaticQuery,{query:"4293929885",render:function(t){var a=t.site;return Object(n.c)(o.a.Fragment,null,Object(n.c)(g,{siteTitle:a.siteMetadata.title}),Object(n.c)("main",null,r,Object(n.c)(f,{css:Object(n.b)("padding-top:",Object(b.a)(0),";")},e," ")),Object(n.c)(f,{as:"footer",css:Object(n.b)("text-align:center;padding:",Object(b.a)(1),";")},"© ",a.siteMetadata.author," ",(new Date).getFullYear(),", Built with"," ",Object(n.c)("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},data:c})};h.propTypes={children:u.a.node.isRequired,header:u.a.node};e.b=h},168:function(t){t.exports={data:{site:{siteMetadata:{title:"Kevin Stone",author:"Kevin Stone"}}}}},169:function(t,e,r){"use strict";var a=r(7),n=r(170),c=(r(0),r(1)),i=r.n(c),o=r(176),s=r.n(o),d=r(39);function u(t){var e=t.description,r=t.lang,c=t.meta,i=t.keywords,o=t.title;return Object(a.c)(d.StaticQuery,{query:b,render:function(t){var n=e||t.site.siteMetadata.description;return Object(a.c)(s.a,{htmlAttributes:{lang:r},title:o,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:Array.isArray(i)?i.join(", "):i}:[]).concat(c)})},data:n})}u.defaultProps={description:null,lang:"en",meta:[],keywords:[]},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.oneOfType([i.a.arrayOf(i.a.string),i.a.string]),title:i.a.string.isRequired},e.a=u;var b="1025518380"},170:function(t){t.exports={data:{site:{siteMetadata:{title:"Kevin Stone",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"Kevin Stone"}}}}}}]);
//# sourceMappingURL=component---src-components-blog-post-js-60f52d47430214c29272.js.map