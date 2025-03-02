import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as H}from"./index-DmM0KDA7.js";import{B as i,C as l}from"./theme-C2E9wPw4.js";const s={border:`${i.sm} solid ${l.primary}`,borderWidth:i.sm,borderStyle:"solid",borderColor:l.primary},m=H.forwardRef((f,B)=>{const{border:r=s.border,borderWidth:e=s.borderWidth,borderStyle:o=s.borderStyle,borderColor:d=s.borderColor,borderTop:S=r,borderTopWidth:R=e,borderTopStyle:g=o,borderTopColor:C=d,borderRight:N=r,borderRightWidth:W=e,borderRightStyle:x=o,borderRightColor:E=d,borderBottom:T=r,borderBottomWidth:O=e,borderBottomStyle:_=o,borderBottomColor:j=d,borderLeft:w=r,borderLeftWidth:L=e,borderLeftStyle:D=o,borderLeftColor:P=d,children:v,style:I,...V}=f,q={border:r,borderWidth:e,borderStyle:o,borderColor:d,borderTop:S,borderTopWidth:R,borderTopStyle:g,borderTopColor:C,borderRight:N,borderRightWidth:W,borderRightStyle:x,borderRightColor:E,borderBottom:T,borderBottomWidth:O,borderBottomStyle:_,borderBottomColor:j,borderLeft:w,borderLeftWidth:L,borderLeftStyle:D,borderLeftColor:P};return a.jsx("div",{style:{...q,...I},...V,ref:B,children:v})});m.__docgenInfo={description:"",methods:[],displayName:"NormalBorder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},border:{required:!1,tsType:{name:"ReactCSSProperties['border']",raw:"React.CSSProperties['border']"},description:""}}};const k={component:m,argTypes:{borderWidth:{control:"text",description:"Width of the border",table:{defaultValue:{summary:i.sm}}},borderColor:{control:"color",description:"Color of the border",table:{defaultValue:{summary:l.secondary}}},borderStyle:{control:"text",description:'Style of the border all the border styles that are available in "border-style" property of css are valid',table:{defaultValue:{summary:l.secondary}}}}},t={args:{borderWidth:i.sm,borderStyle:"double",borderColor:l.secondary},render:()=>a.jsx(m,{...t.args,style:{padding:"2rem"},children:a.jsx("p",{children:"hello world"})})},n={render:()=>a.jsx(m,{style:{padding:"2rem"},children:a.jsx("p",{children:"hello world"})})};var p,b,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    borderWidth: BORDER_SIZE.sm,
    borderStyle: 'double',
    borderColor: COLOR_THEME.secondary
  },
  render: () => <NormalBorder {...NormalBorderWithProps.args} style={{
    padding: '2rem'
  }}>\r
      <p>hello world</p>\r
    </NormalBorder>
}`,...(c=(b=t.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};var h,y,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <NormalBorder style={{
    padding: '2rem'
  }}>\r
      <p>hello world</p>\r
    </NormalBorder>
}`,...(u=(y=n.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const z=["NormalBorderWithProps","NormalBorderDefault"];export{n as NormalBorderDefault,t as NormalBorderWithProps,z as __namedExportsOrder,k as default};
