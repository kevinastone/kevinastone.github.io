import{j as m}from"./jsx-runtime.D_zvdyIk.js";import{r as a}from"./index.dRvCetEN.js";import"./index.BLy_0GNg.js";/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),T=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,r)=>r?r.toUpperCase():s.toLowerCase()),l=t=>{const e=T(t);return e.charAt(0).toUpperCase()+e.slice(1)},p=(...t)=>t.filter((e,s,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===s).join(" ").trim(),x=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var S={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=a.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:o="",children:n,iconNode:y,...u},f)=>a.createElement("svg",{ref:f,...S,width:e,height:e,stroke:t,strokeWidth:r?Number(s)*24/Number(e):s,className:p("lucide",o),...!n&&!x(u)&&{"aria-hidden":"true"},...u},[...y.map(([k,w])=>a.createElement(k,w)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(t,e)=>{const s=a.forwardRef(({className:r,...o},n)=>a.createElement(C,{ref:n,iconNode:e,className:p(`lucide-${g(l(t))}`,`lucide-${t}`,r),...o}));return s.displayName=l(t),s};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]],v=h("contrast",b);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],M=h("moon",E);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],L=h("sun",j),i=["system","dark","light"];function d(t){return i.includes(t)}class ${currentTheme="system";listeners=new Set;constructor(){this.currentTheme=this.readFromStorage(),this.applyToDom(this.currentTheme),typeof window<"u"&&(window.addEventListener("storage",e=>{e.key==="theme"&&e.newValue&&d(e.newValue)&&this.updateState(e.newValue)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{this.currentTheme==="system"&&this.applyToDom("system")}),document.addEventListener("astro:after-swap",()=>{this.applyToDom(this.currentTheme)}))}getSnapshot=()=>this.currentTheme;subscribe=e=>(this.listeners.add(e),()=>this.listeners.delete(e));cycle=()=>{const s=(i.indexOf(this.currentTheme)+1)%i.length;this.setTheme(i[s])};getServerSnapshot=()=>"system";setTheme=e=>{e!==this.currentTheme&&(localStorage.setItem("theme",e),this.updateState(e))};updateState(e){this.currentTheme=e,this.applyToDom(e),this.notify()}notify(){this.listeners.forEach(e=>{e(this.currentTheme)})}readFromStorage(){if(typeof window>"u")return"system";const e=localStorage.getItem("theme");return e&&d(e)?e:"system"}applyToDom(e){if(typeof document>"u")return;const s=document.documentElement;e==="dark"||e==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches?s.classList.add("dark"):s.classList.remove("dark")}}const c=new $;function A(){return[a.useSyncExternalStore(c.subscribe,c.getSnapshot,c.getServerSnapshot),c.setTheme,c.cycle]}const D="h-full w-full transition-all duration-300 ease-in-out absolute top-0 left-0",I="opacity-100 scale-100 rotate-0",N="opacity-0 scale-50 -rotate-90";function _({items:t,activeKey:e,className:s,...r}){return m.jsx("span",{className:`relative block ${s??""}`,children:t.map(({key:o,Component:n})=>m.jsx(n,{className:`${D} ${e===o?I:N}`,...r},o))})}const R=[{key:"light",Component:L},{key:"dark",Component:M},{key:"system",Component:v}];function B(){const[t,e,s]=A(),[r,o]=a.useState(!1);return a.useEffect(()=>o(!0),[]),m.jsx("button",{type:"button",onClick:s,className:"text-2xl button button-icon cursor-pointer text-accent",children:m.jsx(_,{items:R,activeKey:r?t:void 0,strokeWidth:1.5,className:"w-[1em] h-[1em]"})})}export{B as default};
