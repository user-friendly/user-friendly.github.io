import{r as c,j as e,F as v,_ as w}from"./index-Crtk013V.js";import{C as y}from"./Collapsable-BP3dwepp.js";import"./services-CQQVyGs2.js";const $="https://user-friendly.dev/learning-api/demos/message-board/messages",T=()=>{const[s,t]=c.useState([]),[o,d]=c.useState("guest"),[n,h]=c.useState(""),x=c.useRef(null),a=c.useRef(null),f=()=>{fetch($).then(l=>l.json()).then(l=>{t(l),h("")}).catch(l=>{console.log(`failed to get messages: ${l}`)})},u=l=>{const r=JSON.stringify(l);fetch($,{method:"POST",headers:{"Content-Type":"application/json"},body:r}).then(i=>{if(!i.ok)throw Error(i.statusText);f()}).catch(i=>{console.log(`failed to post new message: ${i}`)})},m=l=>{const r={username:o,message:n};w.trim(r.username)==""||w.trim(r.message)==""||u(r)};c.useEffect(()=>{f()},[]),c.useEffect(()=>{a.current.scrollTop=a.current.scrollHeight,x.current.scrollIntoView(!1),x.current.focus()},[s]);const g=s.map((l,r)=>e.jsxs("div",{className:"p-6 m-4 border border-gray-300 rounded-md shadow-md",children:[e.jsx("div",{className:"mb-2 text-lg font-medium",children:l.username}),e.jsx("div",{children:l.message})]},r));return e.jsxs("div",{ref:x,className:"pb-6 flex flex-col items-center",children:[e.jsx("div",{ref:a,className:"w-full max-w-xl flex flex-col max-h-[900px] overscroll-auto overflow-y-auto overflow-x-hidden",children:g}),e.jsxs(v,{onSubmit:m,className:"w-full max-w-xl px-2 pr-4 flex items-center",children:[e.jsx("input",{name:"username",value:o,onChange:l=>d(l.target.value),className:"w-24 p-1 m-2 border border-gray-300 rounded-md"}),e.jsx("input",{name:"message",value:n,onChange:l=>h(l.target.value),placeholder:"enter message",autoComplete:"off",className:"flex-1 p-1 m-2 border border-gray-300 rounded-md"}),e.jsx("input",{type:"submit",value:"Send",className:"bg-blue-500 text-white px-2 py-1 rounded-md cursor-pointer"})]})]})},N="https://user-friendly.dev/learning-api/demos/deleting-furni/furnitures",E=()=>fetch(N),S=s=>fetch(`${N}/${s}`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:`User requested record (${s}) to be removed from data store.`})}),k=(s,t)=>fetch(`${N}/${s}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),F=s=>{const{furniture:t,onDelete:o,onUpdate:d,onError:n}=s,[h,x]=c.useState(t.name),[a,f]=c.useState(t.description),[u,m]=c.useState(!1),g=()=>{x(t.name),f(t.description),m(!1)},l=()=>{if(h===t.name&&a===t.description){console.log(`Nothing to update for item ${t.id}.`),g();return}k(t.id,{name:h,description:a}).then(async r=>{if(!r.ok){const i=await r.json();throw new Error(i.message!==void 0?i.message:r.statusText)}m(!1),d()}).catch(r=>{g(),n(r)})};return e.jsxs("div",{className:"flex m-8 border rounded-lg shadow-md border-stone-300 overflow-clip",children:[e.jsx("img",{src:t.image,className:"object-cover w-48 h-48 border-r border-stone-300"}),e.jsx("div",{className:"flex flex-col w-full px-6 py-4 bg-white",children:u?e.jsx(e.Fragment,{children:e.jsxs(v,{onSubmit:l,className:"flex flex-col",children:[e.jsx("input",{className:"my-1 p-2 border border-neutral-200 rounded-lg shadow-inner",onChange:r=>x(r.target.value),value:h,name:"name",placeholder:"furniture name"}),e.jsx("textarea",{className:"my-1 p-2 border border-neutral-200 rounded-lg shadow-inner",onChange:r=>f(r.target.value),name:"description",value:a}),e.jsxs("div",{className:"self-end mt-5",children:[e.jsx("button",{className:"mx-1 px-3 py-2 bg-teal-500 rounded-lg text-white text-md hover:bg-teal-600 active:bg-teal-700",type:"submit",children:"✔ Save"}),e.jsx("button",{className:"mx-1 px-3 py-2 bg-rose-500 rounded-lg text-white text-md hover:bg-rose-600 active:bg-rose-700",type:"button",onClick:g,children:"🚫 Cancel"})]})]})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-4 text-2xl text-stone-600 cursor-caret",onClick:r=>m(!0),children:h}),e.jsx("div",{className:"text-stone-500 cursor-caret",onClick:r=>m(!0),children:a}),e.jsxs("div",{className:"mt-5 text-right",children:[e.jsx("button",{className:"mr-2 px-3 py-2 bg-blue-500 rounded-lg text-white text-md hover:bg-blue-600 active:bg-blue-700",onClick:r=>m(!0),children:"✏ Edit"}),e.jsx("button",{className:"px-3 py-2 bg-rose-500 rounded-lg text-white text-md hover:bg-rose-600 active:bg-rose-700",onClick:r=>o(r,t.id),children:"🗑️ Delete"})]})]})})]})},D=({error:s,onClick:t})=>e.jsxs("div",{className:"py-2 px-4 text-xl text-white bg-red-600 rounded-md max-w-xl cursor-pointer",onClick:t,children:[s.toString()," ❌"]}),R=()=>{const[s,t]=c.useState([]),[o,d]=c.useState(null),n=()=>{E().then(a=>a.json()).then(a=>t(a))},h=(a,f)=>{S(f).then(async u=>{if(!u.ok){const m=await u.json();throw new Error(m.message!==void 0?m.message:u.statusText)}n()}).catch(u=>{console.log(`Failed to delete furniture (${f}): ${u}`),d(u)})};c.useEffect(()=>{n()},[]);const x=s.map((a,f)=>e.jsx(F,{furniture:a,onDelete:h,onUpdate:()=>n(),onError:u=>{console.log(`A furniture item (${a.id}) failed to update: ${u}`),d(u)}},a.id));return e.jsxs("div",{className:"pt-4 flex flex-col items-center",children:[o?e.jsx(D,{error:o,onClick:()=>d(null)}):null,e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"w-full max-w-2xl",children:x.length?x:"Store is out of furniture items!"})})]})},j="https://user-friendly.dev/learning-api/demos/todo-list/todos",O=(s=[])=>{const t=Array.isArray(s)?s.join(","):s;let o=j;return t&&(o=`${j}/${t}`),fetch(o).then(d=>{if(!d.ok)throw new Error(d.statusText);return d.json()})},I=(s={})=>fetch(`${j}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}),C=(s,t)=>fetch(`${j}/${s}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()}),U=s=>fetch(`${j}/${s}`,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}),L=({record:s,onCreate:t,onUpdate:o,onDelete:d})=>{const n=s.id,[h,x]=c.useState(s.complete),[a,f]=c.useState(s.text),[u,m]=c.useState(s.isNew===!0);s.isNew=!1;const g=i=>{x(i.target.checked);const p={complete:i.target.checked};C(n,p).then(b=>{o!==void 0&&o(n,p)}).catch(b=>console.log(`Failed to update record (${n}): ${b}`))},l=i=>{const p={text:a};C(n,p).then(b=>{o!==void 0&&o(n,p)}).catch(b=>console.log(`Failed to update record (${n}): ${b}`)),m(!1)},r=()=>{U(n).then(i=>{d!==void 0&&d(n)}).catch(i=>console.log(`Failed to delete record (${n}): ${i}`))};return e.jsxs("div",{className:"flex w-96 px-3 py-3 my-1 rounded-lg bg-white",children:[e.jsx("input",{name:"completed",type:"checkbox",checked:h,onChange:g}),u?e.jsxs(v,{className:"flex-1 flex justify-start items-center",onSubmit:l,children:[e.jsx("input",{className:"flex-1 mx-2 px-2 py-1 rounded-lg border border-neutral-200 text-emerald-600",name:"text",type:"text",value:a,onChange:i=>f(i.target.value)}),e.jsx("button",{className:"bg-neutral-100 rounded-lg px-2 py-1",type:"submit",children:"✔ Save"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex-1 mx-2 px-2 py-1",children:a}),e.jsx("button",{className:"mr-1",onClick:i=>m(!0),type:"button",children:"✏"}),e.jsx("button",{onClick:r,type:"button",children:"🗑"})]})]})},M=()=>{const[s,t]=c.useState([]),o=()=>{I().then(n=>{n.isNew=!0,t([...s,n])}).catch(n=>console.log(`Failed to create record (${id}): ${n}`))},d=c.useCallback(()=>{O().then(n=>{t(n)}).catch(n=>console.log(`Failed to get all record ${ids.join(", ")}: ${n}`))},[]);return c.useEffect(()=>{d()},[d]),e.jsx("div",{className:`
		flex flex-col justify-center items-center
		h-full bg-gradient-to-br from-rose-600 to-orange-200
		text-lg text-neutral-500
	`,children:e.jsxs("div",{className:"p-4 rounded-lg bg-neutral-100 flex flex-col",children:[s.map((n,h)=>e.jsx(L,{record:n,onDelete:d},n.id)),e.jsx("button",{className:"mt-2 py-2 font-bold rounded-lg hover:bg-white",type:"button",onClick:o,children:"➕ Add Todo"})]})})},_=({children:s})=>{let t=0;const o=[e.jsx(y,{collapse:!0,title:"Message Board",children:e.jsx(T,{})},t++),e.jsx(y,{collapse:!0,title:"Furniture",children:e.jsx(R,{})},t++),e.jsx(y,{collapse:!1,title:"Todo List",children:e.jsx(M,{})},t++)];return e.jsxs("div",{className:"h-full flex flex-col justify-start items-strech",children:[e.jsx("h1",{className:"my-4 text-5xl self-center",children:"Create, Read, Update, Delete"}),o]})};export{_ as default};