(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{225:function(t,e,n){"use strict";n.r(e);var r=n(7),a=(n(0),n(246)),c=n(244);e.default=function(){return Object(r.c)(a.a,null,Object(r.c)(c.a,{title:"404: Not found"}),Object(r.c)("h1",null,"NOT FOUND"),Object(r.c)("p",null,"You just hit a route that doesn't exist... the sadness."))}},230:function(t,e,n){"use strict";n(40);var r=n(235),a=n(251),c=n.n(a),o=n(252),i=n.n(o),u=n(7),s=n(236),l=["#0e9aa7","#96ceb4","#ffcc5c","#ff6f69","#ced07d"],b=l[3],d={colors:{primary:b,accent:l[2],palette:l,background:"white"},gradient:Object(u.b)("background-color:",b,";background-image:linear-gradient( to right,",l.slice(2,4).join(", ")," );",s.MIN_TABLET_MEDIA_QUERY,"{background-image:linear-gradient(to right,",l.join(", "),");}"),shadow:Object(u.b)("box-shadow:0px 2px 2px 0px ",Object(r.a)(.2,"white"),";")};i.a.overrideThemeStyles=function(t){var e=t.rhythm,n=t.scale;return{a:{color:d.colors.primary},code:Object.assign({"border-radius":"2px",color:Object(r.b)(.1,i.a.bodyColor),"background-color":Object(r.a)(.04,d.colors.background),padding:e(1/8)},n(-1/8))}};var f=new c.a(i.a),p=f.rhythm;f.scale;n.d(e,"b",function(){return p});e.a=d},232:function(t,e,n){"use strict";var r=n(229),a=n(236),c=n(230);e.a=Object(r.a)("div",{target:"e1mv9duo0"})("margin:0 auto;max-width:",a.DEFAULT_WIDTH,";padding-left:",Object(c.b)(.5),";padding-right:",Object(c.b)(.5),";",a.MIN_TABLET_MEDIA_QUERY,"{padding-left:",Object(c.b)(1),";padding-right:",Object(c.b)(1),";}")},241:function(t){t.exports={data:{site:{siteMetadata:{title:"Kevin Stone",author:"Kevin Stone"}}}}},244:function(t,e,n){"use strict";var r=n(7),a=n(245),c=(n(0),n(1)),o=n.n(c),i=n(259),u=n.n(i);function s(t){var e=t.description,n=t.lang,c=t.meta,o=t.keywords,i=t.title,s=a.data.site.siteMetadata,l=s.title,b=s.description,d=s.author,f=e||b;return Object(r.c)(u.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+l,defaultTitle:l,meta:[{name:"description",content:f},{property:"og:title",content:i},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d},{name:"twitter:title",content:i},{name:"twitter:description",content:f}].concat(o.length>0?{name:"keywords",content:Array.isArray(o)?o.join(", "):o}:[]).concat(c)})}s.defaultProps={description:null,title:null,lang:"en",meta:[],keywords:[]},s.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.oneOfType([o.a.arrayOf(o.a.string),o.a.string]),title:o.a.string},e.a=s},245:function(t){t.exports={data:{site:{siteMetadata:{title:"Kevin Stone",description:"Personal blog for Kevin Stone.",author:"Kevin Stone"}}}}},246:function(t,e,n){"use strict";var r=n(229),a=n(7),c=n(241),o=n(0),i=n.n(o),u=n(250),s=n(1),l=n.n(s),b=n(230),d=n(232),f=n(66),p={start:"flex-start",end:"flex-end","space-between":"space-between","space-around":"space-around"},g={start:"flex-start",end:"flex-end","space-between":"space-between","space-around":"space-around",stretch:"stretch"},h=Object(r.a)("div",{target:"ebzxlb00"})(function(t){return Object(a.b)("display:flex;flex-direction:",t.column?"column":"row",";justify-content:",p[t.justify]||"center",";align-items:",g[t.align]||"center",";flex-wrap:",t.wrap?"wrap":" no-wrap",";flex-grow:",t.grow?1:0,";")},";"),j=Object(r.a)(h,{target:"ebzxlb01"})({name:"1l0z8uk",styles:"flex-direction:row;"}),O=Object(r.a)(h,{target:"ebzxlb02"})({name:"cgq59l",styles:"flex-direction:column;"}),m=n(239),v=n(233),w=n.n(v),y=(n(231),n(234)),x=n.n(y),k=(n(42),n(20)),T=n(312),E=Object(T.a)("SET_RESULTS"),S=Object(T.a)("NEXT_SELECTION"),_=Object(T.a)("PREVIOUS_SELECTION"),R=Object(T.a)("RESET");function N(t,e){return function(){var n=x()(w.a.mark(function n(r){var a;return w.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(Object(T.a)("SET_QUERY")(e)),n.prev=1,n.next=4,t(e);case 4:a=n.sent,r(E(a)),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(1);case 10:case"end":return n.stop()}},n,null,[[1,8]])}));return function(t){return n.apply(this,arguments)}}()}var C=function(t){return Object(a.b)("background-color:",t.colors.background,";border-color:transparent;color:",t.colors.primary,";")},L=Object(r.a)("input",{target:"e1vo72mx0"})("background-color:transparent;border:1px solid ",function(t){return t.theme.colors.accent},";border-radius:",Object(b.b)(1/8),";color:white;margin:0;padding:0 0.8em;transition:background-color 0.5s;width:100%;&:focus,&:hover{outline:none;",function(t){return C(t.theme)},"}",function(t){return t.value&&C(t.theme)}),q=function(t){var e=t.value,n=t.onChange,r=i.a.useRef(null);return Object(a.c)(L,{ref:r,type:"search",name:"query",placeholder:"Search",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",value:e,onChange:function(t){return n(t.target.value)},onFocus:function(){return setTimeout(function(){return r.current&&r.current.select()})}})},I=n(41),U=n.n(I),A=n(254);var M=n(255);function D(t){var e,n,r,c,i,u=t.opacity,s=t.height,l=t.className,b=t.children,d=(e=Object(o.useRef)(),n=Object(o.useState)({left:0,top:0,width:0,height:0}),r=n[0],c=n[1],i=Object(o.useState)(function(){return new A.a(function(t){var e=t[0];return c(e.contentRect)})})[0],Object(o.useEffect)(function(){return e.current&&i.observe(e.current),function(){return i.disconnect()}},[]),[{ref:e},r]),f=d[0],p=d[1].height;return Object(a.c)(M.a.div,{className:l,style:{opacity:u,height:s.interpolate({output:[0,p]})}},Object(a.c)(M.a.div,f,b))}var z=Object(r.a)(D,{target:"e1jmbduy0"})({name:"8atqhb",styles:"width:100%;"});var P=n(112),K=n.n(P),Y=n(235),Q=Object(r.a)("li",{target:"e1e22ra00"})("background-color:",function(t){return t.selected?Object(Y.c)(.8,t.theme.colors.background,t.theme.colors.primary):t.theme.colors.background},";margin:0;padding:0.8em;width:100%;"),F=function(t){var e=t.selected,n=t.result,r=K()(t,["selected","result"]);return Object(a.c)(Q,U()({selected:e},r),Object(a.c)(f.Link,{to:n.url},n.title))},B=Object(r.a)(O,{target:"elewai50"})("border-radius:",Object(b.b)(1/8),";list-style-type:none;margin:",Object(b.b)(1/8)," 0 0 0;overflow:hidden;padding:0;position:absolute;width:100%;",function(t){return t.theme.shadow}),G=function(t){var e,n,r,c=t.results,o=t.selection,i=(e=c,n=function(t){return t.ref},r=Object(M.c)(e,n,{from:{opacity:0,height:0},enter:{opacity:1,height:1},leave:{opacity:0,height:0},trail:50,config:M.b.gentle}),function(t){return r.map(function(e,n){var r=e.key,c=e.item,o=e.props;return Object(a.c)(z,U()({key:r},o),t(c,n))})});return Object(a.c)(B,null,i(function(t,e){return Object(a.c)(F,{selected:e===o,result:t})}))};var H=Object(r.a)("form",{target:"e15vkf1q0"})({name:"1d0vcgf",styles:"margin:0;position:relative;width:100%;"});var J=Object(m.b)(function(t){return t})(function(t){var e=t.dispatch,n=t.query,r=t.results,c=t.api,i=t.selection,u=function(t){for(var e=this,n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return function(){for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return t.apply(e,[].concat(r,a))}}(N,c);return Object(o.useEffect)(function(){return k.globalHistory.listen(function(){return e(R())})}),Object(a.c)(H,{onSubmit:function(t){return t.preventDefault(),!1},onKeyUp:function(t){switch(t.which){case 13:t.preventDefault(),e(function(t,e){var n=e(),r=n.selection,a=n.results;a[r.current]&&Object(f.navigate)(a[r.current].url)});break;case 38:t.preventDefault(),e(_());break;case 40:t.preventDefault(),e(S())}}},Object(a.c)(q,{value:n,onChange:function(t){return e(u(t))}}),Object(a.c)(G,{results:r,selection:i.current}))}),V=n(237),X=n(256),W=(n(40),n(311)),Z=Object(W.a)({SET_QUERY:function(t,e){return e.payload}},""),$=Object(W.a)({SET_RESULTS:function(t,e){return e.payload}},[]),tt=Object(W.a)({SET_RESULTS:function(t,e){var n=e?Math.max(e.payload.length-1,0):0;return Object.assign({},t,{max:n,current:Math.min(t.current,n)})},PREVIOUS_SELECTION:function(t){return Object.assign({},t,{current:Math.max(t.current-1,0)})},NEXT_SELECTION:function(t){return Object.assign({},t,{current:Math.min(t.current+1,t.max)})}},{current:0,max:0}),et=Object(V.c)({query:Z,results:$,selection:tt}),nt=Object(V.a)(X.a)(V.d)(function(t,e){return t=function(t,e){return"RESET"===e.type?void 0:t}(t,e),et(t,e)}),rt=n(248),at=n.n(rt),ct=n(113),ot=n.n(ct);function it(){return(it=x()(w.a.mark(function t(e){var n,r,a,c;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t1=at.a,t.next=3,at()(window,function(t){return t.__LUNR__.__loaded});case 3:if(t.t2=t.sent,t.t3=function(t){return t.en},t.t0=(0,t.t1)(t.t2,t.t3),t.t0){t.next=8;break}t.t0={};case 8:if(n=t.t0,r=n.index,a=n.store,e&&r&&a){t.next=13;break}return t.abrupt("return",[]);case 13:return c=r.query(function(t){var n=ot.a.tokenizer(e);t.term(n,{boost:100,usePipeline:!0}),t.term(n,{boost:10,usePipeline:!1,wildcard:ot.a.Query.wildcard.TRAILING}),t.term(n,{boost:1})}),t.abrupt("return",c.map(function(t){var e=t.ref;return Object.assign({ref:e},a[e])}));case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}var ut,st,lt,bt,dt=(ut=function(t){return it.apply(this,arguments)},st=100,void 0===lt&&(lt=void 0),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new Promise(function(t,n){bt=t,setTimeout(x()(w.a.mark(function r(){return w.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(bt!==t){r.next=8;break}return r.t0=t,r.next=4,ut.apply(void 0,e);case 4:r.t1=r.sent,(0,r.t0)(r.t1),r.next=9;break;case 8:n(lt);case 9:case"end":return r.stop()}},r)})),st)})}),ft=function(){return Object(a.c)(m.a,{store:nt},Object(a.c)(J,{api:dt}))},pt=Object(r.a)("header",{target:"e15etjgo0"})(function(t){return t.theme.gradient}," ",function(t){return t.theme.shadow}),gt=Object(r.a)(f.Link,{target:"e15etjgo1"})({name:"1w4zlaz",styles:"color:white;&,&:hover{text-decoration:none;}"}),ht=Object(r.a)(d.a,{target:"e15etjgo2"})("padding-top:",Object(b.b)(.5),";padding-bottom:",Object(b.b)(.5),";"),jt=Object(r.a)("div",{target:"e15etjgo3"})("margin:0;max-width:calc(50% - ",Object(b.b)(.25),");"),Ot=jt.withComponent("h3",{target:"e15etjgo4"}),mt=function(t){var e=t.siteTitle;return Object(a.c)(pt,null,Object(a.c)(ht,null,Object(a.c)(j,{justify:"space-between"},Object(a.c)(Ot,null,Object(a.c)(gt,{to:"/"},e)),Object(a.c)(jt,null,Object(a.c)(ft,null)))))};mt.propTypes={siteTitle:l.a.string.isRequired};var vt=mt,wt=Object(r.a)(d.a,{target:"e1wsq9gq0"})("text-align:center;padding:",Object(b.b)(1),";").withComponent("footer",{target:"e1wsq9gq1"}),yt=function(t){var e=t.children,n=t.header,r=c.data.site.siteMetadata,o=r.title,i=r.author;return Object(a.c)(u.a,{theme:b.a},Object(a.c)(vt,{siteTitle:o}),Object(a.c)("main",null,n,Object(a.c)(d.a,null,e)),Object(a.c)(wt,null,"© ",i," ",(new Date).getFullYear(),", Built with"," ",Object(a.c)("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))};yt.propTypes={children:l.a.node.isRequired,header:l.a.node};e.a=yt}}]);
//# sourceMappingURL=component---src-pages-404-js-7ec370dea29e1a98e66a.js.map