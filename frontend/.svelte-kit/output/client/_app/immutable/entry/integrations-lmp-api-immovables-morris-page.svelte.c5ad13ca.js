import{S as D,i as M,s as T,k as p,a as P,q as R,J as K,l as f,m as _,h as s,c as k,r as L,n as v,K as I,p as N,D as m,b as $,C as E,o as O}from"../chunks/index.e145b144.js";function w(g){let o,n,b,r,j,i,c,a,t,e,l,y,d;return{c(){o=p("link"),n=p("script"),r=p("script"),i=p("script"),a=P(),t=p("main"),e=p("h1"),l=R("Immuebles por Provincia según el año"),y=P(),d=p("div"),this.h()},l(u){const h=K("svelte-du5ezb",document.head);o=f(h,"LINK",{rel:!0,href:!0}),n=f(h,"SCRIPT",{src:!0});var q=_(n);q.forEach(s),r=f(h,"SCRIPT",{src:!0});var A=_(r);A.forEach(s),i=f(h,"SCRIPT",{src:!0});var S=_(i);S.forEach(s),h.forEach(s),a=k(u),t=f(u,"MAIN",{});var x=_(t);e=f(x,"H1",{});var C=_(e);l=L(C,"Immuebles por Provincia según el año"),C.forEach(s),y=k(x),d=f(x,"DIV",{id:!0,style:!0}),_(d).forEach(s),x.forEach(s),this.h()},h(){v(o,"rel","stylesheet"),v(o,"href","//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css"),I(n.src,b="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js")||v(n,"src",b),I(r.src,j="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js")||v(r,"src",j),I(i.src,c="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js")||v(i,"src",c),v(d,"id","chartI"),N(d,"height","250px")},m(u,h){m(document.head,o),m(document.head,n),m(document.head,r),m(document.head,i),$(u,a,h),$(u,t,h),m(t,e),m(e,l),m(t,y),m(t,d)},p:E,i:E,o:E,d(u){s(o),s(n),s(r),s(i),u&&s(a),u&&s(t)}}}function z(g){let o="/api/v3/immovables",n=[];async function b(){n=await(await fetch(o)).json()}let r=new Map;function j(){n.forEach(c=>{const a=c.modified_date.split("-")[0],t=c.province,e=r.get(a)||{};e[t]=(e[t]||0)+1,r.set(a,e)})}function i(){Morris.Bar({element:"chartI",data:Array.from(r.entries()).sort(([c],[a])=>c.localeCompare(a)).map(([c,a])=>{const t=Object.values(a).reduce((e,l)=>e+l,0);return{year:c,total:t,countI:a}}),xkey:"year",ykeys:["total"],labels:["Total"],xLabelAngle:60,hoverCallback(c,a,t,e){let l=`<div>${e.year}: ${e.total}</div>`;return Object.entries(e.countI).forEach(([y,d])=>{l+=`<div>${y}: ${d}</div>`}),l}})}return O(()=>{b().then(()=>{j(),i()})}),j(),[]}class H extends D{constructor(o){super(),M(this,o,z,w,T,{})}}export{H as default};