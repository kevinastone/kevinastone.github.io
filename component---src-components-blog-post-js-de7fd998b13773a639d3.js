(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{200:function(t,e,n){"use strict";n.r(e);var r=n(203),c=n.n(r),a=n(7),o=(n(0),n(202)),u=(n(74),n(216)),i=n(250),s=n(251);var l=function(t){var e=t.id,n=t.title,r=i.data.site.siteMetadata.disqusShortname;return r?Object(a.c)(s.DiscussionEmbed,{shortname:r,config:{id:e,title:n}}):null},d=n(214),f=n(204),b=n(209);function p(){var t=c()(["\n  background-position: center;\n  background-size: cover;\n  color: white;\n  margin-bottom: ",";\n  padding: "," 0;\n  text-align: center;\n  ","\n  ","\n"]);return p=function(){return t},t}var h=o.a.div(p(),Object(f.d)(1.5),Object(f.d)(2),function(t){return t.theme.shadow},function(t){return t.img?(e=t.img,Object(a.b)("background-image:url(",e.src,"),url(",e.base64,");")):t.theme.gradient;var e}),v=function(t){var e,n=t.hero,r=t.children,c=null!=(e=n)&&null!=(e=e.childImageSharp)?e.fluid:e;return Object(a.c)(h,{img:c},r)};function g(){var t=c()(["\n  margin-top: ",";\n"]);return g=function(){return t},t}var m=o.a.p(g(),Object(f.d)(-.5)),j=function(t){var e=t.title,n=t.date,r=t.hero;return Object(a.c)(v,{hero:r},Object(a.c)(b.a,null,Object(a.c)("h1",null,e),Object(a.c)(m,null,n)))};function O(){var t=c()(["\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: ",";\n  }\n"]);return O=function(){return t},t}n.d(e,"query",function(){return y});var w=o.a.article(O(),function(t){return t.theme.colors.primary}),y=(e.default=function(t){var e,n=t.data.markdownRemark,r=t.pageContext;return Object(a.c)(u.a,{header:Object(a.c)(j,n.frontmatter)},Object(a.c)(d.a,{title:n.frontmatter.title,description:n.excerpt,keywords:n.frontmatter.tags}),Object(a.c)(w,{dangerouslySetInnerHTML:{__html:n.html}}),Object(a.c)(l,{id:(e=r.slug,e.replace(/^\/*(.*)\/*$/,"$1")),title:n.frontmatter.title}))},"921560554")},202:function(t,e,n){"use strict";var r=n(219);e.a=r.a},204:function(t,e,n){"use strict";var r=n(208),c=n(7),a=n(210),o=["#0e9aa7","#96ceb4","#ffcc5c","#ff6f69","#ced07d"],u=o[3],i={colors:{accent:o[2],background:"white",palette:o,primary:u},gradient:Object(c.b)("background-color:",u,";background-image:linear-gradient( to right,",o.slice(2,4).join(", ")," );",r.MIN_TABLET_MEDIA_QUERY,"{background-image:linear-gradient(to right,",o.join(", "),");}"),shadow:Object(c.b)("box-shadow:0px 2px 2px 0px ",Object(a.a)(.2,"white"),";")},s=(n(45),n(220)),l=n.n(s),d=n(221),f=n.n(d);f.a.overrideThemeStyles=function(t){var e=t.rhythm,n=t.scale;return{a:{color:i.colors.primary},code:Object.assign({"background-color":Object(a.a)(.04,i.colors.background),"border-radius":e(1/16),color:Object(a.b)(.1,f.a.bodyColor),padding:e(1/8)},n(-1/8))}};var b=new l.a(f.a),p=b.rhythm;b.scale;n.d(e,"d",function(){return p}),n.d(e,"a",function(){return r.DEFAULT_WIDTH}),n.d(e,"b",function(){return r.MIN_TABLET_MEDIA_QUERY});e.c=i},209:function(t,e,n){"use strict";var r=n(203),c=n.n(r),a=n(204),o=n(202);function u(){var t=c()(["\n  margin: 0 auto;\n  max-width: ",";\n\n  padding-left: ",";\n  padding-right: ",";\n  "," {\n    padding-left: ",";\n    padding-right: ",";\n  }\n"]);return u=function(){return t},t}e.a=o.a.div(u(),a.a,Object(a.d)(.5),Object(a.d)(.5),a.b,Object(a.d)(1),Object(a.d)(1))},212:function(t){t.exports={data:{site:{siteMetadata:{title:"Kevin Stone",author:"Kevin Stone"}}}}},214:function(t,e,n){"use strict";var r=n(7),c=n(215),a=(n(0),n(228)),o=n.n(a);function u(t){var e=t.description,n=t.lang,a=t.meta,u=t.keywords,i=t.title,s=c.data.site.siteMetadata,l=s.title,d=s.description,f=s.author,b=e||d;return Object(r.c)(o.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+l,defaultTitle:l,meta:[{content:b,name:"description"},{content:i,property:"og:title"},{content:b,property:"og:description"},{content:"website",property:"og:type"},{content:"summary",name:"twitter:card"},{content:f,name:"twitter:creator"},{content:i,name:"twitter:title"},{content:b,name:"twitter:description"}].concat(u?{content:Array.isArray(u)?u.join(", "):u,name:"keywords"}:[]).concat(a||[])})}u.defaultProps={description:null,keywords:[],lang:"en",meta:[],title:null},e.a=u},215:function(t){t.exports={data:{site:{siteMetadata:{title:"Kevin Stone",description:"Personal blog for Kevin Stone.",author:"Kevin Stone"}}}}},216:function(t,e,n){"use strict";var r=n(203),c=n.n(r),a=n(7),o=n(212),u=n(204),i=n(202),s=n(222),l=n(0),d=n.n(l),f=n(209),b=(n(45),n(218)),p={end:"flex-end","space-around":"space-around","space-between":"space-between",start:"flex-start"},h=Object.assign({},p,{stretch:"stretch"});var v=Object(b.a)("div",{target:"e1dhk2un0"})(function(t){return Object(a.b)("display:flex;flex-direction:",t.column?"column":"row",";justify-content:",p[t.justify]||"center",";align-items:",h[t.align]||"center",";flex-wrap:",t.wrap?"wrap":" no-wrap",";flex-grow:",t.grow?1:0,";")},";"),g=Object(b.a)(v,{target:"e1dhk2un1"})({name:"1l0z8uk",styles:"flex-direction:row;"}),m=Object(b.a)(v,{target:"e1dhk2un2"})({name:"cgq59l",styles:"flex-direction:column;"}),j=n(71),O=n(1),w=n.n(O),y=n(205),k=n.n(y),x=(n(48),n(47),n(206),n(207)),E=n.n(x),S=n(124),T=n.n(S);function _(){return(_=E()(k.a.mark(function t(e){var n,r,c,a,o;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null!=(r=window)&&null!=(r=r.__LUNR__)?r.__loaded:r;case 2:if(t.t0=n=t.sent,null==t.t0){t.next=7;break}t.t1=n.en,t.next=8;break;case 7:t.t1=n;case 8:if(c=t.t1,e&&c){t.next=11;break}return t.abrupt("return",[]);case 11:if(a=c.index,o=c.store,[e,a,o].every(Boolean)){t.next=14;break}return t.abrupt("return",[]);case 14:return t.abrupt("return",a.query(function(t){var n=T.a.tokenizer(e);t.term(n,{boost:100,usePipeline:!0}),t.term(n,{boost:10,usePipeline:!1,wildcard:T.a.Query.wildcard.TRAILING}),t.term(n,{boost:1})}).map(function(t){var e=t.ref;return Object.assign({ref:e},o[e])}));case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}var R=n(26),C=n(276);function I(t){return!function(t){return t instanceof Error}(t)}function L(t){return t instanceof Error?t:new Error(t)}function M(t){return A.apply(this,arguments)}function A(){return(A=E()(k.a.mark(function t(e){return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.catch(function(t){return L(t)}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}var U={setQuery:function(t){return Object(C.a)("SET_QUERY",t)},setResults:function(t){return Object(C.a)("SET_RESULTS",t)},nextSelection:function(){return Object(C.a)("NEXT_SELECTION")},previousSelection:function(){return Object(C.a)("PREVIOUS_SELECTION")},reset:function(){return Object(C.a)("RESET")}};function q(t,e,n){return D.apply(this,arguments)}function D(){return(D=E()(k.a.mark(function t(e,n,r){var c;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e(U.setQuery(r)),t.next=3,M(n(r));case 3:I(c=t.sent)&&e(U.setResults(c));case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}n(223),n(123),n(73),n(224);function N(t,e){return function(n,r){return void 0===n&&(n=e),(r&&t[r.type]||function(t){return t})(n,r)}}var P=function(t){return function(e,n){var r=e||{},c=Object.entries(t).reduce(function(t,e){var c,a=e[0],o=e[1];return Object.assign(((c={})[a]=o(r[a],n),c),t)},{});return Object.keys(t).some(function(t){return r[t]!==c[t]})?c:r}}({query:N({SET_QUERY:function(t,e){return e.payload}},""),results:N({SET_RESULTS:function(t,e){return e.payload}},[]),selection:N({NEXT_SELECTION:function(t){return Object.assign({},t,{current:Math.min(t.current+1,t.max)})},PREVIOUS_SELECTION:function(t){return Object.assign({},t,{current:Math.max(t.current-1,0)})},SET_RESULTS:function(t,e){var n=e?Math.max(e.payload.length-1,0):0;return Object.assign({},t,{current:Math.min(t.current,n),max:n})}},{current:0,max:0})});var Q=function(t,e){var n=function(t,e){return e&&"RESET"===e.type?void 0:t}(t,e);return P(n,e)};function K(){var t=c()(["\n  background-color: transparent;\n  border: 1px solid ",";\n  border-radius: ",";\n  color: white;\n  margin: 0;\n  outline: none;\n  padding: 0 0.8em;\n  transition: background-color 0.5s;\n  width: 100%;\n  &:focus,\n  &:hover {\n    ","\n  }\n  ","\n"]);return K=function(){return t},t}var z=function(t){return Object(a.b)("background-color:",t.colors.background,";border-color:transparent;color:",t.colors.primary,";")},Y=i.a.input(K(),function(t){return t.theme.colors.accent},Object(u.d)(1/8),function(t){return z(t.theme)},function(t){return t.value&&z(t.theme)}),B=function(t){var e=t.value,n=t.onChange,r=d.a.useRef(null);return Object(a.c)(Y,{ref:r,type:"search",name:"query",placeholder:"Search",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,value:e,onChange:function(t){return n(t.target.value)},onFocus:function(){return setTimeout(function(){return r.current&&r.current.select()})}})},F=n(46),H=n.n(F),G=n(122),J=n.n(G),V=n(225);var X=n(229);function $(t){var e,n,r,c,o,u=t.height,i=t.children,s=J()(t,["height","children"]),d=(e=Object(l.useRef)(),n=Object(l.useState)({left:0,top:0,width:0,height:0}),r=n[0],c=n[1],o=Object(l.useState)(function(){return new V.a(function(t){var e=t[0];return c(e.contentRect)})})[0],Object(l.useEffect)(function(){return e.current&&o.observe(e.current),function(){return o.disconnect()}},[]),[{ref:e},r]),f=d[0],b=d[1].height;return Object(a.c)(X.a.div,H()({style:{height:u.interpolate({output:[0,b]})}},s),Object(a.c)(X.a.div,f,i))}var W=n(210);function Z(){var t=c()(["\n  background-color: ",";\n  margin: 0;\n  padding: 0.8em;\n  width: 100%;\n"]);return Z=function(){return t},t}var tt=i.a.li(Z(),function(t){return t.selected?Object(W.c)(.8,t.theme.colors.background,t.theme.colors.primary):t.theme.colors.background}),et=function(t){var e=t.selected,n=t.result,r=J()(t,["selected","result"]);return Object(a.c)(tt,H()({selected:e},r),Object(a.c)(j.Link,{to:n.url},n.title))};function nt(){var t=c()(["\n  border-radius: ",";\n  list-style-type: none;\n  margin: "," 0 0 0;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 100%;\n  ","\n"]);return nt=function(){return t},t}var rt=Object(i.a)(m)(nt(),Object(u.d)(1/8),Object(u.d)(1/8),function(t){return t.theme.shadow}),ct={name:"8atqhb",styles:"width:100%;"},at=function(t){var e,n,r,c,o=t.results,u=t.selection,i=(e=o,n=function(t){return t.ref},r={css:ct},c=Object(X.b)(e,n,{enter:{height:1},from:{height:0},leave:{height:0},trail:50}),function(t){return c.map(function(e,n){var c=e.key,o=e.item,u=e.props;return Object(a.c)($,H()({key:c},r,u),t(o,n))})});return Object(a.c)(rt,null,i(function(t,e){return Object(a.c)(et,{selected:e===u,result:t})}))};function ot(){var t=c()(["\n  margin: 0;\n  position: relative;\n  width: 100%;\n"]);return ot=function(){return t},t}function ut(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),c=0;c<e;c++)r[c]=arguments[c];return t.apply(void 0,[].concat(n,r))}}var it=i.a.form(ot());var st,lt,dt,ft,bt=function(t){var e=t.api,n=Object(l.useReducer)(Q,void 0,Q),r=n[0],c=r.query,o=r.results,u=r.selection,i=n[1];return Object(l.useEffect)(function(){return R.globalHistory.listen(function(){return i(U.reset())})},[i]),Object(a.c)(it,{onSubmit:function(t){return t.preventDefault(),!1},onKeyUp:function(t){switch(t.which){case 13:t.preventDefault(),function(t,e){var n,r=null!=(n=e)&&null!=(n=n[t.current])?n.url:n;r&&Object(j.navigate)(r)}(u,o);break;case 38:t.preventDefault(),i(U.previousSelection());break;case 40:t.preventDefault(),i(U.nextSelection())}}},Object(a.c)(B,{value:c,onChange:ut(q,i,e)}),Object(a.c)(at,{results:o,selection:u.current}))},pt=(st=function(t){return _.apply(this,arguments)},lt=100,void 0===dt&&(dt=void 0),E()(k.a.mark(function t(){var e,n,r,c=arguments;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(e=c.length,n=new Array(e),r=0;r<e;r++)n[r]=c[r];return t.abrupt("return",new Promise(function(t,e){ft=t,setTimeout(E()(k.a.mark(function r(){return k.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(ft!==t){r.next=8;break}return r.t0=t,r.next=4,st.apply(void 0,n);case 4:r.t1=r.sent,(0,r.t0)(r.t1),r.next=9;break;case 8:e(dt);case 9:case"end":return r.stop()}},r)})),lt)}));case 2:case"end":return t.stop()}},t)}))),ht=function(){return Object(a.c)(bt,{api:pt})};function vt(){var t=c()(["\n  margin: 0;\n  max-width: calc(50% - ",");\n"]);return vt=function(){return t},t}function gt(){var t=c()(["\n  padding-top: ",";\n  padding-bottom: ",";\n"]);return gt=function(){return t},t}function mt(){var t=c()(["\n  color: white;\n  &,\n  &:hover {\n    text-decoration: none;\n  }\n"]);return mt=function(){return t},t}function jt(){var t=c()(["\n  ","\n  ","\n"]);return jt=function(){return t},t}var Ot=i.a.header(jt(),function(t){return t.theme.gradient},function(t){return t.theme.shadow}),wt=Object(i.a)(j.Link)(mt()),yt=Object(i.a)(f.a)(gt(),Object(u.d)(.5),Object(u.d)(.5)),kt=i.a.div(vt(),Object(u.d)(.25)),xt=kt.withComponent("h3",{target:"e1d8gyob0"}),Et=function(t){var e=t.siteTitle;return Object(a.c)(Ot,null,Object(a.c)(yt,null,Object(a.c)(g,{justify:"space-between"},Object(a.c)(xt,null,Object(a.c)(wt,{to:"/"},e)),Object(a.c)(kt,null,Object(a.c)(ht,null)))))};Et.propTypes={siteTitle:w.a.string.isRequired};var St=Et;function Tt(){var t=c()(["\n  text-align: center;\n  padding: ",";\n"]);return Tt=function(){return t},t}var _t=Object(i.a)(f.a)(Tt(),Object(u.d)(1)).withComponent("footer",{target:"ehbov3z0"}),Rt=function(t){var e=t.children,n=t.header,r=o.data.site.siteMetadata,c=r.title,i=r.author;return Object(a.c)(s.a,{theme:u.c},Object(a.c)(St,{siteTitle:c}),Object(a.c)("main",null,n,Object(a.c)(f.a,null,e)),Object(a.c)(_t,null,"© ",i," ",(new Date).getFullYear(),", Built with"," ",Object(a.c)("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))};Rt.defaultProps={header:null};e.a=Rt},250:function(t){t.exports={data:{site:{siteMetadata:{disqusShortname:"kevinstone"}}}}}}]);
//# sourceMappingURL=component---src-components-blog-post-js-de7fd998b13773a639d3.js.map