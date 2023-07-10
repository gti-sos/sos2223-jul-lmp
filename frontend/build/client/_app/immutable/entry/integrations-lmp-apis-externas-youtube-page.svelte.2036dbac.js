import{S as Ye,i as Qe,s as Ze,k as x,q as W,a as j,l as F,m as D,r as K,h as g,c as I,n as R,b as X,D as O,C as ae,e as Ee,V as et,K as be,L as tt,u as we}from"../chunks/index.e145b144.js";function Be(e,t){return function(){return e.apply(t,arguments)}}const{toString:nt}=Object.prototype,{getPrototypeOf:de}=Object,Y=(e=>t=>{const n=nt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>Y(t)===e),Q=e=>t=>typeof t===e,{isArray:U}=Array,H=Q("undefined");function rt(e){return e!==null&&!H(e)&&e.constructor!==null&&!H(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const De=N("ArrayBuffer");function st(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&De(e.buffer),t}const ot=Q("string"),A=Q("function"),Le=Q("number"),Z=e=>e!==null&&typeof e=="object",it=e=>e===!0||e===!1,v=e=>{if(Y(e)!=="object")return!1;const t=de(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},at=N("Date"),ct=N("File"),lt=N("Blob"),ut=N("FileList"),ft=e=>Z(e)&&A(e.pipe),dt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=Y(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},pt=N("URLSearchParams"),ht=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function q(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let l;for(r=0;r<o;r++)l=i[r],t.call(null,e[l],l,e)}}function Ue(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ke=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),je=e=>!H(e)&&e!==ke;function ce(){const{caseless:e}=je(this)&&this||{},t={},n=(r,s)=>{const i=e&&Ue(t,s)||s;v(t[i])&&v(r)?t[i]=ce(t[i],r):v(r)?t[i]=ce({},r):U(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&q(arguments[r],n);return t}const mt=(e,t,n,{allOwnKeys:r}={})=>(q(t,(s,i)=>{n&&A(s)?e[i]=Be(s,n):e[i]=s},{allOwnKeys:r}),e),yt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Et=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},bt=(e,t,n,r)=>{let s,i,o;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&de(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},wt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},St=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Le(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Rt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&de(Uint8Array)),Ot=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},At=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},_t=N("HTMLFormElement"),gt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Se=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Tt=N("RegExp"),Ie=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};q(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},Nt=e=>{Ie(e,(t,n)=>{if(A(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(A(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Pt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return U(e)?r(e):r(String(e).split(t)),n},Ct=()=>{},xt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),re="abcdefghijklmnopqrstuvwxyz",Re="0123456789",He={DIGIT:Re,ALPHA:re,ALPHA_DIGIT:re+re.toUpperCase()+Re},Ft=(e=16,t=He.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Bt(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Dt=e=>{const t=new Array(10),n=(r,s)=>{if(Z(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=U(r)?[]:{};return q(r,(o,l)=>{const p=n(o,s+1);!H(p)&&(i[l]=p)}),t[s]=void 0,i}}return r};return n(e,0)},Lt=N("AsyncFunction"),Ut=e=>e&&(Z(e)||A(e))&&A(e.then)&&A(e.catch),a={isArray:U,isArrayBuffer:De,isBuffer:rt,isFormData:dt,isArrayBufferView:st,isString:ot,isNumber:Le,isBoolean:it,isObject:Z,isPlainObject:v,isUndefined:H,isDate:at,isFile:ct,isBlob:lt,isRegExp:Tt,isFunction:A,isStream:ft,isURLSearchParams:pt,isTypedArray:Rt,isFileList:ut,forEach:q,merge:ce,extend:mt,trim:ht,stripBOM:yt,inherits:Et,toFlatObject:bt,kindOf:Y,kindOfTest:N,endsWith:wt,toArray:St,forEachEntry:Ot,matchAll:At,isHTMLForm:_t,hasOwnProperty:Se,hasOwnProp:Se,reduceDescriptors:Ie,freezeMethods:Nt,toObjectSet:Pt,toCamelCase:gt,noop:Ct,toFiniteNumber:xt,findKey:Ue,global:ke,isContextDefined:je,ALPHABET:He,generateString:Ft,isSpecCompliantForm:Bt,toJSONObject:Dt,isAsyncFn:Lt,isThenable:Ut};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const qe=m.prototype,Me={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Me[e]={value:e}});Object.defineProperties(m,Me);Object.defineProperty(qe,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(qe);return a.toFlatObject(e,o,function(p){return p!==Error.prototype},l=>l!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const kt=null;function le(e){return a.isPlainObject(e)||a.isArray(e)}function ze(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Oe(e,t,n){return e?e.concat(t).map(function(s,i){return s=ze(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function jt(e){return a.isArray(e)&&!e.some(le)}const It=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ee(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,_){return!a.isUndefined(_[h])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!p&&a.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?p&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,h,_){let w=d;if(d&&!_&&typeof d=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&jt(d)||(a.isFileList(d)||a.endsWith(h,"[]"))&&(w=a.toArray(d)))return h=ze(h),w.forEach(function(B,z){!(a.isUndefined(B)||B===null)&&t.append(o===!0?Oe([h],z,i):o===null?h:h+"[]",c(B))}),!1}return le(d)?!0:(t.append(Oe(_,h,i),c(d)),!1)}const f=[],E=Object.assign(It,{defaultVisitor:u,convertValue:c,isVisitable:le});function y(d,h){if(!a.isUndefined(d)){if(f.indexOf(d)!==-1)throw Error("Circular reference detected in "+h.join("."));f.push(d),a.forEach(d,function(w,b){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(b)?b.trim():b,h,E))===!0&&y(w,h?h.concat(b):[b])}),f.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Ae(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function pe(e,t){this._pairs=[],e&&ee(e,this,t)}const ve=pe.prototype;ve.append=function(t,n){this._pairs.push([t,n])};ve.toString=function(t){const n=t?function(r){return t.call(this,r,Ae)}:Ae;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ht(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Je(e,t,n){if(!t)return e;const r=n&&n.encode||Ht,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new pe(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class qt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const _e=qt,$e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Mt=typeof URLSearchParams<"u"?URLSearchParams:pe,zt=typeof FormData<"u"?FormData:null,vt=typeof Blob<"u"?Blob:null,Jt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),$t=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),T={isBrowser:!0,classes:{URLSearchParams:Mt,FormData:zt,Blob:vt},isStandardBrowserEnv:Jt,isStandardBrowserWebWorkerEnv:$t,protocols:["http","https","file","blob","url","data"]};function Vt(e,t){return ee(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Wt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Kt(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Ve(e){function t(n,r,s,i){let o=n[i++];const l=Number.isFinite(+o),p=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,p?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!l):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=Kt(s[o])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Wt(r),s,n,0)}),n}return null}const Gt={"Content-Type":void 0};function Xt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const te={transitional:$e,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ve(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Vt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return ee(l?{"files[]":t}:t,p&&new p,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Xt(t)):t}],transformResponse:[function(t){const n=this.transitional||te.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){te.headers[t]={}});a.forEach(["post","put","patch"],function(t){te.headers[t]=a.merge(Gt)});const he=te,Yt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Qt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Yt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ge=Symbol("internals");function k(e){return e&&String(e).trim().toLowerCase()}function J(e){return e===!1||e==null?e:a.isArray(e)?e.map(J):String(e)}function Zt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const en=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function se(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function tn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function nn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class ne{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(l,p,c){const u=k(p);if(!u)throw new Error("header name must be a non-empty string");const f=a.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||p]=J(l))}const o=(l,p)=>a.forEach(l,(c,u)=>i(c,u,p));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!en(t)?o(Qt(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=k(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Zt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=k(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||se(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=k(o),o){const l=a.findKey(r,o);l&&(!n||se(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||se(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=J(s),delete n[i];return}const l=t?tn(i):String(i).trim();l!==i&&delete n[i],n[l]=J(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ge]=this[ge]={accessors:{}}).accessors,s=this.prototype;function i(o){const l=k(o);r[l]||(nn(s,o),r[l]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}ne.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(ne.prototype);a.freezeMethods(ne);const P=ne;function oe(e,t){const n=this||he,r=t||n,s=P.from(r.headers);let i=r.data;return a.forEach(e,function(l){i=l.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function We(e){return!!(e&&e.__CANCEL__)}function M(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(M,m,{__CANCEL__:!0});function rn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const sn=T.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,l){const p=[];p.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&p.push("expires="+new Date(s).toGMTString()),a.isString(i)&&p.push("path="+i),a.isString(o)&&p.push("domain="+o),l===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function on(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function an(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ke(e,t){return e&&!on(t)?an(e,t):t}const cn=T.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const l=a.isString(o)?s(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function ln(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function un(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(p){const c=Date.now(),u=r[i];o||(o=c),n[s]=p,r[s]=c;let f=i,E=0;for(;f!==s;)E+=n[f++],f=f%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const y=u&&c-u;return y?Math.round(E*1e3/y):void 0}}function Te(e,t){let n=0;const r=un(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,l=i-n,p=r(l),c=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:l,rate:p||void 0,estimated:p&&o&&c?(o-i)/p:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const fn=typeof XMLHttpRequest<"u",dn=fn&&function(e){return new Promise(function(n,r){let s=e.data;const i=P.from(e.headers).normalize(),o=e.responseType;let l;function p(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(s)&&(T.isStandardBrowserEnv||T.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+d))}const u=Ke(e.baseURL,e.url);c.open(e.method.toUpperCase(),Je(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function f(){if(!c)return;const y=P.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};rn(function(w){n(w),p()},function(w){r(w),p()},h),c=null}if("onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(f)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||$e;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new m(d,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},T.isStandardBrowserEnv){const y=(e.withCredentials||cn(u))&&e.xsrfCookieName&&sn.read(e.xsrfCookieName);y&&i.set(e.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(d,h){c.setRequestHeader(h,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Te(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Te(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new M(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const E=ln(u);if(E&&T.protocols.indexOf(E)===-1){r(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},$={http:kt,xhr:dn};a.forEach($,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const pn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?$[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp($,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:$};function ie(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new M(null,e)}function Ne(e){return ie(e),e.headers=P.from(e.headers),e.data=oe.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),pn.getAdapter(e.adapter||he.adapter)(e).then(function(r){return ie(e),r.data=oe.call(e,e.transformResponse,r),r.headers=P.from(r.headers),r},function(r){return We(r)||(ie(e),r&&r.response&&(r.response.data=oe.call(e,e.transformResponse,r.response),r.response.headers=P.from(r.response.headers))),Promise.reject(r)})}const Pe=e=>e instanceof P?e.toJSON():e;function L(e,t){t=t||{};const n={};function r(c,u,f){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:f},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(c,u,f){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,f)}else return r(c,u,f)}function i(c,u){if(!a.isUndefined(u))return r(void 0,u)}function o(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,f){if(f in t)return r(c,u);if(f in e)return r(void 0,c)}const p={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,u)=>s(Pe(c),Pe(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=p[u]||s,E=f(e[u],t[u],u);a.isUndefined(E)&&f!==l||(n[u]=E)}),n}const Ge="1.4.0",me={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{me[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ce={};me.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Ge+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,l)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ce[o]&&(Ce[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,l):!0}};function hn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const l=e[i],p=l===void 0||o(l,i,e);if(p!==!0)throw new m("option "+i+" must be "+p,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}const ue={assertOptions:hn,validators:me},C=ue.validators;class G{constructor(t){this.defaults=t,this.interceptors={request:new _e,response:new _e}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=L(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ue.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ue.assertOptions(s,{encode:C.function,serialize:C.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&a.merge(i.common,i[n.method]),o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete i[d]}),n.headers=P.concat(o,i);const l=[];let p=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(p=p&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,f=0,E;if(!p){const d=[Ne.bind(this),void 0];for(d.unshift.apply(d,l),d.push.apply(d,c),E=d.length,u=Promise.resolve(n);f<E;)u=u.then(d[f++],d[f++]);return u}E=l.length;let y=n;for(f=0;f<E;){const d=l[f++],h=l[f++];try{y=d(y)}catch(_){h.call(this,_);break}}try{u=Ne.call(this,y)}catch(d){return Promise.reject(d)}for(f=0,E=c.length;f<E;)u=u.then(c[f++],c[f++]);return u}getUri(t){t=L(this.defaults,t);const n=Ke(t.baseURL,t.url);return Je(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){G.prototype[t]=function(n,r){return this.request(L(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,l){return this.request(L(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}G.prototype[t]=n(),G.prototype[t+"Form"]=n(!0)});const V=G;class ye{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(l=>{r.subscribe(l),i=l}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,l){r.reason||(r.reason=new M(i,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ye(function(s){t=s}),cancel:t}}}const mn=ye;function yn(e){return function(n){return e.apply(null,n)}}function En(e){return a.isObject(e)&&e.isAxiosError===!0}const fe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fe).forEach(([e,t])=>{fe[t]=e});const bn=fe;function Xe(e){const t=new V(e),n=Be(V.prototype.request,t);return a.extend(n,V.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Xe(L(e,s))},n}const S=Xe(he);S.Axios=V;S.CanceledError=M;S.CancelToken=mn;S.isCancel=We;S.VERSION=Ge;S.toFormData=ee;S.AxiosError=m;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=yn;S.isAxiosError=En;S.mergeConfig=L;S.AxiosHeaders=P;S.formToJSON=e=>Ve(a.isHTMLForm(e)?new FormData(e):e);S.HttpStatusCode=bn;S.default=S;const wn=S;function xe(e,t,n){const r=e.slice();return r[4]=t[n],r}function Sn(e){let t,n;return{c(){t=x("p"),n=W("Cargando resultados..."),this.h()},l(r){t=F(r,"P",{class:!0});var s=D(t);n=K(s,"Cargando resultados..."),s.forEach(g),this.h()},h(){R(t,"class","svelte-1lm6ns9")},m(r,s){X(r,t,s),O(t,n)},p:ae,d(r){r&&g(t)}}}function Rn(e){let t,n=e[0].items,r=[];for(let s=0;s<n.length;s+=1)r[s]=Fe(xe(e,n,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();t=Ee()},l(s){for(let i=0;i<r.length;i+=1)r[i].l(s);t=Ee()},m(s,i){for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(s,i);X(s,t,i)},p(s,i){if(i&3){n=s[0].items;let o;for(o=0;o<n.length;o+=1){const l=xe(s,n,o);r[o]?r[o].p(l,i):(r[o]=Fe(l),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(s){et(r,s),s&&g(t)}}}function Fe(e){let t,n,r,s,i,o,l=e[4].snippet.title+"",p,c,u,f=e[4].snippet.description+"",E,y,d,h;function _(){return e[2](e[4])}return{c(){t=x("div"),n=x("img"),i=j(),o=x("h2"),p=W(l),c=j(),u=x("p"),E=W(f),y=j(),this.h()},l(w){t=F(w,"DIV",{class:!0});var b=D(t);n=F(b,"IMG",{src:!0,alt:!0,class:!0}),i=I(b),o=F(b,"H2",{class:!0});var B=D(o);p=K(B,l),B.forEach(g),c=I(b),u=F(b,"P",{class:!0});var z=D(u);E=K(z,f),z.forEach(g),y=I(b),b.forEach(g),this.h()},h(){be(n.src,r=e[4].snippet.thumbnails.default.url)||R(n,"src",r),R(n,"alt",s=e[4].snippet.title),R(n,"class","svelte-1lm6ns9"),R(o,"class","svelte-1lm6ns9"),R(u,"class","svelte-1lm6ns9"),R(t,"class","svelte-1lm6ns9")},m(w,b){X(w,t,b),O(t,n),O(t,i),O(t,o),O(o,p),O(t,c),O(t,u),O(u,E),O(t,y),d||(h=tt(t,"click",_),d=!0)},p(w,b){e=w,b&1&&!be(n.src,r=e[4].snippet.thumbnails.default.url)&&R(n,"src",r),b&1&&s!==(s=e[4].snippet.title)&&R(n,"alt",s),b&1&&l!==(l=e[4].snippet.title+"")&&we(p,l),b&1&&f!==(f=e[4].snippet.description+"")&&we(E,f)},d(w){w&&g(t),d=!1,h()}}}function On(e){let t,n,r,s,i,o;function l(u,f){return u[0]?Rn:Sn}let p=l(e),c=p(e);return{c(){t=x("main"),n=x("h1"),r=W("Resultados de búsqueda Youtube:"),s=j(),i=x("iframe"),o=j(),c.c(),this.h()},l(u){t=F(u,"MAIN",{});var f=D(t);n=F(f,"H1",{class:!0});var E=D(n);r=K(E,"Resultados de búsqueda Youtube:"),E.forEach(g),s=I(f),i=F(f,"IFRAME",{id:!0,width:!0,height:!0,frameborder:!0}),D(i).forEach(g),o=I(f),c.l(f),f.forEach(g),this.h()},h(){R(n,"class","svelte-1lm6ns9"),R(i,"id","youtube-player"),R(i,"width","560"),R(i,"height","315"),R(i,"frameborder","0"),i.allowFullscreen=!0},m(u,f){X(u,t,f),O(t,n),O(n,r),O(t,s),O(t,i),O(t,o),c.m(t,null)},p(u,[f]){p===(p=l(u))&&c?c.p(u,f):(c.d(1),c=p(u),c&&(c.c(),c.m(t,null)))},i:ae,o:ae,d(u){u&&g(t),c.d()}}}function An(e,t,n){let r;function s(o){const l=document.getElementById("youtube-player");l.src=`https://www.youtube.com/embed/${o}`}return wn.get("https://www.googleapis.com/youtube/v3/search",{params:{key:"",q:"Búsqueda de ejemplo",part:"snippet"}}).then(o=>{n(0,r=o.data)}),[r,s,o=>s(o.id.videoId)]}class gn extends Ye{constructor(t){super(),Qe(this,t,An,On,Ze,{})}}export{gn as default};