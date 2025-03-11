import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-CePRvBtH.js";import{M as i}from"./index-Co5dqBKm.js";import"./index-DmM0KDA7.js";import"./iframe-BVChMQtQ.js";import"./index-DKqesacJ.js";import"./index-nLeaPAJ8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(n){const r={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduction"}),`
`,e.jsxs("div",{children:[e.jsxs("div",{class:"logo-container",children:[e.jsx("img",{src:"./src/stories/assets/bordex-logo.png",height:60}),e.jsx("h1",{class:"logo-container__title",children:"bordex"})]}),e.jsx(r.p,{children:"A simple React component library for addding styled borders to your elements."})]}),`
`,e.jsx(r.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`npm install bordex
`})}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(r.p,{children:"Adding a Gradient Border to an element"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { GradientBorder } from 'bordex';\r
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
`,e.jsx(r.p,{children:e.jsx(r.img,{src:"./src/assets/example_border.jpg",alt:"Gradient Border Example"})}),`
`,e.jsx("style",{children:`
    .logo-container {
      display:flex;
      align-items:center;
      gap:16px;
    }
    .logo-container__title {
      text-transform:capitalize;
    }
`})]})}function h(n={}){const{wrapper:r}={...o(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{h as default};
