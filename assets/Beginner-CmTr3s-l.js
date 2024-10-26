import{j as e,r as c,B as i,C as a}from"./index-DkSkxKc0.js";import{_ as g}from"./services-7kcaoxLK.js";const h=[{text:"One of my most productive days was throwing away 1000 lines of code.",author:"Ken Thompson",bio:"Designer of Unix Operating System"},{text:"A ship in port is safe, but that's not what ships are built for.",author:"Admiral Grace Hopper",bio:"Inventor of Programming Compilers"},{text:"If you optimize everything, you will always be unhappy.",author:"Donald Knuth",bio:"Pioneer of Algorithm Analysis"}],E=({text:t,author:s,bio:n})=>e.jsxs("div",{className:"w-[20rem] flex flex-col",children:[e.jsx("div",{className:`
			p-6 rounded-t-lg
			bg-cyan-600
			text-cyan-200
		`,children:t}),e.jsxs("div",{className:`
			flex flex-col items-center
			p-4 rounded-b-lg
			border border-stone-300
			bg-stone-100
			text-stone-400
		`,children:[e.jsx("div",{className:"mb-1 text-cyan-700 text-lg",children:s}),e.jsx("div",{className:"text-slate-400",children:n})]})]}),F=({text:t,author:s,bio:n})=>e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:`
			w-44 p-3
			rounded-l-lg
			bg-blue-600
			text-blue-200
		`,children:[e.jsx("div",{className:"text-white text-lg mb-2",children:s}),e.jsx("div",{className:"text-xs text-blue-300",children:n})]}),e.jsx("div",{className:`
			w-64
			p-8 rounded-r-full
			border border-stone-300
			text-stone-500
			flex items-center
		`,children:t})]}),I=({text:t,author:s,bio:n})=>e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("div",{className:`
			p-6
			rounded-md rounded-bl-none
			bg-rose-400
			text-white
		`,children:t}),e.jsxs("div",{className:`
			p-4
			rounded-b-md
			border-2 border-t-0 border-rose-300
			bg-rose-100
		`,children:[e.jsx("div",{className:"text-rose-700 text-sm",children:s}),e.jsx("div",{className:"text-rose-500 text-xs",children:n})]})]}),A=()=>e.jsxs("div",{className:"h-full flex flex-col justify-between",children:[e.jsx("h2",{className:"text-4xl text-center pb-6",children:"Analyzing Layouts Exercise"}),e.jsxs("div",{className:`
			bg-white grow
			text-sm flex flex-col justify-evenly gap-y-4 items-center
		`,children:[e.jsx(E,{...h[0]}),e.jsx(F,{...h[1]}),e.jsx(I,{...h[2]})]})]}),y=({children:t="Button",large:s=!1})=>{const n=s?"text-3xl rounded-full":"text-base rounded-md";return e.jsx("button",{className:`
		bg-blue-200 border-2 border-blue-700 text-blue-700 px-10 py-2 m-4
		transition-[background-color] duration-700 hover:bg-purple-200
		${n}
	`,children:t})},T=()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(y,{large:!0,children:"Button 2"})]}),m=[{name:"Winnifred",age:10,breed:"Scottish Fold",location:"Queens, NY",imageUrl:"https://static-task-assets.react-formula.com/378212.jpg"},{name:"Abby",age:4,breed:"Abysinnian",location:"Charleston, WV",imageUrl:"https://static-task-assets.react-formula.com/470756.jpg"},{name:"Simon",age:2,breed:"Siamese",location:"Seattle, WA",imageUrl:"https://static-task-assets.react-formula.com/130714.jpg"},{name:"Marcus",age:5,breed:"Maine Coon",location:"Bar Harbor, ME",imageUrl:"https://static-task-assets.react-formula.com/010338.jpg"},{name:"Penelope",age:6,breed:"Persian",location:"Tuscon, AZ",imageUrl:"https://static-task-assets.react-formula.com/774965.jpg"}],d=({children:t,label:s,text:n})=>e.jsxs("div",{className:"flex flex-row text-neutral-500",children:[e.jsx("div",{className:"mr-2 font-bold w-full max-w-24",children:s}),e.jsx("div",{children:n})]}),U=({children:t,cat:s})=>e.jsxs("div",{className:"flex flex-col border border-neutral-600 rounded-lg mx-4",children:[e.jsx("div",{children:e.jsx("img",{className:"w-80 h-64 object-cover rounded-t-lg",src:s.imageUrl})}),e.jsxs("div",{className:"p-4",children:[e.jsx(d,{label:"Name",text:s.name}),e.jsx(d,{label:"Age",text:s.age}),e.jsx(d,{label:"Breed",text:s.breed}),e.jsx(d,{label:"Location",text:s.location})]})]}),v=({children:t,onClick:s,visible:n=!0})=>e.jsx("button",{className:`font-noto text-4xl ${n?null:"invisible"}`,onClick:s,children:t}),N=t=>t>=m.length?m.length-1:t<0?0:t,$=()=>{const[t,s]=c.useState(0);return e.jsxs("div",{className:"h-full flex flex-col justify-start items-center",children:[e.jsx("h1",{className:"mb-4 text-4xl",children:"Cat Carousel"}),e.jsxs("div",{className:"flex flex-row",children:[t>0?e.jsx(v,{onClick:n=>s(N(t-1)),children:"⬅"}):null,e.jsx(U,{cat:m[t]}),e.jsx(v,{onClick:n=>s(N(t+1)),visible:t<m.length-1,children:"➡"})]})]})},f="m-2 px-4 text-white rounded-md",D=()=>{const[t,s]=c.useState("user friendly was here!");return e.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[e.jsx("div",{className:"text-3xl text-stone-400",children:t}),e.jsxs("div",{className:"flex mt-4",children:[e.jsx("button",{onClick:n=>s("bye!"),className:f+" bg-green-400",children:"One"}),e.jsx("button",{onClick:n=>s("yay!"),className:f+" bg-red-400",children:"Two"}),e.jsx("button",{onClick:n=>s("woooo!"),className:f+" bg-violet-400",children:"Three"})]})]})},M=()=>{const[t,s]=c.useState(!1);return e.jsxs("div",{className:`
		bg-green-100 border border-green-300 p-4 rounded-lg m-4 text-center
		flex flex-col items-center
	`,children:[e.jsx("button",{onClick:n=>s(!t),className:"px-4 py-2 bg-teal-500 text-white rounded-full",children:"click me"}),t?e.jsx("span",{className:"text-4xl mt-4",children:"🙃"}):null]})},P=()=>{const[t,s]=c.useState(!1),n=x=>{setTimeout(()=>s(!t),2e3)};return e.jsx("div",{className:`
		bg-sky-100 border border-green-300 p-4 rounded-lg m-4 text-center
		flex flex-col items-center
	`,children:e.jsx("button",{onClick:n,className:`px-4 py-2 ${t?"bg-orange-500":"bg-blue-500"} text-white rounded-full`,children:"click me"})})},L=()=>{const[t,s]=c.useState(!1);return e.jsxs("div",{className:`
		bg-purple-100 border border-green-300 p-4 rounded-lg m-4 text-center
		flex flex-col items-center
	`,children:[e.jsx("span",{className:`text-4xl mb-4 ${!t&&"invisible"}`,children:"💩"}),e.jsx("button",{onClick:n=>s(!t),className:"px-4 py-2 bg-fuchsia-500 text-white rounded-full",children:"click me"})]})},W=()=>e.jsxs("div",{className:"h-full flex flex-col flex justify-start items-center gap-y-4 font-noto",children:[e.jsx(M,{}),e.jsx(P,{}),e.jsx(L,{})]}),R=2,p=1,S=16,u=1,z=1e3,Q={n:0,d:u,tId:null},B=t=>{const s=R**t.d;return t.d<S&&(t.d+=1),parseInt(s*p)},w=(t,s=!1)=>(s?t.n+=B(t):t.n+=p,g.create({},t)),C=(t,s=!1)=>(s?t.n-=B(t):t.n-=p,g.create({},t)),H=()=>{const[t,s]=c.useState(Q);c.useEffect(()=>(t.d>u?t.tId=setTimeout(()=>{console.log(`reset delta to: ${u}`),t.d=u,s(g.create({},t))},z):console.log("delta is unchanged"),()=>{t.tId&&(console.log("cancel timeout"),clearTimeout(t.tId))}),[t]);const n=(t.d-1)/(S-1);return e.jsxs("div",{className:"h-full flex flex-col justify-center items-center text-3xl font-noto",children:[e.jsx("span",{className:"p-4 mb-4 rounded-xl text-black text-6xl text-center",style:{backgroundColor:`rgba(239, 68, 68, ${n})`},children:t.n}),e.jsxs("div",{className:"flex flex-row justify-center items-center gap-x-8",children:[e.jsx("button",{onClick:x=>s(C(t,!0)),className:"p-4 bg-red-300 text-white rounded-lg",children:"➖➖"}),e.jsx("button",{onClick:x=>s(C(t)),className:"p-4 bg-red-400 text-white rounded-lg",children:"➖"}),e.jsx("button",{onClick:x=>s(w(t)),className:"p-4 bg-green-400 text-white rounded-lg",children:"➕"}),e.jsx("button",{onClick:x=>s(w(t,!0)),className:"p-4 bg-green-300 text-white rounded-lg",children:"➕➕"})]})]})},O="🐈",r=()=>e.jsx("div",{className:"p-2 border-2 rounded-lg border-amber-400",children:e.jsx("span",{className:"fa-solid fa-cat text-2xl text-amber-400",children:O})}),o=({children:t})=>e.jsx("span",{className:"absolute top-0 left-2 text-slate-200 text-xs",children:t}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-4xl flex justify-center",children:"Flex Exercise"}),e.jsxs("div",{className:"font-noto",children:[e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-blue-400 relative
	  	justify-center
	  `,children:[e.jsx(o,{children:"justify-center"}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]}),e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-red-400 relative
	  	justify-between
	  `,children:[e.jsx(o,{children:"justify-between"}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]}),e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-green-400 relative
	  	justify-center items-center
	  `,children:[e.jsx(o,{children:"justify-center items-center"}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]}),e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-purple-400 relative
	  	justify-around items-end
	  `,children:[e.jsx(o,{children:"justify-around items-end"}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]}),e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-orange-400 relative
	  	justify-between items-center
	  `,children:[e.jsx(o,{children:"justify-between items-center"}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]})]})]}),V="🐕",l=()=>e.jsx("div",{className:"p-2 border-2 rounded-lg border-amber-400",children:e.jsx("span",{className:"fa-solid fa-cat text-2xl text-amber-400",children:V})}),j=({children:t})=>e.jsx("span",{className:"absolute top-0 left-2 text-slate-200 text-xs",children:t}),Y=()=>e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-blue-400 relative
		flex-row justify-center items-center
	`,children:[e.jsx(j,{children:"flex-row, justify-center"}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{})]}),_=()=>e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-gray-400 relative
		flex-col justify-between items-center
	`,children:[e.jsx(j,{children:"flex-col justify-between items-center"}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{})]}),q=()=>e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-cyan-400 relative
		flex-col justify-end items-center
	`,children:[e.jsx(j,{children:"flex-col justify-end items-center"}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{})]}),G=()=>e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-red-400 relative
		flex-col justify-around items-end
	`,children:[e.jsx(j,{children:"flex-col justify-around items-end"}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{})]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-4xl flex justify-center",children:"Flex Exercise II"}),e.jsxs("div",{className:"font-noto",children:[e.jsx(Y,{}),e.jsx(_,{}),e.jsx(q,{}),e.jsx(G,{})]})]}),J="🕵️",b="select-none cursor-pointer p-2",X=()=>e.jsxs("div",{className:`
		px-4 py-2
		flex justify-between items-center
		bg-orange-200
		
		text-orange-700
	`,children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(i,{type:"route",route:"/about",style:b,children:"About"}),e.jsx(i,{type:"route",route:"/about",style:b,children:"Store"})]}),e.jsx("div",{children:e.jsxs(i,{type:"route",route:"/preferences",style:b,children:["Preferences"," ",e.jsx("span",{className:"font-noto text-xl",children:J})]})})]}),ee="🔍",k=`
	px-8 py-2
	rounded-lg
	bg-violet-200
	text-violet-500
