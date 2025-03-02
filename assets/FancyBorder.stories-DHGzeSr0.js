import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-DmM0KDA7.js";import{B as s,C as t}from"./theme-C2E9wPw4.js";const a={borderWidth:s.sm,borderStyle:"solid",borderColor:t.primary},d=S.forwardRef((b,f)=>{const{borderWidth:n=a.borderWidth,borderStyle:h=a.borderStyle,borderColor:u=a.borderColor,style:x,className:B,children:g,...j}=b,R={borderWidth:n,borderStyle:h,borderColor:u};return r.jsxs("div",{style:{...R,...x},className:`fancy-border-parent-position ${B}`,...j,ref:f,children:[r.jsx("div",{className:"fancy-outside-border",style:{inset:`calc(0px - (10px + ${n}))`}}),r.jsx("div",{className:"fancy-corner-borders fancy-top-left-corner-border"}),r.jsx("div",{className:"fancy-corner-borders fancy-top-right-corner-border"}),r.jsx("div",{className:"fancy-corner-borders fancy-bottom-left-corner-border"}),r.jsx("div",{className:"fancy-corner-borders fancy-bottom-right-corner-border"}),g]})});d.__docgenInfo={description:"",methods:[],displayName:"FancyBorder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const N={component:d,argTypes:{borderColor:{control:"color",description:"Color of the border",table:{defaultValue:{summary:t.primary}}},borderWidth:{control:"text",description:"Color of the border",table:{defaultValue:{summary:s.sm}}},borderStyle:{control:"text",description:'Style of the border all the border styles that are available in "border-style" property of css are valid',table:{defaultValue:{summary:"solid"}}}}},e={args:{borderColor:t.secondary,borderWidth:s.sm,borderStyle:"double"},render:()=>r.jsx(d,{...e.args,style:{padding:"2rem"},children:r.jsx("p",{children:"hello world"})})},o={render:()=>r.jsx(d,{style:{padding:"2rem"},children:r.jsx("p",{children:"hello world"})})};var c,l,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    borderColor: COLOR_THEME.secondary,
    borderWidth: BORDER_SIZE.sm,
    borderStyle: 'double'
  },
  render: () => <FancyBorder {...FancyBorderWithProps.args} style={{
    padding: '2rem'
  }}>\r
      <p>hello world</p>\r
    </FancyBorder>
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var y,p,m;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <FancyBorder style={{
    padding: '2rem'
  }}>\r
      <p>hello world</p>\r
    </FancyBorder>
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const W=["FancyBorderWithProps","FancyBorderDefault"];export{o as FancyBorderDefault,e as FancyBorderWithProps,W as __namedExportsOrder,N as default};
