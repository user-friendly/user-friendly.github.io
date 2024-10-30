import{j as e,u as d,R as h,a as n,L as o}from"./index-DZvqcZvX.js";import{_ as l,t as j}from"./services-BmOeYy3P.js";const a=()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Error 404: Page Not Found."}),e.jsx("p",{children:"The page you requested was not found. Please, contact the webadmin if this is a real issue. You might also be a snowflake if you contact the webadmin."})]}),u=`
	p-2 rounded-lg bg-green-100 select-none cursor-pointer
	hover:bg-green-200 text-green-700
`,t=s=>{if(s.name===void 0)return e.jsx(e.Fragment,{});const c=s.name,x=s.className,m=l.omit(l.clone(s),["name","className"]);return e.jsx("span",{className:"material-symbols-outlined "+j(u,x),...m,children:c})},r=()=>e.jsxs("div",{children:[e.jsx("h1",{className:"my-4 text-5xl",children:"Heading"}),e.jsx("div",{className:"my-4 text-xl font-playfair",children:"Font Playfair Display test. This here is some random text to test the given font."}),e.jsx("div",{className:"my-4 text-xl font-lato",children:"Font Lato test. This here is some random text to test the given font."}),e.jsxs("div",{children:[e.jsx("h2",{className:"my-4 text-4xl",children:"Icons"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{name:"menu"}),e.jsx(t,{name:"home",className:"text-4xl"}),e.jsx(t,{name:"close",className:"bg-violet-100 text-violet-700 hover:bg-violet-200"})]})]})]}),g=()=>{const s=d();return e.jsxs(e.Fragment,{children:[s.pathname==="/"?e.jsx(r,{}):e.jsx(a,{}),e.jsxs(h,{children:[e.jsx(n,{path:"./style-guide",element:e.jsx(r,{})}),e.jsx(n,{path:"./",element:e.jsx(a,{})}),e.jsx(n,{path:"./*",element:e.jsx(a,{})})]})]})},i=`
	mx-1 py-2 px-3 bg-sky-200 rounded-lg
	font-lato font-medium text-sky-800 hover:text-sky-300 hover:bg-sky-600
`,v=()=>e.jsxs("div",{children:[e.jsx(t,{name:"menu"}),e.jsxs("div",{className:"my-3 flex justify-center",children:[e.jsx(o,{className:i,to:"/home",children:"Main App"}),e.jsx(o,{className:i,to:"/standalone/capstone",children:"Rica's Plants"})]})]}),y="text-green-600",N=()=>e.jsxs("div",{className:`
		min-h-screen flex flex-col items-center
		${y}
	`,children:[e.jsxs("div",{children:[e.jsx("h1",{className:"my-6 text-5xl",children:"Capstone Project"}),e.jsx(v,{})]}),e.jsx("div",{children:e.jsx(g,{})}),e.jsx("div",{children:"[Footer goes here]"})]});export{N as default};
