(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{238:function(e,t,n){"use strict";n.d(t,"a",function(){return u});n(42);var r=n(293),a=n.n(r),c=n(294),s=n.n(c),o=n(256);s.a.overrideThemeStyles=function(e){var t=e.rhythm,n=e.scale;return{a:{color:o.a.colors.primary},code:Object.assign({"border-radius":"2px",color:"#333333","background-color":"#f5f5f5",padding:t(1/8)},n(-1/8))}};var i=new a.a(s.a),u=i.rhythm;i.scale},241:function(e,t,n){"use strict";var r=n(235),a=n(7),c=n(290),s=n(0),o=n.n(s),i=n(291),u=n.n(i),l=n(255),d=n(3),p=n.n(d),f=n(256),b=n(238),j=n(41),g={start:"flex-start",end:"flex-end","space-between":"space-between","space-around":"space-around"},h={start:"flex-start",end:"flex-end","space-between":"space-between","space-around":"space-around",stretch:"stretch"},O=Object(r.a)("div",{target:"e1ru9v3x0"})(function(e){return Object(a.css)("display:flex;flex-direction:",e.column?"column":"row",";justify-content:",g[e.justify]||"center",";align-items:",h[e.align]||"center",";flex-wrap:",e.wrap?"wrap":" no-wrap",";flex-grow:",e.grow?1:0,";")},";"),m=Object(r.a)(O,{target:"e1ru9v3x1"})({name:"1l0z8uk",styles:"flex-direction:row;"}),x=n(264),w=n(20),y=n(258),v=n.n(y),k=(n(245),n(259)),T=n.n(k),S=n(314),E=Object(S.a)("SET_RESULTS"),_=Object(S.a)("NEXT_SELECTION"),R=Object(S.a)("PREVIOUS_SELECTION");function N(e,t){return function(){var n=T()(v.a.mark(function n(r){var a;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(Object(S.a)("SET_QUERY")(t)),n.next=3,e(t);case 3:a=n.sent,r(E(a));case 5:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}var C=function(e){return Object(a.css)("background-color:","white",";color:",e.colors.primary,";")},L=Object(l.b)(function(e){var t=e.value,n=e.onChange,r=e.theme,c=o.a.useRef(null);return Object(a.jsx)("input",{ref:c,css:Object(a.css)("margin:0;padding:0 0.8em;background-color:transparent;color:white;transition:background-color 0.5s;border:1px solid ",r.colors.palette[2],";border-radius:4px;&:focus,&:hover{outline:none;",C(r),"}",t&&C(r),""),type:"search",name:"query",placeholder:"Search",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",value:t,onChange:function(e){return n(e.target.value)},onFocus:function(){return setTimeout(function(){return c.current&&c.current.select()})}})}),M=n(265),q=Object(r.a)("li",{target:"e1e22ra00"})("background-color:",function(e){return e.selected?Object(M.a)(.8,"white",e.theme.colors.primary):"white"},";margin:0;padding:0.8em;"),U=function(e){var t=e.selected,n=e.result;return Object(a.jsx)(q,{selected:t},Object(a.jsx)(j.Link,{to:n.url},n.title))},I=function(e){var t=e.results,n=e.selection;return Object(a.jsx)("ul",{css:Object(a.css)("list-style-type:none;margin:0;padding:0;width:100%;&:not(:empty){position:absolute;background:",Object(M.b)(.5,"white"),";}")},t.map(function(e,t){return Object(a.jsx)(U,{key:e.ref,selected:t===n,result:e})}))};var A={name:"79elbk",styles:"position:relative;"},K={name:"1uk1gs8",styles:"margin:0;"};var z=Object(x.b)(function(e){return e})(function(e){var t=e.dispatch,n=e.query,r=e.results,c=e.api,o=e.selection,i=e.className,u=function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return function(){for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return e.apply(t,[].concat(r,a))}}(N,c);return Object(s.useEffect)(function(){return w.globalHistory.listen(function(){return t(u(""))})}),Object(a.jsx)("div",{css:A,onKeyUp:function(e){switch(e.which){case 13:e.preventDefault(),t(function(e,t){var n=t(),r=n.selection,a=n.results;a[r.current]&&Object(j.navigate)(a[r.current].url)});break;case 38:e.preventDefault(),t(R());break;case 40:e.preventDefault(),t(_())}}},Object(a.jsx)("form",{className:i,css:K,onSubmit:function(e){return e.preventDefault(),!1}},Object(a.jsx)(L,{value:n,onChange:function(e){return t(u(e))}})),Object(a.jsx)(I,{results:r,selection:o.current}))}),D=n(244),G=n(303),P=(n(42),n(313)),Q=Object(P.a)({SET_QUERY:function(e,t){return t?t.payload:e}},""),Y=Object(P.a)({SET_RESULTS:function(e,t){return t?t.payload:e}},[]),F=Object(P.a)({SET_RESULTS:function(e,t){var n=t?Math.max(t.payload.length-1,0):0;return Object.assign({},e,{max:n,current:Math.min(e.current,n)})},PREVIOUS_SELECTION:function(e){return Object.assign({},e,{current:Math.max(e.current-1,0)})},NEXT_SELECTION:function(e){return Object.assign({},e,{current:Math.min(e.current+1,e.max)})}},{current:0,max:0}),J=Object(D.c)({query:Q,results:Y,selection:F}),V=Object(D.a)(G.a)(D.d)(J),X=n(262),B=n.n(X),H=n(114),W=n.n(H);function Z(e){return $.apply(this,arguments)}function $(){return($=T()(v.a.mark(function e(t){var n,r,a,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t1=B.a,e.next=3,B()(window,function(e){return e.__LUNR__.__loaded});case 3:if(e.t2=e.sent,e.t3=function(e){return e.en},e.t0=(0,e.t1)(e.t2,e.t3),e.t0){e.next=8;break}e.t0={};case 8:if(n=e.t0,r=n.index,a=n.store,t&&r&&a){e.next=13;break}return e.abrupt("return",[]);case 13:return c=r.query(function(e){var n=W.a.tokenizer(t);e.term(n,{boost:100,usePipeline:!0}),e.term(n,{boost:10,usePipeline:!1,wildcard:W.a.Query.wildcard.TRAILING}),e.term(n,{boost:1})}),e.abrupt("return",c.map(function(e){var t=e.ref;return Object.assign({ref:t},a[t])}));case 15:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var ee=function(e){var t=e.className;return Object(a.jsx)(x.a,{store:V},Object(a.jsx)(z,{api:Z,className:t}))},te=Object(r.a)("header",{target:"e15etjgo0"})(function(e){return e.theme.gradient}," ",function(e){return e.theme.shadow},""),ne=Object(r.a)(j.Link,{target:"e15etjgo1"})({name:"1w4zlaz",styles:"color:white;&,&:hover{text-decoration:none;}"}),re={name:"1uk1gs8",styles:"margin:0;"},ae=function(e){var t=e.siteTitle;return Object(a.jsx)(te,null,Object(a.jsx)(se,{css:Object(a.css)("padding-top:",Object(b.a)(.5),";padding-bottom:",Object(b.a)(.5),";")},Object(a.jsx)(m,{justify:"space-between"},Object(a.jsx)("h3",{css:re},Object(a.jsx)(ne,{to:"/"},t)),Object(a.jsx)(ee,null))))};ae.propTypes={siteTitle:p.a.string.isRequired};var ce=ae;n.d(t,"a",function(){return se});var se=Object(r.a)("div",{target:"e1wsq9gq0"})("margin:0 auto;max-width:960px;padding:0 ",Object(b.a)(1),";"),oe=function(e){var t=e.children,n=e.header,r=c.data.site;return Object(a.jsx)(l.a,{theme:f.a},Object(a.jsx)(a.Global,{style:Object(a.css)(u.a,"")}),Object(a.jsx)(ce,{siteTitle:r.siteMetadata.title}),Object(a.jsx)("main",null,n,Object(a.jsx)(se,{css:Object(a.css)("padding-top:",Object(b.a)(0),";")},t," ")),Object(a.jsx)(se,{as:"footer",css:Object(a.css)("text-align:center;padding:",Object(b.a)(1),";")},"© ",r.siteMetadata.author," ",(new Date).getFullYear(),", Built with"," ",Object(a.jsx)("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))};oe.propTypes={children:p.a.node.isRequired,header:p.a.node};t.b=oe},246:function(e,t,n){"use strict";var r=n(7),a=n(304),c=(n(0),n(3)),s=n.n(c),o=n(305),i=n.n(o);function u(e){var t=e.description,n=e.lang,c=e.meta,s=e.keywords,o=e.title,u=a.data.site,l=t||u.siteMetadata.description;return Object(r.jsx)(i.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(s.length>0?{name:"keywords",content:Array.isArray(s)?s.join(", "):s}:[]).concat(c)})}u.defaultProps={description:null,lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.oneOfType([s.a.arrayOf(s.a.string),s.a.string]),title:s.a.string.isRequired},t.a=u},256:function(e,t,n){"use strict";var r=n(7),a=["#0e9aa7","#96ceb4","#ffcc5c","#ff6f69","#ced07d"];t.a={colors:{primary:"#ff6f69",palette:a},gradient:Object(r.css)("background-color:","#ff6f69",";background:linear-gradient(to right,",a.join(",\n"),");"),shadow:{name:"1wagsho",styles:"box-shadow:0px 2px 2px 0px #ccc;"}}},290:function(e){e.exports={data:{site:{siteMetadata:{title:"Kevin Stone",author:"Kevin Stone"}}}}},304:function(e){e.exports={data:{site:{siteMetadata:{title:"Kevin Stone",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"Kevin Stone"}}}}}}]);
//# sourceMappingURL=1-414e6f40a13ce2df5d68.js.map