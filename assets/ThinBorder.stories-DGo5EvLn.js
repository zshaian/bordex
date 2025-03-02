import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-DmM0KDA7.js";import{C as n}from"./theme-C2E9wPw4.js";function E(r){switch(r){case"top":return"100% 0 0 0";case"left":return"0 0 0 100%";case"bottom":return"0 0 100% 0";case"right":return"0 100% 0 0";case"horizontal":return"0 100% 0 100%";case"vertical":return"100% 0 100% 0";default:return"0 0 0 100%"}}function O(r){return r==="top"||r==="bottom"||r==="vertical"?"to left":"to bottom"}const m={side:"vertical",borderColor:n.secondary},a=C.forwardRef((r,s)=>{const{side:i=m.side,borderColor:T=m.borderColor,children:y,className:B,...x}=r,d="1.5px",l=E(i),c=O(i);console.log(l,c);const v={borderImageSource:`linear-gradient(${c}, rgba(0,0,0,0) 1%, ${T} 50%, rgba(0,0,0,0) 99%)`,borderImageWidth:d,borderImageOutset:d,borderImageSlice:l};return e.jsxs("div",{className:`thin-border-parent-position ${B}`,...x,ref:s,children:[e.jsx("div",{style:v,className:"thin-border"}),y]})});a.__docgenInfo={description:"",methods:[],displayName:"ThinBorder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left' | 'horizontal' | 'vertical'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""}}};const w={component:a,argTypes:{borderColor:{control:"color",description:"Color of the border",table:{defaultValue:{summary:n.primary}}},side:{control:"text",description:"Side on which the thin border is going to appear",table:{defaultValue:{summary:"vertical"}}}}},o={args:{borderColor:"red",side:"left"},render:()=>e.jsx(a,{...o.args,style:{padding:"1rem",color:n.secondary},children:e.jsx("p",{children:"hello world"})})},t={render:()=>e.jsx(a,{style:{padding:"2rem",color:n.secondary},children:e.jsx("p",{children:"hello world"})})};var p,h,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    borderColor: 'red',
    side: 'left'
  },
  render: () => <ThinBorder {...ThinBorderWithProps.args} style={{
    padding: '1rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </ThinBorder>
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,b,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <ThinBorder style={{
    padding: '2rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </ThinBorder>
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const j=["ThinBorderWithProps","ThinBorderDefault"];export{t as ThinBorderDefault,o as ThinBorderWithProps,j as __namedExportsOrder,w as default};
