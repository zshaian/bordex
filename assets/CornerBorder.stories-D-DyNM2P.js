import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as a,C as s}from"./theme-C2E9wPw4.js";import{r as E}from"./index-DmM0KDA7.js";const n={borderWidth:a.sm,borderStyle:"solid",borderColor:s.primary},t=E.forwardRef((y,h)=>{const{children:u,borderWidth:C=n.borderWidth,borderStyle:f=n.borderStyle,borderColor:g=n.borderColor,className:x,...B}=y,o={borderWidth:C,borderStyle:f,borderColor:g};return r.jsxs("div",{className:`corner-border-parent-position ${x}`,...B,ref:h,children:[r.jsx("div",{style:o,className:"corner-borders top-left-corner-border"}),r.jsx("div",{style:o,className:"corner-borders top-right-corner-border"}),r.jsx("div",{style:o,className:"corner-borders bottom-left-corner-border"}),r.jsx("div",{style:o,className:"corner-borders bottom-right-corner-border"}),u]})});t.__docgenInfo={description:"",methods:[],displayName:"CornerBorder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const O={component:t,argTypes:{borderWidth:{control:"text",description:"Width of the border",table:{defaultValue:{summary:a.sm}}},borderColor:{control:"color",description:"Color of the border",table:{defaultValue:{summary:s.primary}}},borderStyle:{control:"text",description:'Style of the border all the border styles that are available in "border-style" property of css are valid',table:{defaultValue:{summary:"solid"}}}}},e={args:{borderWidth:a.sm,borderStyle:"double",borderColor:"orange"},render:()=>r.jsx(t,{...e.args,style:{padding:"2rem",color:s.secondary},children:r.jsx("p",{children:"hello world"})})},d={render:()=>r.jsx(t,{style:{padding:"2rem",color:s.secondary},children:r.jsx("p",{children:"hello world"})})};var l,c,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    borderWidth: BORDER_SIZE.sm,
    borderStyle: 'double',
    borderColor: 'orange'
  },
  render: () => <CornerBorder {...CornerBorderWithProps.args} style={{
    padding: '2rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </CornerBorder>
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,m,b;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <CornerBorder style={{
    padding: '2rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </CornerBorder>
}`,...(b=(m=d.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const W=["CornerBorderWithProps","CornerBorderDefault"];export{d as CornerBorderDefault,e as CornerBorderWithProps,W as __namedExportsOrder,O as default};
