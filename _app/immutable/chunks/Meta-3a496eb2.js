import{S as F,i as N,s as S,e as _,c as M,b as n,g as k,d as s,l as y,a4 as j,I as b,E}from"./index-d77dc8df.js";function v(i){let e;return{c(){e=_("meta"),this.h()},l(t){e=M(t,"META",{name:!0,content:!0}),this.h()},h(){n(e,"name","og:image"),n(e,"content","/images/logo/icon.png")},m(t,m){k(t,e,m)},p:E,d(t){t&&s(e)}}}function w(i){let e;return{c(){e=_("meta"),this.h()},l(t){e=M(t,"META",{name:!0,content:!0}),this.h()},h(){n(e,"name","og:image"),n(e,"content",i[4])},m(t,m){k(t,e,m)},p(t,m){m&16&&n(e,"content",t[4])},d(t){t&&s(e)}}}function q(i){let e;return{c(){e=_("meta"),this.h()},l(t){e=M(t,"META",{name:!0,content:!0}),this.h()},h(){n(e,"name","robots"),n(e,"content","noindex")},m(t,m){k(t,e,m)},d(t){t&&s(e)}}}function B(i){let e,t,m,d,g,f,h,c,a;document.title=e=i[0]||(i[1]?i[1]+" - Modrinth":"Modrinth");function A(o,l){return o[4]?w:v}let T=A(i),u=T(i),r=i[3]&&q();return{c(){t=_("meta"),d=_("meta"),f=_("meta"),h=_("meta"),u.c(),c=_("meta"),r&&r.c(),a=y(),this.h()},l(o){const l=j('[data-svelte="svelte-njyf97"]',document.head);t=M(l,"META",{name:!0,content:!0}),d=M(l,"META",{name:!0,content:!0}),f=M(l,"META",{name:!0,content:!0}),h=M(l,"META",{name:!0,content:!0}),u.l(l),c=M(l,"META",{name:!0,content:!0}),r&&r.l(l),a=y(),l.forEach(s),this.h()},h(){n(t,"name","og:title"),n(t,"content",m=i[0]||i[1]||"Modrinth"),n(d,"name","apple-mobile-web-app-title"),n(d,"content",g=i[0]||i[1]||"Modrinth"),n(f,"name","og:description"),n(f,"content",i[2]),n(h,"name","description"),n(h,"content",i[2]),n(c,"name","theme-color"),n(c,"content",i[5])},m(o,l){b(document.head,t),b(document.head,d),b(document.head,f),b(document.head,h),u.m(document.head,null),b(document.head,c),r&&r.m(document.head,null),b(document.head,a)},p(o,[l]){l&3&&e!==(e=o[0]||(o[1]?o[1]+" - Modrinth":"Modrinth"))&&(document.title=e),l&3&&m!==(m=o[0]||o[1]||"Modrinth")&&n(t,"content",m),l&3&&g!==(g=o[0]||o[1]||"Modrinth")&&n(d,"content",g),l&4&&n(f,"content",o[2]),l&4&&n(h,"content",o[2]),T===(T=A(o))&&u?u.p(o,l):(u.d(1),u=T(o),u&&(u.c(),u.m(c.parentNode,c))),l&32&&n(c,"content",o[5]),o[3]?r||(r=q(),r.c(),r.m(a.parentNode,a)):r&&(r.d(1),r=null)},i:E,o:E,d(o){s(t),s(d),s(f),s(h),u.d(o),s(c),r&&r.d(o),s(a)}}}function C(i,e,t){let{fullTitle:m=""}=e,{title:d=""}=e,{description:g="Modrinth is an open-source mod distribution platform. Modrinth is modern, easy to use, and built for modders. Modrinth currently supports Minecraft, including Forge and Fabric mod loaders."}=e,{noindex:f=!1}=e,{image:h=""}=e,{color:c="#18B572"}=e;return i.$$set=a=>{"fullTitle"in a&&t(0,m=a.fullTitle),"title"in a&&t(1,d=a.title),"description"in a&&t(2,g=a.description),"noindex"in a&&t(3,f=a.noindex),"image"in a&&t(4,h=a.image),"color"in a&&t(5,c=a.color)},[m,d,g,f,h,c]}class z extends F{constructor(e){super(),N(this,e,C,B,S,{fullTitle:0,title:1,description:2,noindex:3,image:4,color:5})}}export{z as M};
