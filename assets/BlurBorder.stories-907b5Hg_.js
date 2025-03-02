import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{C as n,B as d}from"./theme-C2E9wPw4.js";import{r as h}from"./index-DmM0KDA7.js";const e={borderBlur:"10px",borderWidth:d.md,borderColor:n.primary},t=h.forwardRef((i,p)=>{const{children:u,borderColor:m=e.borderColor,borderWidth:c=e.borderWidth,borderBlur:b=e.borderBlur,style:B,...x}=i;return o.jsx("div",{style:{boxShadow:`0px 0px ${b} ${c} ${m}`,...B},...x,ref:p,children:u})});t.__docgenInfo={description:"",methods:[],displayName:"BlurBorder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},borderBlur:{required:!1,tsType:{name:"string"},description:""}}};const R={component:t,argTypes:{borderBlur:{control:"text",description:"Blur value  in px unit",table:{defaultValue:{summary:"10px"}}},borderWidth:{control:"text",description:"Width of the border",table:{defaultValue:{summary:d.sm}}},borderColor:{control:"color",description:"Color of the border",table:{defaultValue:{summary:n.primary}}}}},r={args:{borderBlur:"10px",borderWidth:d.md,borderColor:"orange"},render:()=>o.jsx(t,{...r.args,style:{padding:"2rem"},children:o.jsx("p",{children:"hello world"})})};var l,a,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    borderBlur: '10px',
    borderWidth: BORDER_SIZE.md,
    borderColor: 'orange'
  },
  render: () => <BlurBorder {...SmallBlurBorder.args} style={{
    padding: '2rem'
  }}>\r
      <p>hello world</p>\r
    </BlurBorder>
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const C=["SmallBlurBorder"];export{r as SmallBlurBorder,C as __namedExportsOrder,R as default};
