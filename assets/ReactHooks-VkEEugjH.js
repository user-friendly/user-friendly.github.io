import{r as l,j as e,S as b,L as a,R as g,a as m}from"./index-DT6KvBEu.js";import{C as i}from"./Collapsable-DPRM-dLg.js";import{f as c}from"./services-CQQVyGs2.js";const y=()=>{const t=l.useRef(null),s=()=>{t.current.scrollIntoView({behavior:"smooth",block:"center"})};return e.jsxs("div",{className:"relative h-screen bg-violet-100",children:[e.jsx("h2",{className:"p-8 text-3xl font-bold text-violet-700",children:"Example 1"}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{className:"px-8 py-2 mx-8 text-white bg-purple-500 rounded-full",onClick:s,children:"scroll to dog"})}),e.jsx("div",{ref:t,className:"absolute bottom-8 left-8",children:e.jsx("span",{className:"text-5xl",children:"🐕"})})]})},v=()=>{const t=l.useRef(null),s=()=>{t.current.focus()};return e.jsxs("div",{className:"flex flex-col h-screen bg-yellow-100",children:[e.jsx("h2",{className:"p-8 text-3xl font-bold text-amber-700",children:"Example 2"}),e.jsxs("div",{className:"flex items-center justify-center flex-1",children:[e.jsx("button",{onClick:s,className:"px-8 py-2 mx-8 text-white rounded-full bg-amber-600",children:"click to focus on input"}),e.jsx("input",{ref:t,className:"px-4 py-2 bg-yellow-200 border-2 border-yellow-400 rounded-md w-80",placeholder:"this is an input"})]})]})},N=()=>{const[t,s]=l.useState(!1),r=l.useRef(null);return e.jsxs("div",{className:"h-screen bg-emerald-100",children:[e.jsx("h2",{className:"p-8 text-3xl font-bold text-green-700",children:"Example 3"}),e.jsx("button",{onClick:()=>{t?(s(!1),r.current.pause()):(s(!0),r.current.play())},className:"px-8 py-2 mx-8 my-2 text-white rounded-full bg-emerald-600",children:t?"Pause":"Play"}),e.jsx("video",{ref:r,width:"480",children:e.jsx("source",{src:"https://static-task-assets.react-formula.com/kickflip.mp4",type:"video/mp4"})})]})},w=()=>e.jsxs("div",{children:[e.jsx(y,{}),e.jsx(v,{}),e.jsx(N,{})]}),C=t=>{const{message:s,setMessage:r}=l.useContext(h);return e.jsxs("div",{className:"p-2 m-2 border-4 border-violet-400 text-violet-600",children:[e.jsx("div",{children:"Title"}),e.jsx("div",{className:"text-3xl text-center text-black",children:s}),e.jsx("div",{children:typeof s=="object"&&e.jsx("button",{className:"px-6 py-2 m-4 rounded-full bg-stone-200",onClick:()=>r("hey programmers"),children:"Reset"})})]})},k=t=>e.jsxs("div",{className:"p-2 m-2 text-green-600 border-4 border-green-400",children:[e.jsx("div",{children:"Box"}),e.jsx(C,{})]}),R=t=>e.jsxs("div",{className:"p-2 m-2 text-blue-600 border-4 border-blue-400",children:[e.jsx("div",{children:"Wrapper"}),e.jsx(k,{})]}),T=t=>e.jsxs("div",{className:"p-2 m-2 text-orange-600 border-4 border-orange-400",children:[e.jsx("div",{children:"Container"}),e.jsx(R,{})]}),h=l.createContext(null),E=()=>{const[t,s]=l.useState("hello world");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-wrap justify-center my-12",children:[e.jsx("button",{className:"px-6 py-2 m-4 rounded-full bg-stone-200",onClick:()=>s("hello world"),children:"hello world"}),e.jsx("button",{className:"px-6 py-2 m-4 rounded-full bg-stone-200",onClick:()=>s("hey programmers"),children:"hey programmers"}),e.jsx("button",{className:"px-6 py-2 m-4 rounded-full bg-stone-200",onClick:()=>s(e.jsx(b,{})),children:"Spin Me"})]}),e.jsx(h.Provider,{value:{message:t,setMessage:s},children:e.jsx(T,{message:t})})]})},o=l.createContext(null),B={cyan:"bg-cyan-400",rose:"bg-rose-400",yellow:"bg-yellow-400"},u=t=>{const[s,r]=l.useContext(o);return e.jsx("nav",{className:"flex justify-center px-2 shadow-lg",children:e.jsxs("div",{className:"flex justify-between w-full max-w-4xl py-4",children:[e.jsxs(a,{className:"flex items-center",to:"/react-hooks",children:[e.jsx("img",{className:"w-[80px]",src:"https://static-task-assets.react-formula.com/649213.png"}),e.jsx("div",{className:"ml-2 text-3xl font-bold text-orange-900 font-nunito",children:"Bork"})]}),e.jsxs("div",{className:"flex items-center text-gray-400",children:[e.jsxs(a,{className:"flex items-center px-4",to:"/react-hooks/breeds",children:[e.jsx("i",{className:"mr-2 text-2xl fa-regular fa-paw"}),"breeds"]}),e.jsxs(a,{className:"flex items-center px-4",to:"/react-hooks",children:[e.jsx("i",{className:"mr-2 text-2xl fa-regular fa-right-to-bracket"}),"sign-in"]}),e.jsxs("div",{className:"flex items-center px-4",children:[e.jsx("div",{className:c("w-4 h-4 rounded-full",B[s])}),e.jsxs("select",{onChange:n=>r(n.target.value),value:s,children:[e.jsx("option",{value:"cyan",children:"cyan"}),e.jsx("option",{value:"rose",children:"rose"}),e.jsx("option",{value:"yellow",children:"yellow"})]})]})]})]})})},S={cyan:"bg-cyan-200 text-cyan-800 hover:bg-cyan-300",rose:"bg-rose-200 text-rose-800 hover:bg-rose-300",yellow:"bg-yellow-200 text-yellow-800 hover:bg-yellow-300"},P=t=>{const[s,r]=l.useContext(o);return e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx("div",{className:"flex justify-center font-pt-sans",children:e.jsxs("div",{className:"flex flex-col items-center w-full max-w-4xl mt-24",children:[e.jsx("img",{className:"w-[400px]",src:"https://static-task-assets.react-formula.com/564595.png"}),e.jsxs("div",{className:"my-12",children:[e.jsx("div",{className:"text-4xl font-medium text-gray-600 font-nunito",children:"Dog Breeds, made simple"}),e.jsx("div",{className:"text-xl text-gray-500 max-w-[400px] mt-4 mb-8",children:"Find a friendly breeder in your area with Bork"}),e.jsx(a,{className:c("text-2xl rounded-full px-20 py-3",S[s]),to:"/react-hooks/breeds",children:"begin"})]})]})})]})},L="https://user-friendly.dev/learning-api/demos/theme-context/breeds",I=()=>fetch(L),O={cyan:"bg-cyan-400",rose:"bg-rose-400",yellow:"bg-yellow-400"},_=t=>{const{breed:s}=t,[r,n]=l.useContext(o);return e.jsxs("div",{className:"flex my-6 border border-gray-300 rounded-lg overflow-clip",children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:s.image_source,className:"object-cover w-80 h-80"}),e.jsx("div",{className:"top-0 left-0 w-full h-full absolute bg-gradient-to-t from-black/70 to-30%"}),e.jsx("div",{className:"absolute bottom-0 m-4 text-xl text-white font-nunito",children:s.name})]}),e.jsxs("div",{className:"relative flex-1 p-4 text-gray-600 border-l border-gray-200 font-pt-sans",children:[s.description,e.jsx("div",{className:c("top-0 right-0 w-2 absolute h-full",O[r])})]})]})},F={cyan:"text-cyan-500",rose:"text-rose-500",yellow:"text-yellow-500"},M=t=>{const[s,r]=l.useContext(o),[n,p]=l.useState([]),[j,d]=l.useState(!1);return l.useEffect(()=>{(async()=>{d(!0);const x=await I();p(await x.json()),d(!1)})()},[]),e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx("div",{className:"flex justify-center font-pt-sans",children:e.jsx("div",{className:"flex flex-col items-center w-full max-w-4xl px-2 my-24",children:j?e.jsx("i",{className:c("fad fa-spinner-third animate-spin text-4xl my-20",F[s])}):n.map((x,f)=>e.jsx(_,{breed:x},f))})})]})},D=()=>{const[t,s]=l.useState("cyan");return e.jsx(o.Provider,{value:[t,s],children:e.jsxs(g,{children:[e.jsx(m,{path:"*",element:e.jsx(P,{})}),e.jsx(m,{path:"breeds",element:e.jsx(M,{})})]})})},W=({children:t})=>{let s=0;const r=[e.jsx(i,{collapse:!0,title:"Refs",children:e.jsx(w,{})},s++),e.jsx(i,{collapse:!0,title:"Intro to React Context",children:e.jsx(E,{})},s++),e.jsx(i,{collapse:!1,title:"Theme Context",children:e.jsx(D,{})},s++)];return e.jsxs("div",{className:"h-full flex flex-col justify-start items-strech",children:[e.jsx("h1",{className:"my-4 text-5xl self-center",children:"Other React Hooks"}),r]})};export{W as default};
