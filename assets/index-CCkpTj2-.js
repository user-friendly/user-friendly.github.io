var St=s=>{throw TypeError(s)};var dt=(s,t,i)=>t.has(s)||St("Cannot "+i);var e=(s,t,i)=>(dt(s,t,"read from private field"),i?i.call(s):t.get(s)),h=(s,t,i)=>t.has(s)?St("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,i),r=(s,t,i,n)=>(dt(s,t,"write to private field"),n?n.call(s,i):t.set(s,i),i),g=(s,t,i)=>(dt(s,t,"access private method"),i);var st=(s,t,i,n)=>({set _(o){r(s,t,o,i)},get _(){return e(s,t,n)}});import{r as U,j as m,B as Gt,M as Xt,A as Yt}from"./index-Ce864Uft.js";import"./services-Dx03o7LF.js";const qt=()=>[1,0,0,0,1,0,0,0,1],it=(s,t)=>{if(typeof t=="number")return s.forEach((i,n,o)=>o[n]=i*t),s;if(t.length===3)return[s[0]*t[0]+s[1]*t[1]+s[2]*t[2],s[3]*t[0]+s[4]*t[1]+s[5]*t[2],s[6]*t[0]+s[7]*t[1]+s[8]*t[2]];if(t.length/3==3)return[s[0]*t[0]+s[1]*t[3]+s[2]*t[6],s[0]*t[1]+s[1]*t[4]+s[2]*t[7],s[0]*t[2]+s[1]*t[5]+s[2]*t[8],s[3]*t[0]+s[4]*t[3]+s[5]*t[6],s[3]*t[1]+s[4]*t[4]+s[5]*t[7],s[3]*t[2]+s[4]*t[5]+s[5]*t[8],s[6]*t[0]+s[7]*t[3]+s[8]*t[6],s[6]*t[1]+s[7]*t[4]+s[8]*t[7],s[6]*t[2]+s[7]*t[5]+s[8]*t[8]];throw"Invalid array length."},rt=(s,t)=>{if(t.length%3==0){let[i,n,o,c]=[0,0,0,0];const x=t.length/3;for(let O=0;O<x;O++)c=3*O,[i,n,o]=[t[0+c],t[1+c],t[2+c]],t[0+c]=s[0]*i+s[1]*n+s[2]*o,t[1+c]=s[3]*i+s[4]*n+s[5]*o,t[2+c]=s[6]*i+s[7]*n+s[8]*o}else throw"Invalid array length."};function Wt(s){s=Math.abs(parseInt(s));const t=Math.floor(s/36e5),i=Math.floor(s%36e5/6e4),n=Math.floor(s%6e4/1e3),o=s%1e3;return`${t}h ${i}m ${n}s ${o}ms`}var X,Y;class Ct{constructor(){h(this,X,0);h(this,Y,0)}step(t){return r(this,X,e(this,X)+t),r(this,Y,e(this,Y)+1),this}get(){return e(this,X)/e(this,Y)}}X=new WeakMap,Y=new WeakMap;var q;class Ft{constructor(){h(this,q,!1)}frame(t,i){throw"TODO Override!"}render(t,i){return this.frame(t,i),!e(this,q)}remove(){r(this,q,!0)}}q=new WeakMap;var W,_,H;class Pt{constructor(t,i,n){h(this,W);h(this,_);h(this,H);r(this,W,t),r(this,_,i),r(this,H,n)}getVerts(){return Array.from(e(this,W))}getEdges(){return Array.from(e(this,_))}getFaces(){return Array.from(e(this,H))}}W=new WeakMap,_=new WeakMap,H=new WeakMap;var J,$,k,nt,z,K;class _t extends Ft{constructor(i,n,o,c,x){super();h(this,J);h(this,$);h(this,k);h(this,nt);h(this,z,"30px Tiny5");h(this,K,"black");r(this,J,typeof i=="function"?i:()=>i),r(this,$,n),r(this,k,o),r(this,z,c!==void 0?c:e(this,z)),r(this,K,x!==void 0?x:e(this,K))}frame(i,n){n.drawUiText(e(this,J).call(this),e(this,$),e(this,k),e(this,z),e(this,K))}setPosition(i,n,o){return[st(this,$)._,st(this,k)._,st(this,nt)._]=[i,n,o],this}}J=new WeakMap,$=new WeakMap,k=new WeakMap,nt=new WeakMap,z=new WeakMap,K=new WeakMap;const jt=(s,t,i,n,o)=>new _t(s,t,i,n,o),Ht=2*Math.PI;var f,l,v,P,j,Q,w,D,R,M,E,V,L,Z,T,N,S,B,I,b,C,F,u,ft,Dt,Rt,G,Et,mt,Nt;class Jt{constructor(t=null){h(this,u);h(this,f);h(this,l);h(this,v);h(this,P);h(this,j);h(this,Q);h(this,w);h(this,D);h(this,R,!0);h(this,M);h(this,E);h(this,V);h(this,L);h(this,Z);h(this,T);h(this,N);h(this,S);h(this,B);h(this,I);h(this,b);h(this,C);h(this,F);r(this,f,t),r(this,l,e(this,f).getContext("2d")),g(this,u,ft).call(this)}start(){return console.log("Start render engine."),r(this,P,!0),r(this,M,new Ct),r(this,T,0),r(this,D,performance.now()),e(this,R)&&this.showFpsDebug(),requestAnimationFrame(this.frame.bind(this)),this}pause(){return console.log("Pause render engine."),r(this,P,!1),this}stop(){return console.log("Stop render engine."),r(this,j,!0),this}frame(t){r(this,w,t-e(this,D)),r(this,D,t),e(this,R)&&g(this,u,Et).call(this),g(this,u,Rt).call(this),g(this,u,Dt).call(this),e(this,P)&&e(this,j)===!1?requestAnimationFrame(this.frame.bind(this)):(e(this,R)&&g(this,u,Nt).call(this),e(this,j)!==!1&&g(this,u,ft).call(this))}moveCameraTo(t){e(this,b)[2]=t[0],e(this,b)[5]=t[1],g(this,u,G).call(this)}translateCameraBy(t){r(this,b,it(e(this,b),[1,0,-t[0],0,1,-t[1],0,0,t[2]])),g(this,u,G).call(this)}getCameraMat(){return e(this,b)}getCanvasMat(){return e(this,C)}getViewportSize(){return[e(this,f).width,e(this,f).height]}getCanvasSize(){return[e(this,f).width,e(this,f).height]}render(t){return typeof t=="object"&&typeof t.render!==void 0&&typeof t.render=="function"?e(this,v).push(t.render.bind(t)):typeof t=="function"&&e(this,v).push(t),this}drawExample(){this.render(new Qt)}drawMesh(t){const i=t.getVerts();rt(e(this,F),i),e(this,l).beginPath(),e(this,l).moveTo(i[0],i[1]);const n=i.length/3;for(let o=1;o<n;o++)e(this,l).lineTo(i[0+3*o],i[1+3*o]);e(this,l).closePath(),e(this,l).fillStyle="blue",e(this,l).fill(),e(this,l).strokeStyle="black",e(this,l).stroke()}drawUiText(t,i,n,o,c){[i,n]=it(e(this,C),[i,n,1]),e(this,l).font=o,e(this,l).fillStyle=c,e(this,l).fillText(t,i,n)}drawPoints(t){const i=t.getVerts();rt(e(this,F),i);const n=i.length/3;for(let o=0;o<n;o++)e(this,l).beginPath(),e(this,l).arc(i[0+3*o],i[1+3*o],1,0,Ht),e(this,l).stroke()}drawVector(t){const i=Array.from(t);rt(e(this,F),i);const n=it(e(this,F),[0,0,1]),o=i.length/3;for(let c=0;c<o;c++)e(this,l).beginPath(),e(this,l).moveTo(n[0],n[1]),e(this,l).lineTo(i[0+3*c],i[1+3*c]),e(this,l).closePath(),e(this,l).stroke()}onResize(t,i){e(this,f).width=t,e(this,f).height=i,r(this,C,[1,0,0,0,-1,e(this,f).height,0,0,1]),g(this,u,G).call(this),e(this,R)&&this.showFpsDebug()}showFpsDebug(t,i,n){this.hideFpsDebug(),this.fpsDebugTextBox=jt((()=>`FPS: ${e(this,I)}`).bind(this),e(this,f).width-125,15),this.render(this.fpsDebugTextBox)}hideFpsDebug(){this.fpsDebugTextBox!==void 0&&this.fpsDebugTextBox.remove()}}f=new WeakMap,l=new WeakMap,v=new WeakMap,P=new WeakMap,j=new WeakMap,Q=new WeakMap,w=new WeakMap,D=new WeakMap,R=new WeakMap,M=new WeakMap,E=new WeakMap,V=new WeakMap,L=new WeakMap,Z=new WeakMap,T=new WeakMap,N=new WeakMap,S=new WeakMap,B=new WeakMap,I=new WeakMap,b=new WeakMap,C=new WeakMap,F=new WeakMap,u=new WeakSet,ft=function(){r(this,v,[]),r(this,P,!1),r(this,j,!1),r(this,Q,"rgb(255, 255, 255)"),r(this,w,0),r(this,D,0),r(this,M,null),r(this,V,0),r(this,L,0),r(this,E,0),r(this,Z,6e4),r(this,T,0),r(this,N,0),r(this,S,0),r(this,B,5e3),r(this,I,0),r(this,b,qt()),r(this,C,[1,0,0,0,-1,e(this,f).height,0,0,1]),g(this,u,G).call(this)},Dt=function(){const t=e(this,v);r(this,v,[]);let i=null;for(;i=t.shift();)i(e(this,w),this)===!0&&e(this,v).push(i);return this},Rt=function(){return e(this,l).fillStyle=e(this,Q),e(this,l).fillRect(0,0,e(this,f).width,e(this,f).height),this},G=function(){r(this,F,it(e(this,C),e(this,b)))},Et=function(){r(this,V,e(this,V)+e(this,w)),r(this,L,e(this,L)+1),e(this,M).step(e(this,w)),g(this,u,mt).call(this),e(this,T)>e(this,Z)?(r(this,E,parseInt(e(this,M).get())),r(this,T,0),r(this,M,new Ct),console.log(`Average delta: ${e(this,E)} ms`)):r(this,T,e(this,T)+e(this,w))},mt=function(){e(this,S)>e(this,B)?(r(this,I,parseInt(e(this,N)/e(this,S)*1e3)),r(this,N,0),r(this,S,0),console.log("FPS:",e(this,I))):(r(this,N,e(this,N)+1),r(this,S,e(this,S)+e(this,w)))},Nt=function(){g(this,u,mt).call(this),console.log(`Average delta: ${e(this,E)} ms`),console.log(`Total, frames: ${e(this,L)}, render time: ${Wt(e(this,V))}`)};var A;class Qt extends Ft{constructor(){super();h(this,A);const i=[25,25,1,125,25,1,75,125,1];rt([1,0,200,0,1,100,0,0,1],i),r(this,A,new Pt(i))}frame(i,n){n.drawMesh(e(this,A))}}A=new WeakMap;const Zt="Graphics";let d=null;const ee=()=>{const[s,t]=U.useState(!0),[i,n]=U.useState(!0),o=U.useRef(null),c=U.useRef(null);U.useLayoutEffect(()=>{d=new Jt(c.current),d.start(),d.drawExample();let ht=1,ot=0;const It=2e3;d.render((a,p)=>(ot>=It?(ot=0,ht*=-1):(ot+=a,p.translateCameraBy([-4*ht,-4*ht,1])),!0));const gt=(a,p=performance.now(),ct=0)=>{const Mt=new Xt(p),Tt=[];for(let ut=0;ut<a+ct;ut++)ut>=ct?Tt.push(Mt.rnd()):Mt.rnd();return Tt},xt=2**32,at=128,$t=gt(at,Math.random()*xt),kt=gt(at,Math.random()*xt),[zt,Kt]=[20,250],[Vt,Lt]=[600,150];let y=null,yt=[];for(let a=0;a<at;a++)y={x:$t[a],y:kt[a]},y.x=Vt*y.x,y.y=Lt*y.y,y.x=zt+y.x,y.y=Kt+y.y,yt.push(y.x,y.y,1);const Ot=new Pt(yt);d.render((a,p)=>(p.drawPoints(Ot),!0)),d.render((a,p)=>(p.drawVector([128,128,1,128,256,1]),!0));let lt=0;const Ut=3e3,wt=jt("Hello, 2D Canvas!",0,0);d.render(wt),d.render(((a,p,ct)=>(lt>=Ut?(lt=0,a.setPosition(Math.random()*(c.current.width-150),Math.random()*(c.current.height-100))):lt+=p,!0)).bind(null,wt));const tt=4,et=20,bt=a=>{a.altKey||a.ctrlKey||a.metaKey||(a.code==="ArrowLeft"&&d.translateCameraBy([1*(a.shiftKey?et:tt),0,1]),a.code==="ArrowRight"&&d.translateCameraBy([-1*(a.shiftKey?et:tt),0,1]),a.code==="ArrowUp"&&d.translateCameraBy([0,-1*(a.shiftKey?et:tt),1]),a.code==="ArrowDown"&&d.translateCameraBy([0,1*(a.shiftKey?et:tt),1]),a.code==="Enter"&&console.log("enter pressed"))},vt=new ResizeObserver(a=>{const p=a[0].contentRect;d&&d.onResize(p.width,p.height)});return vt.observe(o.current),document.body.addEventListener("keydown",bt),()=>{d&&(d.stop(),d=null),vt.unobserve(o.current),document.body.removeEventListener("keydown",bt)}},[]);const x="my-2 mx-1 px-2 py-1 bg-blue-500 text-xl text-white rounded-md hover:bg-blue-600 active:bg-blue-700 disabled:bg-neutral-400",O=i?"fixed inset-0 w-screen h-screen":"flex-1 self-stretch border-2 border-gray-700";let pt=m.jsxs(m.Fragment,{children:[m.jsx(Yt,{className:x,appid:"default",children:"Main App"}),i?m.jsx("button",{className:x,onClick:()=>n(!1),children:"Exit Fullscreen ⬇"}):m.jsx("button",{className:x,onClick:()=>n(!0),children:"Fullscreen ↕"}),s?m.jsx("button",{className:x,onClick:()=>{t(!s),d.pause()},children:"Pause ⏸"}):m.jsx("button",{className:x,onClick:()=>{t(!s),d.start()},children:"Play ▶"}),m.jsx("button",{className:x,onClick:()=>{d.stop()},children:"Stop ⏹"})]});return m.jsx(Gt,{children:m.jsxs("div",{className:"h-full flex flex-col items-center",children:[m.jsx("h2",{className:"m-4 text-4xl text-center",children:Zt}),m.jsx("div",{className:"mb-4 text-3xl",children:pt}),m.jsxs("div",{ref:o,className:O,children:[m.jsx("canvas",{ref:c,className:i?" absolute inset-0":null}),i?m.jsx("div",{className:"absolute top-1 right-1",children:pt}):null]})]})})};export{ee as default};