import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-DmM0KDA7.js";import{G as B}from"./GradientBorder-B69ZZLmv.js";import{C as n,B as G}from"./theme-C2E9wPw4.js";const t={angle:"45deg",colors:[n.primary,n.secondary],borderWidth:G.sm},a=x.forwardRef((h,w)=>{const{angle:d=t.angle,colors:l=t.colors,borderWidth:i=t.borderWidth,children:b,...f}=h,y={inset:`-${i}`,background:`linear-gradient(${d},${l.join(",")})`};return r.jsxs(B,{angle:d,colors:l,borderWidth:i,...f,ref:w,children:[r.jsx("div",{style:y,className:"glowing-gradient-border"}),b]})});a.__docgenInfo={description:"",methods:[],displayName:"GlowingGradientBorder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"ReactCSSProperties['color']",raw:"React.CSSProperties['color']"}],raw:"React.CSSProperties['color'][]"},description:""},angle:{required:!1,tsType:{name:"union",raw:"| `${number}deg`\r\n| `${number}grad`\r\n| `${number}rad`\r\n| `${number}turn`",elements:[{name:"literal",value:"`${number}deg`"},{name:"literal",value:"`${number}grad`"},{name:"literal",value:"`${number}rad`"},{name:"literal",value:"`${number}turn`"}]},description:""}}};const W={component:a,argTypes:{angle:{control:"text",description:"Angle of the gradient border must be a valid angle unit in css",table:{defaultValue:{summary:"45deg"}}},colors:{control:"object",description:"List of the colors for gradient",table:{defaultValue:{summary:`[${n.primary}, ${n.secondary}]`}}},borderWidth:{control:"text",description:"Width of the border",table:{defaultValue:{summary:G.sm}}}}},e={args:{angle:"45deg",colors:["violet","pink","orange","yellow"],borderWidth:"5px"},render:()=>r.jsx(a,{...e.args,style:{padding:"2rem"},children:r.jsx("p",{children:"hello world"})})},o={render:()=>r.jsx(a,{style:{padding:"2rem"},children:r.jsx("p",{children:"hello world"})})};var s,c,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    angle: '45deg',
    colors: ['violet', 'pink', 'orange', 'yellow'],
    borderWidth: '5px'
  },
  render: () => <GlowingGradientBorder {...GlowingGradientBorderWithProps.args} style={{
    padding: '2rem'
  }}>\r
      <p>hello world</p>\r
    </GlowingGradientBorder>
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <GlowingGradientBorder style={{
    padding: '2rem'
  }}>\r
      <p>hello world</p>\r
    </GlowingGradientBorder>
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const v=["GlowingGradientBorderWithProps","GlowingGradientBorderDefault"];export{o as GlowingGradientBorderDefault,e as GlowingGradientBorderWithProps,v as __namedExportsOrder,W as default};
