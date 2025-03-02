import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-DmM0KDA7.js";import{B as l,C as e}from"./theme-C2E9wPw4.js";const t={borderWidth:l.sm,borderStyle:"solid",borderColor:e.primary},s=S.forwardRef((h,O)=>{const{children:u,borderWidth:a=t.borderWidth,borderStyle:f=t.borderStyle,borderColor:v=t.borderColor,className:B,style:E,...R}=h,x={borderWidth:a,borderStyle:f,borderColor:v},n="40px";return r.jsxs("div",{style:{...x,...E},className:`overlap-border-parent-position ${B}`,...R,ref:O,children:[r.jsx("div",{style:{inset:`calc(0px - (${n} + ${a})) calc(${n} - ${a})`},className:"offset-border"}),u]})});s.__docgenInfo={description:"",methods:[],displayName:"OverlapBorder",props:{chilldren:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const W={component:s,argTypes:{borderWidth:{control:"text",description:"Width of the border",table:{defaultValue:{summary:l.sm}}},borderColor:{control:"color",description:"Color of the border",table:{defaultValue:{summary:e.secondary}}},borderStyle:{control:"text",description:'Style of the border all the border styles that are available in "border-style" property of css are valid',table:{defaultValue:{summary:e.secondary}}}}},o={args:{borderWidth:l.sm,borderStyle:"solid",borderColor:e.secondary},render:()=>r.jsx(s,{...o.args,style:{padding:"2rem",color:e.secondary},children:r.jsx("p",{children:"hello world"})})},d={render:()=>r.jsx(s,{style:{padding:"2rem",color:e.secondary},children:r.jsx("p",{children:"hello world"})})};var c,p,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    borderWidth: BORDER_SIZE.sm,
    borderStyle: 'solid',
    borderColor: COLOR_THEME.secondary
  },
  render: () => <OverlapBorder {...OverlapBorderWithProps.args} style={{
    padding: '2rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </OverlapBorder>
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,y,b;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <OverlapBorder style={{
    padding: '2rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </OverlapBorder>
}`,...(b=(y=d.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const j=["OverlapBorderWithProps","OverlapBorderDefault"];export{d as OverlapBorderDefault,o as OverlapBorderWithProps,j as __namedExportsOrder,W as default};
