(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{200:function(e,t,n){"use strict";n.r(t);var r=n(202),a=n(7),c=(n(0),n(74),n(215)),o=n(243),i=n(1),u=n.n(i),s=n(244);function l(e){var t=e.id,n=e.title,r=o.data.site.siteMetadata.disqusShortname;return r?Object(a.c)(s.DiscussionEmbed,{shortname:r,config:{id:t,title:n}}):null}l.propTypes={id:u.a.string.isRequired,title:u.a.string.isRequired};var d=l,b=n(213),f=n(203),p=n(206),g=Object(r.a)("div",{target:"eqkxgqz0"})("background-position:center;background-size:cover;color:white;margin-bottom:",Object(f.d)(1.5),";padding:",Object(f.d)(2)," 0;text-align:center;",function(e){return e.theme.shadow}," ",function(e){return e.img?(t=e.img,Object(a.b)("background-image:url(",t.src,"),url(",t.base64,");")):e.theme.gradient;var t}),h=function(e){var t,n=e.hero,r=e.children,c=null!=(t=n)&&null!=(t=t.childImageSharp)?t.fluid:t;return Object(a.c)(g,{img:c},r)},m=Object(r.a)("p",{target:"eywqi3t0"})("margin-top:",Object(f.d)(-.5),";"),j=function(e){var t=e.title,n=e.date,r=e.hero;return Object(a.c)(h,{hero:r},Object(a.c)(p.a,null,Object(a.c)("h1",null,t),Object(a.c)(m,null,n)))};n.d(t,"query",function(){return v});var O=Object(r.a)("article",{target:"ec32is30"})("h1,h2,h3,h4,h5,h6{color:",function(e){return e.theme.colors.primary},";}"),v=(t.default=function(e){var t,n=e.data.markdownRemark,r=e.pageContext;return Object(a.c)(c.a,{header:Object(a.c)(j,n.frontmatter)},Object(a.c)(b.a,{title:n.frontmatter.title,description:n.excerpt,keywords:n.frontmatter.tags}),Object(a.c)(O,{dangerouslySetInnerHTML:{__html:n.html}}),Object(a.c)(d,{id:(t=r.slug,t.replace(/^\/*(.*)\/*$/,"$1")),title:n.frontmatter.title}))},"921560554")},203:function(e,t,n){"use strict";var r=n(204),a=n(7),c=n(209),o=["#0e9aa7","#96ceb4","#ffcc5c","#ff6f69","#ced07d"],i=o[3],u={colors:{primary:i,accent:o[2],palette:o,background:"white"},gradient:Object(a.b)("background-color:",i,";background-image:linear-gradient( to right,",o.slice(2,4).join(", ")," );",r.MIN_TABLET_MEDIA_QUERY,"{background-image:linear-gradient(to right,",o.join(", "),");}"),shadow:Object(a.b)("box-shadow:0px 2px 2px 0px ",Object(c.a)(.2,"white"),";")},s=(n(46),n(217)),l=n.n(s),d=n(218),b=n.n(d);b.a.overrideThemeStyles=function(e){var t=e.rhythm,n=e.scale;return{a:{color:u.colors.primary},code:Object.assign({"border-radius":t(1/16),color:Object(c.b)(.1,b.a.bodyColor),"background-color":Object(c.a)(.04,u.colors.background),padding:t(1/8)},n(-1/8))}};var f=new l.a(b.a),p=f.rhythm;f.scale;n.d(t,"d",function(){return p}),n.d(t,"a",function(){return r.DEFAULT_WIDTH}),n.d(t,"b",function(){return r.MIN_TABLET_MEDIA_QUERY});t.c=u},206:function(e,t,n){"use strict";var r=n(202),a=n(203);t.a=Object(r.a)("div",{target:"e1mv9duo0"})("margin:0 auto;max-width:",a.a,";padding-left:",Object(a.d)(.5),";padding-right:",Object(a.d)(.5),";",a.b,"{padding-left:",Object(a.d)(1),";padding-right:",Object(a.d)(1),";}")},211:function(e){e.exports={data:{site:{siteMetadata:{title:"Kevin Stone",author:"Kevin Stone"}}}}},213:function(e,t,n){"use strict";var r=n(7),a=n(214),c=(n(0),n(1)),o=n.n(c),i=n(225),u=n.n(i);function s(e){var t=e.description,n=e.lang,c=e.meta,o=e.keywords,i=e.title,s=a.data.site.siteMetadata,l=s.title,d=s.description,b=s.author,f=t||d;return Object(r.c)(u.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+l,defaultTitle:l,meta:[{name:"description",content:f},{property:"og:title",content:i},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:b},{name:"twitter:title",content:i},{name:"twitter:description",content:f}].concat(o.length>0?{name:"keywords",content:Array.isArray(o)?o.join(", "):o}:[]).concat(c)})}s.defaultProps={description:null,title:null,lang:"en",meta:[],keywords:[]},s.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.oneOfType([o.a.arrayOf(o.a.string),o.a.string]),title:o.a.string},t.a=s},214:function(e){e.exports={data:{site:{siteMetadata:{title:"Kevin Stone",description:"Personal blog for Kevin Stone.",author:"Kevin Stone"}}}}},215:function(e,t,n){"use strict";var r=n(202),a=n(7),c=n(211),o=n(203),i=n(219),u=n(1),s=n.n(u),l=n(0),d=n.n(l),b=n(206),f={start:"flex-start",end:"flex-end","space-between":"space-between","space-around":"space-around"},p={start:"flex-start",end:"flex-end","space-between":"space-between","space-around":"space-around",stretch:"stretch"},g=Object(r.a)("div",{target:"ebzxlb00"})(function(e){return Object(a.b)("display:flex;flex-direction:",e.column?"column":"row",";justify-content:",f[e.justify]||"center",";align-items:",p[e.align]||"center",";flex-wrap:",e.wrap?"wrap":" no-wrap",";flex-grow:",e.grow?1:0,";")},";"),h=Object(r.a)(g,{target:"ebzxlb01"})({name:"1l0z8uk",styles:"flex-direction:row;"}),m=Object(r.a)(g,{target:"ebzxlb02"})({name:"cgq59l",styles:"flex-direction:column;"}),j=n(71),O=n(207),v=n.n(O),w=(n(205),n(208)),y=n.n(w),x=(n(49),n(48),n(26)),k=function(e){return function(t){return{type:e,payload:t}}},T=k("SET_RESULTS"),E=k("NEXT_SELECTION"),S=k("PREVIOUS_SELECTION"),_=k("RESET");function R(e,t,n){return q.apply(this,arguments)}function q(){return(q=y()(v.a.mark(function e(t,n,r){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(k("SET_QUERY")(r)),e.prev=1,e.next=4,n(r);case 4:a=e.sent,t(T(a)),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}},e,null,[[1,8]])}))).apply(this,arguments)}n(220),n(46),n(123),n(73),n(221);var C=function(e,t){return function(n,r){return void 0===n&&(n=t),void 0===r&&(r={}),(e[r.type]||function(e){return e})(n,r)}},I=function(e){return function(t,n){void 0===t&&(t={});var r=Object.entries(e).reduce(function(e,r){var a,c=r[0],o=r[1];return Object.assign(((a={})[c]=o(t[c],n),a),e)},{});return Object.keys(e).some(function(e){return t[e]!==r[e]})?r:t}}({query:C({SET_QUERY:function(e,t){return t.payload}},""),results:C({SET_RESULTS:function(e,t){return t.payload}},[]),selection:C({SET_RESULTS:function(e,t){var n=Math.max(t.payload.length-1,0);return Object.assign({},e,{max:n,current:Math.min(e.current,n)})},PREVIOUS_SELECTION:function(e){return Object.assign({},e,{current:Math.max(e.current-1,0)})},NEXT_SELECTION:function(e){return Object.assign({},e,{current:Math.min(e.current+1,e.max)})}},{current:0,max:0})}),L=function(e,t){return e=function(e,t){return void 0===t&&(t={}),"RESET"===t.type?void 0:e}(e,t),I(e,t)},M=function(e){return Object(a.b)("background-color:",e.colors.background,";border-color:transparent;color:",e.colors.primary,";")},A=Object(r.a)("input",{target:"e1vo72mx0"})("background-color:transparent;border:1px solid ",function(e){return e.theme.colors.accent},";border-radius:",Object(o.d)(1/8),";color:white;margin:0;outline:none;padding:0 0.8em;transition:background-color 0.5s;width:100%;&:focus,&:hover{",function(e){return M(e.theme)},"}",function(e){return e.value&&M(e.theme)}),U=function(e){var t=e.value,n=e.onChange,r=d.a.useRef(null);return Object(a.c)(A,{ref:r,type:"search",name:"query",placeholder:"Search",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",value:t,onChange:function(e){return n(e.target.value)},onFocus:function(){return setTimeout(function(){return r.current&&r.current.select()})}})},z=n(47),D=n.n(z),N=n(122),P=n.n(N),K=n(222);var Q=n(226);function Y(e){var t,n,r,c,o,i=e.height,u=e.children,s=P()(e,["height","children"]),d=(t=Object(l.useRef)(),n=Object(l.useState)({left:0,top:0,width:0,height:0}),r=n[0],c=n[1],o=Object(l.useState)(function(){return new K.a(function(e){var t=e[0];return c(t.contentRect)})})[0],Object(l.useEffect)(function(){return t.current&&o.observe(t.current),function(){return o.disconnect()}},[]),[{ref:t},r]),b=d[0],f=d[1].height;return Object(a.c)(Q.a.div,D()({style:{height:i.interpolate({output:[0,f]})}},s),Object(a.c)(Q.a.div,b,u))}var B=n(209),F=Object(r.a)("li",{target:"e1e22ra00"})("background-color:",function(e){return e.selected?Object(B.c)(.8,e.theme.colors.background,e.theme.colors.primary):e.theme.colors.background},";margin:0;padding:0.8em;width:100%;"),H=function(e){var t=e.selected,n=e.result,r=P()(e,["selected","result"]);return Object(a.c)(F,D()({selected:t},r),Object(a.c)(j.Link,{to:n.url},n.title))},G=Object(r.a)(m,{target:"elewai50"})("border-radius:",Object(o.d)(1/8),";list-style-type:none;margin:",Object(o.d)(1/8)," 0 0 0;overflow:hidden;padding:0;position:absolute;width:100%;",function(e){return e.theme.shadow}),J={name:"8atqhb",styles:"width:100%;"},V=function(e){var t,n,r,c,o=e.results,i=e.selection,u=(t=o,n=function(e){return e.ref},r={css:J},c=Object(Q.b)(t,n,{from:{height:0},enter:{height:1},leave:{height:0},trail:50}),function(e){return c.map(function(t,n){var c=t.key,o=t.item,i=t.props;return Object(a.c)(Y,D()({key:c},r,i),e(o,n))})});return Object(a.c)(G,null,u(function(e,t){return Object(a.c)(H,{selected:t===i,result:e})}))};function X(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return function(){for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return e.apply(t,[].concat(r,a))}}var $=Object(r.a)("form",{target:"e15vkf1q0"})({name:"1d0vcgf",styles:"margin:0;position:relative;width:100%;"});var W=function(e){var t=e.api,n=Object(l.useReducer)(L,void 0,L),r=n[0],c=r.query,o=r.results,i=r.selection,u=n[1];return Object(l.useEffect)(function(){return x.globalHistory.listen(function(){return u(_())})},[u]),Object(a.c)($,{onSubmit:function(e){return e.preventDefault(),!1},onKeyUp:function(e){switch(e.which){case 13:e.preventDefault(),function(e,t){var n,r=null!=(n=t)&&null!=(n=n[e.current])?n.url:n;r&&Object(j.navigate)(r)}(i,o);break;case 38:e.preventDefault(),u(S());break;case 40:e.preventDefault(),u(E())}}},Object(a.c)(U,{value:c,onChange:X(R,u,t)}),Object(a.c)(V,{results:o,selection:i.current}))},Z=n(124),ee=n.n(Z);function te(){return(te=y()(v.a.mark(function e(t){var n,r,a,c,o;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null!=(r=window)&&null!=(r=r.__LUNR__)?r.__loaded:r;case 2:if(e.t1=n=e.sent,null==e.t1){e.next=7;break}e.t2=n.en,e.next=8;break;case 7:e.t2=n;case 8:if(e.t0=e.t2,e.t0){e.next=11;break}e.t0={};case 11:if(a=e.t0,c=a.index,o=a.store,[t,c,o].every(Boolean)){e.next=16;break}return e.abrupt("return",[]);case 16:return e.abrupt("return",c.query(function(e){var n=ee.a.tokenizer(t);e.term(n,{boost:100,usePipeline:!0}),e.term(n,{boost:10,usePipeline:!1,wildcard:ee.a.Query.wildcard.TRAILING}),e.term(n,{boost:1})}).map(function(e){var t=e.ref;return Object.assign({ref:t},o[t])}));case 17:case"end":return e.stop()}},e)}))).apply(this,arguments)}var ne,re,ae,ce,oe=(ne=function(e){return te.apply(this,arguments)},re=100,void 0===ae&&(ae=void 0),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new Promise(function(e,n){ce=e,setTimeout(y()(v.a.mark(function r(){return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(ce!==e){r.next=8;break}return r.t0=e,r.next=4,ne.apply(void 0,t);case 4:r.t1=r.sent,(0,r.t0)(r.t1),r.next=9;break;case 8:n(ae);case 9:case"end":return r.stop()}},r)})),re)})}),ie=function(){return Object(a.c)(W,{api:oe})},ue=Object(r.a)("header",{target:"e15etjgo0"})(function(e){return e.theme.gradient}," ",function(e){return e.theme.shadow}),se=Object(r.a)(j.Link,{target:"e15etjgo1"})({name:"1w4zlaz",styles:"color:white;&,&:hover{text-decoration:none;}"}),le=Object(r.a)(b.a,{target:"e15etjgo2"})("padding-top:",Object(o.d)(.5),";padding-bottom:",Object(o.d)(.5),";"),de=Object(r.a)("div",{target:"e15etjgo3"})("margin:0;max-width:calc(50% - ",Object(o.d)(.25),");"),be=de.withComponent("h3",{target:"e15etjgo4"}),fe=function(e){var t=e.siteTitle;return Object(a.c)(ue,null,Object(a.c)(le,null,Object(a.c)(h,{justify:"space-between"},Object(a.c)(be,null,Object(a.c)(se,{to:"/"},t)),Object(a.c)(de,null,Object(a.c)(ie,null)))))};fe.propTypes={siteTitle:s.a.string.isRequired};var pe=fe,ge=Object(r.a)(b.a,{target:"e1wsq9gq0"})("text-align:center;padding:",Object(o.d)(1),";").withComponent("footer",{target:"e1wsq9gq1"}),he=function(e){var t=e.children,n=e.header,r=c.data.site.siteMetadata,u=r.title,s=r.author;return Object(a.c)(i.a,{theme:o.c},Object(a.c)(pe,{siteTitle:u}),Object(a.c)("main",null,n,Object(a.c)(b.a,null,t)),Object(a.c)(ge,null,"© ",s," ",(new Date).getFullYear(),", Built with"," ",Object(a.c)("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))};he.propTypes={children:s.a.node.isRequired,header:s.a.node};t.a=he},243:function(e){e.exports={data:{site:{siteMetadata:{disqusShortname:"kevinstone"}}}}}}]);
//# sourceMappingURL=component---src-components-blog-post-js-e1543dc524a19cb3df65.js.map