import{S as W,i as Q,s as X,k as y,a as P,q as V,J as Y,l as I,m as v,h as i,c as F,r as U,K as G,n as w,p as M,D as u,b as L,C as $,o as Z}from"../chunks/index.e145b144.js";function ee(B){let m,R,h,A,p,_,d,b,C,n,x,D,S,g,j,E,O,H,e,t,o,s,r,c;return{c(){m=y("script"),h=y("script"),p=y("script"),d=y("script"),C=P(),n=y("main"),x=y("h1"),D=V("Immuebles por parametros no numericos según el año"),S=P(),g=y("div"),j=P(),E=y("h1"),O=V("Immuebles por parametros numericos según el año"),H=P(),e=y("div"),t=P(),o=y("h1"),s=V("Immuebles por todos los parametros"),r=P(),c=y("div"),this.h()},l(a){const f=Y("svelte-s6dm76",document.head);m=I(f,"SCRIPT",{src:!0});var q=v(m);q.forEach(i),h=I(f,"SCRIPT",{src:!0});var N=v(h);N.forEach(i),p=I(f,"SCRIPT",{src:!0});var z=v(p);z.forEach(i),d=I(f,"SCRIPT",{src:!0});var T=v(d);T.forEach(i),f.forEach(i),C=F(a),n=I(a,"MAIN",{});var l=v(n);x=I(l,"H1",{});var k=v(x);D=U(k,"Immuebles por parametros no numericos según el año"),k.forEach(i),S=F(l),g=I(l,"DIV",{id:!0,style:!0}),v(g).forEach(i),j=F(l),E=I(l,"H1",{});var J=v(E);O=U(J,"Immuebles por parametros numericos según el año"),J.forEach(i),H=F(l),e=I(l,"DIV",{id:!0,style:!0}),v(e).forEach(i),t=F(l),o=I(l,"H1",{});var K=v(o);s=U(K,"Immuebles por todos los parametros"),K.forEach(i),r=F(l),c=I(l,"DIV",{id:!0,style:!0}),v(c).forEach(i),l.forEach(i),this.h()},h(){G(m.src,R="https://code.highcharts.com/highcharts.js")||w(m,"src",R),G(h.src,A="https://code.highcharts.com/modules/series-label.js")||w(h,"src",A),G(p.src,_="https://code.highcharts.com/modules/exporting.js")||w(p,"src",_),G(d.src,b="https://code.highcharts.com/modules/export-data.js")||w(d,"src",b),w(g,"id","chartI"),M(g,"height","500px"),M(g,"width","80%"),w(e,"id","chartII"),M(e,"height","500px"),M(e,"width","80%"),w(c,"id","chartIII"),M(c,"height","500px"),M(c,"width","80%")},m(a,f){u(document.head,m),u(document.head,h),u(document.head,p),u(document.head,d),L(a,C,f),L(a,n,f),u(n,x),u(x,D),u(n,S),u(n,g),u(n,j),u(n,E),u(E,O),u(n,H),u(n,e),u(n,t),u(n,o),u(o,s),u(n,r),u(n,c)},p:$,i:$,o:$,d(a){i(m),i(h),i(p),i(d),a&&i(C),a&&i(n)}}}let te="https://sos2223-20.appspot.com/api/v3/immovables";function se(B){Z(async()=>{await Promise.all([R()]),C(),E(),O(),H()});let m=[];async function R(){m=await(await fetch(te)).json()}let h=new Map,A=new Map,p=new Map,_=new Map,d=new Map,b=new Map;function C(){m.forEach(e=>{const t=e.modified_date,o=e.province,s=h.get(t)||{};s[o]=(s[o]||0)+1,h.set(t,s);const r=e.nature,c=A.get(t)||{};c[r]=(c[r]||0)+1,A.set(t,c);const a=e.current_usage,f=p.get(t)||{};f[a]=(f[a]||0)+1,p.set(t,f);const q=e.id,N=_.get(t)||{};N[q]=(N[q]||0)+1,_.set(t,N);const z=e.resource,T=d.get(t)||{};T[z]=(T[z]||0)+1,d.set(t,T);const l=e.inventory_num,k=b.get(t)||{};k[l]=(k[l]||0)+1,b.set(t,k)})}function n(){const e=[];for(let t=0;t<6;t++){let o=Object.keys(Array.from(h.values())[t]);for(const s of o)if(!e.some(r=>r.name===s)){const r={name:s,data:Array.from(h.entries()).map(([c,a])=>a[s]||0)};e.push(r)}}return e}function x(){const e=[],t=Object.keys(Array.from(A.values())[0]);for(const o of t){const s={name:o,data:Array.from(A.entries()).map(([r,c])=>c[o]||0)};e.push(s)}return e}function D(){const e=[];for(let t=0;t<6;t++){const o=Object.keys(Array.from(p.values())[t]);for(const s of o)if(!e.some(r=>r.name===s)){const r={name:s,data:Array.from(p.entries()).map(([c,a])=>a[s]||0)};e.push(r)}}return e}function S(){const e=[];for(let t=0;t<6;t++){const o=Object.keys(Array.from(_.values())[t]);for(const s of o)if(!e.some(r=>r.name===s)){const r={name:s,data:Array.from(_.entries()).map(([c,a])=>a[s]||0)};e.push(r)}}return e}function g(){const e=[];for(let t=0;t<6;t++){const o=Object.keys(Array.from(d.values())[t]);for(const s of o)if(!e.some(r=>r.name===s)){const r={name:s,data:Array.from(d.entries()).map(([c,a])=>a[s]||0)};e.push(r)}}return e}function j(){const e=[];for(let t=0;t<6;t++){const o=Object.keys(Array.from(b.values())[t]);for(const s of o)if(!e.some(r=>r.name===s)){const r={name:s,data:Array.from(b.entries()).map(([c,a])=>a[s]||0)};e.push(r)}}return e}function E(){let e=[];e.push(...n()),e.push(...x()),e.push(...D()),console.log(e),Highcharts.chart("chartI",{chart:{type:"column"},title:{text:"Grafico parametros no numericos"},xAxis:{categories:Array.from(h.keys())},yAxis:{title:{text:"Cantidad"}},series:e,tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y: 2f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},plotOptions:{column:{animation:{duration:2e3,easing:"easeOutBounce"},pointPadding:.2,borderWidth:2,borderColor:"#000"}}})}function O(){let e=[];e.push(...S()),e.push(...g()),e.push(...j()),Highcharts.chart("chartII",{chart:{type:"column"},title:{text:"Grafico parametros numericos"},xAxis:{categories:Array.from(_.keys())},yAxis:{title:{text:"Cantidad"}},series:e})}function H(){let e=[];e.push(...n()),e.push(...x()),e.push(...D()),e.push(...S()),e.push(...g()),e.push(...j()),Highcharts.chart("chartIII",{chart:{type:"column"},title:{text:"Grafico todos los parametros"},xAxis:{categories:Array.from(h.keys())},yAxis:{title:{text:"Cantidad"}},series:e})}return C(),[]}class oe extends W{constructor(m){super(),Q(this,m,se,ee,X,{})}}export{oe as default};