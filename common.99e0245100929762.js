"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{9893:(y,f,d)=>{d.d(f,{c:()=>l});var m=d(3452),g=d(2429),i=d(8751);const l=(r,o)=>{let t,e;const s=(c,h,p)=>{if("undefined"==typeof document)return;const _=document.elementFromPoint(c,h);_&&o(_)?_!==t&&(a(),n(_,p)):a()},n=(c,h)=>{t=c,e||(e=t);const p=t;(0,m.c)(()=>p.classList.add("ion-activated")),h()},a=(c=!1)=>{if(!t)return;const h=t;(0,m.c)(()=>h.classList.remove("ion-activated")),c&&e!==t&&t.click(),t=void 0};return(0,i.createGesture)({el:r,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>s(c.currentX,c.currentY,g.a),onMove:c=>s(c.currentX,c.currentY,g.b),onEnd:()=>{a(!0),(0,g.h)(),e=void 0}})}},9914:(y,f,d)=>{d.d(f,{g:()=>m});const m=(o,t,e,s,n)=>i(o[1],t[1],e[1],s[1],n).map(a=>g(o[0],t[0],e[0],s[0],a)),g=(o,t,e,s,n)=>n*(3*t*Math.pow(n-1,2)+n*(-3*e*n+3*e+s*n))-o*Math.pow(n-1,3),i=(o,t,e,s,n)=>r((s-=n)-3*(e-=n)+3*(t-=n)-(o-=n),3*e-6*t+3*o,3*t-3*o,o).filter(c=>c>=0&&c<=1),r=(o,t,e,s)=>{if(0===o)return((o,t,e)=>{const s=t*t-4*o*e;return s<0?[]:[(-t+Math.sqrt(s))/(2*o),(-t-Math.sqrt(s))/(2*o)]})(t,e,s);const n=(3*(e/=o)-(t/=o)*t)/3,a=(2*t*t*t-9*t*e+27*(s/=o))/27;if(0===n)return[Math.pow(-a,1/3)];if(0===a)return[Math.sqrt(-n),-Math.sqrt(-n)];const c=Math.pow(a/2,2)+Math.pow(n/3,3);if(0===c)return[Math.pow(a/2,.5)-t/3];if(c>0)return[Math.pow(-a/2+Math.sqrt(c),1/3)-Math.pow(a/2+Math.sqrt(c),1/3)-t/3];const h=Math.sqrt(Math.pow(-n/3,3)),p=Math.acos(-a/(2*Math.sqrt(Math.pow(-n/3,3)))),_=2*Math.pow(h,1/3);return[_*Math.cos(p/3)-t/3,_*Math.cos((p+2*Math.PI)/3)-t/3,_*Math.cos((p+4*Math.PI)/3)-t/3]}},9318:(y,f,d)=>{d.d(f,{i:()=>m});const m=g=>g&&""!==g.dir?"rtl"===g.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3620:(y,f,d)=>{d.r(f),d.d(f,{startFocusVisible:()=>l});const m="ion-focused",i=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],l=r=>{let o=[],t=!0;const e=r?r.shadowRoot:document,s=r||document.body,n=v=>{o.forEach(w=>w.classList.remove(m)),v.forEach(w=>w.classList.add(m)),o=v},a=()=>{t=!1,n([])},c=v=>{t=i.includes(v.key),t||n([])},h=v=>{if(t&&v.composedPath){const w=v.composedPath().filter(M=>!!M.classList&&M.classList.contains("ion-focusable"));n(w)}},p=()=>{e.activeElement===s&&n([])};return e.addEventListener("keydown",c),e.addEventListener("focusin",h),e.addEventListener("focusout",p),e.addEventListener("touchstart",a),e.addEventListener("mousedown",a),{destroy:()=>{e.removeEventListener("keydown",c),e.removeEventListener("focusin",h),e.removeEventListener("focusout",p),e.removeEventListener("touchstart",a),e.removeEventListener("mousedown",a)},setFocus:n}}},3610:(y,f,d)=>{d.d(f,{C:()=>r,a:()=>i,d:()=>l});var m=d(8239),g=d(7015);const i=function(){var o=(0,m.Z)(function*(t,e,s,n,a,c){if(t)return t.attachViewToDom(e,s,a,n);if(!(c||"string"==typeof s||s instanceof HTMLElement))throw new Error("framework delegate is missing");const h="string"==typeof s?e.ownerDocument&&e.ownerDocument.createElement(s):s;return n&&n.forEach(p=>h.classList.add(p)),a&&Object.assign(h,a),e.appendChild(h),yield new Promise(p=>(0,g.c)(h,p)),h});return function(e,s,n,a,c,h){return o.apply(this,arguments)}}(),l=(o,t)=>{if(t){if(o)return o.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},r=()=>{let o,t;return{attachViewToDom:function(){var n=(0,m.Z)(function*(a,c,h={},p=[]){if(o=a,c){const v="string"==typeof c?o.ownerDocument&&o.ownerDocument.createElement(c):c;p.forEach(w=>v.classList.add(w)),Object.assign(v,h),o.appendChild(v),yield new Promise(w=>(0,g.c)(v,w))}else if(o.children.length>0){const v=o.ownerDocument&&o.ownerDocument.createElement("div");p.forEach(w=>v.classList.add(w)),v.append(...o.children),o.appendChild(v)}const _=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),o.parentNode.insertBefore(t,o),_.appendChild(o),o});return function(c,h){return n.apply(this,arguments)}}(),removeViewFromDom:()=>(o&&t&&(t.parentNode.insertBefore(o,t),t.remove()),Promise.resolve())}}},2429:(y,f,d)=>{d.d(f,{a:()=>i,b:()=>l,c:()=>g,d:()=>o,h:()=>r});const m={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const s=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:s})},notification(t){const e=this.getEngine();if(!e)return;const s=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:s})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},g=()=>{m.selection()},i=()=>{m.selectionStart()},l=()=>{m.selectionChanged()},r=()=>{m.selectionEnd()},o=t=>{m.impact(t)}},8380:(y,f,d)=>{d.d(f,{s:()=>m});const m=e=>{try{if(e instanceof class{constructor(s){this.value=s}})return e.value;if(!l()||"string"!=typeof e||""===e)return e;const s=document.createDocumentFragment(),n=document.createElement("div");s.appendChild(n),n.innerHTML=e,o.forEach(p=>{const _=s.querySelectorAll(p);for(let v=_.length-1;v>=0;v--){const w=_[v];w.parentNode?w.parentNode.removeChild(w):s.removeChild(w);const M=i(w);for(let u=0;u<M.length;u++)g(M[u])}});const a=i(s);for(let p=0;p<a.length;p++)g(a[p]);const c=document.createElement("div");c.appendChild(s);const h=c.querySelector("div");return null!==h?h.innerHTML:c.innerHTML}catch(s){return console.error(s),""}},g=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let n=e.attributes.length-1;n>=0;n--){const a=e.attributes.item(n),c=a.name;if(!r.includes(c.toLowerCase())){e.removeAttribute(c);continue}const h=a.value;null!=h&&h.toLowerCase().includes("javascript:")&&e.removeAttribute(c)}const s=i(e);for(let n=0;n<s.length;n++)g(s[n])},i=e=>null!=e.children?e.children:e.childNodes,l=()=>{const e=window,s=e&&e.Ionic&&e.Ionic.config;return!s||(s.get?s.get("sanitizerEnabled",!0):!0===s.sanitizerEnabled||void 0===s.sanitizerEnabled)},r=["class","id","href","src","name","slot"],o=["script","style","iframe","meta","link","object","embed"]},1890:(y,f,d)=>{d.d(f,{a:()=>m,b:()=>a,c:()=>o,d:()=>c,e:()=>u,f:()=>i,g:()=>g,h:()=>w,i:()=>t,j:()=>s,k:()=>h,l:()=>e,m:()=>r,n:()=>l,o:()=>n,p:()=>p,q:()=>_,r:()=>v,s:()=>M});const m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},149:(y,f,d)=>{d.r(f),d.d(f,{KEYBOARD_DID_CLOSE:()=>g,KEYBOARD_DID_OPEN:()=>m,copyVisualViewport:()=>M,keyboardDidClose:()=>p,keyboardDidOpen:()=>c,keyboardDidResize:()=>h,resetKeyboardAssist:()=>t,setKeyboardClose:()=>a,setKeyboardOpen:()=>n,startKeyboardAssist:()=>e,trackViewportChanges:()=>w});const m="ionKeyboardDidShow",g="ionKeyboardDidHide";let l={},r={},o=!1;const t=()=>{l={},r={},o=!1},e=u=>{s(u),u.visualViewport&&(r=M(u.visualViewport),u.visualViewport.onresize=()=>{w(u),c()||h(u)?n(u):p(u)&&a(u)})},s=u=>{u.addEventListener("keyboardDidShow",E=>n(u,E)),u.addEventListener("keyboardDidHide",()=>a(u))},n=(u,E)=>{_(u,E),o=!0},a=u=>{v(u),o=!1},c=()=>!o&&l.width===r.width&&(l.height-r.height)*r.scale>150,h=u=>o&&!p(u),p=u=>o&&r.height===u.innerHeight,_=(u,E)=>{const D=new CustomEvent(m,{detail:{keyboardHeight:E?E.keyboardHeight:u.innerHeight-r.height}});u.dispatchEvent(D)},v=u=>{const E=new CustomEvent(g);u.dispatchEvent(E)},w=u=>{l=Object.assign({},r),r=M(u.visualViewport)},M=u=>({width:Math.round(u.width),height:Math.round(u.height),offsetTop:u.offsetTop,offsetLeft:u.offsetLeft,pageTop:u.pageTop,pageLeft:u.pageLeft,scale:u.scale})},972:(y,f,d)=>{d.d(f,{S:()=>g});const g={bubbles:{dur:1e3,circles:9,fn:(i,l,r)=>{const o=i*l/r-i+"ms",t=2*Math.PI*l/r;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(i,l,r)=>{const o=l/r,t=i*o-i+"ms",e=2*Math.PI*o;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(i,l)=>({r:6,style:{left:9-9*l+"px","animation-delay":-110*l+"ms"}})},lines:{dur:1e3,lines:8,fn:(i,l,r)=>({y1:14,y2:26,style:{transform:`rotate(${360/r*l+(l<r/2?180:-180)}deg)`,"animation-delay":i*l/r-i+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(i,l,r)=>({y1:12,y2:20,style:{transform:`rotate(${360/r*l+(l<r/2?180:-180)}deg)`,"animation-delay":i*l/r-i+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(i,l,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":i*l/r-i+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(i,l,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":i*l/r-i+"ms"}})}}},5613:(y,f,d)=>{d.d(f,{c:()=>i,g:()=>r,h:()=>g,o:()=>t});var m=d(8239);const g=(e,s)=>null!==s.closest(e),i=(e,s)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},s):s,r=e=>{const s={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(e).forEach(n=>s[n]=!0),s},o=/^[a-z][a-z0-9+\-.]*:/,t=function(){var e=(0,m.Z)(function*(s,n,a,c){if(null!=s&&"#"!==s[0]&&!o.test(s)){const h=document.querySelector("ion-router");if(h)return null!=n&&n.preventDefault(),h.push(s,a,c)}return!1});return function(n,a,c,h){return e.apply(this,arguments)}}()},4391:(y,f,d)=>{d.d(f,{P:()=>t});var m=d(4762),g=d(7892),i=d(9619),l=d(8522),r=d(9153);let o=(()=>{class e{constructor(n,a){this.fireAuth=n,this.popoverController=a}ngOnInit(){}loginGoogle(){this.fireAuth.signInWithPopup(new g.Z.auth.GoogleAuthProvider).then(n=>{console.log(n.user),console.log(n),console.log("Successful login!"),this.popoverController.dismiss()}).catch(n=>console.log(n))}logoutGoogle(){this.fireAuth.signOut().then(n=>{console.log("...signed out!"),this.popoverController.dismiss()}).catch(n=>console.log(n))}}return e.\u0275fac=function(n){return new(n||e)(i.Y36(l.zQ),i.Y36(r.Dh))},e.\u0275cmp=i.Xpm({type:e,selectors:[["user-menu-content"]],decls:9,vars:4,consts:[[3,"button","detail","click"],["slot","end","name","logo-google"],["name","log-out"]],template:function(n,a){1&n&&(i.TgZ(0,"ion-list"),i.TgZ(1,"ion-item",0),i.NdJ("click",function(){return a.loginGoogle()}),i.TgZ(2,"ion-label"),i._uU(3,"(Google) Sign-in"),i.qZA(),i._UZ(4,"ion-icon",1),i.qZA(),i.TgZ(5,"ion-item",0),i.NdJ("click",function(){return a.logoutGoogle()}),i.TgZ(6,"ion-label"),i._uU(7,"Sign-out"),i.qZA(),i._UZ(8,"ion-icon",2),i.qZA(),i.qZA()),2&n&&(i.xp6(1),i.Q6J("button",!0)("detail",!1),i.xp6(4),i.Q6J("button",!0)("detail",!1))},directives:[r.q_,r.Ie,r.Q$,r.gu],styles:[".account-btn[_ngcontent-%COMP%]{color:var(--ion-color-primary);margin-right:30px!important}"]}),e})(),t=(()=>{class e{constructor(n){this.popoverController=n}openMenu(n){return(0,m.mG)(this,void 0,void 0,function*(){return yield(yield this.popoverController.create({component:o,event:n,translucent:!0})).present()})}}return e.\u0275fac=function(n){return new(n||e)(i.Y36(r.Dh))},e.\u0275cmp=i.Xpm({type:e,selectors:[["user-menu"]],decls:2,vars:0,consts:[[1,"account-btn",3,"click"],["slot","icon-only","name","person-outline"]],template:function(n,a){1&n&&(i.TgZ(0,"ion-button",0),i.NdJ("click",function(h){return a.openMenu(h)}),i._UZ(1,"ion-icon",1),i.qZA())},directives:[r.YG,r.gu],styles:[".account-btn[_ngcontent-%COMP%]{color:var(--ion-color-primary);margin-right:30px!important}"]}),e})()},3634:(y,f,d)=>{d.d(f,{I:()=>r});var m=d(6019),g=d(9010),i=d(9153),l=d(9619);let r=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({imports:[[m.ez,g.u5,i.Pc]]}),o})()}}]);