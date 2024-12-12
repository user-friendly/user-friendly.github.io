import{j as e,r as c,_ as p}from"./index-BSEnfKhz.js";import{C as a}from"./Collapsable-DRG2q-u9.js";import"./services-CQQVyGs2.js";const f=[{text:"One of my most productive days was throwing away 1000 lines of code.",author:"Ken Thompson",bio:"Designer of Unix Operating System"},{text:"A ship in port is safe, but that's not what ships are built for.",author:"Admiral Grace Hopper",bio:"Inventor of Programming Compilers"},{text:"If you optimize everything, you will always be unhappy.",author:"Donald Knuth",bio:"Pioneer of Algorithm Analysis"}],I=({text:t,author:s,bio:n})=>e.jsxs("div",{className:"w-[20rem] flex flex-col",children:[e.jsx("div",{className:`
			p-6 rounded-t-lg
			bg-cyan-600
			text-cyan-200
		`,children:t}),e.jsxs("div",{className:`
			flex flex-col items-center
			p-4 rounded-b-lg
			border border-stone-300
			bg-stone-100
			text-stone-400
		`,children:[e.jsx("div",{className:"mb-1 text-cyan-700 text-lg",children:s}),e.jsx("div",{className:"text-slate-400",children:n})]})]}),A=({text:t,author:s,bio:n})=>e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:`
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
		`,children:t})]}),T=({text:t,author:s,bio:n})=>e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("div",{className:`
			p-6
			rounded-md rounded-bl-none
			bg-rose-400
			text-white
		`,children:t}),e.jsxs("div",{className:`
			p-4
			rounded-b-md
			border-2 border-t-0 border-rose-300
			bg-rose-100
		`,children:[e.jsx("div",{className:"text-rose-700 text-sm",children:s}),e.jsx("div",{className:"text-rose-500 text-xs",children:n})]})]}),D=()=>e.jsxs("div",{className:"h-full flex flex-col justify-between",children:[e.jsx("h2",{className:"text-4xl text-center pb-6",children:"Analyzing Layouts Exercise"}),e.jsxs("div",{className:`
			bg-white grow
			text-sm flex flex-col justify-evenly gap-y-4 items-center
		`,children:[e.jsx(I,{...f[0]}),e.jsx(A,{...f[1]}),e.jsx(T,{...f[2]})]})]}),N=({children:t="Button",large:s=!1})=>{const n=s?"text-3xl rounded-full":"text-base rounded-md";return e.jsx("button",{className:`
		bg-blue-200 border-2 border-blue-700 text-blue-700 px-10 py-2 m-4
		transition-[background-color] duration-700 hover:bg-purple-200
		${n}
	`,children:t})},U=()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx(N,{large:!0,children:"Button 2"})]}),j=[{name:"Winnifred",age:10,breed:"Scottish Fold",location:"Queens, NY",imageUrl:"https://static-task-assets.react-formula.com/378212.jpg"},{name:"Abby",age:4,breed:"Abysinnian",location:"Charleston, WV",imageUrl:"https://static-task-assets.react-formula.com/470756.jpg"},{name:"Simon",age:2,breed:"Siamese",location:"Seattle, WA",imageUrl:"https://static-task-assets.react-formula.com/130714.jpg"},{name:"Marcus",age:5,breed:"Maine Coon",location:"Bar Harbor, ME",imageUrl:"https://static-task-assets.react-formula.com/010338.jpg"},{name:"Penelope",age:6,breed:"Persian",location:"Tuscon, AZ",imageUrl:"https://static-task-assets.react-formula.com/774965.jpg"}],u=({children:t,label:s,text:n})=>e.jsxs("div",{className:"flex flex-row text-neutral-500",children:[e.jsx("div",{className:"mr-2 font-bold w-full max-w-24",children:s}),e.jsx("div",{children:n})]}),$=({children:t,cat:s})=>e.jsxs("div",{className:"flex flex-col border border-neutral-600 rounded-lg mx-4",children:[e.jsx("div",{children:e.jsx("img",{className:"w-80 h-64 object-cover rounded-t-lg",src:s.imageUrl})}),e.jsxs("div",{className:"p-4",children:[e.jsx(u,{label:"Name",text:s.name}),e.jsx(u,{label:"Age",text:s.age}),e.jsx(u,{label:"Breed",text:s.breed}),e.jsx(u,{label:"Location",text:s.location})]})]}),w=({children:t,onClick:s,visible:n=!0})=>e.jsx("button",{className:`font-noto text-4xl ${n?null:"invisible"}`,onClick:s,children:t}),C=t=>t>=j.length?j.length-1:t<0?0:t,M=()=>{const[t,s]=c.useState(0);return e.jsxs("div",{className:"h-full flex flex-col justify-start items-center",children:[e.jsx("h1",{className:"mb-4 text-4xl",children:"Cat Carousel"}),e.jsxs("div",{className:"flex flex-row",children:[t>0?e.jsx(w,{onClick:n=>s(C(t-1)),children:"⬅"}):null,e.jsx($,{cat:j[t]}),e.jsx(w,{onClick:n=>s(C(t+1)),visible:t<j.length-1,children:"➡"})]})]})},b="m-2 px-4 text-white rounded-md",P=()=>{const[t,s]=c.useState("user friendly was here!");return e.jsxs("div",{className:"h-full flex flex-col items-center justify-center",children:[e.jsx("div",{className:"text-3xl text-stone-400",children:t}),e.jsxs("div",{className:"flex mt-4",children:[e.jsx("button",{onClick:n=>s("bye!"),className:b+" bg-green-400",children:"One"}),e.jsx("button",{onClick:n=>s("yay!"),className:b+" bg-red-400",children:"Two"}),e.jsx("button",{onClick:n=>s("woooo!"),className:b+" bg-violet-400",children:"Three"})]})]})},L=()=>{const[t,s]=c.useState(!1);return e.jsxs("div",{className:`
		bg-green-100 border border-green-300 p-4 rounded-lg m-4 text-center
		flex flex-col items-center
	`,children:[e.jsx("button",{onClick:n=>s(!t),className:"px-4 py-2 bg-teal-500 text-white rounded-full",children:"click me"}),t?e.jsx("span",{className:"text-4xl mt-4",children:"🙃"}):null]})},W=()=>{const[t,s]=c.useState(!1),n=o=>{setTimeout(()=>s(!t),2e3)};return e.jsx("div",{className:`
		bg-sky-100 border border-green-300 p-4 rounded-lg m-4 text-center
		flex flex-col items-center
	`,children:e.jsx("button",{onClick:n,className:`px-4 py-2 ${t?"bg-orange-500":"bg-blue-500"} text-white rounded-full`,children:"click me"})})},R=()=>{const[t,s]=c.useState(!1);return e.jsxs("div",{className:`
		bg-purple-100 border border-green-300 p-4 rounded-lg m-4 text-center
		flex flex-col items-center
	`,children:[e.jsx("span",{className:`text-4xl mb-4 ${!t&&"invisible"}`,children:"💩"}),e.jsx("button",{onClick:n=>s(!t),className:"px-4 py-2 bg-fuchsia-500 text-white rounded-full",children:"click me"})]})},z=()=>e.jsxs("div",{className:"h-full flex flex-col flex justify-start items-center gap-y-4 font-noto",children:[e.jsx(L,{}),e.jsx(W,{}),e.jsx(R,{})]}),Q=2,y=1,E=16,m=1,H=1e3,O={n:0,d:m,tId:null},F=t=>{const s=Q**t.d;return t.d<E&&(t.d+=1),parseInt(s*y)},k=(t,s=!1)=>(s?t.n+=F(t):t.n+=y,p.create({},t)),S=(t,s=!1)=>(s?t.n-=F(t):t.n-=y,p.create({},t)),K=()=>{const[t,s]=c.useState(O);c.useEffect(()=>(t.d>m?t.tId=setTimeout(()=>{console.log(`reset delta to: ${m}`),t.d=m,s(p.create({},t))},H):console.log("delta is unchanged"),()=>{t.tId&&(console.log("cancel timeout"),clearTimeout(t.tId))}),[t]);const n=(t.d-1)/(E-1);return e.jsxs("div",{className:"h-full flex flex-col justify-center items-center text-3xl font-noto",children:[e.jsx("span",{className:"p-4 mb-4 rounded-xl text-black text-6xl text-center",style:{backgroundColor:`rgba(239, 68, 68, ${n})`},children:t.n}),e.jsxs("div",{className:"flex flex-row justify-center items-center gap-x-8",children:[e.jsx("button",{onClick:o=>s(S(t,!0)),className:"p-4 bg-red-300 text-white rounded-lg",children:"➖➖"}),e.jsx("button",{onClick:o=>s(S(t)),className:"p-4 bg-red-400 text-white rounded-lg",children:"➖"}),e.jsx("button",{onClick:o=>s(k(t)),className:"p-4 bg-green-400 text-white rounded-lg",children:"➕"}),e.jsx("button",{onClick:o=>s(k(t,!0)),className:"p-4 bg-green-300 text-white rounded-lg",children:"➕➕"})]})]})},V="🐈",r=()=>e.jsx("div",{className:"p-2 border-2 rounded-lg border-amber-400",children:e.jsx("span",{className:"fa-solid fa-cat text-2xl text-amber-400",children:V})}),x=({children:t})=>e.jsx("span",{className:"absolute top-0 left-2 text-slate-200 text-xs",children:t}),Y=()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-4xl flex justify-center",children:"Flex Exercise"}),e.jsxs("div",{className:"font-noto",children:[e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-blue-400 relative
	  	justify-center
	  `,children:[e.jsx(x,{children:"justify-center"}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]}),e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-red-400 relative
	  	justify-between
	  `,children:[e.jsx(x,{children:"justify-between"}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]}),e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-green-400 relative
	  	justify-center items-center
	  `,children:[e.jsx(x,{children:"justify-center items-center"}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]}),e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-purple-400 relative
	  	justify-around items-end
	  `,children:[e.jsx(x,{children:"justify-around items-end"}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]}),e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-orange-400 relative
	  	justify-between items-center
	  `,children:[e.jsx(x,{children:"justify-between items-center"}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]})]})]}),_="🐕",l=()=>e.jsx("div",{className:"p-2 border-2 rounded-lg border-amber-400",children:e.jsx("span",{className:"fa-solid fa-cat text-2xl text-amber-400",children:_})}),h=({children:t})=>e.jsx("span",{className:"absolute top-0 left-2 text-slate-200 text-xs",children:t}),q=()=>e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-blue-400 relative
		flex-row justify-center items-center
	`,children:[e.jsx(h,{children:"flex-row, justify-center"}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{})]}),G=()=>e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-gray-400 relative
		flex-col justify-between items-center
	`,children:[e.jsx(h,{children:"flex-col justify-between items-center"}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{})]}),Z=()=>e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-cyan-400 relative
		flex-col justify-end items-center
	`,children:[e.jsx(h,{children:"flex-col justify-end items-center"}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{})]}),J=()=>e.jsxs("div",{className:`flex h-64 p-4 m-4 border-2 border-red-400 relative
		flex-col justify-around items-end
	`,children:[e.jsx(h,{children:"flex-col justify-around items-end"}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-4xl flex justify-center",children:"Flex Exercise II"}),e.jsxs("div",{className:"font-noto",children:[e.jsx(q,{}),e.jsx(G,{}),e.jsx(Z,{}),e.jsx(J,{})]})]}),ee=`
	select-none cursor-pointer px-2.5 rounded-xl bg-sky-400 transition-bg
`,d=({children:t,route:s,type:n="button",style:o=ee,onClick:v=i=>{}})=>s===void 0?e.jsx("button",{type:n,onClick:i=>v(i,s),className:o,children:t}):e.jsx("a",{href:s,onClick:i=>{i.preventDefault(),v(i,s)},className:o,children:t}),te="🕵️",g="select-none cursor-pointer p-2",se=()=>e.jsxs("div",{className:`
		px-4 py-2
		flex justify-between items-center
		bg-orange-200
		
		text-orange-700
	`,children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(d,{type:"route",route:"/about",style:g,children:"About"}),e.jsx(d,{type:"route",route:"/about",style:g,children:"Store"})]}),e.jsx("div",{children:e.jsxs(d,{type:"route",route:"/preferences",style:g,children:["Preferences"," ",e.jsx("span",{className:"font-noto text-xl",children:te})]})})]}),ne="🔍",B=`
	px-8 py-2
	rounded-lg
	bg-violet-200
	text-violet-500
`,re=()=>e.jsxs("div",{className:`
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
		`,children:[e.jsx("span",{className:"font-noto text-2xl",children:ne}),e.jsx("input",{className:"flex-1 ml-4 bg-orange-200",type:"text",name:"search",defaultValue:"Enter Your search here!"})]}),e.jsxs("div",{className:"flex flex-row justify-center items-center gap-4",children:[e.jsx(d,{type:"route",route:"/search",style:B,children:"Foogle Search"}),e.jsx(d,{type:"route",route:"/search/image",style:B,children:"Image Search"})]})]}),le=()=>e.jsxs("div",{className:`
		p-4
		
		flex flex-row justify-between
		
		bg-violet-200
		text-violet-300
	`,children:[e.jsx("div",{children:"(this is not a real site)"}),e.jsxs("div",{children:["Made with ❤️ and ",e.jsx("a",{href:"https://tailwindcss.com/",target:"_blank",className:"text-violet-400 underline",children:"Tailwind CSS"})]}),e.jsx("div",{children:"Created by User Friendly"})]}),ae=()=>e.jsxs("div",{className:"h-full min-h-[700px] flex flex-col justify-between",children:[e.jsx(se,{}),e.jsx(re,{}),e.jsx(le,{})]}),xe=({children:t})=>{let s=0;const n=[e.jsx(a,{collapse:!0,title:"Button Component Exercise",children:e.jsx(U,{})},s++),e.jsx(a,{collapse:!0,title:"Flex Exercise 1",children:e.jsx(Y,{})},s++),e.jsx(a,{collapse:!0,title:"Flex Exercise 2",children:e.jsx(X,{})},s++),e.jsx(a,{collapse:!0,title:"Analyzing Layouts",children:e.jsx(D,{})},s++),e.jsx(a,{collapse:!1,title:"Search Page Design",children:e.jsx(ae,{})},s++),e.jsx(a,{collapse:!0,title:"Click Event Exercise",children:e.jsx(P,{})},s++),e.jsx(a,{collapse:!0,title:"Conditional Rendering",children:e.jsx(z,{})},s++),e.jsx(a,{collapse:!0,title:"Counter",children:e.jsx(K,{})},s++),e.jsx(a,{collapse:!0,title:"Cat Carousel",children:e.jsx(M,{})},s++)];return e.jsxs("div",{className:"h-full flex flex-col justify-start items-strech",children:[e.jsx("h1",{className:"my-4 text-5xl self-center",children:"Modules 1, 2, & 3"}),n]})};export{xe as default};
