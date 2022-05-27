import{s as v}from"./api-22161ac7.js";import{p as l}from"./app-8b88eb34.js";import{aa as c,S as g,i as p,s as _,C as n,_ as f,$ as w,a as b,d as u,a0 as d,g as x,z as M,E as h,a1 as m}from"./index-d77dc8df.js";function B(a,e){l.set([{title:`Report ${a}`,body:"Modding should be safe for everyone, so we take abuse and malicious intent seriously at Modrinth. We want to hear about harmful behavior on the site that violates our [ToS](/legal/terms) and [Rules](/legal/rules). Rest assured, we\u2019ll keep your identifying information private.",type:{report:!0},button:{label:`Report ${a}`,click:async({report_type:r,body:s})=>{await v("POST","report",{report_type:r,body:s,item_id:e,item_type:a})}}},...c(l)])}function k(a){let e,r='<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 0 1 2-2h6.5l1 1H21l-3 6l3 6h-8.5l-1-1H5a2 2 0 0 0-2 2Zm9-13.5V9"/>',s=[{width:"1.2em"},{height:"1.2em"},{preserveAspectRatio:"xMidYMid meet"},{viewBox:"0 0 24 24"},a[0]],o={};for(let t=0;t<s.length;t+=1)o=n(o,s[t]);return{c(){e=f("svg"),this.h()},l(t){e=w(t,"svg",{width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var i=b(e);i.forEach(u),this.h()},h(){d(e,o)},m(t,i){x(t,e,i),e.innerHTML=r},p(t,[i]){d(e,o=M(s,[{width:"1.2em"},{height:"1.2em"},{preserveAspectRatio:"xMidYMid meet"},{viewBox:"0 0 24 24"},i&1&&t[0]]))},i:h,o:h,d(t){t&&u(e)}}}function y(a,e,r){return a.$$set=s=>{r(0,e=n(n({},e),m(s)))},e=m(e),[e]}class C extends g{constructor(e){super(),p(this,e,y,k,_,{})}}export{C as F,B as r};
