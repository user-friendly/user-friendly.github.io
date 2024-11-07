import{j as e,r as c,L as g,u as A,R as I,a as h,A as C,B as R}from"./index-BckKHtZG.js";import{_ as u,t as S,f as k}from"./services-Dx03o7LF.js";const L=()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Error 404: Page Not Found."}),e.jsx("p",{children:"The page you requested was not found. Please, contact the webadmin if this is a real issue. You might also be a snowflake if you contact the webadmin."})]}),B=`
	p-2 rounded-lg bg-green-100 select-none cursor-pointer
	hover:bg-green-200 text-green-700
`,f=t=>{if(t.name===void 0)return e.jsx(e.Fragment,{});const n=t.name,s=t.className,a=u.omit(u.clone(t),["name","className"]);return e.jsx("span",{className:"material-symbols-outlined "+S(B,s),...a,children:n})},E="https://user-friendly.dev/learning-api/demos/capstone/",T="browser-mock-api-key",P=async(t,n,s=null)=>{const a={method:t,credentials:"same-origin",headers:{Authorization:`Bearer ${T}`,"Content-Type":"application/json"}};s&&(a.body=JSON.stringify(s));let r=!1;try{r=await(await fetch(E+n,a)).json()}catch(o){console.error("failed to get resource",o)}return r},j={text:"p-1 px-2 rounded-lg border border-slate-300 text-slate-600 bg-slate-50 focus:outline-emerald-600",button:"py-2 cursor-pointer rounded-lg text-white bg-green-800 hover:bg-green-700 active:bg-green-600",submit:"py-2 cursor-pointer rounded-lg text-white bg-green-800 hover:bg-green-700 active:bg-green-600"},v={text:"ml-3 mb-2 -mt-2 text-slate-400",button:"hidden"},$=({name:t,value:n,type:s="text",label:a,placeholder:r="",onChange:o,isButton:l=!1,onClick:i})=>{const m=c.useId(),b=j[s]!==void 0?j[s]:j.text,d=v[s]!==void 0?v[s]:v.text;return e.jsxs("div",{className:"my-3 flex flex-col",children:[a&&e.jsx("label",{className:d,htmlFor:m,children:a}),l?e.jsx("button",{className:b,type:s,name:t,id:m,onClick:i,children:n}):e.jsx("input",{className:b,type:s,name:t,id:m,placeholder:r,value:n,onChange:o})]})},D=`
	m-4 pt-2 pb-4 px-8 bg-white border rounded-lg border-slate-300 font-lato font-medium
	min-w-80 flex flex-col 
`,O=t=>{for(const n of t)if(n.name===void 0)throw"Form fields MUST have names."},M=t=>{const n={};for(const s of t)n[s.name]=s.value!==void 0?s.value:"";return n},V=(t,n,s)=>({...t,[n]:s}),F=t=>{O(t.fields);const n=c.useId(),[s,a]=c.useState(()=>M(t.fields)),r=l=>{l.preventDefault(),t.onSubmit(s,n,l)},o=u.assign(u.omit(t,["fields"]),{className:D,name:`form-${n}`,method:"POST",action:"",onSubmit:r});return e.jsxs("form",{...o,children:[t.fields.map((l,i)=>e.jsx($,{onChange:m=>a(V(s,l.name,m.target.value)),...l,value:l.isButton?l.value:s[l.name]},i)),o.children]})},_=t=>{const n=t.children,s=t.status?t.status:{error:!1,message:null};return s.error!==!1&&!s.message&&(s.message="Something went wrong - try again later"),e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:"relative hidden md:block",children:[e.jsx("img",{className:"h-screen object-cover",title:"plants on a rack",src:"https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"}),e.jsx("div",{className:"absolute inset-0 w-full h-full bg-black/10"}),e.jsx("div",{className:"absolute inset-0 w-full h-full bg-green-800/40"})]}),e.jsxs("div",{className:"h-screen flex-1 bg-green-50 flex flex-col items-center justify-center",children:[e.jsxs("div",{className:"flex flex-col items-center mx-2 my-8",children:[e.jsx("img",{className:"w-16 mb-2 ",title:"brand logo",src:"https://static-task-assets.react-formula.com/capstone_logo_dark.png"}),e.jsx("div",{className:"font-playfair text-emerald-700 text-2xl",children:"Rica's Plants"})]}),s.message?e.jsx("div",{className:k("animate-slideDown py-1 px-2 rounded-lg border bg-white",s.error?"border-red-600 text-red-600 font-medium":"border-green-600"),children:s.message}):null,n]})]})},U=`
	w-8 h-8 animate-spin rounded-full 
	border-4 border-green-600 border-t-white
