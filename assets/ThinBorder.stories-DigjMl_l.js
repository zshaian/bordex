import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-DmM0KDA7.js";import{C as f}from"./theme-C2E9wPw4.js";function w(e){switch(e){case"top":return"100% 0 0 0";case"left":return"0 0 0 100%";case"bottom":return"0 0 100% 0";case"right":return"0 100% 0 0";case"horizontal":return"0 100% 0 100%";case"vertical":return"100% 0 100% 0";default:return"0 0 0 100%"}}function C(e){return e==="top"||e==="bottom"||e==="vertical"?"to left":"to bottom"}const c={side:"vertical",borderColor:f.secondary},n=S.forwardRef((e,a)=>{const{side:i=c.side,borderColor:T=c.borderColor,children:B,className:x,...v}=e,s="1.5px",d=w(i),l=C(i);console.log(d,l);const y={borderImageSource:`linear-gradient(${l}, rgba(0,0,0,0) 1%, ${T} 50%, rgba(0,0,0,0) 99%)`,borderImageWidth:s,borderImageOutset:s,borderImageSlice:d};return r.jsxs("div",{className:`thin-border-parent-position ${x}`,...v,ref:a,children:[r.jsx("div",{style:y,className:"thin-border"}),B]})});n.__docgenInfo={description:"",methods:[],displayName:"ThinBorder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left' | 'horizontal' | 'vertical'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""}}};const _={component:n,argTypes:{borderColor:{control:"color",description:"Color of the border",table:{defaultValue:{summary:f.primary}}},side:{control:"text",description:"Side on which the thin border is going to appear",table:{defaultValue:{summary:"vertical"}}}}},o={args:{borderColor:"red",side:"left"},render:()=>r.jsx(n,{...o.args,style:{padding:"1rem"},children:r.jsx("p",{children:"hello world"})})},t={render:()=>r.jsx(n,{style:{padding:"2rem"},children:r.jsx("p",{children:"hello world"})})};var m,p,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    borderColor: 'red',
    side: 'left'
  },
  render: () => <ThinBorder {...ThinBorderWithProps.args} style={{
    padding: '1rem'
  }}>\r
      <p>hello world</p>\r
    </ThinBorder>
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,g,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <ThinBorder style={{
    padding: '2rem'
  }}>\r
      <p>hello world</p>\r
    </ThinBorder>
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const E=["ThinBorderWithProps","ThinBorderDefault"];export{t as ThinBorderDefault,o as ThinBorderWithProps,E as __namedExportsOrder,_ as default};
