import{r as c,j as e,A as o,L as i,B as r}from"./index-E6TzV6mp.js";import{f as n}from"./services-D8YECjA7.js";const a=`
	text-xl font-medium hover:underline
	py-6 pl-8 text-violet-300
	md:mx-4 md:text-inherit md:p-0
`,m=`
	bg-violet-900 text-violet-400
	
	pb-6 fixed top-0 right-0 w-48 rounded-bl-lg roudned-tr-lg
	flex flex-col
	
	md:block md:static md:p-0 md:w-auto md:text-inherit md:bg-transparent
`,d="md:hidden self-end mt-8 mr-4 p-3 rounded-full bg-violet-500",x=t=>{const[s,l]=c.useState(!1);return e.jsx("div",{className:"mb-8 flex justify-center shadow-lg bg-violet-50",children:e.jsxs("div",{className:`w-full max-w-6xl py-4 px-4 flex justify-center items-center
		`,children:[e.jsx("img",{className:"w-20 md:w-24",src:"https://static-task-assets.react-formula.com/899963.png",title:"hashtag"}),e.jsx("h1",{className:"ml-4 font-ubuntu text-4xl",children:"hasher"}),e.jsxs("div",{className:"flex-1 flex justify-end ",children:[e.jsx("div",{className:"md:hidden text-4xl",children:e.jsx("button",{onClick:()=>l(!0),type:"button",children:"🍔"})}),e.jsxs("div",{className:n(m,!s&&"hidden"),children:[e.jsx("button",{className:d,onClick:()=>l(!1),type:"button",children:"❌"}),e.jsx(o,{className:a+" text-left",appid:"default",children:"Main App"}),e.jsx(i,{className:a,to:"/about",children:"About"}),e.jsx(i,{className:a,to:"/contact",children:"Contact"}),e.jsx(i,{className:n(a,"hover:no-underline "),to:"https://www.duckduckgo.com/",target:"_blank",children:"🔍"})]})]})]})})},u=()=>e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"w-full max-w-6xl py-32 px-6 flex flex-col-reverse md:flex-row justify-center items-center",children:[e.jsxs("div",{className:"md:max-w-[450px] md:text-5xl text-4xl font-ubuntu font-medium ",children:["Something ",e.jsx("span",{className:"text-yellow-500",children:"Catchy"})," and ",e.jsx("span",{className:"text-red-600",children:"Technological"}),e.jsx("br",{}),e.jsx(i,{to:"#",className:`
					inline-block my-10 py-3 px-12 border-4 border-violet-800 font-medium text-2xl text-violet-600
				`,children:"Learn More"})]}),e.jsx("img",{className:"mt-28 mb-16 md:w-[420px] lg:w-[680px] md:m-0",src:"https://static-task-assets.react-formula.com/963190.png",title:"Hashtag"})]})}),p=({image:t,title:s,desc:l})=>e.jsxs("div",{className:"m-8 w-[300px]",children:[e.jsx("div",{children:e.jsx("img",{className:"w-[120px]",src:t})}),e.jsx("div",{className:"mt-4 mb-2 font-ubuntu text-2xl",children:s}),e.jsx("div",{className:"font-roboto text-slate-600",children:l})]});let h=[{image:"https://static-task-assets.react-formula.com/259977.png",title:"Safe and Secure",description:"We use advanced encryption and will never sell your data, while you are looking."},{image:"https://static-task-assets.react-formula.com/384389.png",title:"Debugging Help",description:"When errors occur, we will dispatch a group of skilled coding monkeys to assist."},{image:"https://static-task-assets.react-formula.com/683765.png",title:"Artificially Intelligent",description:"We have more than a decade of experience copying from Google."},{image:"https://static-task-assets.react-formula.com/657689.png",title:"Advanced Analytics",description:"We actually don't know what this means; but it sells well."},{image:"https://static-task-assets.react-formula.com/742903.png",title:"Cloud Computing",description:"50% of the time, our servers are up 100% of the time."},{image:"https://static-task-assets.react-formula.com/545388.png",title:"24/7 Customer Support",description:"We have catchy music that we'll play when we put you on hold for hours."}];const f=()=>e.jsx("div",{className:"flex justify-center pb-64",children:e.jsxs("div",{className:"w-full max-w-6xl flex flex-col items-center",children:[e.jsx("div",{className:"px-2 mb-8 text-3xl text-center font-ubuntu",children:"Proudly Disappointing Users, since 2016"}),e.jsx("div",{className:"flex flex-wrap justify-center",children:h.map((t,s)=>e.jsx(p,{title:t.title,desc:t.description,image:t.image},s))})]})}),g="Mobile Responsive Design",w=()=>(c.useEffect(()=>{document.title=g},[]),e.jsx(r,{children:e.jsxs("div",{className:"min-h-screen font-roboto text-violet-800",children:[e.jsx(x,{}),e.jsx(u,{}),e.jsx(f,{})]})}));export{w as default};
