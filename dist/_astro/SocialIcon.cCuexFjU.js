import{j as e,r as c}from"./react-core.BzPYpmcP.js";import{A as j,I as d}from"./ui-primitives.r4PY3rvS.js";import"./accordion.C6yfI0Q0.js";import"./visibility-hooks.hQtjzsXG.js";import"./engagement-hooks.By-Bf1QQ.js";const N={sm:"p-2",md:"p-2.5",lg:"p-3"},v={sm:"sm",md:"md",lg:"lg"};function k({title:s,link:r,icon:t="lu:globe",size:i="md"}){const a=`${N[i]} rounded-full inline-flex items-center justify-center bg-accent/10 border border-accent/30 text-accent`,n=v[i];return e.jsx(j,{variant:"progress-b-f",triggers:"hover",duration:800,borderRadius:"rounded-full",borderWidth:2,color:"var(--color-accent)",className:"inline-flex transition-all duration-300 hover:-translate-y-1",innerClassName:"rounded-full w-full h-full",children:r?e.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:`inline-flex rounded-full ${a}`,"aria-label":`Visit our ${s}`,title:s,children:e.jsx(d,{icon:t,size:n,className:"text-current"})}):e.jsx("div",{className:`inline-flex rounded-full ${a}`,title:s,children:e.jsx(d,{icon:t,size:n,className:"text-current"})})})}function A({label:s,value:r,variant:t="primary",showValue:i=!0,stat:a,delay:n=0,height:x="h-10",className:u=""}){const[l,f]=c.useState(!1),o=c.useRef(null);c.useEffect(()=>{const m=new IntersectionObserver(g=>{g.forEach(b=>{b.isIntersecting&&!l&&setTimeout(()=>f(!0),n)})},{threshold:.3});return o.current&&m.observe(o.current),()=>m.disconnect()},[l,n]);const p=t==="primary"?"primary-gradient":t==="primary-reverse"?"bg-linear-to-r from-accent-700 to-accent":"bg-text/30",h=t==="primary"||t==="primary-reverse"?"text-accent font-bold":"text-text/60";return e.jsxs("div",{ref:o,className:`w-full ${u}`,children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm text-text/80",children:s}),a&&e.jsx("span",{className:`text-lg ${h}`,children:a})]}),e.jsxs("div",{className:`w-full ${x} bg-text/10 rounded-sm overflow-hidden relative`,children:[e.jsx("div",{className:`h-full rounded-sm transition-all duration-1000 ease-out ${p}`,style:{width:l?`${r}%`:"0%"}}),i&&e.jsxs("span",{className:"absolute inset-0 flex items-center pl-3 text-sm font-semibold text-white",children:[r,"%"]})]})]})}function C({title:s="Your Website",url:r="yourwebsite.com",description:t="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",date:i="Dec 21, 2025",favicon:a="lu:globe",className:n=""}){return e.jsxs("div",{className:`relative bg-bg2 rounded-lg p-4 text-left border border-text/10 overflow-hidden ${n}`,children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-bg3 flex items-center justify-center shrink-0",children:e.jsx(d,{icon:a,size:"sm",className:"text-primary"})}),e.jsxs("div",{className:"flex flex-col leading-tight",children:[e.jsx("span",{className:"text-sm text-text",children:s}),e.jsx("span",{className:"text-xs text-text/70",children:r})]})]}),e.jsxs("h3",{className:"text-lg text-primary mb-1 inline-block animate-[titleHighlight_3s_ease-in-out_infinite]",children:[s," — Home"]}),e.jsxs("p",{className:"text-sm text-text/60 leading-relaxed",children:[e.jsx("span",{className:"text-text/70",children:i}),e.jsx("span",{className:"text-text/40 mx-1",children:"—"}),t,e.jsx("span",{className:"text-primary ml-1 cursor-pointer hover:underline",children:"Read more"})]}),e.jsx("div",{className:"absolute pointer-events-none animate-[cursorMove_3s_ease-in-out_infinite]",style:{top:"50px",left:"-20px"},children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"drop-shadow-lg",children:e.jsx("path",{d:"M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.86a.5.5 0 0 0-.85.35Z",fill:"white",stroke:"black",strokeWidth:"1"})})}),e.jsx("style",{children:`
        @keyframes cursorMove {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          40%, 70% {
            transform: translate(80px, 10px);
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          95% {
            transform: translate(80px, 10px);
            opacity: 0;
          }
        }
        @keyframes titleHighlight {
          0%, 35% {
            text-decoration: none;
          }
          40%, 75% {
            text-decoration: underline;
          }
          80%, 100% {
            text-decoration: none;
          }
        }
      `})]})}export{A as B,C as G,k as default};
