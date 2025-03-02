import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-DmM0KDA7.js";import{B as t,C as o}from"./theme-C2E9wPw4.js";const s={borderWidth:t.sm,borderStyle:"solid",borderColor:o.primary},a=C.forwardRef((b,f)=>{const{borderWidth:n=s.borderWidth,borderStyle:h=s.borderStyle,borderColor:u=s.borderColor,style:x,className:B,children:E,...g}=b,R={borderWidth:n,borderStyle:h,borderColor:u};return r.jsxs("div",{style:{...R,...x},className:`fancy-border-parent-position ${B}`,...g,ref:f,children:[r.jsx("div",{className:"fancy-outside-border",style:{inset:`calc(0px - (10px + ${n}))`}}),r.jsx("div",{className:"fancy-corner-borders fancy-top-left-corner-border"}),r.jsx("div",{className:"fancy-corner-borders fancy-top-right-corner-border"}),r.jsx("div",{className:"fancy-corner-borders fancy-bottom-left-corner-border"}),r.jsx("div",{className:"fancy-corner-borders fancy-bottom-right-corner-border"}),E]})});a.__docgenInfo={description:"",methods:[],displayName:"FancyBorder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const F={component:a,argTypes:{borderColor:{control:"color",description:"Color of the border",table:{defaultValue:{summary:o.primary}}},borderWidth:{control:"text",description:"Color of the border",table:{defaultValue:{summary:t.sm}}},borderStyle:{control:"text",description:'Style of the border all the border styles that are available in "border-style" property of css are valid',table:{defaultValue:{summary:"solid"}}}}},e={args:{borderColor:o.secondary,borderWidth:t.sm,borderStyle:"double"},render:()=>r.jsx(a,{...e.args,style:{padding:"2rem",color:o.secondary},children:r.jsx("p",{children:"hello world"})})},d={render:()=>r.jsx(a,{style:{padding:"2rem",color:o.secondary},children:r.jsx("p",{children:"hello world"})})};var c,l,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    borderColor: COLOR_THEME.secondary,
    borderWidth: BORDER_SIZE.sm,
    borderStyle: 'double'
  },
  render: () => <FancyBorder {...FancyBorderWithProps.args} style={{
    padding: '2rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </FancyBorder>
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var y,p,m;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <FancyBorder style={{
    padding: '2rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </FancyBorder>
}`,...(m=(p=d.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const N=["FancyBorderWithProps","FancyBorderDefault"];export{d as FancyBorderDefault,e as FancyBorderWithProps,N as __namedExportsOrder,F as default};
