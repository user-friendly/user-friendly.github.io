import{r as d,j as e,_ as v}from"./index-DT6KvBEu.js";import{C as c}from"./Collapsable-DPRM-dLg.js";import"./services-CQQVyGs2.js";const S=10;function F(t){return t<S?++t:t}function O(t){return t>0?--t:t}const D=({children:t,show:s=!0})=>{const[n,a]=d.useState(2),r=[];for(let i=0;i<n;i++)r.push(e.jsx("div",{className:"w-20 h-5 bg-green-600 mb-2"},i));return e.jsxs("div",{className:"flex flex-col justify-end items-center",children:[e.jsx("div",{className:"h-[280px] flex flex-col justify-end",children:r}),e.jsxs("div",{className:"w-full flex flex-row gap-x-2 justify-stretch items-end border-t p-4",children:[e.jsx("div",{className:"grow basis-0 flex justify-end",children:e.jsx("button",{className:"p-2 font-bold bg-yellow-300 rounded-lg",onClick:i=>a(O(n)),children:"Remove"})}),e.jsx("div",{className:"grow basis-0 flex justify-start",children:e.jsx("button",{className:"p-2 font-bold bg-green-300 rounded-lg",onClick:i=>a(F(n)),children:"Add"})})]})]})},A=parseInt(480/30)**2,M=()=>{const[t,s]=d.useState(!1);return e.jsx("div",{onClick:n=>s(!t),className:`
		h-[30px] w-[30px] border-r border-b border-black cursor-pointer
	 	${t?"bg-stone-700":"bg-stone-300 hover:bg-stone-400"}
	`})},$=({children:t})=>{const s=[];for(let n=0;n<A;n++)s.push(e.jsx(M,{},n));return e.jsx("div",{className:`
		self-center w-[481px] h-[481px] border-l border-t border-black
		flex flex-row flex-wrap justify-start items-start
	`,children:s})},R=({label:t="Toggle Button",value:s=!1,onClick:n})=>e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:t}),e.jsx("button",{onClick:n,className:`
				relative
				transition-background duration-300 ease-in
				w-20 h-8 p-1 rounded-full
				${s?"bg-green-500":"bg-neutral-500"}
		`,children:e.jsx("span",{className:`
				block absolute top-1 
				transition-left duration-300 ease-in
				w-6 h-6 rounded-full
				${s?"bg-neutral-500 left-[3.25rem]":"bg-white left-1"}
			`})})]}),T=({children:t})=>{const[s,n]=d.useState(!1);return e.jsxs("div",{className:`
		self-center
		transition-background transition-color ease-in duration-300
		px-12 py-6 rounded-lg flex flex-col justify-start items-center
		${s?"bg-neutral-600 text-white":""}
	`,children:[e.jsx("div",{className:"flex justify-center items-center gap-x-4",children:e.jsx(R,{label:"Dark Mode",value:s,onClick:a=>n(!s)})}),e.jsxs("div",{className:"max-w-2xl text-justify",children:[e.jsx("p",{className:"my-4",children:"Coffee, often hailed as the elixir of wakefulness, has woven itself into the fabric of daily life for millions around the globe. Derived from the beans of the Coffea plant, this beverage has transcended its origins to become a cultural phenomenon, appreciated for its rich flavor, stimulating properties, and its ability to bring people together. As the aroma of freshly brewed coffee permeates the air, it triggers a sensory journey that extends far beyond the simple act of consumption."}),e.jsx("p",{className:"my-4",children:"The journey of coffee begins with the cultivation of coffee beans in equatorial regions worldwide. These beans undergo a meticulous process of harvesting, drying, roasting, and grinding before they finally transform into the dark elixir that graces countless cups each day. The diversity in coffee varieties and brewing methods has given rise to a myriad of flavors, ranging from the robustness of a dark roast to the subtle nuances of a light, fruity blend. This variety caters to the individual preferences of coffee enthusiasts, making it a versatile and personalized experience."}),e.jsx("p",{className:"my-4",children:"Beyond its sensory delights, coffee plays a pivotal role in social interactions and gatherings. Coffeehouses have become the modern-day social hubs, fostering conversations, idea exchanges, and even moments of quiet contemplation. The ritual of sharing a cup of coffee transcends cultural boundaries, providing a universal language that brings people together. Whether in bustling urban cafes or quaint corner shops, the communal act of sipping coffee creates an atmosphere that encourages connection and camaraderie."}),e.jsx("p",{className:"my-4",children:"In conclusion, coffee stands as more than just a caffeinated beverage; it is a cultural phenomenon that has permeated every corner of the globe. From its humble origins as a regional delicacy to its current status as a global staple, coffee's journey is a testament to its enduring appeal. Beyond its rich flavor profile and energizing properties, coffee serves as a catalyst for social connections, a canvas for personal preferences, and a potential contributor to overall health. As the world continues to evolve, coffee remains a constant, weaving itself into the daily rituals and moments that define the human experience."})]})]})},q=({children:t,isExpanded:s=!1})=>e.jsx("div",{className:`flex flex-col items-center p-4 ${s?"bg-neutral-700 text-white rounded-xl":""}`,children:e.jsxs("div",{className:"w-full max-w-3xl",children:[e.jsx("h2",{className:"my-6 text-3xl",children:"Classic Chocolate Chip Cookies"}),e.jsx("p",{className:"my-4 leading-relaxed",children:"Preheat your oven to 350°F (175°C) and line a baking sheet with parchment paper. In a large mixing bowl, cream together 1 cup (2 sticks) of softened unsalted butter and 1 cup of packed brown sugar until light and fluffy. Add in 2 large eggs, one at a time, beating well after each addition. Stir in 1 teaspoon of vanilla extract."}),e.jsx("p",{className:"my-4 leading-relaxed",children:"In a separate bowl, whisk together 2 and 1/4 cups of all-purpose flour, 1/2 teaspoon of baking soda, and 1/2 teaspoon of salt. Gradually add the dry ingredients to the wet ingredients, mixing until just combined. Fold in 2 cups of chocolate chips or chunks."}),e.jsx("p",{className:"my-4 leading-relaxed",children:"Drop rounded tablespoons of dough onto the prepared baking sheet, leaving enough space between each cookie. Bake in the preheated oven for 10-12 minutes or until the edges are golden brown. Allow the cookies to cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely. Enjoy your homemade classic chocolate chip cookies with a glass of milk!"}),e.jsx("p",{className:"my-4 leading-relaxed",children:"These cookies are sure to be a hit with friends and family. Feel free to customize the recipe by adding nuts, dried fruits, or your favorite mix-ins for a unique twist!"})]})}),B=({children:t})=>{const[s,n]=d.useState(!1);return e.jsxs("div",{className:`
		${s?"fixed top-0 left-0 w-full h-full":"relative rounded-xl"}
		flex flex-col justify-start items-center pt-10
		${s?"bg-neutral-500/75 backdrop-blur-sm":"bg-neutral-200"}
		
	`,children:[e.jsx("button",{className:`
			absolute px-4 py-1 top-2 right-2 rounded-xl
			bg-orange-200 text-neutral-600 font-bold font-noto
		`,onClick:a=>n(!s),children:s?"Retract ➖":"Expand 🔲"}),e.jsx(q,{isExpanded:s})]})},h=({rank:t,suit:s,face:n})=>(t=n===!1?t:e.jsx("span",{className:"",children:n}),e.jsxs("div",{className:"flex flex-col justify-start items-center",children:[e.jsx("span",{className:"text-2xl",children:t}),e.jsx("span",{className:"text-xl ",children:s})]})),w=({suit:t,rank:s,face:n})=>s>1&&s<8?e.jsx("div",{className:"text-3xl pt-4",children:e.jsx("span",{children:t})}):s>=8&&s<11?e.jsxs("div",{className:"text-3xl pt-4 flex-1 flex flex-row justify-between",children:[e.jsx("span",{children:t}),e.jsx("span",{children:t})]}):e.jsx(e.Fragment,{}),l=({children:t})=>e.jsx("div",{className:"text-3xl flex flex-row justify-evenly items-center",children:t}),H=({suit:t,rank:s,face:n,isSuitFace:a=!1})=>{if(n!==!1&&a===!1)return e.jsx("div",{className:"text-6xl flex justify-center items-center",children:n});if(s<=1||s>10)return e.jsx("div",{className:"text-6xl flex justify-center items-center",children:t});s-=2;let r=e.jsx("span",{children:t});switch(s){case 1:return e.jsx(e.Fragment,{children:e.jsx(l,{children:r})});case 2:return e.jsx(e.Fragment,{children:e.jsxs(l,{children:[r,r]})});case 3:return e.jsx(e.Fragment,{children:e.jsxs(l,{children:[r,r,r]})});case 4:return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[r,r]}),e.jsxs(l,{children:[r,r]})]});case 5:return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[r,r]}),e.jsx(l,{children:r}),e.jsxs(l,{children:[r,r]})]});case 6:return e.jsxs(e.Fragment,{children:[e.jsx(l,{children:r}),e.jsxs(l,{children:[r,r]}),e.jsx(l,{children:r})]});case 7:return e.jsxs(e.Fragment,{children:[e.jsx(l,{children:r}),e.jsxs(l,{children:[r,r,r]}),e.jsx(l,{children:r})]});case 8:return e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[r,r,r]}),e.jsxs(l,{children:[r,r,r]})]})}return e.jsx("div",{className:"text-6xl flex justify-center items-center",children:t})},z=({children:t,suit:s,rank:n,face:a=!1,isSuitFace:r=!1})=>e.jsxs("div",{className:`
		h-full flex flex-col justify-between items-strech
		p-1 bg-neutral-100
	`,children:[e.jsxs("div",{className:"flex flex-row justify-between items-center",children:[e.jsx(h,{rank:n,suit:s,face:a}),e.jsx(w,{rank:n,suit:s,face:a}),e.jsx(h,{rank:n,suit:s,face:a})]}),e.jsx(H,{rank:n,suit:s,face:a,isSuitFace:r}),e.jsxs("div",{className:"rotate-180 flex flex-row justify-between items-center",children:[e.jsx(h,{rank:n,suit:s,face:a}),e.jsx(w,{rank:n,suit:s}),e.jsx(h,{rank:n,suit:s,face:a})]})]}),E="⚜",I=({children:t})=>e.jsx("div",{className:`
		h-full flex flex-col justify-center items-center
		bg-green-500
	`,children:e.jsx("span",{className:"block text-5xl",children:E})}),[G,J,K,Q]=["♠","♥","♦","♣"],[j,m,p,g]=["A","🤴","👸","💂‍♂️"],f=({children:t,rank:s=2,face:n=!1,isSuitFace:a=!1,flip:r=!1})=>e.jsx(b,{suit:G,rank:s,face:n,isSuitFace:a,flip:r}),o=({children:t,rank:s=2,face:n=!1,isSuitFace:a=!1,flip:r=!1})=>e.jsx(b,{suit:J,rank:s,face:n,isSuitFace:a,flip:r}),u=({children:t,rank:s=2,face:n=!1,isSuitFace:a=!1,flip:r=!1})=>e.jsx(b,{suit:K,rank:s,face:n,isSuitFace:a,flip:r}),x=({children:t,rank:s=2,face:n=!1,isSuitFace:a=!1,flip:r=!1})=>e.jsx(b,{suit:Q,rank:s,face:n,isSuitFace:a,flip:r}),L=({children:t,flip:s=!1})=>e.jsx(f,{rank:0,face:p,flip:s}),P=({children:t,flip:s=!1})=>e.jsx(o,{rank:0,face:p,flip:s}),W=({children:t,flip:s=!1})=>e.jsx(u,{rank:0,face:p,flip:s}),_=({children:t,flip:s=!1})=>e.jsx(x,{rank:0,face:p,flip:s}),U=({children:t,flip:s=!1})=>e.jsx(f,{rank:0,face:m,flip:s}),V=({children:t,flip:s=!1})=>e.jsx(o,{rank:0,face:m,flip:s}),X=({children:t,flip:s=!1})=>e.jsx(u,{rank:0,face:m,flip:s}),Y=({children:t,flip:s=!1})=>e.jsx(x,{rank:0,face:m,flip:s}),Z=({children:t,flip:s=!1})=>e.jsx(f,{rank:0,face:g,flip:s}),ee=({children:t,flip:s=!1})=>e.jsx(o,{rank:0,face:g,flip:s}),se=({children:t,flip:s=!1})=>e.jsx(u,{rank:0,face:g,flip:s}),te=({children:t,flip:s=!1})=>e.jsx(x,{rank:0,face:g,flip:s}),re=({children:t,flip:s=!1})=>e.jsx(f,{rank:0,face:j,isSuitFace:!0,flip:s}),N=({children:t,flip:s=!1})=>e.jsx(o,{rank:0,face:j,isSuitFace:!0,flip:s}),ne=({children:t,flip:s=!1})=>e.jsx(u,{rank:0,face:j,isSuitFace:!0,flip:s}),ae=({children:t,flip:s=!1})=>e.jsx(x,{rank:0,face:j,isSuitFace:!0,flip:s}),b=({children:t,suit:s=heart,rank:n=1,face:a=!1,isSuitFace:r=!1,flip:i=!1})=>{const[y,k]=d.useState(i);(!v.isInteger(n)||n<1)&&(n=1);const C=y?e.jsx(z,{suit:s,rank:n,face:a,isSuitFace:r}):e.jsx(I,{});return e.jsx("div",{className:`
		rounded-lg border-4 border-gray-600 w-40 h-64
		cursor-pointer overflow-hidden select-none
	`,onClick:ie=>k(!y),children:C})},le=({children:t})=>{function s(a,r,i=!0){switch(v.random(0,3)){case 0:return e.jsx(f,{rank:a,flip:i},r);case 1:return e.jsx(o,{rank:a,flip:i},r);case 2:return e.jsx(u,{rank:a,flip:i},r);case 3:return e.jsx(x,{rank:a,flip:i},r)}return e.jsx(o,{rank:a,flip:i},r)}function n(a){return v.range(0,a).map(r=>s(r+1,r))}return e.jsxs("div",{className:"flex flex-row flex-wrap justify-center items-start gap-2",children:[n(10),e.jsx(N,{flip:!0}),e.jsx(ne,{flip:!0}),e.jsx(re,{flip:!0}),e.jsx(ae,{flip:!0}),e.jsx(P,{flip:!0}),e.jsx(W,{flip:!0}),e.jsx(L,{flip:!0}),e.jsx(_,{flip:!0}),e.jsx(V,{flip:!0}),e.jsx(X,{flip:!0}),e.jsx(U,{flip:!0}),e.jsx(Y,{flip:!0}),e.jsx(ee,{flip:!0}),e.jsx(se,{flip:!0}),e.jsx(Z,{flip:!0}),e.jsx(te,{flip:!0}),s(10,void 0,!1),s(11,void 0,!1),s(12,void 0,!1),e.jsx(N,{})]})},fe=()=>{const t=[e.jsx(c,{collapse:!0,title:"Stacker",children:e.jsx(D,{})},1),e.jsx(c,{collapse:!0,title:"Checkered Grid",children:e.jsx($,{})},2),e.jsx(c,{collapse:!0,title:"Simple Dark Mode",children:e.jsx(T,{})},3),e.jsx(c,{collapse:!0,title:"Modal",children:e.jsx(B,{})},4),e.jsx(c,{collapse:!1,title:"Playing Card",children:e.jsx(le,{})},5)];return e.jsxs("div",{className:"h-full flex flex-col justify-start items-strech",children:[e.jsx("h1",{className:"my-4 text-5xl self-center",children:"More State Lesson Group"}),t]})};export{fe as default};
