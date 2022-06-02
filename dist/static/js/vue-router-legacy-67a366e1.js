System.register(["./@vue-legacy-2d7bd477.js"],(function(e){"use strict";var t,n,r,o,a,s,c,i,l,u,f;return{setters:[function(e){t=e.M,n=e.u,r=e.c,o=e.D,a=e.b,s=e.O,c=e.e,i=e.P,l=e.p,u=e.r,f=e.d}],execute:function(){e({a:function(e){const a=function(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function a(e,n,r){const o=!r,c=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ee(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);c.aliasOf=r&&r.record;const l=re(t,e),u=[c];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(w({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=J(t,n,l),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),o&&e.name&&!te(f)&&s(e.name)),"children"in c){const e=c.children;for(let t=0;t<e.length;t++)a(e[t],f,r&&r.children[t])}r=r||f,i(f)}return p?()=>{s(p)}:A}function s(e){if(U(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function c(){return n}function i(e){let t=0;for(;t<n.length&&Y(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!te(e)&&r.set(e.record.name,e)}function l(e,t){let o,a,s,c={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw V(1,{location:e});s=o.record.name,c=w(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),a=o.stringify(c)}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(c=o.parse(a),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw V(1,{location:e,currentLocation:t});s=o.record.name,c=w({},t.params,e.params),a=o.stringify(c)}const i=[];let l=o;for(;l;)i.unshift(l.record),l=l.parent;return{name:s,path:a,params:c,matched:i,meta:ne(i)}}return t=re({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>a(e))),{addRoute:a,resolve:l,removeRoute:s,getRoutes:c,getRecordMatcher:o}}(e.routes,e),c=e.parseQuery||Ae,i=e.stringifyQuery||Re,l=e.history,u=Oe(),f=Oe(),p=Oe(),h=t(D);let d=D;b&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const m=E.bind(null,(e=>""+e)),R=E.bind(null,we),O=E.bind(null,Ee);function C(e,t){if(t=w({},t||h.value),"string"==typeof e){const n=k(c,e,t.path),r=a.resolve({path:n.path},t),o=l.createHref(n.fullPath);return w(n,r,{params:O(r.params),hash:Ee(n.hash),redirectedFrom:void 0,href:o})}let n;if("path"in e)n=w({},e,{path:k(c,e.path,t.path).path});else{const r=w({},e.params);for(const e in r)null==r[e]&&delete r[e];n=w({},e,{params:R(e.params)}),t.params=R(t.params)}const r=a.resolve(n,t),o=e.hash||"";r.params=m(O(r.params));const s=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(i,w({},e,{hash:(u=o,ye(u).replace(de,"{").replace(ge,"}").replace(pe,"^")),path:r.path}));var u;const f=l.createHref(s);return w({fullPath:s,hash:o,query:i===Re?ke(e.query):e.query||{}},r,{redirectedFrom:void 0,href:f})}function $(e){return"string"==typeof e?k(c,e,h.value.path):w({},e)}function j(e,t){if(d!==e)return V(8,{from:t,to:e})}function q(e){return G(e)}function L(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=$(r):{path:r},r.params={}),w({query:e.query,hash:e.hash,params:e.params},r)}}function G(e,t){const n=d=C(e),r=h.value,o=e.state,a=e.force,s=!0===e.replace,c=L(n);if(c)return G(w($(c),{state:o,force:a,replace:s}),t||n);const l=n;let u;return l.redirectedFrom=t,!a&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&P(t.matched[r],n.matched[o])&&x(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(i,r,n)&&(u=V(16,{to:l,from:r}),ae(r,r,!0,!1)),(u?Promise.resolve(u):T(l,r)).catch((e=>z(e)?e:Z(e,l,r))).then((e=>{if(e){if(z(e,2))return G(w($(e.to),{state:o,force:a,replace:s}),t||l)}else e=W(l,r,!0,s,o);return F(l,r,e),e}))}function I(e,t){const n=j(e,t);return n?Promise.reject(n):Promise.resolve()}function T(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let s=0;s<a;s++){const a=t.matched[s];a&&(e.matched.find((e=>P(e,a)))?r.push(a):n.push(a));const c=e.matched[s];c&&(t.matched.find((e=>P(e,c)))||o.push(c))}return[n,r,o]}(e,t);n=xe(r.reverse(),"beforeRouteLeave",e,t);for(const c of r)c.leaveGuards.forEach((r=>{n.push(Pe(r,e,t))}));const s=I.bind(null,e,t);return n.push(s),_e(n).then((()=>{n=[];for(const r of u.list())n.push(Pe(r,e,t));return n.push(s),_e(n)})).then((()=>{n=xe(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Pe(r,e,t))}));return n.push(s),_e(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Pe(o,e,t));else n.push(Pe(r.beforeEnter,e,t));return n.push(s),_e(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=xe(a,"beforeRouteEnter",e,t),n.push(s),_e(n)))).then((()=>{n=[];for(const r of f.list())n.push(Pe(r,e,t));return n.push(s),_e(n)})).catch((e=>z(e,8)?e:Promise.reject(e)))}function F(e,t,n){for(const r of p.list())r(e,t,n)}function W(e,t,n,r,o){const a=j(e,t);if(a)return a;const s=t===D,c=b?history.state:{};n&&(r||s?l.replace(e.fullPath,w({scroll:s&&c&&c.scroll},o)):l.push(e.fullPath,o)),h.value=e,ae(e,t,n,s),oe()}let K;function H(){K=l.listen(((e,t,n)=>{const r=C(e),o=L(r);if(o)return void G(w(o,{replace:!0}),r).catch(A);d=r;const a=h.value;var s,c;b&&(s=B(a.fullPath,n.delta),c=_(),M.set(s,c)),T(r,a).catch((e=>z(e,12)?e:z(e,2)?(G(e.to,r).then((e=>{z(e,20)&&!n.delta&&n.type===S.pop&&l.go(-1,!1)})).catch(A),Promise.reject()):(n.delta&&l.go(-n.delta,!1),Z(e,r,a)))).then((e=>{(e=e||W(r,a,!1))&&(n.delta?l.go(-n.delta,!1):n.type===S.pop&&z(e,20)&&l.go(-1,!1)),F(r,a,e)})).catch(A)}))}let Q,X=Oe(),N=Oe();function Z(e,t,n){oe(e);const r=N.list();return r.length&&r.forEach((r=>r(e,t,n))),Promise.reject(e)}function oe(e){Q||(Q=!0,H(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset())}function ae(t,n,r,o){const{scrollBehavior:a}=e;if(!b||!a)return Promise.resolve();const c=!r&&function(e){const t=M.get(e);return M.delete(e),t}(B(t.fullPath,0))||(o||!r)&&history.state&&history.state.scroll||null;return s().then((()=>a(t,n,c))).then((e=>e&&function(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}(e))).catch((e=>Z(e,t,n)))}const se=e=>l.go(e);let ce;const ie=new Set;return{currentRoute:h,addRoute:function(e,t){let n,r;return U(e)?(n=a.getRecordMatcher(e),r=t):r=e,a.addRoute(r,n)},removeRoute:function(e){const t=a.getRecordMatcher(e);t&&a.removeRoute(t)},hasRoute:function(e){return!!a.getRecordMatcher(e)},getRoutes:function(){return a.getRoutes().map((e=>e.record))},resolve:C,options:e,push:q,replace:function(e){return q(w($(e),{replace:!0}))},go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:u.add,beforeResolve:f.add,afterEach:p.add,onError:N.add,isReady:function(){return Q&&h.value!==D?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))},install(e){e.component("RouterLink",$e),e.component("RouterView",Le),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>n(h)}),b&&!ce&&h.value===D&&(ce=!0,q(l.location).catch((e=>{})));const t={};for(const n in D)t[n]=r((()=>h.value[n]));e.provide(g,this),e.provide(v,o(t)),e.provide(y,h);const a=e.unmount;ie.add(e),e.unmount=function(){ie.delete(e),ie.size<1&&(d=D,K&&K(),h.value=D,ce=!1,Q=!1),a()}}}},c:function(e){const t=function(e){const{history:t,location:n}=window,r={value:I(e,n)},o={value:t.state};function a(r,a,s){const c=e.indexOf("#"),i=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+r:G()+e+r;try{t[s?"replaceState":"pushState"](a,"",i),o.value=a}catch(l){n[s?"replace":"assign"](i)}}function s(e,n){a(e,w({},t.state,T(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}function c(e,n){const s=w({},o.value,t.state,{forward:e,scroll:_()});a(s.current,s,!0),a(e,w({},T(r.value,e,null),{position:s.position+1},n),!1),r.value=e}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:c,replace:s}}(e=function(e){if(!e)if(b){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(R,"")}(e)),n=function(e,t,n,r){let o=[],a=[],s=null;const c=({state:a})=>{const c=I(e,location),i=n.value,l=t.value;let u=0;if(a){if(n.value=c,t.value=a,s&&s===i)return void(s=null);u=l?a.position-l.position:0}else r(c);o.forEach((e=>{e(n.value,i,{delta:u,type:S.pop,direction:u?u>0?j.forward:j.back:j.unknown})}))};function i(){s=n.value}function l(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(w({},e.state,{scroll:_()}),"")}function f(){for(const e of a)e();a=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u),{pauseListeners:i,listen:l,destroy:f}}(e,t.state,t.location,t.replace),r=w({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:L.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r},u:function(){return a(g)}});
/*!
        * vue-router v4.0.12
        * (c) 2021 Eduardo San Martin Morote
        * @license MIT
        */
const p="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,h=e=>p?Symbol(e):"_vr_"+e,d=h("rvlm"),m=h("rvd"),g=h("r"),v=h("rl"),y=h("rvl"),b="undefined"!=typeof window,w=Object.assign;function E(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const A=()=>{},R=/\/$/;function k(e,t,n="/"){let r,o={},a="",s="";const c=t.indexOf("?"),i=t.indexOf("#",c>-1?c:0);return c>-1&&(r=t.slice(0,c),a=t.slice(c+1,i>-1?i:t.length),o=e(a)),i>-1&&(r=r||t.slice(0,i),s=t.slice(i,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,s=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],1!==s&&"."!==a){if(".."!==a)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+s,path:r,query:o,hash:s}}function O(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function P(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function x(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!C(e[n],t[n]))return!1;return!0}function C(e,t){return Array.isArray(e)?$(e,t):Array.isArray(t)?$(t,e):e===t}function $(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var S,j;!function(e){e.pop="pop",e.push="push"}(S||(S={})),function(e){e.back="back",e.forward="forward",e.unknown=""}(j||(j={}));const q=/^[^#]+#/;function L(e,t){return e.replace(q,"#")+t}const _=()=>({left:window.pageXOffset,top:window.pageYOffset});function B(e,t){return(history.state?history.state.position-t:-1)+e}const M=new Map;let G=()=>location.protocol+"//"+location.host;function I(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),O(n,"")}return O(n,e)+r+o}function T(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?_():null}}function U(e){return"string"==typeof e||"symbol"==typeof e}const D={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},F=h("nf");var W;function V(e,t){return w(new Error,{type:e,[F]:!0},t)}function z(e,t){return e instanceof Error&&F in e&&(null==t||!!(e.type&t))}!function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"}(W||(W={}));const K="[^/]+?",H={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function X(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Y(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=X(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const N={type:0,value:""},Z=/[a-zA-Z0-9_]/;function J(e,t,n){const r=function(e,t){const n=w({},H,t),r=[];let o=n.start?"^":"";const a=[];for(const i of e){const e=i.length?[]:[90];n.strict&&!i.length&&(o+="/");for(let t=0;t<i.length;t++){const r=i[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(Q,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;a.push({name:e,repeatable:n,optional:l});const f=u||K;if(f!==K){s+=10;try{new RegExp(`(${f})`)}catch(c){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+c.message)}}let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(p=l&&i.length<2?`(?:/${p})`:"/"+p),l&&(p+="?"),o+=p,s+=20,l&&(s+=-8),n&&(s+=-20),".*"===f&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");return{re:s,score:r,keys:a,parse:function(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:s,optional:c}=e,i=a in t?t[a]:"";if(Array.isArray(i)&&!s)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(i)?i.join("/"):i;if(!l){if(!c)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[N]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let a;function s(){a&&o.push(a),a=[]}let c,i=0,l="",u="";function f(){l&&(0===n?a.push({type:0,value:l}):1===n||2===n||3===n?(a.length>1&&("*"===c||"+"===c)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:"*"===c||"+"===c,optional:"*"===c||"?"===c})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;i<e.length;)if(c=e[i++],"\\"!==c||2===n)switch(n){case 0:"/"===c?(l&&f(),s()):":"===c?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===c?n=2:Z.test(c)?p():(f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&i--);break;case 2:")"===c?"\\"==u[u.length-1]?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&i--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),s(),o}(e.path),n),o=w(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function ee(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function te(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ne(e){return e.reduce(((e,t)=>w(e,t.meta)),{})}function re(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const oe=/#/g,ae=/&/g,se=/\//g,ce=/=/g,ie=/\?/g,le=/\+/g,ue=/%5B/g,fe=/%5D/g,pe=/%5E/g,he=/%60/g,de=/%7B/g,me=/%7C/g,ge=/%7D/g,ve=/%20/g;function ye(e){return encodeURI(""+e).replace(me,"|").replace(ue,"[").replace(fe,"]")}function be(e){return ye(e).replace(le,"%2B").replace(ve,"+").replace(oe,"%23").replace(ae,"%26").replace(he,"`").replace(de,"{").replace(ge,"}").replace(pe,"^")}function we(e){return null==e?"":function(e){return ye(e).replace(oe,"%23").replace(ie,"%3F")}(e).replace(se,"%2F")}function Ee(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ae(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(le," "),o=e.indexOf("="),a=Ee(o<0?e:e.slice(0,o)),s=o<0?null:Ee(e.slice(o+1));if(a in t){let e=t[a];Array.isArray(e)||(e=t[a]=[e]),e.push(s)}else t[a]=s}return t}function Re(e){let t="";for(let n in e){const r=e[n];(n=be(n).replace(ce,"%3D"),null!=r)?(Array.isArray(r)?r.map((e=>e&&be(e))):[r&&be(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})):void 0!==r&&(t+=(t.length?"&":"")+n)}return t}function ke(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function Oe(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function Pe(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((s,c)=>{const i=e=>{var i;!1===e?c(V(4,{from:n,to:t})):e instanceof Error?c(e):"string"==typeof(i=e)||i&&"object"==typeof i?c(V(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),s())},l=e.call(r&&r.instances[o],t,n,i);let u=Promise.resolve(l);e.length<3&&(u=u.then(i)),u.catch((e=>c(e)))}))}function xe(e,t,n,r){const o=[];for(const s of e)for(const e in s.components){let c=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(a=c)||"displayName"in a||"props"in a||"__vccOpts"in a){const a=(c.__vccOpts||c)[t];a&&o.push(Pe(a,n,r,s,e))}else{let a=c();o.push((()=>a.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=(c=o).__esModule||p&&"Module"===c[Symbol.toStringTag]?o.default:o;var c;s.components[e]=a;const i=(a.__vccOpts||a)[t];return i&&Pe(i,n,r,s,e)()}))))}}var a;return o}function Ce(e){const t=a(g),o=a(v),s=r((()=>t.resolve(n(e.to)))),c=r((()=>{const{matched:e}=s.value,{length:t}=e,n=e[t-1],r=o.matched;if(!n||!r.length)return-1;const a=r.findIndex(P.bind(null,n));if(a>-1)return a;const c=Se(e[t-2]);return t>1&&Se(n)===c&&r[r.length-1].path!==c?r.findIndex(P.bind(null,e[t-2])):a})),i=r((()=>c.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(o.params,s.value.params))),l=r((()=>c.value>-1&&c.value===o.matched.length-1&&x(o.params,s.value.params)));return{route:s,href:r((()=>s.value.href)),isActive:i,isExactActive:l,navigate:function(r={}){return function(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}(r)?t[n(e.replace)?"replace":"push"](n(e.to)).catch(A):Promise.resolve()}}}const $e=c({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ce,setup(e,{slots:t}){const n=o(Ce(e)),{options:s}=a(g),c=r((()=>({[je(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[je(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:i("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:c.value},r)}}});function Se(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const je=(e,t,n)=>null!=e?e:null!=t?t:n;function qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Le=c({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const o=a(y),s=r((()=>e.route||o.value)),c=a(m,0),p=r((()=>s.value.matched[c]));l(m,c+1),l(d,p),l(y,s);const h=u();return f((()=>[h.value,p.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&P(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=s.value,o=p.value,a=o&&o.components[e.name],c=e.name;if(!a)return qe(n.default,{Component:a,route:r});const l=o.props[e.name],u=l?!0===l?r.params:"function"==typeof l?l(r):l:null,f=i(a,w({},u,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[c]=null)},ref:h}));return qe(n.default,{Component:f,route:r})||f}}});function _e(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}}}}));