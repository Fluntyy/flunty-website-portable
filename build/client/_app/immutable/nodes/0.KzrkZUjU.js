import{s as y,n as p,f as I,o as B,a as A,u as D,g as F,b as G}from"../chunks/8.CFjWnMlY.js";import{S as M,i as z,e as g,a as h,o as K,g as i,k as _,d as f,s as k,h as O,b as w,u as U,j as v,w as V,c as E,f as L,m as N,t as $,l as b,n as S}from"../chunks/index.D7oZ8J2Q.js";import{o as q,f as C}from"../chunks/stores.DC5Uw8kV.js";const J=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function P(c){let t,l='<div class="background svelte-3zrbc7"><img src="mountain/4.svg" alt="" class="mountain svelte-3zrbc7"/> <img src="mountain/3.svg" alt="" class="mountain svelte-3zrbc7"/> <img src="mountain/2.svg" alt="" class="mountain svelte-3zrbc7"/> <img src="mountain/1.svg" alt="" class="mountain svelte-3zrbc7"/></div>';return{c(){t=g("div"),t.innerHTML=l,this.h()},l(n){t=h(n,"DIV",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-tnoq1e"&&(t.innerHTML=l),this.h()},h(){i(t,"class","wrapper svelte-3zrbc7")},m(n,s){_(n,t,s)},p,i:p,o:p,d(n){n&&f(t)}}}class Q extends M{constructor(t){super(),z(this,t,null,P,y,{})}}const{document:T}=J;function R(c){let t,l,n,s,a,u,r,e;return{c(){t=g("link"),l=g("meta"),n=k(),s=g("button"),a=g("img"),this.h()},l(o){const m=O("svelte-kdh8cs",T.head);t=h(m,"LINK",{rel:!0,href:!0}),l=h(m,"META",{name:!0,content:!0}),m.forEach(f),n=w(o),s=h(o,"BUTTON",{type:!0,class:!0,tabindex:!0});var d=U(s);a=h(d,"IMG",{src:!0,alt:!0,class:!0,draggable:!0}),d.forEach(f),this.h()},h(){i(t,"rel","icon"),i(t,"href",c[0]),i(l,"name","theme-color"),i(l,"content",c[2]),I(a.src,u=c[1])||i(a,"src",u),i(a,"alt","Toggle Theme"),i(a,"class","theme-icon svelte-1ovoe7i"),i(a,"draggable","false"),i(s,"type","button"),i(s,"class","theme-button svelte-1ovoe7i"),i(s,"tabindex","0")},m(o,m){v(T.head,t),v(T.head,l),_(o,n,m),_(o,s,m),v(s,a),r||(e=V(s,"click",c[3]),r=!0)},p(o,[m]){m&1&&i(t,"href",o[0]),m&4&&i(l,"content",o[2]),m&2&&!I(a.src,u=o[1])&&i(a,"src",u)},i:p,o:p,d(o){o&&(f(n),f(s)),f(t),f(l),r=!1,e()}}}function W(c,t,l){let n="/favicon.svg",s="light",a="/moon.svg",u="#5e7c92";const r=()=>{s=s==="dark"?"light":"dark",document.documentElement.className=s,H(),m(),d(),o()},e=()=>{const j=window.matchMedia("(prefers-color-scheme: dark)").matches;s=localStorage.getItem("theme")||(j?"dark":"light"),document.documentElement.className=s,m(),d(),o()},o=()=>{l(2,u=s==="dark"?"#1a2730":"#5e7c92")},m=()=>{l(1,a=s==="dark"?"/sun.svg":"/moon.svg")},d=()=>{l(0,n=s==="dark"?"/favicon_dark.svg":"/favicon.svg")},H=()=>{localStorage.setItem("theme",s)};return B(e),[n,a,u,r]}class X extends M{constructor(t){super(),z(this,t,W,R,y,{})}}function Y(c){let t,l,n,s,a;t=new Q({}),n=new X({});const u=c[1].default,r=A(u,c,c[0],null);return{c(){E(t.$$.fragment),l=k(),E(n.$$.fragment),s=k(),r&&r.c()},l(e){L(t.$$.fragment,e),l=w(e),L(n.$$.fragment,e),s=w(e),r&&r.l(e)},m(e,o){N(t,e,o),_(e,l,o),N(n,e,o),_(e,s,o),r&&r.m(e,o),a=!0},p(e,[o]){r&&r.p&&(!a||o&1)&&D(r,u,e,e[0],a?G(u,e[0],o,null):F(e[0]),null)},i(e){a||($(t.$$.fragment,e),$(n.$$.fragment,e),$(r,e),a=!0)},o(e){b(t.$$.fragment,e),b(n.$$.fragment,e),b(r,e),a=!1},d(e){e&&(f(l),f(s)),S(t,e),S(n,e),r&&r.d(e)}}}function Z(c,t,l){let{$$slots:n={},$$scope:s}=t;return B(()=>{console.log(q),C.set(1),q.set(0),setTimeout(()=>{C.set(0)},2e3)}),c.$$set=a=>{"$$scope"in a&&l(0,s=a.$$scope)},[s,n]}class ne extends M{constructor(t){super(),z(this,t,Z,Y,y,{})}}export{ne as component};
