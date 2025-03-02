import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-DmM0KDA7.js";import{G as B}from"./GradientBorder-B69ZZLmv.js";import{C as e,B as G}from"./theme-C2E9wPw4.js";const t={angle:"45deg",colors:[e.primary,e.secondary],borderWidth:G.sm},a=x.forwardRef((h,w)=>{const{angle:d=t.angle,colors:l=t.colors,borderWidth:s=t.borderWidth,children:y,...b}=h,f={inset:`-${s}`,background:`linear-gradient(${d},${l.join(",")})`};return r.jsxs(B,{angle:d,colors:l,borderWidth:s,...b,ref:w,children:[r.jsx("div",{style:f,className:"glowing-gradient-border"}),y]})});a.__docgenInfo={description:"",methods:[],displayName:"GlowingGradientBorder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"ReactCSSProperties['color']",raw:"React.CSSProperties['color']"}],raw:"React.CSSProperties['color'][]"},description:""},angle:{required:!1,tsType:{name:"union",raw:"| `${number}deg`\r\n| `${number}grad`\r\n| `${number}rad`\r\n| `${number}turn`",elements:[{name:"literal",value:"`${number}deg`"},{name:"literal",value:"`${number}grad`"},{name:"literal",value:"`${number}rad`"},{name:"literal",value:"`${number}turn`"}]},description:""}}};const S={component:a,argTypes:{angle:{control:"text",description:"Angle of the gradient border must be a valid angle unit in css",table:{defaultValue:{summary:"45deg"}}},colors:{control:"object",description:"List of the colors for gradient",table:{defaultValue:{summary:`[${e.primary}, ${e.secondary}]`}}},borderWidth:{control:"text",description:"Width of the border",table:{defaultValue:{summary:G.sm}}}}},o={args:{angle:"45deg",colors:["violet","pink","orange","yellow"],borderWidth:"5px"},render:()=>r.jsx(a,{...o.args,style:{padding:"2rem",color:e.secondary},children:r.jsx("p",{children:"hello world"})})},n={render:()=>r.jsx(a,{style:{padding:"2rem",color:e.secondary},children:r.jsx("p",{children:"hello world"})})};var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    angle: '45deg',
    colors: ['violet', 'pink', 'orange', 'yellow'],
    borderWidth: '5px'
  },
  render: () => <GlowingGradientBorder {...GlowingGradientBorderWithProps.args} style={{
    padding: '2rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </GlowingGradientBorder>
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <GlowingGradientBorder style={{
    padding: '2rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </GlowingGradientBorder>
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const W=["GlowingGradientBorderWithProps","GlowingGradientBorderDefault"];export{n as GlowingGradientBorderDefault,o as GlowingGradientBorderWithProps,W as __namedExportsOrder,S as default};
