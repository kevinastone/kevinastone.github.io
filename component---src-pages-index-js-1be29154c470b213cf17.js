(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{231:function(e,t,n){"use strict";n.r(t);var r=n(7),a=(n(0),n(249)),c=n(247),o=n(232),i=n(67),u=n(233),s=Object(o.a)("h3",{target:"e1yi8qvf0"})("margin-bottom:",Object(u.d)(.25),";"),l=function(e){var t=e.blog;return Object(r.c)("div",null,Object(r.c)(s,null,Object(r.c)(i.Link,{to:t.fields.slug},t.frontmatter.title||t.fields.slug)),Object(r.c)("small",null,t.frontmatter.date),Object(r.c)("p",null,t.frontmatter.summary||t.excerpt),Object(r.c)("hr",null))};n.d(t,"pageQuery",function(){return d});t.default=function(e){var t=e.data.allMarkdownRemark;return Object(r.c)(a.a,null,Object(r.c)(c.a,null),t.edges.map(function(e){var t=e.node;return Object(r.c)(l,{key:t.fields.slug,blog:t})}))};var d="527568958"},233:function(e,t,n){"use strict";var r=n(234),a=n(7),c=n(239),o=["#0e9aa7","#96ceb4","#ffcc5c","#ff6f69","#ced07d"],i=o[3],u={colors:{primary:i,accent:o[2],palette:o,background:"white"},gradient:Object(a.b)("background-color:",i,";background-image:linear-gradient( to right,",o.slice(2,4).join(", ")," );",r.MIN_TABLET_MEDIA_QUERY,"{background-image:linear-gradient(to right,",o.join(", "),");}"),shadow:Object(a.b)("box-shadow:0px 2px 2px 0px ",Object(c.a)(.2,"white"),";")},s=(n(40),n(254)),l=n.n(s),d=n(255),b=n.n(d);b.a.overrideThemeStyles=function(e){var t=e.rhythm,n=e.scale;return{a:{color:u.colors.primary},code:Object.assign({"border-radius":t(1/16),color:Object(c.b)(.1,b.a.bodyColor),"background-color":Object(c.a)(.04,u.colors.background),padding:t(1/8)},n(-1/8))}};var f=new l.a(b.a),p=f.rhythm;f.scale;n.d(t,"d",function(){return p}),n.d(t,"a",function(){return r.DEFAULT_WIDTH}),n.d(t,"b",function(){return r.MIN_TABLET_MEDIA_QUERY});t.c=u},236:function(e,t,n){"use strict";var r=n(232),a=n(233);t.a=Object(r.a)("div",{target:"e1mv9duo0"})("margin:0 auto;max-width:",a.a,";padding-left:",Object(a.d)(.5),";padding-right:",Object(a.d)(.5),";",a.b,"{padding-left:",Object(a.d)(1),";padding-right:",Object(a.d)(1),";}")},244:function(e){e.exports={data:{site:{siteMetadata:{title:"Kevin Stone",author:"Kevin Stone"}}}}},247:function(e,t,n){"use strict";var r=n(7),a=n(248),c=(n(0),n(1)),o=n.n(c),i=n(262),u=n.n(i);function s(e){var t=e.description,n=e.lang,c=e.meta,o=e.keywords,i=e.title,s=a.data.site.siteMetadata,l=s.title,d=s.description,b=s.author,f=t||d;return Object(r.c)(u.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+l,defaultTitle:l,meta:[{name:"description",content:f},{property:"og:title",content:i},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:b},{name:"twitter:title",content:i},{name:"twitter:description",content:f}].concat(o.length>0?{name:"keywords",content:Array.isArray(o)?o.join(", "):o}:[]).concat(c)})}s.defaultProps={description:null,title:null,lang:"en",meta:[],keywords:[]},s.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.oneOfType([o.a.arrayOf(o.a.string),o.a.string]),title:o.a.string},t.a=s},248:function(e){e.exports={data:{site:{siteMetadata:{title:"Kevin Stone",description:"Personal blog for Kevin Stone.",author:"Kevin Stone"}}}}},249:function(e,t,n){"use strict";var r=n(232),a=n(7),c=n(244),o=n(0),i=n.n(o),u=n(253),s=n(1),l=n.n(s),d=n(233),b=n(236),f=n(67),p={start:"flex-start",end:"flex-end","space-between":"space-between","space-around":"space-around"},g={start:"flex-start",end:"flex-end","space-between":"space-between","space-around":"space-around",stretch:"stretch"},j=Object(r.a)("div",{target:"ebzxlb00"})(function(e){return Object(a.b)("display:flex;flex-direction:",e.column?"column":"row",";justify-content:",p[e.justify]||"center",";align-items:",g[e.align]||"center",";flex-wrap:",e.wrap?"wrap":" no-wrap",";flex-grow:",e.grow?1:0,";")},";"),O=Object(r.a)(j,{target:"ebzxlb01"})({name:"1l0z8uk",styles:"flex-direction:row;"}),h=Object(r.a)(j,{target:"ebzxlb02"})({name:"cgq59l",styles:"flex-direction:column;"}),m=n(242),v=n(237),w=n.n(v),y=(n(235),n(238)),x=n.n(y),k=(n(42),n(20)),E=n(311),T=Object(E.a)("SET_RESULTS"),S=Object(E.a)("NEXT_SELECTION"),_=Object(E.a)("PREVIOUS_SELECTION"),R=Object(E.a)("RESET");var M=function(e){return Object(a.b)("background-color:",e.colors.background,";border-color:transparent;color:",e.colors.primary,";")},L=Object(r.a)("input",{target:"e1vo72mx0"})("background-color:transparent;border:1px solid ",function(e){return e.theme.colors.accent},";border-radius:",Object(d.d)(1/8),";color:white;margin:0;outline:none;padding:0 0.8em;transition:background-color 0.5s;width:100%;&:focus,&:hover{",function(e){return M(e.theme)},"}",function(e){return e.value&&M(e.theme)}),q=function(e){var t=e.value,n=e.onChange,r=i.a.useRef(null);return Object(a.c)(L,{ref:r,type:"search",name:"query",placeholder:"Search",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",value:t,onChange:function(e){return n(e.target.value)},onFocus:function(){return setTimeout(function(){return r.current&&r.current.select()})}})},C=n(41),I=n.n(C),U=n(114),A=n.n(U),N=n(257);var D=n(258);function z(e){var t,n,r,c,i,u=e.height,s=e.children,l=A()(e,["height","children"]),d=(t=Object(o.useRef)(),n=Object(o.useState)({left:0,top:0,width:0,height:0}),r=n[0],c=n[1],i=Object(o.useState)(function(){return new N.a(function(e){var t=e[0];return c(t.contentRect)})})[0],Object(o.useEffect)(function(){return t.current&&i.observe(t.current),function(){return i.disconnect()}},[]),[{ref:t},r]),b=d[0],f=d[1].height;return Object(a.c)(D.a.div,I()({style:{height:u.interpolate({output:[0,f]})}},l),Object(a.c)(D.a.div,b,s))}var P=n(239),K=Object(r.a)("li",{target:"e1e22ra00"})("background-color:",function(e){return e.selected?Object(P.c)(.8,e.theme.colors.background,e.theme.colors.primary):e.theme.colors.background},";margin:0;padding:0.8em;width:100%;"),Q=function(e){var t=e.selected,n=e.result,r=A()(e,["selected","result"]);return Object(a.c)(K,I()({selected:t},r),Object(a.c)(f.Link,{to:n.url},n.title))},Y=Object(r.a)(h,{target:"elewai50"})("border-radius:",Object(d.d)(1/8),";list-style-type:none;margin:",Object(d.d)(1/8)," 0 0 0;overflow:hidden;padding:0;position:absolute;width:100%;",function(e){return e.theme.shadow}),B={name:"8atqhb",styles:"width:100%;"},F=function(e){var t,n,r,c,o=e.results,i=e.selection,u=(t=o,n=function(e){return e.ref},r={css:B},c=Object(D.b)(t,n,{from:{height:0},enter:{height:1},leave:{height:0},trail:50}),function(e){return c.map(function(t,n){var c=t.key,o=t.item,i=t.props;return Object(a.c)(z,I()({key:c},r,i),e(o,n))})});return Object(a.c)(Y,null,u(function(e,t){return Object(a.c)(Q,{selected:t===i,result:e})}))},G=Object(r.a)("form",{target:"e15vkf1q0"})({name:"1d0vcgf",styles:"margin:0;position:relative;width:100%;"});var H=Object(m.b)(function(e){return e})(function(e){var t=e.dispatch,n=e.query,r=e.results,c=e.api,i=e.selection,u=Object(o.useMemo)(function(){return function(e){return t(function(e,t){return n=x()(w.a.mark(function n(r){var a;return w.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(Object(E.a)("SET_QUERY")(t)),n.prev=1,n.next=4,e(t);case 4:a=n.sent,r(T(a)),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(1);case 10:case"end":return n.stop()}},n,null,[[1,8]])})),function(e){return n.apply(this,arguments)};var n}(c,e))}},[t,c]);Object(o.useEffect)(function(){return k.globalHistory.listen(function(){return t(R())})},[]);var s=Object(o.useMemo)(function(){return function(e){return e.preventDefault(),!1}},[]),l=Object(o.useMemo)(function(){return function(e){switch(e.which){case 13:e.preventDefault(),t(function(e,t){var n=t(),r=n.selection,a=n.results;a[r.current]&&Object(f.navigate)(a[r.current].url)});break;case 38:e.preventDefault(),t(_());break;case 40:e.preventDefault(),t(S())}}},[t]);return Object(a.c)(G,{onSubmit:s,onKeyUp:l},Object(a.c)(q,{value:n,onChange:u}),Object(a.c)(F,{results:r,selection:i.current}))}),J=n(240),V=n(259),X=(n(40),n(310)),W=Object(X.a)({SET_QUERY:function(e,t){return t.payload}},""),Z=Object(X.a)({SET_RESULTS:function(e,t){return t.payload}},[]),$=Object(X.a)({SET_RESULTS:function(e,t){var n=t?Math.max(t.payload.length-1,0):0;return Object.assign({},e,{max:n,current:Math.min(e.current,n)})},PREVIOUS_SELECTION:function(e){return Object.assign({},e,{current:Math.max(e.current-1,0)})},NEXT_SELECTION:function(e){return Object.assign({},e,{current:Math.min(e.current+1,e.max)})}},{current:0,max:0}),ee=Object(J.c)({query:W,results:Z,selection:$}),te=Object(J.a)(V.a)(J.d)(function(e,t){return e=function(e,t){return"RESET"===t.type?void 0:e}(e,t),ee(e,t)}),ne=n(251),re=n.n(ne),ae=n(116),ce=n.n(ae);function oe(){return(oe=x()(w.a.mark(function e(t){var n,r,a,c;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t1=re.a,e.next=3,re()(window,function(e){return e.__LUNR__.__loaded});case 3:if(e.t2=e.sent,e.t3=function(e){return e.en},e.t0=(0,e.t1)(e.t2,e.t3),e.t0){e.next=8;break}e.t0={};case 8:if(n=e.t0,r=n.index,a=n.store,t&&r&&a){e.next=13;break}return e.abrupt("return",[]);case 13:return c=r.query(function(e){var n=ce.a.tokenizer(t);e.term(n,{boost:100,usePipeline:!0}),e.term(n,{boost:10,usePipeline:!1,wildcard:ce.a.Query.wildcard.TRAILING}),e.term(n,{boost:1})}),e.abrupt("return",c.map(function(e){var t=e.ref;return Object.assign({ref:t},a[t])}));case 15:case"end":return e.stop()}},e)}))).apply(this,arguments)}var ie,ue,se,le,de=(ie=function(e){return oe.apply(this,arguments)},ue=100,void 0===se&&(se=void 0),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new Promise(function(e,n){le=e,setTimeout(x()(w.a.mark(function r(){return w.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(le!==e){r.next=8;break}return r.t0=e,r.next=4,ie.apply(void 0,t);case 4:r.t1=r.sent,(0,r.t0)(r.t1),r.next=9;break;case 8:n(se);case 9:case"end":return r.stop()}},r)})),ue)})}),be=function(){return Object(a.c)(m.a,{store:te},Object(a.c)(H,{api:de}))},fe=Object(r.a)("header",{target:"e15etjgo0"})(function(e){return e.theme.gradient}," ",function(e){return e.theme.shadow}),pe=Object(r.a)(f.Link,{target:"e15etjgo1"})({name:"1w4zlaz",styles:"color:white;&,&:hover{text-decoration:none;}"}),ge=Object(r.a)(b.a,{target:"e15etjgo2"})("padding-top:",Object(d.d)(.5),";padding-bottom:",Object(d.d)(.5),";"),je=Object(r.a)("div",{target:"e15etjgo3"})("margin:0;max-width:calc(50% - ",Object(d.d)(.25),");"),Oe=je.withComponent("h3",{target:"e15etjgo4"}),he=function(e){var t=e.siteTitle;return Object(a.c)(fe,null,Object(a.c)(ge,null,Object(a.c)(O,{justify:"space-between"},Object(a.c)(Oe,null,Object(a.c)(pe,{to:"/"},t)),Object(a.c)(je,null,Object(a.c)(be,null)))))};he.propTypes={siteTitle:l.a.string.isRequired};var me=he,ve=Object(r.a)(b.a,{target:"e1wsq9gq0"})("text-align:center;padding:",Object(d.d)(1),";").withComponent("footer",{target:"e1wsq9gq1"}),we=function(e){var t=e.children,n=e.header,r=c.data.site.siteMetadata,o=r.title,i=r.author;return Object(a.c)(u.a,{theme:d.c},Object(a.c)(me,{siteTitle:o}),Object(a.c)("main",null,n,Object(a.c)(b.a,null,t)),Object(a.c)(ve,null,"© ",i," ",(new Date).getFullYear(),", Built with"," ",Object(a.c)("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))};we.propTypes={children:l.a.node.isRequired,header:l.a.node};t.a=we}}]);
//# sourceMappingURL=component---src-pages-index-js-1be29154c470b213cf17.js.map