`,G=t=>{const n=t.className,s=u.omit(u.clone(t),["name","className","children"]);return e.jsx("div",{...s,className:S(U,n),children:t.children})},y=()=>({error:!1,message:null}),Y=()=>{const[t,n]=c.useState(!1),[s,a]=c.useState(()=>y()),r=async(i,m,b)=>{console.log(`Sing up form {${m}} submitted.`),console.log("Values:",i),a(y()),n(!0);const d=await P("POST","users",{username:i.username,password:i.password,password_confirm:i.password_confirm}),x=y();d.error?(x.error=!0,x.message=d.error):d.message?x.message=d.message:x.message="Sign up successful",a(x),n(!1)},l=[{label:"username",name:"username",type:"text"},{label:"password",name:"password",type:"password"},{label:"confirm password",name:"password_confirm",type:"password"},{name:"submit_button",value:e.jsx("span",{className:"flex justify-center",children:e.jsxs("span",{className:"relative",children:["Create an Account ",t?e.jsx(G,{className:"absolute top-0 -right-8 ml-2 w-6 h-6 border-transparent border-t-white"}):null]})}),type:"submit",isButton:!0}];return e.jsxs(_,{status:s,children:[e.jsx(F,{onSubmit:r,fields:l}),e.jsx(g,{to:"/sing-in",className:"text-sm text-green-700 underline hover:text-green-500",children:"Log into Account"})]})},N=()=>e.jsxs(_,{children:[e.jsx(F,{fields:[{name:"username",label:"username",type:"text"},{name:"password",label:"password",type:"password"},{name:"submit_button",value:"Sign In",type:"submit"}]}),e.jsx(g,{to:"/sing-up",className:"text-sm text-green-700 underline hover:text-green-500",children:"Create an Account"})]}),q=()=>e.jsxs("div",{className:"p-6 max-w-lg m-auto",children:[e.jsx("h1",{className:"my-4 text-5xl",children:"Heading"}),e.jsx("div",{className:"my-4 text-xl font-playfair",children:"Font Playfair Display test. This here is some random text to test the given font."}),e.jsx("div",{className:"my-4 text-xl font-lato",children:"Font Lato test. This here is some random text to test the given font."}),e.jsxs("div",{children:[e.jsx("h2",{className:"my-4 text-4xl",children:"Icons"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(f,{name:"menu"}),e.jsx(f,{name:"home",className:"text-4xl"}),e.jsx(f,{name:"close",className:"bg-violet-100 text-violet-700 hover:bg-violet-200"})]})]})]}),z=()=>(A(),e.jsxs(I,{children:[e.jsx(h,{path:"/sing-in",element:e.jsx(N,{})}),e.jsx(h,{path:"/sing-up",element:e.jsx(Y,{})}),e.jsx(h,{path:"/",element:e.jsx(N,{})}),e.jsx(h,{path:"/style-guide",element:e.jsx(q,{})}),e.jsx(h,{path:"*",element:e.jsx(L,{})})]})),p=`
	my-1 py-2 px-3 bg-sky-200 rounded-lg
	text-center font-lato font-medium text-sky-800 hover:text-sky-300 hover:bg-sky-600
`,w="self-end bg-sky-200 text-sky-800 hover:text-sky-300 hover:bg-sky-600",H=()=>{const[t,n]=c.useState(!1),s=c.useRef();c.useEffect(()=>{const r=o=>{s.current&&!s.current.contains(o.target)&&n(!1)};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[]);const a=t?e.jsx(f,{name:"close",className:w,onClick:r=>n(!1)}):e.jsx(f,{name:"menu",className:w,onClick:r=>n(!0)});return e.jsxs("div",{ref:s,className:k("fixed top-2 right-2 w-40 p-2 flex flex-col justify-center",t&&"bg-sky-100 rounded-lg shadow-lg"),children:[a,e.jsxs("div",{className:"flex flex-col justify-center "+(t?null:"hidden"),onClick:r=>n(!1),children:[e.jsx(C,{className:p,appid:"default",children:"Main App"}),e.jsx(g,{className:p,to:"/",children:"Rica's Plants"}),e.jsx(g,{className:p,to:"/style-guide",children:"Style Guide"}),e.jsx(g,{className:p,to:"/sing-in",children:"Sign In"})]})]})},J="text-green-600",W=()=>e.jsxs(R,{children:[e.jsx("div",{className:`${J}`,children:e.jsx(z,{})}),e.jsx(H,{})]});export{W as default};
