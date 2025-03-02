import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-DmM0KDA7.js";import{C as c}from"./theme-C2E9wPw4.js";const B="-0.1rem",d={angle:"45deg",borderColor:c.primary},n=y.forwardRef((p,u)=>{const{angle:g=d.angle,borderColor:j=d.borderColor,className:b,children:h,...D}=p,f={inset:`${B}`,borderRadius:"inherit",background:`linear-gradient(${g},#00000000 1%, ${j},#00000000 99%)`,zIndex:"-1"};return e.jsxs("div",{className:`disjointed-parent-initial-design ${b}`,...D,ref:u,children:[e.jsx("div",{style:f,className:"disjointed-border"}),h]})});n.__docgenInfo={description:"",methods:[],displayName:"DisjointedBorder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},angle:{required:!1,tsType:{name:"union",raw:"| `${number}deg`\r\n| `${number}grad`\r\n| `${number}rad`\r\n| `${number}turn`",elements:[{name:"literal",value:"`${number}deg`"},{name:"literal",value:"`${number}grad`"},{name:"literal",value:"`${number}rad`"},{name:"literal",value:"`${number}turn`"}]},description:""}}};const C={component:n,argTypes:{angle:{control:"text",description:"Angle of the disjointed border must be a valid angle unit in css",table:{defaultValue:{summary:"45deg"}}},borderColor:{control:"color",description:"Color of the border",table:{defaultValue:{summary:c.primary}}}}},r={args:{borderColor:"red",angle:"45deg"},render:()=>e.jsx(n,{...r.args,style:{padding:"0.5rem"},children:e.jsx("p",{children:"hello world"})})},o={render:()=>e.jsx(n,{style:{padding:"0.5rem"},children:e.jsx("p",{children:"hello world"})})};var s,a,t;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    borderColor: 'red',
    angle: '45deg'
  },
  render: () => <DisjointedBorder {...DisjointedBorderWithProps.args} style={{
    padding: '0.5rem'
  }}>\r
      <p>hello world</p>\r
    </DisjointedBorder>
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var i,l,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <DisjointedBorder style={{
    padding: '0.5rem'
  }}>\r
      <p>hello world</p>\r
    </DisjointedBorder>
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const E=["DisjointedBorderWithProps","DisjointedBorderDefault"];export{o as DisjointedBorderDefault,r as DisjointedBorderWithProps,E as __namedExportsOrder,C as default};
