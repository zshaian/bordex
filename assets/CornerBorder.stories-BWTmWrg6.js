import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as a,C as b}from"./theme-C2E9wPw4.js";import{r as S}from"./index-DmM0KDA7.js";const s={borderWidth:a.sm,borderStyle:"solid",borderColor:b.primary},t=S.forwardRef((h,y)=>{const{children:u,borderWidth:f=s.borderWidth,borderStyle:C=s.borderStyle,borderColor:g=s.borderColor,className:x,...B}=h,o={borderWidth:f,borderStyle:C,borderColor:g};return r.jsxs("div",{className:`corner-border-parent-position ${x}`,...B,ref:y,children:[r.jsx("div",{style:o,className:"corner-borders top-left-corner-border"}),r.jsx("div",{style:o,className:"corner-borders top-right-corner-border"}),r.jsx("div",{style:o,className:"corner-borders bottom-left-corner-border"}),r.jsx("div",{style:o,className:"corner-borders bottom-right-corner-border"}),u]})});t.__docgenInfo={description:"",methods:[],displayName:"CornerBorder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const E={component:t,argTypes:{borderWidth:{control:"text",description:"Width of the border",table:{defaultValue:{summary:a.sm}}},borderColor:{control:"color",description:"Color of the border",table:{defaultValue:{summary:b.primary}}},borderStyle:{control:"text",description:'Style of the border all the border styles that are available in "border-style" property of css are valid',table:{defaultValue:{summary:"solid"}}}}},e={args:{borderWidth:a.sm,borderStyle:"double",borderColor:"orange"},render:()=>r.jsx(t,{...e.args,style:{padding:"2rem"},children:r.jsx("p",{children:"hello world"})})},d={render:()=>r.jsx(t,{style:{padding:"2rem"},children:r.jsx("p",{children:"hello world"})})};var n,l,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    borderWidth: BORDER_SIZE.sm,
    borderStyle: 'double',
    borderColor: 'orange'
  },
  render: () => <CornerBorder {...CornerBorderWithProps.args} style={{
    padding: '2rem'
  }}>\r
      <p>hello world</p>\r
    </CornerBorder>
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,p,m;d.parameters={...d.parameters,docs:{...(i=d.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <CornerBorder style={{
    padding: '2rem'
  }}>\r
      <p>hello world</p>\r
    </CornerBorder>
}`,...(m=(p=d.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const N=["CornerBorderWithProps","CornerBorderDefault"];export{d as CornerBorderDefault,e as CornerBorderWithProps,N as __namedExportsOrder,E as default};
