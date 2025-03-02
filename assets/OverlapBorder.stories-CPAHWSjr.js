import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-DmM0KDA7.js";import{B as l,C as d}from"./theme-C2E9wPw4.js";const t={borderWidth:l.sm,borderStyle:"solid",borderColor:d.primary},s=S.forwardRef((h,u)=>{const{children:O,borderWidth:a=t.borderWidth,borderStyle:f=t.borderStyle,borderColor:v=t.borderColor,className:B,style:x,...R}=h,E={borderWidth:a,borderStyle:f,borderColor:v},n="40px";return r.jsxs("div",{style:{...E,...x},className:`overlap-border-parent-position ${B}`,...R,ref:u,children:[r.jsx("div",{style:{inset:`calc(0px - (${n} + ${a})) calc(${n} - ${a})`},className:"offset-border"}),O]})});s.__docgenInfo={description:"",methods:[],displayName:"OverlapBorder",props:{chilldren:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _={component:s,argTypes:{borderWidth:{control:"text",description:"Width of the border",table:{defaultValue:{summary:l.sm}}},borderColor:{control:"color",description:"Color of the border",table:{defaultValue:{summary:d.secondary}}},borderStyle:{control:"text",description:'Style of the border all the border styles that are available in "border-style" property of css are valid',table:{defaultValue:{summary:d.secondary}}}}},e={args:{borderWidth:l.sm,borderStyle:"solid",borderColor:d.secondary},render:()=>r.jsx(s,{...e.args,style:{padding:"2rem"},children:r.jsx("p",{children:"hello world"})})},o={render:()=>r.jsx(s,{style:{padding:"2rem"},children:r.jsx("p",{children:"hello world"})})};var p,c,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    borderWidth: BORDER_SIZE.sm,
    borderStyle: 'solid',
    borderColor: COLOR_THEME.secondary
  },
  render: () => <OverlapBorder {...OverlapBorderWithProps.args} style={{
    padding: '2rem'
  }}>\r
      <p>hello world</p>\r
    </OverlapBorder>
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,b,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <OverlapBorder style={{
    padding: '2rem'
  }}>\r
      <p>hello world</p>\r
    </OverlapBorder>
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const j=["OverlapBorderWithProps","OverlapBorderDefault"];export{o as OverlapBorderDefault,e as OverlapBorderWithProps,j as __namedExportsOrder,_ as default};