`,te=()=>e.jsxs("div",{className:`
		flex-1
		flex flex-col justify-center items-center
		bg-orange-100
	`,children:[e.jsx("h1",{className:`
			mb-8
			text-7xl
			text-orange-400
		`,children:"Foogle"}),e.jsxs("div",{className:`
			py-4 px-6 mb-8 w-[32rem]
			rounded-full
			border border-orange-400
			bg-orange-200
			text-lg
			text-orange-700
			
			flex flex-row justify-center items-center
		`,children:[e.jsx("span",{className:"font-noto text-2xl",children:ee}),e.jsx("input",{className:"flex-1 ml-4 bg-orange-200",type:"text",name:"search",defaultValue:"Enter Your search here!"})]}),e.jsxs("div",{className:"flex flex-row justify-center items-center gap-4",children:[e.jsx(i,{type:"route",route:"/search",style:k,children:"Foogle Search"}),e.jsx(i,{type:"route",route:"/search/image",style:k,children:"Image Search"})]})]}),se=()=>e.jsxs("div",{className:`
		p-4
		
		flex flex-row justify-between
		
		bg-violet-200
		text-violet-300
	`,children:[e.jsx("div",{children:"(this is not a real site)"}),e.jsxs("div",{children:["Made with ❤️ and ",e.jsx("a",{href:"https://tailwindcss.com/",target:"_blank",className:"text-violet-400 underline",children:"Tailwind CSS"})]}),e.jsx("div",{children:"Created by User Friendly"})]}),ne=()=>e.jsxs("div",{className:"h-full min-h-[700px] flex flex-col justify-between",children:[e.jsx(X,{}),e.jsx(te,{}),e.jsx(se,{})]}),ae=({children:t})=>{let s=0;const n=[e.jsx(a,{collapse:!0,title:"Button Component Exercise",children:e.jsx(T,{})},s++),e.jsx(a,{collapse:!0,title:"Flex Exercise 1",children:e.jsx(K,{})},s++),e.jsx(a,{collapse:!0,title:"Flex Exercise 2",children:e.jsx(Z,{})},s++),e.jsx(a,{collapse:!0,title:"Analyzing Layouts",children:e.jsx(A,{})},s++),e.jsx(a,{collapse:!1,title:"Search Page Design",children:e.jsx(ne,{})},s++),e.jsx(a,{collapse:!0,title:"Click Event Exercise",children:e.jsx(D,{})},s++),e.jsx(a,{collapse:!0,title:"Conditional Rendering",children:e.jsx(W,{})},s++),e.jsx(a,{collapse:!0,title:"Counter",children:e.jsx(H,{})},s++),e.jsx(a,{collapse:!0,title:"Cat Carousel",children:e.jsx($,{})},s++)];return e.jsxs("div",{className:"h-full flex flex-col justify-start items-strech",children:[e.jsx("h1",{className:"my-4 text-5xl self-center",children:"Modules 1, 2, & 3"}),n]})};export{ae as default};
