import{S as Z,i as ee,s as te,k as E,a as j,q as g,J as se,l as b,m as I,h as o,c as w,r as v,K as ae,n as Q,p as $,D as l,b as k,C as U,o as le,u as O}from"../chunks/index.e145b144.js";function W(f){let n,d,m,c,e,u,h,y;return{c(){n=E("p"),d=g("Result:"),m=g(f[1]),c=j(),e=E("pre"),u=g(`                
                `),h=g(f[0]),y=g(`
            `)},l(t){n=b(t,"P",{});var a=I(n);d=v(a,"Result:"),m=v(a,f[1]),a.forEach(o),c=w(t),e=b(t,"PRE",{});var p=I(e);u=v(p,`                
                `),h=v(p,f[0]),y=v(p,`
            `),p.forEach(o)},m(t,a){k(t,n,a),l(n,d),l(n,m),k(t,c,a),k(t,e,a),l(e,u),l(e,h),l(e,y)},p(t,a){a&2&&O(m,t[1]),a&1&&O(h,t[0])},d(t){t&&o(n),t&&o(c),t&&o(e)}}}function X(f){let n,d,m,c,e,u,h,y;return{c(){n=E("p"),d=g("Result: "),m=g(f[3]),c=j(),e=E("pre"),u=g("                "),h=g(f[2]),y=g(`
            `)},l(t){n=b(t,"P",{});var a=I(n);d=v(a,"Result: "),m=v(a,f[3]),a.forEach(o),c=w(t),e=b(t,"PRE",{});var p=I(e);u=v(p,"                "),h=v(p,f[2]),y=v(p,`
            `),p.forEach(o)},m(t,a){k(t,n,a),l(n,d),l(n,m),k(t,c,a),k(t,e,a),l(e,u),l(e,h),l(e,y)},p(t,a){a&8&&O(m,t[3]),a&4&&O(h,t[2])},d(t){t&&o(n),t&&o(c),t&&o(e)}}}function re(f){let n,d,m,c,e,u,h,y,t,a,p,x,A,D,R,G,C,H,J,N,q,M,P,i=f[1]!=""&&W(f),r=f[3]!=""&&X(f);return{c(){n=E("script"),m=j(),c=E("main"),e=E("div"),u=E("h1"),h=g("Integración conjunta con Proxys"),y=j(),t=E("h2"),a=g("Gráfica inmuebles y campings"),p=j(),x=E("h2"),A=g("Integración"),D=j(),R=E("div"),G=j(),C=E("h4"),H=g("Resultado compañerx"),J=j(),i&&i.c(),N=j(),q=E("h4"),M=g("Resultados propios"),P=j(),r&&r.c(),this.h()},l(s){const S=se("svelte-1orte81",document.head);n=b(S,"SCRIPT",{src:!0});var T=I(n);T.forEach(o),S.forEach(o),m=w(s),c=b(s,"MAIN",{});var V=I(c);e=b(V,"DIV",{style:!0});var _=I(e);u=b(_,"H1",{style:!0});var K=I(u);h=v(K,"Integración conjunta con Proxys"),K.forEach(o),y=w(_),t=b(_,"H2",{style:!0});var z=I(t);a=v(z,"Gráfica inmuebles y campings"),z.forEach(o),p=w(_),x=b(_,"H2",{});var B=I(x);A=v(B,"Integración"),B.forEach(o),D=w(_),R=b(_,"DIV",{id:!0,style:!0});var Y=I(R);Y.forEach(o),G=w(_),C=b(_,"H4",{});var F=I(C);H=v(F,"Resultado compañerx"),F.forEach(o),J=w(_),i&&i.l(_),N=w(_),q=b(_,"H4",{});var L=I(q);M=v(L,"Resultados propios"),L.forEach(o),P=w(_),r&&r.l(_),_.forEach(o),V.forEach(o),this.h()},h(){ae(n.src,d="https://code.jscharting.com/latest/jscharting.js")||Q(n,"src",d),$(u,"text-align","center"),$(u,"font-style","oblique"),$(t,"text-align","center"),$(t,"font-style","oblique"),Q(R,"id","chartPrimera"),$(R,"height","500px"),$(R,"margin","0px auto"),$(R,"margin-top","40px"),$(e,"margin-left","30px")},m(s,S){l(document.head,n),k(s,m,S),k(s,c,S),l(c,e),l(e,u),l(u,h),l(e,y),l(e,t),l(t,a),l(e,p),l(e,x),l(x,A),l(e,D),l(e,R),l(e,G),l(e,C),l(C,H),l(e,J),i&&i.m(e,null),l(e,N),l(e,q),l(q,M),l(e,P),r&&r.m(e,null)},p(s,[S]){s[1]!=""?i?i.p(s,S):(i=W(s),i.c(),i.m(e,N)):i&&(i.d(1),i=null),s[3]!=""?r?r.p(s,S):(r=X(s),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i:U,o:U,d(s){o(n),s&&o(m),s&&o(c),i&&i.d(),r&&r.d()}}}function ne(f,n,d){let m="/api/proxy-lmp/?url=https://sos2223-20.ew.r.appspot.com/api/v3/campings",c="/api/v3/immovables/",e="",u="",h="",y="",t="",a="",p=[],x=[],A=[],D=[],R=[],G=[],C=[],H=[],J=[];le(async()=>{q()});async function N(){const P=await fetch(m,{method:"GET"});try{const r=await P.json();d(0,u=JSON.stringify(r,null,2)),e=r;for(let s=0;s<e.length;s++)a=`${e[s].state} ${e[s].start_date} ${e[s].id}`,p.includes(a)||p.push(a),A.push(parseInt(e[s].camping_places)),D.push(parseInt(e[s].category)),H.push(parseInt(e[s].group_id)),J.push(parseInt(e[s].modality));M(p,R,G,C,D,A,x)}catch(r){console.log(`Error parsing result: ${r}`)}const i=await P.status;d(1,h=i)}async function q(){const P=await fetch(c,{method:"GET"});try{const r=await P.json();console.log(r),d(2,y=JSON.stringify(r,null,2)),e=r;for(let s=0;s<e.length;s++)a=`${e[s].province} ${e[s].modified_date} ${e[s].id}  ${e[s].current_usage}`,p.push(a),G.push(e[s].resource),C.push(e[s].inventory_num),x.push(e[s].current_usage.length);N()}catch(r){console.log(`Error parsing result: ${r}`)}const i=await P.status;d(3,t=i)}async function M(P,i,r,s,S,T){JSC.chart("chartPrimera",{debug:!0,defaultSeries_type:"column",title_label_text:"",yAxis:{label_text:""},xAxis:{label_text:"",categories:P},series:[{name:"Modalidad",points:J},{name:"Grupo",points:H},{name:"Numero de Inventario",points:s},{name:"Recurso",points:r},{name:"Categoria",points:S},{name:"Numero de Campings",points:T}]})}return[u,h,y,t]}class ie extends Z{constructor(n){super(),ee(this,n,ne,re,te,{})}}export{ie as default};