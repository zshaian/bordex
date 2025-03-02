import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-DmM0KDA7.js";import{B as i,C as r}from"./theme-C2E9wPw4.js";const s={border:`${i.sm} solid ${r.primary}`,borderWidth:i.sm,borderStyle:"solid",borderColor:r.primary},c=V.forwardRef((f,B)=>{const{border:e=s.border,borderWidth:o=s.borderWidth,borderStyle:d=s.borderStyle,borderColor:t=s.borderColor,borderTop:R=e,borderTopWidth:S=o,borderTopStyle:C=d,borderTopColor:g=t,borderRight:E=e,borderRightWidth:N=o,borderRightStyle:W=d,borderRightColor:x=t,borderBottom:O=e,borderBottomWidth:T=o,borderBottomStyle:_=d,borderBottomColor:L=t,borderLeft:j=e,borderLeftWidth:w=o,borderLeftStyle:D=d,borderLeftColor:P=t,children:H,style:M,...v}=f,I={border:e,borderWidth:o,borderStyle:d,borderColor:t,borderTop:R,borderTopWidth:S,borderTopStyle:C,borderTopColor:g,borderRight:E,borderRightWidth:N,borderRightStyle:W,borderRightColor:x,borderBottom:O,borderBottomWidth:T,borderBottomStyle:_,borderBottomColor:L,borderLeft:j,borderLeftWidth:w,borderLeftStyle:D,borderLeftColor:P};return l.jsx("div",{style:{...I,...M},...v,ref:B,children:H})});c.__docgenInfo={description:"",methods:[],displayName:"NormalBorder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},border:{required:!1,tsType:{name:"ReactCSSProperties['border']",raw:"React.CSSProperties['border']"},description:""}}};const k={component:c,argTypes:{borderWidth:{control:"text",description:"Width of the border",table:{defaultValue:{summary:i.sm}}},borderColor:{control:"color",description:"Color of the border",table:{defaultValue:{summary:r.secondary}}},borderStyle:{control:"text",description:'Style of the border all the border styles that are available in "border-style" property of css are valid',table:{defaultValue:{summary:r.secondary}}}}},a={args:{borderWidth:i.sm,borderStyle:"double",borderColor:r.secondary},render:()=>l.jsx(c,{...a.args,style:{padding:"2rem",color:r.secondary},children:l.jsx("p",{children:"hello world"})})},n={render:()=>l.jsx(c,{style:{padding:"2rem",color:r.secondary},children:l.jsx("p",{children:"hello world"})})};var m,p,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    borderWidth: BORDER_SIZE.sm,
    borderStyle: 'double',
    borderColor: COLOR_THEME.secondary
  },
  render: () => <NormalBorder {...NormalBorderWithProps.args} style={{
    padding: '2rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </NormalBorder>
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,h,u;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <NormalBorder style={{
    padding: '2rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </NormalBorder>
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const z=["NormalBorderWithProps","NormalBorderDefault"];export{n as NormalBorderDefault,a as NormalBorderWithProps,z as __namedExportsOrder,k as default};
