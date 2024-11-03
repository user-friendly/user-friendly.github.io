import{j as e,r,L as m,u as w,R as F,a as o,A as S,B as I}from"./index-DU_b5N7N.js";import{_ as d,t as C}from"./services-CjkLjJI_.js";const k=()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Error 404: Page Not Found."}),e.jsx("p",{children:"The page you requested was not found. Please, contact the webadmin if this is a real issue. You might also be a snowflake if you contact the webadmin."})]}),R=`
	p-2 rounded-lg bg-green-100 select-none cursor-pointer
	hover:bg-green-200 text-green-700
`,j=s=>{if(s.name===void 0)return e.jsx(e.Fragment,{});const n=s.name,t=s.className,l=d.omit(d.clone(s),["name","className"]);return e.jsx("span",{className:"material-symbols-outlined "+C(R,t),...l,children:n})},f={text:"p-1 px-2 rounded-lg border border-slate-300 text-slate-600 bg-slate-50 focus:outline-emerald-600",button:"py-2 cursor-pointer rounded-lg text-white bg-green-800 hover:bg-green-700 active:bg-green-600",submit:"py-2 cursor-pointer rounded-lg text-white bg-green-800 hover:bg-green-700 active:bg-green-600"},p={text:"ml-3 mb-2 -mt-2 text-slate-400",button:"hidden"},T=({name:s,value:n,type:t="text",label:l,placeholder:x="",onChange:u})=>{const i=r.useId(),h=f[t]!==void 0?f[t]:f.text,a=p[t]!==void 0?p[t]:p.text;return e.jsxs("div",{className:"my-3 flex flex-col",children:[l&&e.jsx("label",{className:a,htmlFor:i,children:l}),e.jsx("input",{className:h,type:t,name:s,id:i,placeholder:x,value:n,onChange:u})]})},A=`
	m-4 pt-2 pb-4 px-8 bg-white border rounded-lg border-slate-300 font-lato font-medium
	flex flex-col 
`,$=s=>{for(const n of s)if(n.name===void 0)throw"Form fields MUST have names."},E=s=>{const n={};for(const t of s)n[t.name]=t.value!==void 0?t.value:"";return n},L=(s,n,t)=>({...s,[n]:t}),b=s=>{$(s.fields);const n=r.useId(),[t,l]=r.useState(()=>E(s.fields));console.log(`Render form {${n}}:`,t);const x=r.useCallback(a=>{a.preventDefault(),console.log(`Form ${n} submitted.`),console.log("Values to submit:",t)},[t]),u=d.assign(d.omit(s,["fields"]),{className:A,name:`form-${n}`,method:"POST",action:"",onSubmit:x});let i=null;r.useEffect(()=>()=>{console.log(`Clear form (${n}) timeout.`),clearTimeout(i)},[]);const h=(a,g)=>{l(L(t,a,g))};return e.jsx("form",{...u,children:s.fields.map((a,g)=>e.jsx(T,{onChange:N=>h(a.name,N.target.value),...a,value:t[a.name]},g))})},y=({className:s})=>e.jsx("div",{className:s,children:e.jsx(b,{fields:[{label:"username",name:"username",type:"text"},{label:"password",name:"password",type:"password"},{label:"confirm password",name:"password_confirm",type:"password"},{name:"submit_button",value:"Create an Account",type:"submit"}]})}),v=({className:s})=>e.jsxs("div",{className:s,children:[e.jsx(b,{fields:[{name:"username",label:"username",value:"JohnDoe123",type:"text"},{name:"password",label:"password",value:"password123456",type:"password"},{name:"submit_button",value:"Sign In",type:"submit"}]}),e.jsx(m,{to:"/sing-up",children:"Create an Account"})]}),M=()=>e.jsxs("div",{children:[e.jsx("h1",{className:"my-4 text-5xl",children:"Heading"}),e.jsx("div",{className:"my-4 text-xl font-playfair",children:"Font Playfair Display test. This here is some random text to test the given font."}),e.jsx("div",{className:"my-4 text-xl font-lato",children:"Font Lato test. This here is some random text to test the given font."}),e.jsxs("div",{children:[e.jsx("h2",{className:"my-4 text-4xl",children:"Icons"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(j,{name:"menu"}),e.jsx(j,{name:"home",className:"text-4xl"}),e.jsx(j,{name:"close",className:"bg-violet-100 text-violet-700 hover:bg-violet-200"})]})]}),e.jsx("div",{className:"flex flex-col items-center",children:e.jsx(y,{className:"min-w-96 md:min-w-lg"})}),e.jsx(v,{className:"max-w-96 md:max-w-lg"})]}),P=()=>(w(),e.jsxs(F,{children:[e.jsx(o,{path:"/sing-in",element:e.jsx(v,{})}),e.jsx(o,{path:"/sing-up",element:e.jsx(y,{})}),e.jsx(o,{path:"/",element:e.jsx(v,{})}),e.jsx(o,{path:"/style-guide",element:e.jsx(M,{})}),e.jsx(o,{path:"*",element:e.jsx(k,{})})]})),c=`
	mx-1 py-2 px-3 bg-sky-200 rounded-lg
	font-lato font-medium text-sky-800 hover:text-sky-300 hover:bg-sky-600
`,V=()=>e.jsx("div",{children:e.jsxs("div",{className:"my-3 flex justify-center",children:[e.jsx(S,{className:c,appid:"default",children:"Main App"}),e.jsx(m,{className:c,to:"/",children:"Rica's Plants"}),e.jsx(m,{className:c,to:"/sing-in",children:"Sign In"}),e.jsx(m,{className:c,to:"/style-guide",children:"Style Guide"})]})}),_="text-green-600",U=()=>e.jsx(I,{children:e.jsxs("div",{className:`
			min-h-screen flex flex-col items-center
			${_}
		`,children:[e.jsxs("div",{children:[e.jsx("h1",{className:"my-6 text-5xl",children:"Capstone Project"}),e.jsx(V,{})]}),e.jsx("div",{children:e.jsx(P,{})}),e.jsx("div",{children:"[Footer goes here]"})]})});export{U as default};
