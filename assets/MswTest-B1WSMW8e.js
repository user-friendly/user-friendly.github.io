import{r as o,j as s}from"./index-DZxVDkqq.js";import{_ as d}from"./services-Bu_7CigI.js";const c="https://example.com/user",w=()=>d.sample([["Ima","Pigg"],["Al","Dente"],["Anita","Bath"],["Justin","Time"],["Sue","Flay"],["Barry","Cuda"],["Paige","Turner"],["Sal","Monella"],["Hugh","Jass"],["Stan","Dupp"],["Rick","O'Shea"],["Ben","Dover"],["Ella","Vator"],["Drew","Peacock"],["Wally","B. Oats"],["Terry","Bull"]]),h=()=>{const[t,e]=w();return{id:-1,firstName:t,lastName:e}},i=t=>{const e=t.extrastyles!==void 0?t.extrastyles:"";return s.jsx("button",{className:`mx-1 px-3 py-1 rounded-xl bg-orange-300 cursor-pointer
		disabled:bg-gray-300 disabled:text-gray-500 active:bg-orange-400 shadow-md ${e}`,...t,children:t.children})},g=t=>{const e=t.handleUpdate,n=t.handleDelete;return s.jsxs("div",{className:"m-2 p-4 w-96 flex flex-col rounded-xl bg-orange-300",children:[s.jsx("span",{children:t.id}),s.jsxs("div",{className:"flex",children:[s.jsx("span",{className:"w-24",children:"First name: "}),s.jsx("span",{children:t.firstName})]}),s.jsxs("div",{className:"flex",children:[s.jsx("span",{className:"w-24",children:"Last name: "}),s.jsx("span",{children:t.lastName})]}),s.jsxs("div",{className:"flex justify-end",children:[d.isFunction(e)?s.jsx(i,{onClick:t.handleUpdate,extrastyles:"border border-orange-400",children:"Update"}):null,d.isFunction(n)?s.jsx(i,{onClick:t.handleDelete,extrastyles:"border border-orange-400",children:"Delete"}):null]})]})};async function y(t){try{const e=await fetch(c);if(!e.ok)throw new Error(e.statusText);return await e.json()}catch(e){throw e}throw Error("reached the end of the function!")}async function j(t){try{const e=await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error(e.statusText);return await e.json()}catch(e){throw e}throw Error("reached the end of the function!")}async function p(t,e){try{const n=await fetch(`${c}/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!n.ok)throw new Error(n.statusText);return await n.json()}catch(n){throw n}throw Error("reached the end of the function!")}async function N(t){try{const e=await fetch(`${c}/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:"Just testing the DELETE API method."})});if(!e.ok)throw new Error(e.statusText);return await e.json()}catch(e){throw e}throw Error("reached the end of the function!")}const T=()=>{const[t,e]=o.useState(0),[n,u]=o.useState([]),l=()=>e(t+1);o.useEffect(()=>{y().then(r=>u(r)).catch(r=>console.log(`failed to fetch user list: ${r}`))},[t]);const f=()=>{j(h()).then(r=>{console.log(`new user created: ${r.message}`),l()}).catch(r=>console.log(`failed to create new user: ${r}`))},x=r=>{N(r).then(a=>{console.log(`user deleted: ${a.message}`),l()}).catch(a=>console.log(`failed to delete user: ${a}`))},m=r=>{p(r,h()).then(a=>{console.log(`user updated: ${a.message}`),l()}).catch(a=>console.log(`failed to update user: ${a}`))};return s.jsxs("div",{className:"h-full min-h-96 flex flex-col items-center",children:[s.jsx("h2",{className:"my-4 text-3xl",children:"Mock Service Worker Test"}),s.jsxs("div",{className:"p-4 bg-neutral-200 rounded-md",children:["Here we be testing the MSW browser variant.",s.jsx("br",{}),s.jsx("span",{children:"Mock API is ready for use."}),s.jsx("br",{}),s.jsx(i,{onClick:f,children:"Add User"})]}),n.map((r,a)=>o.createElement(g,{handleUpdate:()=>m(r.id),handleDelete:()=>x(r.id),...r,key:a}))]})};export{T as default};
