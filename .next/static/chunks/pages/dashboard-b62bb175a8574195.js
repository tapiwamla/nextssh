(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{1075:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(123)}])},9021:function(e,s,n){"use strict";n.d(s,{Z:function(){return components_BaseLayout}});var a=n(5893),r=n(5675),t=n.n(r),i=n(9583),c=n(3854),o=n(5434),l=n(1664),d=n.n(l),h=n(7294),m=n(4088),u=n(1163);let p=[{name:"New Connection",href:"/",icon:i.wEH},{name:"Connections",href:"/dashboard",icon:c.HEw},{name:"Terminal",href:"/terminal",icon:c.Zbf},{name:"Account",href:"/account",icon:o.sdR}];var components_Sidebar=()=>{let e=(0,u.useRouter)(),{isCollapsed:s,toggleSidebarcollapse:n}=(0,h.useContext)(m.l);return(0,a.jsxs)("div",{className:"sidebar-wrapper",children:[(0,a.jsx)("button",{className:"btn",onClick:n,children:s?(0,a.jsx)(o.AeI,{}):(0,a.jsx)(o.sG8,{})}),(0,a.jsxs)("aside",{className:"sidebar","data-collapse":s,children:[(0,a.jsxs)("div",{className:"sidebar-top",children:[(0,a.jsx)(t(),{width:80,height:80,className:"sidebar-logo",src:"/logo.jpg",alt:"logo"}),(0,a.jsx)("p",{className:"sidebar-logo-name",children:"CSHELL CONSOLE"})]}),(0,a.jsx)("ul",{className:"sidebar-list",children:p.map(s=>{let{name:n,href:r,icon:t}=s;return(0,a.jsx)("li",{className:"sidebar-item",children:(0,a.jsxs)(d(),{className:"sidebar-link ".concat(e.pathname===r?"sidebar-link--active":""),href:r,children:[(0,a.jsx)("span",{className:"sidebar-icon",children:(0,a.jsx)(t,{})}),(0,a.jsx)("span",{className:"sidebar-name",children:n})]})},n)})}),!s&&(0,a.jsxs)("div",{className:"sidebar-footer",children:[(0,a.jsx)("p",{children:"Copyright \xa9 2024 Tapiwanashe Mlambo"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("a",{href:"https://tapiwamla.me",target:"_blank",rel:"noreferrer",children:"Blog"})," | ",(0,a.jsx)("a",{href:"https://github.com/tapiwamla",target:"_blank",rel:"noreferrer",children:"Github"})," | ",(0,a.jsx)("a",{href:"https://linkedin.com/in/tapiwamla",target:"_blank",rel:"noreferrer",children:"Linkedin"})]})]})]})]})},components_BaseLayout=e=>{let{children:s,pageTitle:n}=e;return(0,a.jsxs)("div",{className:"layout",children:[(0,a.jsx)(components_Sidebar,{}),(0,a.jsxs)("main",{className:"main-content",children:[(0,a.jsx)("div",{className:"page-title",children:n}),s]})]})}},123:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return dashboard}});var a=n(5893),r=n(9021),t=n(7294),i=n(1163),Widget=e=>{let{host:s,username:n,password:r}=e,t=(0,i.useRouter)(),handleClick=async()=>{try{let e=await fetch("/api/ssh",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({host:s,username:n,password:r})});e.ok?t.push("/terminal"):console.error("Error connecting:",e)}catch(e){console.error("Error connecting:",e)}};return(0,a.jsxs)("div",{className:"connection-widget",onClick:handleClick,children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Host:"})," ",s]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Username:"})," ",n]})]})},dashboard=()=>{let[e,s]=(0,t.useState)([]);return(0,t.useEffect)(()=>{let fetchConnections=async()=>{let e=[];for(let s=0;s<localStorage.length;s++){let n=localStorage.key(s),a=JSON.parse(localStorage.getItem(n));e.push(a)}s(e)};fetchConnections()},[]),(0,a.jsx)(r.Z,{pageTitle:"CONNECTIONS",children:(0,a.jsx)("div",{className:"connections-dashboard",children:0===e.length?(0,a.jsx)("p",{children:"You have no active connections yet."}):(0,a.jsx)("div",{className:"widgets-grid",children:e.map(e=>(0,a.jsx)(Widget,{host:e.host,username:e.username,password:e.password},e.host))})})})}}},function(e){e.O(0,[228,445,556,559,774,888,179],function(){return e(e.s=1075)}),_N_E=e.O()}]);