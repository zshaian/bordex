import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-CePRvBtH.js";import{M as i}from"./index-BhnSSlxw.js";import"./index-DmM0KDA7.js";import"./iframe-CzXW94TH.js";import"./index-DKqesacJ.js";import"./index-nLeaPAJ8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(r){const n={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduction"}),`
`,e.jsxs("div",{children:[e.jsxs("div",{class:"logo-container",children:[e.jsx("img",{src:"https://i.imgur.com/MvyDiXu.png",height:60}),e.jsx("h1",{class:"logo-container__title",children:"bordex"})]}),e.jsx(n.p,{children:"A simple React component library for addding styled borders to your elements."})]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install bordex
`})}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(n.p,{children:"Adding a Gradient Border to an element"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { GradientBorder } from 'bordex';\r
\r
export default function App() {\r
  return (\r
    <GradientBorder\r
      angle="45deg"\r
      colors={['red', 'green', 'blue']}\r
      borderWidth="5px"\r
    >\r
      <p>Gradient Border</p>\r
    </GradientBorder>\r
  );\r
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://i.imgur.com/ioaqDbB.jpeg",alt:"Gradient Border Example"})}),`
`,e.jsx("style",{children:`
    .logo-container {
      display:flex;
      align-items:center;
      gap:16px;
    }
    .logo-container__title {
      text-transform:capitalize;
    }
`})]})}function g(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{g as default};
