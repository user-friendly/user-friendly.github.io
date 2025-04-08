import{r as u,j as e,_ as S}from"./index-CECLz__I.js";import{C as i}from"./Collapsable-dMiDD3YN.js";import"./services-D8YECjA7.js";const D=10;function P(n){return n<D?++n:n}function M(n){return n>0?--n:n}const R=({children:n,show:a=!0})=>{const[l,s]=u.useState(2),r=[];for(let t=0;t<l;t++)r.push(e.jsxDEV("div",{className:"w-20 h-5 bg-green-600 mb-2"},t,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Stack.jsx",lineNumber:18,columnNumber:14},void 0));return e.jsxDEV("div",{className:"flex flex-col justify-end items-center",children:[e.jsxDEV("div",{className:"h-[280px] flex flex-col justify-end",children:r},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Stack.jsx",lineNumber:22,columnNumber:4},void 0),e.jsxDEV("div",{className:"w-full flex flex-row gap-x-2 justify-stretch items-end border-t p-4",children:[e.jsxDEV("div",{className:"grow basis-0 flex justify-end",children:e.jsxDEV("button",{className:"p-2 font-bold bg-yellow-300 rounded-lg",onClick:t=>s(M(l)),children:"Remove"},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Stack.jsx",lineNumber:27,columnNumber:6},void 0)},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Stack.jsx",lineNumber:26,columnNumber:5},void 0),e.jsxDEV("div",{className:"grow basis-0 flex justify-start",children:e.jsxDEV("button",{className:"p-2 font-bold bg-green-300 rounded-lg",onClick:t=>s(P(l)),children:"Add"},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Stack.jsx",lineNumber:35,columnNumber:6},void 0)},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Stack.jsx",lineNumber:34,columnNumber:5},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Stack.jsx",lineNumber:25,columnNumber:4},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Stack.jsx",lineNumber:21,columnNumber:3},void 0)},E=parseInt(480/30)**2,V=()=>{const[n,a]=u.useState(!1);return e.jsxDEV("div",{onClick:l=>a(!n),className:`
		h-[30px] w-[30px] border-r border-b border-black cursor-pointer
	 	${n?"bg-stone-700":"bg-stone-300 hover:bg-stone-400"}
	`},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Grid.jsx",lineNumber:19,columnNumber:3},void 0)},k=({children:n})=>{const a=[];for(let l=0;l<E;l++)a.push(e.jsxDEV(V,{},l,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Grid.jsx",lineNumber:42,columnNumber:45},void 0));return e.jsxDEV("div",{className:`
		self-center w-[481px] h-[481px] border-l border-t border-black
		flex flex-row flex-wrap justify-start items-start
	`,children:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Grid.jsx",lineNumber:45,columnNumber:3},void 0)},w=({label:n="Toggle Button",value:a=!1,onClick:l})=>e.jsxDEV(e.Fragment,{children:[e.jsxDEV("strong",{children:n},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/ToggleButton.jsx",lineNumber:8,columnNumber:4},void 0),e.jsxDEV("button",{onClick:l,className:`
				relative
				transition-background duration-300 ease-in
				w-20 h-8 p-1 rounded-full
				${a?"bg-green-500":"bg-neutral-500"}
		`,children:e.jsxDEV("span",{className:`
				block absolute top-1 
				transition-left duration-300 ease-in
				w-6 h-6 rounded-full
				${a?"bg-neutral-500 left-[3.25rem]":"bg-white left-1"}
			`},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/ToggleButton.jsx",lineNumber:18,columnNumber:5},void 0)},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/ToggleButton.jsx",lineNumber:9,columnNumber:4},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/ToggleButton.jsx",lineNumber:7,columnNumber:3},void 0),O=({children:n})=>{const[a,l]=u.useState(!1);return e.jsxDEV("div",{className:`
		self-center
		transition-background transition-color ease-in duration-300
		px-12 py-6 rounded-lg flex flex-col justify-start items-center
		${a?"bg-neutral-600 text-white":""}
	`,children:[e.jsxDEV("div",{className:"flex justify-center items-center gap-x-4",children:e.jsxDEV(w,{label:"Dark Mode",value:a,onClick:s=>l(!a)},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/DarkMode.jsx",lineNumber:18,columnNumber:5},void 0)},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/DarkMode.jsx",lineNumber:17,columnNumber:4},void 0),e.jsxDEV("div",{className:"max-w-2xl text-justify",children:[e.jsxDEV("p",{className:"my-4",children:"Coffee, often hailed as the elixir of wakefulness, has woven itself into the fabric of daily life for millions around the globe. Derived from the beans of the Coffea plant, this beverage has transcended its origins to become a cultural phenomenon, appreciated for its rich flavor, stimulating properties, and its ability to bring people together. As the aroma of freshly brewed coffee permeates the air, it triggers a sensory journey that extends far beyond the simple act of consumption."},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/DarkMode.jsx",lineNumber:25,columnNumber:5},void 0),e.jsxDEV("p",{className:"my-4",children:"The journey of coffee begins with the cultivation of coffee beans in equatorial regions worldwide. These beans undergo a meticulous process of harvesting, drying, roasting, and grinding before they finally transform into the dark elixir that graces countless cups each day. The diversity in coffee varieties and brewing methods has given rise to a myriad of flavors, ranging from the robustness of a dark roast to the subtle nuances of a light, fruity blend. This variety caters to the individual preferences of coffee enthusiasts, making it a versatile and personalized experience."},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/DarkMode.jsx",lineNumber:35,columnNumber:5},void 0),e.jsxDEV("p",{className:"my-4",children:"Beyond its sensory delights, coffee plays a pivotal role in social interactions and gatherings. Coffeehouses have become the modern-day social hubs, fostering conversations, idea exchanges, and even moments of quiet contemplation. The ritual of sharing a cup of coffee transcends cultural boundaries, providing a universal language that brings people together. Whether in bustling urban cafes or quaint corner shops, the communal act of sipping coffee creates an atmosphere that encourages connection and camaraderie."},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/DarkMode.jsx",lineNumber:46,columnNumber:5},void 0),e.jsxDEV("p",{className:"my-4",children:"In conclusion, coffee stands as more than just a caffeinated beverage; it is a cultural phenomenon that has permeated every corner of the globe. From its humble origins as a regional delicacy to its current status as a global staple, coffee's journey is a testament to its enduring appeal. Beyond its rich flavor profile and energizing properties, coffee serves as a catalyst for social connections, a canvas for personal preferences, and a potential contributor to overall health. As the world continues to evolve, coffee remains a constant, weaving itself into the daily rituals and moments that define the human experience."},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/DarkMode.jsx",lineNumber:56,columnNumber:5},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/DarkMode.jsx",lineNumber:24,columnNumber:4},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/DarkMode.jsx",lineNumber:9,columnNumber:3},void 0)},B=({children:n,isExpanded:a=!1})=>e.jsxDEV("div",{className:`flex flex-col items-center p-4 ${a?"bg-neutral-700 text-white rounded-xl":""}`,children:e.jsxDEV("div",{className:"w-full max-w-3xl",children:[e.jsxDEV("h2",{className:"my-6 text-3xl",children:"Classic Chocolate Chip Cookies"},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Modal.jsx",lineNumber:9,columnNumber:5},void 0),e.jsxDEV("p",{className:"my-4 leading-relaxed",children:"Preheat your oven to 350°F (175°C) and line a baking sheet with parchment paper. In a large mixing bowl, cream together 1 cup (2 sticks) of softened unsalted butter and 1 cup of packed brown sugar until light and fluffy. Add in 2 large eggs, one at a time, beating well after each addition. Stir in 1 teaspoon of vanilla extract."},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Modal.jsx",lineNumber:10,columnNumber:5},void 0),e.jsxDEV("p",{className:"my-4 leading-relaxed",children:"In a separate bowl, whisk together 2 and 1/4 cups of all-purpose flour, 1/2 teaspoon of baking soda, and 1/2 teaspoon of salt. Gradually add the dry ingredients to the wet ingredients, mixing until just combined. Fold in 2 cups of chocolate chips or chunks."},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Modal.jsx",lineNumber:17,columnNumber:5},void 0),e.jsxDEV("p",{className:"my-4 leading-relaxed",children:"Drop rounded tablespoons of dough onto the prepared baking sheet, leaving enough space between each cookie. Bake in the preheated oven for 10-12 minutes or until the edges are golden brown. Allow the cookies to cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely. Enjoy your homemade classic chocolate chip cookies with a glass of milk!"},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Modal.jsx",lineNumber:23,columnNumber:5},void 0),e.jsxDEV("p",{className:"my-4 leading-relaxed",children:"These cookies are sure to be a hit with friends and family. Feel free to customize the recipe by adding nuts, dried fruits, or your favorite mix-ins for a unique twist!"},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Modal.jsx",lineNumber:31,columnNumber:5},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Modal.jsx",lineNumber:8,columnNumber:4},void 0)},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Modal.jsx",lineNumber:5,columnNumber:3},void 0),T=({children:n})=>{const[a,l]=u.useState(!1);return e.jsxDEV("div",{className:`
		${a?"fixed top-0 left-0 w-full h-full":"relative rounded-xl"}
		flex flex-col justify-start items-center pt-10
		${a?"bg-neutral-500/75 backdrop-blur-sm":"bg-neutral-200"}
		
	`,children:[e.jsxDEV("button",{className:`
			absolute px-4 py-1 top-2 right-2 rounded-xl
			bg-orange-200 text-neutral-600 font-bold font-noto
		`,onClick:s=>l(!a),children:a?"Retract ➖":"Expand 🔲"},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Modal.jsx",lineNumber:53,columnNumber:4},void 0),e.jsxDEV(B,{isExpanded:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Modal.jsx",lineNumber:62,columnNumber:4},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Modal.jsx",lineNumber:45,columnNumber:3},void 0)},p=({rank:n,suit:a,face:l})=>(n=l===!1?n:e.jsxDEV("span",{className:"",children:l},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:3,columnNumber:33},void 0),e.jsxDEV("div",{className:"flex flex-col justify-start items-center",children:[e.jsxDEV("span",{className:"text-2xl",children:n},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:7,columnNumber:4},void 0),e.jsxDEV("span",{className:"text-xl ",children:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:8,columnNumber:4},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:6,columnNumber:3},void 0)),C=({suit:n,rank:a,face:l})=>a>1&&a<8?e.jsxDEV("div",{className:"text-3xl pt-4",children:e.jsxDEV("span",{children:n},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:17,columnNumber:5},void 0)},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:16,columnNumber:4},void 0):a>=8&&a<11?e.jsxDEV("div",{className:"text-3xl pt-4 flex-1 flex flex-row justify-between",children:[e.jsxDEV("span",{children:n},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:23,columnNumber:5},void 0),e.jsxDEV("span",{children:n},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:24,columnNumber:5},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:22,columnNumber:4},void 0):e.jsxDEV(e.Fragment,{},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:28,columnNumber:10},void 0),o=({children:n})=>e.jsxDEV("div",{className:"text-3xl flex flex-row justify-evenly items-center",children:n},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:34,columnNumber:3},void 0),A=({suit:n,rank:a,face:l,isSuitFace:s=!1})=>{if(l!==!1&&s===!1)return e.jsxDEV("div",{className:"text-6xl flex justify-center items-center",children:l},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:43,columnNumber:4},void 0);if(a<=1||a>10)return e.jsxDEV("div",{className:"text-6xl flex justify-center items-center",children:n},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:47,columnNumber:4},void 0);a-=2;let r=e.jsxDEV("span",{children:n},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:54,columnNumber:18},void 0);switch(a){case 1:return e.jsxDEV(e.Fragment,{children:e.jsxDEV(o,{children:r},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:61,columnNumber:6},void 0)},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:60,columnNumber:5},void 0);case 2:return e.jsxDEV(e.Fragment,{children:e.jsxDEV(o,{children:[r,r]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:68,columnNumber:6},void 0)},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:67,columnNumber:5},void 0);case 3:return e.jsxDEV(e.Fragment,{children:e.jsxDEV(o,{children:[r,r,r]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:78,columnNumber:6},void 0)},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:77,columnNumber:5},void 0);case 4:return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(o,{children:[r,r]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:89,columnNumber:6},void 0),e.jsxDEV(o,{children:[r,r]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:93,columnNumber:6},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:88,columnNumber:5},void 0);case 5:return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(o,{children:[r,r]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:103,columnNumber:6},void 0),e.jsxDEV(o,{children:r},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:107,columnNumber:6},void 0),e.jsxDEV(o,{children:[r,r]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:108,columnNumber:6},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:102,columnNumber:5},void 0);case 6:return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(o,{children:r},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:118,columnNumber:6},void 0),e.jsxDEV(o,{children:[r,r]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:119,columnNumber:6},void 0),e.jsxDEV(o,{children:r},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:123,columnNumber:6},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:117,columnNumber:5},void 0);case 7:return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(o,{children:r},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:130,columnNumber:6},void 0),e.jsxDEV(o,{children:[r,r,r]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:131,columnNumber:6},void 0),e.jsxDEV(o,{children:r},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:136,columnNumber:6},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:129,columnNumber:5},void 0);case 8:return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(o,{children:[r,r,r]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:143,columnNumber:6},void 0),e.jsxDEV(o,{children:[r,r,r]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:148,columnNumber:6},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:142,columnNumber:5},void 0)}return e.jsxDEV("div",{className:"text-6xl flex justify-center items-center",children:n},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:158,columnNumber:9},void 0)},$=({children:n,suit:a,rank:l,face:s=!1,isSuitFace:r=!1})=>e.jsxDEV("div",{className:`
		h-full flex flex-col justify-between items-strech
		p-1 bg-neutral-100
	`,children:[e.jsxDEV("div",{className:"flex flex-row justify-between items-center",children:[e.jsxDEV(p,{rank:l,suit:a,face:s},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:172,columnNumber:5},void 0),e.jsxDEV(C,{rank:l,suit:a,face:s},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:174,columnNumber:5},void 0),e.jsxDEV(p,{rank:l,suit:a,face:s},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:177,columnNumber:5},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:170,columnNumber:4},void 0),e.jsxDEV(A,{rank:l,suit:a,face:s,isSuitFace:r},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:181,columnNumber:4},void 0),e.jsxDEV("div",{className:"rotate-180 flex flex-row justify-between items-center",children:[e.jsxDEV(p,{rank:l,suit:a,face:s},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:185,columnNumber:5},void 0),e.jsxDEV(C,{rank:l,suit:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:187,columnNumber:5},void 0),e.jsxDEV(p,{rank:l,suit:a,face:s},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:190,columnNumber:5},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:183,columnNumber:4},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Front.jsx",lineNumber:164,columnNumber:3},void 0),q="⚜",G=({children:n})=>e.jsxDEV("div",{className:`
		h-full flex flex-col justify-center items-center
		bg-green-500
	`,children:e.jsxDEV("span",{className:"block text-5xl",children:q},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Back.jsx",lineNumber:11,columnNumber:4},void 0)},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Back.jsx",lineNumber:5,columnNumber:3},void 0),[H,z,I,J]=["♠","♥","♦","♣"],[N,x,b,v]=["A","🤴","👸","💂‍♂️"],m=({children:n,rank:a=2,face:l=!1,isSuitFace:s=!1,flip:r=!1})=>e.jsxDEV(j,{suit:H,rank:a,face:l,isSuitFace:s,flip:r},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:26,columnNumber:3},void 0),d=({children:n,rank:a=2,face:l=!1,isSuitFace:s=!1,flip:r=!1})=>e.jsxDEV(j,{suit:z,rank:a,face:l,isSuitFace:s,flip:r},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:43,columnNumber:3},void 0),c=({children:n,rank:a=2,face:l=!1,isSuitFace:s=!1,flip:r=!1})=>e.jsxDEV(j,{suit:I,rank:a,face:l,isSuitFace:s,flip:r},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:60,columnNumber:3},void 0),f=({children:n,rank:a=2,face:l=!1,isSuitFace:s=!1,flip:r=!1})=>e.jsxDEV(j,{suit:J,rank:a,face:l,isSuitFace:s,flip:r},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:77,columnNumber:3},void 0),K=({children:n,flip:a=!1})=>e.jsxDEV(m,{rank:0,face:b,flip:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:89,columnNumber:9},void 0),Q=({children:n,flip:a=!1})=>e.jsxDEV(d,{rank:0,face:b,flip:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:92,columnNumber:9},void 0),L=({children:n,flip:a=!1})=>e.jsxDEV(c,{rank:0,face:b,flip:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:95,columnNumber:9},void 0),W=({children:n,flip:a=!1})=>e.jsxDEV(f,{rank:0,face:b,flip:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:98,columnNumber:9},void 0),_=({children:n,flip:a=!1})=>e.jsxDEV(m,{rank:0,face:x,flip:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:103,columnNumber:9},void 0),U=({children:n,flip:a=!1})=>e.jsxDEV(d,{rank:0,face:x,flip:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:106,columnNumber:9},void 0),X=({children:n,flip:a=!1})=>e.jsxDEV(c,{rank:0,face:x,flip:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:109,columnNumber:9},void 0),Y=({children:n,flip:a=!1})=>e.jsxDEV(f,{rank:0,face:x,flip:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:112,columnNumber:9},void 0),Z=({children:n,flip:a=!1})=>e.jsxDEV(m,{rank:0,face:v,flip:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:117,columnNumber:9},void 0),ee=({children:n,flip:a=!1})=>e.jsxDEV(d,{rank:0,face:v,flip:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:120,columnNumber:9},void 0),ae=({children:n,flip:a=!1})=>e.jsxDEV(c,{rank:0,face:v,flip:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:123,columnNumber:9},void 0),ne=({children:n,flip:a=!1})=>e.jsxDEV(f,{rank:0,face:v,flip:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:126,columnNumber:9},void 0),re=({children:n,flip:a=!1})=>e.jsxDEV(m,{rank:0,face:N,isSuitFace:!0,flip:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:131,columnNumber:9},void 0),h=({children:n,flip:a=!1})=>e.jsxDEV(d,{rank:0,face:N,isSuitFace:!0,flip:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:134,columnNumber:9},void 0),le=({children:n,flip:a=!1})=>e.jsxDEV(c,{rank:0,face:N,isSuitFace:!0,flip:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:137,columnNumber:9},void 0),se=({children:n,flip:a=!1})=>e.jsxDEV(f,{rank:0,face:N,isSuitFace:!0,flip:a},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/Deck52.jsx",lineNumber:140,columnNumber:9},void 0),j=({children:n,suit:a=heart,rank:l=1,face:s=!1,isSuitFace:r=!1,flip:t=!1})=>{const[g,y]=u.useState(t);(!S.isInteger(l)||l<1)&&(l=1);const F=g?e.jsxDEV($,{suit:a,rank:l,face:s,isSuitFace:r},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/index.jsx",lineNumber:25,columnNumber:3},void 0):e.jsxDEV(G,{},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/index.jsx",lineNumber:27,columnNumber:3},void 0);return e.jsxDEV("div",{className:`
		rounded-lg border-4 border-gray-600 w-40 h-64
		cursor-pointer overflow-hidden select-none
	`,onClick:te=>y(!g),children:F},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/Card/index.jsx",lineNumber:31,columnNumber:3},void 0)},oe=({children:n})=>{function a(s,r,t=!0){switch(S.random(0,3)){case 0:return e.jsxDEV(m,{rank:s,flip:t},r,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:11,columnNumber:12},this);case 1:return e.jsxDEV(d,{rank:s,flip:t},r,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:14,columnNumber:12},this);case 2:return e.jsxDEV(c,{rank:s,flip:t},r,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:17,columnNumber:12},this);case 3:return e.jsxDEV(f,{rank:s,flip:t},r,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:20,columnNumber:12},this)}return e.jsxDEV(d,{rank:s,flip:t},r,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:23,columnNumber:10},this)}function l(s){return S.range(0,s).map(r=>a(r+1,r))}return e.jsxDEV("div",{className:"flex flex-row flex-wrap justify-center items-start gap-2",children:[l(10),e.jsxDEV(h,{flip:!0},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:36,columnNumber:4},void 0),e.jsxDEV(le,{flip:!0},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:37,columnNumber:4},void 0),e.jsxDEV(re,{flip:!0},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:38,columnNumber:4},void 0),e.jsxDEV(se,{flip:!0},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:39,columnNumber:4},void 0),e.jsxDEV(Q,{flip:!0},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:41,columnNumber:4},void 0),e.jsxDEV(L,{flip:!0},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:42,columnNumber:4},void 0),e.jsxDEV(K,{flip:!0},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:43,columnNumber:4},void 0),e.jsxDEV(W,{flip:!0},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:44,columnNumber:4},void 0),e.jsxDEV(U,{flip:!0},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:46,columnNumber:4},void 0),e.jsxDEV(X,{flip:!0},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:47,columnNumber:4},void 0),e.jsxDEV(_,{flip:!0},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:48,columnNumber:4},void 0),e.jsxDEV(Y,{flip:!0},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:49,columnNumber:4},void 0),e.jsxDEV(ee,{flip:!0},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:51,columnNumber:4},void 0),e.jsxDEV(ae,{flip:!0},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:52,columnNumber:4},void 0),e.jsxDEV(Z,{flip:!0},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:53,columnNumber:4},void 0),e.jsxDEV(ne,{flip:!0},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:54,columnNumber:4},void 0),a(10,void 0,!1),a(11,void 0,!1),a(12,void 0,!1),e.jsxDEV(h,{},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:60,columnNumber:4},void 0)]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/Components/MoreState/PlayingCard.jsx",lineNumber:31,columnNumber:3},void 0)},me=()=>{const n=[e.jsxDEV(i,{collapse:!0,title:"Stacker",children:e.jsxDEV(R,{},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/MoreState.jsx",lineNumber:19,columnNumber:4},void 0)},1,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/MoreState.jsx",lineNumber:18,columnNumber:3},void 0),e.jsxDEV(i,{collapse:!0,title:"Checkered Grid",children:e.jsxDEV(k,{},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/MoreState.jsx",lineNumber:22,columnNumber:4},void 0)},2,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/MoreState.jsx",lineNumber:21,columnNumber:3},void 0),e.jsxDEV(i,{collapse:!0,title:"Simple Dark Mode",children:e.jsxDEV(O,{},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/MoreState.jsx",lineNumber:25,columnNumber:4},void 0)},3,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/MoreState.jsx",lineNumber:24,columnNumber:3},void 0),e.jsxDEV(i,{collapse:!0,title:"Modal",children:e.jsxDEV(T,{},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/MoreState.jsx",lineNumber:28,columnNumber:4},void 0)},4,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/MoreState.jsx",lineNumber:27,columnNumber:3},void 0),e.jsxDEV(i,{collapse:!1,title:"Playing Card",children:e.jsxDEV(oe,{},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/MoreState.jsx",lineNumber:31,columnNumber:4},void 0)},5,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/MoreState.jsx",lineNumber:30,columnNumber:3},void 0)];return e.jsxDEV("div",{className:"h-full flex flex-col justify-start items-strech",children:[e.jsxDEV("h1",{className:"my-4 text-5xl self-center",children:"More State Lesson Group"},void 0,!1,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/MoreState.jsx",lineNumber:37,columnNumber:4},void 0),n]},void 0,!0,{fileName:"/apps/user-friendly.dev/src/Standalone/ReactFormula/Page/MoreState.jsx",lineNumber:36,columnNumber:3},void 0)};export{me as default};
