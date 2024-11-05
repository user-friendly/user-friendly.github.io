import{j as e,r,L as j,u as N,R as w,a as o,B as y}from"./index-CNTHJPfq.js";import{_ as i,t as F}from"./services-CjkLjJI_.js";const S=()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Error 404: Page Not Found."}),e.jsx("p",{children:"The page you requested was not found. Please, contact the webadmin if this is a real issue. You might also be a snowflake if you contact the webadmin."})]}),k=`
	p-2 rounded-lg bg-green-100 select-none cursor-pointer
	hover:bg-green-200 text-green-700
`,u=s=>{if(s.name===void 0)return e.jsx(e.Fragment,{});const n=s.name,t=s.className,l=i.omit(i.clone(s),["name","className"]);return e.jsx("span",{className:"material-symbols-outlined "+F(k,t),...l,children:n})},h={text:"p-1 px-2 rounded-lg border border-slate-300 text-slate-600 bg-slate-50 focus:outline-emerald-600",button:"py-2 cursor-pointer rounded-lg text-white bg-green-800 hover:bg-green-700 active:bg-green-600",submit:"py-2 cursor-pointer rounded-lg text-white bg-green-800 hover:bg-green-700 active:bg-green-600"},g={text:"ml-3 mb-2 -mt-2 text-slate-400",button:"hidden"},_=({name:s,value:n,type:t="text",label:l,placeholder:c="",onChange:m})=>{const a=r.useId(),d=h[t]!==void 0?h[t]:h.text,x=g[t]!==void 0?g[t]:g.text;return e.jsxs("div",{className:"my-3 flex flex-col",children:[l&&e.jsx("label",{className:x,htmlFor:a,children:l}),e.jsx("input",{className:d,type:t,name:s,id:a,placeholder:c,value:n,onChange:m})]})},I=`
	m-4 pt-2 pb-4 px-8 bg-white border rounded-lg border-slate-300 font-lato font-medium
	min-w-80 flex flex-col 
`,C=s=>{for(const n of s)if(n.name===void 0)throw"Form fields MUST have names."},R=s=>{const n={};for(const t of s)n[t.name]=t.value!==void 0?t.value:"";return n},T=(s,n,t)=>({...s,[n]:t}),b=s=>{C(s.fields);const n=r.useId(),[t,l]=r.useState(()=>R(s.fields)),c=r.useCallback(a=>{a.preventDefault(),console.log(`Form ${n} submitted.`),console.log("Values to submit:",t)},[t]),m=i.assign(i.omit(s,["fields"]),{className:I,name:`form-${n}`,method:"POST",action:"",onSubmit:c});return e.jsx("form",{...m,children:s.fields.map((a,d)=>e.jsx(_,{onChange:x=>l(T(t,a.name,x.target.value)),...a,value:t[a.name]},d))})},p=s=>{const n=s.children;return e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:"relative hidden md:block",children:[e.jsx("img",{className:"h-screen object-cover",title:"plants on a rack",src:"https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"}),e.jsx("div",{className:"absolute inset-0 w-full h-full bg-black/10"}),e.jsx("div",{className:"absolute inset-0 w-full h-full bg-green-800/40"})]}),e.jsxs("div",{className:"h-screen flex-1 bg-green-50 flex flex-col items-center justify-center",children:[e.jsxs("div",{className:"flex flex-col items-center mx-2 my-8",children:[e.jsx("img",{className:"w-16 mb-2 ",title:"brand logo",src:"https://static-task-assets.react-formula.com/capstone_logo_dark.png"}),e.jsx("div",{className:"font-playfair text-emerald-700 text-2xl",children:"Rica's Plants"})]}),n]})]})},v=()=>e.jsxs(p,{children:[e.jsx(b,{fields:[{label:"username",name:"username",type:"text"},{label:"password",name:"password",type:"password"},{label:"confirm password",name:"password_confirm",type:"password"},{name:"submit_button",value:"Create an Account",type:"submit"}]}),e.jsx(j,{to:"/sing-in",className:"text-sm text-green-700 underline hover:text-green-500",children:"Log into Account"})]}),f=()=>e.jsxs(p,{children:[e.jsx(b,{fields:[{name:"username",label:"username",type:"text"},{name:"password",label:"password",type:"password"},{name:"submit_button",value:"Sign In",type:"submit"}]}),e.jsx(j,{to:"/sing-up",className:"text-sm text-green-700 underline hover:text-green-500",children:"Create an Account"})]}),L=()=>e.jsxs("div",{children:[e.jsx("h1",{className:"my-4 text-5xl",children:"Heading"}),e.jsx("div",{className:"my-4 text-xl font-playfair",children:"Font Playfair Display test. This here is some random text to test the given font."}),e.jsx("div",{className:"my-4 text-xl font-lato",children:"Font Lato test. This here is some random text to test the given font."}),e.jsxs("div",{children:[e.jsx("h2",{className:"my-4 text-4xl",children:"Icons"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(u,{name:"menu"}),e.jsx(u,{name:"home",className:"text-4xl"}),e.jsx(u,{name:"close",className:"bg-violet-100 text-violet-700 hover:bg-violet-200"})]})]}),e.jsx("div",{className:"flex flex-col items-center",children:e.jsx(v,{className:"min-w-96 md:min-w-lg"})}),e.jsx(f,{className:"max-w-96 md:max-w-lg"})]}),A=()=>(N(),e.jsxs(w,{children:[e.jsx(o,{path:"/sing-in",element:e.jsx(f,{})}),e.jsx(o,{path:"/sing-up",element:e.jsx(v,{})}),e.jsx(o,{path:"/",element:e.jsx(f,{})}),e.jsx(o,{path:"/style-guide",element:e.jsx(L,{})}),e.jsx(o,{path:"*",element:e.jsx(S,{})})]})),V="text-green-600",P=()=>e.jsx(y,{children:e.jsx("div",{className:`${V}`,children:e.jsx(A,{})})});export{P as default};
