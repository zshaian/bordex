import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-DmM0KDA7.js";import{C as n}from"./theme-C2E9wPw4.js";const B="-0.1rem",s={angle:"45deg",borderColor:n.primary},d=f.forwardRef((p,u)=>{const{angle:g=s.angle,borderColor:j=s.borderColor,className:b,children:h,...y}=p,D={inset:`${B}`,borderRadius:"inherit",background:`linear-gradient(${g},#00000000 1%, ${j},#00000000 99%)`,zIndex:"-1"};return e.jsxs("div",{className:`disjointed-parent-initial-design ${b}`,...y,ref:u,children:[e.jsx("div",{style:D,className:"disjointed-border"}),h]})});d.__docgenInfo={description:"",methods:[],displayName:"DisjointedBorder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},angle:{required:!1,tsType:{name:"union",raw:"| `${number}deg`\r\n| `${number}grad`\r\n| `${number}rad`\r\n| `${number}turn`",elements:[{name:"literal",value:"`${number}deg`"},{name:"literal",value:"`${number}grad`"},{name:"literal",value:"`${number}rad`"},{name:"literal",value:"`${number}turn`"}]},description:""}}};const $={component:d,argTypes:{angle:{control:"text",description:"Angle of the disjointed border must be a valid angle unit in css",table:{defaultValue:{summary:"45deg"}}},borderColor:{control:"color",description:"Color of the border",table:{defaultValue:{summary:n.primary}}}}},r={args:{borderColor:"red",angle:"45deg"},render:()=>e.jsx(d,{...r.args,style:{padding:"0.5rem",color:n.secondary},children:e.jsx("p",{children:"hello world"})})},o={render:()=>e.jsx(d,{style:{padding:"0.5rem",color:n.secondary},children:e.jsx("p",{children:"hello world"})})};var a,t,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    borderColor: 'red',
    angle: '45deg'
  },
  render: () => <DisjointedBorder {...DisjointedBorderWithProps.args} style={{
    padding: '0.5rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </DisjointedBorder>
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var l,c,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <DisjointedBorder style={{
    padding: '0.5rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </DisjointedBorder>
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const C=["DisjointedBorderWithProps","DisjointedBorderDefault"];export{o as DisjointedBorderDefault,r as DisjointedBorderWithProps,C as __namedExportsOrder,$ as default};
