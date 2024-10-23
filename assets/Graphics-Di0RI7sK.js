var H=e=>{throw TypeError(e)};var G=(e,t,r)=>t.has(e)||H("Cannot "+r);var s=(e,t,r)=>(G(e,t,"read from private field"),r?r.call(e):t.get(e)),i=(e,t,r)=>t.has(e)?H("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),n=(e,t,r,c)=>(G(e,t,"write to private field"),c?c.call(e,r):t.set(e,r),r),I=(e,t,r)=>(G(e,t,"access private method"),r);import{r as P,j as o}from"./index-DZxVDkqq.js";import{_ as le}from"./services-Bu_7CigI.js";import{M as oe}from"./MersenneTwister-DuWuIa_7.js";const Q=2*Math.PI;var h,g,m,w,C,d,j,R,E,F,b,f,v,y,U,Z;class ae{constructor(t=null){i(this,y);i(this,h,null);i(this,g,null);i(this,m,[]);i(this,w,!1);i(this,C,"rgb(255, 255, 255)");i(this,d,null);i(this,j,0);i(this,R,0);i(this,E,!0);i(this,F,3e4);i(this,b,0);i(this,f,0);i(this,v,0);n(this,h,t),n(this,g,s(this,h).getContext("2d"))}start(){return console.log("Start render engine."),n(this,w,!0),n(this,d,new K),n(this,b,0),n(this,v,performance.now()),requestAnimationFrame(this.frame.bind(this)),this}pause(){return console.log("Pause render engine."),n(this,w,!1),this}frame(t){n(this,f,t-s(this,v)),n(this,v,t),s(this,E)&&(n(this,j,s(this,j)+s(this,f)),n(this,R,s(this,R)+1),s(this,d).step(s(this,f)),s(this,b)>s(this,F)?(n(this,b,0),console.log("delta: ",s(this,d).get()),n(this,d,new K)):n(this,b,s(this,b)+s(this,f))),I(this,y,Z).call(this),I(this,y,U).call(this),s(this,w)?requestAnimationFrame(this.frame.bind(this)):s(this,E)&&(console.log("average delta: ",s(this,d).get()),console.log(`total frames: ${s(this,R)}, total time: ${s(this,j)}`))}getViewport(){return[s(this,h).width,s(this,h).height]}render(t){return s(this,m).push(t),this}drawExample(){return this.render((t,r,c)=>{t.beginPath(),t.moveTo(50,140),t.lineTo(150,60),t.lineTo(250,140),t.closePath(),t.stroke();const p=c.getViewport()[0]/2,T=c.getViewport()[1]/2;return t.beginPath(),t.arc(p,T,1,0,Q),t.stroke(),!0})}onResize(t,r){s(this,h).width=t,s(this,h).height=r}}h=new WeakMap,g=new WeakMap,m=new WeakMap,w=new WeakMap,C=new WeakMap,d=new WeakMap,j=new WeakMap,R=new WeakMap,E=new WeakMap,F=new WeakMap,b=new WeakMap,f=new WeakMap,v=new WeakMap,y=new WeakSet,U=function(){const t=s(this,m);n(this,m,[]);let r=null;for(;r=t.shift();)r(s(this,g),s(this,f),this)===!0&&s(this,m).push(r);return this},Z=function(){return s(this,g).fillStyle=s(this,C),s(this,g).fillRect(0,0,s(this,h).width,s(this,h).height),this};function he(e,t){e.beginPath(),e.arc(t.x,t.y,1,0,Q),e.stroke()}function J(e,t){e.beginPath(),e.moveTo(0,0),e.lineTo(t.x,t.y),e.closePath(),e.stroke()}var N,S;class K{constructor(){i(this,N,0);i(this,S,0)}step(t){return n(this,N,s(this,N)+t),n(this,S,s(this,S)+1),this}get(){return s(this,N)/s(this,S)}}N=new WeakMap,S=new WeakMap;const ce=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A=(e,t)=>typeof t=="number"?(e.forEach((r,c,p)=>p[c]=r*t),e):[e[0]*t[0]+e[1]*t[4]+e[2]*t[8]+e[3]*t[12],e[0]*t[1]+e[1]*t[5]+e[2]*t[9]+e[3]*t[13],e[0]*t[2]+e[1]*t[6]+e[2]*t[10]+e[3]*t[14],e[0]*t[3]+e[1]*t[7]+e[2]*t[11]+e[3]*t[15],e[4]*t[0]+e[5]*t[4]+e[6]*t[8]+e[7]*t[12],e[4]*t[1]+e[5]*t[5]+e[6]*t[9]+e[7]*t[13],e[4]*t[2]+e[5]*t[6]+e[6]*t[10]+e[7]*t[14],e[4]*t[3]+e[5]*t[7]+e[6]*t[11]+e[7]*t[15],e[8]*t[0]+e[9]*t[4]+e[10]*t[8]+e[11]*t[12],e[8]*t[1]+e[9]*t[5]+e[10]*t[9]+e[11]*t[13],e[8]*t[2]+e[9]*t[6]+e[10]*t[10]+e[11]*t[14],e[8]*t[3]+e[9]*t[7]+e[10]*t[11]+e[11]*t[15],e[12]*t[0]+e[13]*t[4]+e[14]*t[8]+e[15]*t[12],e[12]*t[1]+e[13]*t[5]+e[14]*t[9]+e[15]*t[13],e[12]*t[2]+e[13]*t[6]+e[14]*t[10]+e[15]*t[14],e[12]*t[3]+e[13]*t[7]+e[14]*t[11]+e[15]*t[15]],ue=e=>{console.log("|",e[0],e[1],e[2],e[3],"|"),console.log("|",e[4],e[5],e[6],e[7],"|"),console.log("|",e[8],e[9],e[10],e[11],"|"),console.log("|",e[12],e[13],e[14],e[15],"|")},de=A(ce(),[2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,1]),fe=A(de,[1,0,0,-2,0,1,0,2,0,0,1,3.5,0,0,0,1]);console.log(ue(fe));const pe="Graphics Experimentation";let a=null;const we=()=>{const[e,t]=P.useState(!0),[r,c]=P.useState(!0),p=P.useRef(null),T=P.useRef(null);P.useLayoutEffect(()=>{a=new ae(T.current),a.start(),a.drawExample();const Y=(l,x=performance.now(),M=0)=>{const W=new oe(x),$=[];for(let D=0;D<l+M;D++)D>=M?$.push(W.rnd()):W.rnd();return $},L=2**32,z=128,ee=Y(z,Math.random()*L),te=Y(z,Math.random()*L),[se,re]=[20,250],[ne,ie]=[600,150];let u=null,_=[];for(let l=0;l<z;l++)u={x:ee[l],y:te[l]},u.x=ne*u.x,u.y=ie*u.y,u.x=se+u.x,u.y=re+u.y,_.push(u);a.render((l,x)=>{for(const M of _)he(l,M);return!0});const q={x:128,y:128},V=le.clone(q);V.y=V.y*2,a.render((l,x)=>(J(l,q),J(l,V),!0));const O=new ResizeObserver(l=>{const x=l[0].contentRect;a&&a.onResize(x.width,x.height)});return O.observe(p.current),()=>{a&&(a.pause(),a=null),O.unobserve(p.current)}},[]);const k="my-2 mx-1 px-2 py-1 bg-blue-500 text-xl text-white rounded-md hover:bg-blue-600 active:bg-blue-700 disabled:bg-neutral-400",B=r?"fixed inset-0 w-screen h-screen":"flex-1 self-stretch border-2 border-gray-700";let X=o.jsxs(o.Fragment,{children:[r?o.jsx("button",{className:k,onClick:()=>c(!1),children:"Exit Fullscreen ⬇"}):o.jsx("button",{className:k,onClick:()=>c(!0),children:"Fullscreen ↕"}),e?o.jsx("button",{className:k,onClick:()=>{t(!e),a.pause()},children:"Pause ⏸"}):o.jsx("button",{className:k,onClick:()=>{t(!e),a.start()},children:"Play ▶"})]});return o.jsxs("div",{className:"h-full flex flex-col items-center",children:[o.jsx("h2",{className:"m-4 text-4xl text-center",children:pe}),o.jsx("div",{className:"mb-4 text-3xl",children:X}),o.jsxs("div",{ref:p,className:B,children:[o.jsx("canvas",{ref:T,className:r?" absolute inset-0":null}),r?o.jsx("div",{className:"absolute top-1 right-1",children:X}):null]})]})};export{pe as PAGE_TITLE,we as default};
