import{o as p,e as _,f as h,g,j as c,k as y,F as v,l as b}from"./@vue-dc312f93.js";import{u as P,c as k,a as L}from"./vue-router-dcdbd41f.js";import{u as C,c as E}from"./vuex-6ad2f1f3.js";import{a}from"./axios-0cf4e519.js";function B(){import("data:text/javascript,")}const S=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};S();var w="/aProject/assets/logo.03d6d6da.png";const O=c("div",null,[c("img",{alt:"Vue logo",src:w})],-1),j={setup(t){const r=P(),i=C();p(()=>{});function s(){r.push({path:"/foo"})}function e(){r.push({path:"/bar"})}function o(){i.commit("add")}function n(){i.commit("min")}function u(){i.dispatch("change",99)}return(l,V)=>{const f=_("router-view");return h(),g(v,null,[O,c("button",{onClick:s},"to foo"),c("button",{onClick:e},"to bar"),y(f),c("div",null,[c("button",{onClick:o},"add"),c("button",{onClick:n},"min"),c("button",{onClick:u},"change")])],64)}}},R="modulepreload",m={},x="/aProject/",d=function(r,i){return!i||i.length===0?r():Promise.all(i.map(s=>{if(s=`${x}${s}`,s in m)return;m[s]=!0;const e=s.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":R,e||(n.as="script",n.crossOrigin=""),n.href=s,document.head.appendChild(n),e)return new Promise((u,l)=>{n.addEventListener("load",u),n.addEventListener("error",l)})})).then(()=>r())},A=k("/aProject/"),F=L({history:A,routes:[{path:"/"},{path:"/foo",component:()=>d(()=>import("./foo-428f1b72.js"),["static/js/foo-428f1b72.js","static/js/vuex-6ad2f1f3.js","static/js/@vue-dc312f93.js"])},{path:"/bar",component:()=>d(()=>import("./bar-db0f2e2b.js"),["static/js/bar-db0f2e2b.js","static/js/vuex-6ad2f1f3.js","static/js/@vue-dc312f93.js"])}]});var N=E({state:{test:0},mutations:{add(t){t.test++},min(t){t.test--},set99(t,r){t.test=r}},actions:{change(t,r){setTimeout(()=>{t.commit("set99",r)},1500)}}});a.defaults.baseURL="";a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8";a.defaults.timeout=1e4;a.interceptors.request.use(t=>t,t=>Promise.reject(t));a.interceptors.response.use(t=>t.status==200?Promise.resolve(t):Promise.reject(t),t=>{console.log(t)});const T=b(j);T.use(F).use(N).mount("#app");export{B as __vite_legacy_guard};
