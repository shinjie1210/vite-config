import{G as h,H as g,o as y,f as v,q as a,k as m,l as b,F as P,U as E,V as k}from"./@vue-a2208f88.js";import{E as C,a as L}from"./element-plus-37f4e405.js";import{u as w,c as S,a as x}from"./vue-router-588713b2.js";import{u as O,c as V}from"./vuex-c2d37e78.js";import{a as c}from"./axios-0cf4e519.js";import"./@element-plus-25f3c584.js";import"./@ctrl-eb0b847c.js";import"./lodash-es-36d0cce0.js";import"./@vueuse-131add93.js";function D(){import("data:text/javascript,")}const N=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};N();var R="/aProject/assets/logo.03d6d6da.png";const T=a("div",null,[a("img",{alt:"Vue logo",src:R})],-1),j=E("1111"),A={setup(t){const r=w(),i=O();h(()=>{C({message:"elplus\u5F15\u5165\u6210\u529F",grouping:!0,type:"success"})});function s(){r.push({path:"/foo"})}function e(){r.push({path:"/bar"})}function o(){i.commit("add")}function n(){i.commit("min")}function u(){i.dispatch("change",99)}return(l,U)=>{const f=g("router-view"),_=L;return y(),v(P,null,[T,a("button",{onClick:s},"to foo"),a("button",{onClick:e},"to bar"),m(f),a("div",null,[a("button",{onClick:o},"add"),a("button",{onClick:n},"min"),a("button",{onClick:u},"change")]),m(_,null,{default:b(()=>[j]),_:1})],64)}}},B="modulepreload",p={},F="/aProject/",d=function(r,i){return!i||i.length===0?r():Promise.all(i.map(s=>{if(s=`${F}${s}`,s in p)return;p[s]=!0;const e=s.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":B,e||(n.as="script",n.crossOrigin=""),n.href=s,document.head.appendChild(n),e)return new Promise((u,l)=>{n.addEventListener("load",u),n.addEventListener("error",l)})})).then(()=>r())},q=S("/aProject/"),$=x({history:q,routes:[{path:"/"},{path:"/foo",component:()=>d(()=>import("./foo-13831f53.js"),["static/js/foo-13831f53.js","static/js/vuex-c2d37e78.js","static/js/@vue-a2208f88.js"])},{path:"/bar",component:()=>d(()=>import("./bar-6b22f2a5.js"),["static/js/bar-6b22f2a5.js","static/js/vuex-c2d37e78.js","static/js/@vue-a2208f88.js"])}]});var H=V({state:{test:0},mutations:{add(t){t.test++},min(t){t.test--},set99(t,r){t.test=r}},actions:{change(t,r){setTimeout(()=>{t.commit("set99",r)},1500)}}});c.defaults.baseURL="";c.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8";c.defaults.timeout=1e4;c.interceptors.request.use(t=>t,t=>Promise.reject(t));c.interceptors.response.use(t=>t.status==200?Promise.resolve(t):Promise.reject(t),t=>{console.log(t)});const I=k(A);I.use($).use(H).mount("#app");export{D as __vite_legacy_guard};