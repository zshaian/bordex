import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{C as d,B as t}from"./theme-C2E9wPw4.js";import{r as h}from"./index-DmM0KDA7.js";const e={borderBlur:"10px",borderWidth:t.md,borderColor:d.primary},l=h.forwardRef((i,p)=>{const{children:c,borderColor:u=e.borderColor,borderWidth:m=e.borderWidth,borderBlur:b=e.borderBlur,style:B,...x}=i;return o.jsx("div",{style:{boxShadow:`0px 0px ${b} ${m} ${u}`,...B},...x,ref:p,children:c})});l.__docgenInfo={description:"",methods:[],displayName:"BlurBorder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},borderBlur:{required:!1,tsType:{name:"string"},description:""}}};const R={component:l,argTypes:{borderBlur:{control:"text",description:"Blur value  in px unit",table:{defaultValue:{summary:"10px"}}},borderWidth:{control:"text",description:"Width of the border",table:{defaultValue:{summary:t.sm}}},borderColor:{control:"color",description:"Color of the border",table:{defaultValue:{summary:d.primary}}}}},r={args:{borderBlur:"10px",borderWidth:t.md,borderColor:"orange"},render:()=>o.jsx(l,{...r.args,style:{padding:"2rem",color:d.secondary},children:o.jsx("p",{children:"hello world"})})};var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    borderBlur: '10px',
    borderWidth: BORDER_SIZE.md,
    borderColor: 'orange'
  },
  render: () => <BlurBorder {...SmallBlurBorder.args} style={{
    padding: '2rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </BlurBorder>
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const E=["SmallBlurBorder"];export{r as SmallBlurBorder,E as __namedExportsOrder,R as default};
