import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./index-DmM0KDA7.js";import{B as f,C as t}from"./theme-C2E9wPw4.js";function C(n,m){let s=0;const a=[];for(let e=0;e<n.length;e++){const i=m*(e+1),d=n[e];a.push(`${d} ${s}%,${d} ${i}%`),s=i}return a.join(",")}const l={angle:"45deg",stripeWidth:10,colors:[t.primary,t.secondary],borderWidth:f.sm},c=R.forwardRef((n,m)=>{const{children:s,borderWidth:a=l.borderWidth,angle:e=l.angle,stripeWidth:i=l.stripeWidth,colors:d=l.colors,className:W,...$}=n,B=C(d,i),x={inset:`-${a}`,backgroundColor:"green",backgroundImage:`repeating-linear-gradient(${e},${B})`};return r.jsxs("div",{className:`stripe-border-parent-position ${W}`,...$,ref:m,children:[r.jsx("div",{style:x,className:"stripe-border"}),s]})});c.__docgenInfo={description:"",methods:[],displayName:"StripeBorder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},angle:{required:!1,tsType:{name:"union",raw:"| `${number}deg`\r\n| `${number}grad`\r\n| `${number}rad`\r\n| `${number}turn`",elements:[{name:"literal",value:"`${number}deg`"},{name:"literal",value:"`${number}grad`"},{name:"literal",value:"`${number}rad`"},{name:"literal",value:"`${number}turn`"}]},description:""},stripeWidth:{required:!1,tsType:{name:"number"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"ReactCSSProperties['color']",raw:"React.CSSProperties['color']"}],raw:"React.CSSProperties['color'][]"},description:""}}};const O={component:c,argTypes:{borderWidth:{control:"text",description:"Width of the border",table:{defaultValue:{summary:f.sm}}},stripeWidth:{control:"number",description:"Width of the stripe border the number that you type is in (%) percent unit in css",table:{defaultValue:{summary:"10"}}},angle:{control:"text",description:"Angle of the gradient border must be a valid angle unit in css",table:{defaultValue:{summary:"45deg"}}},colors:{control:"object",description:"List of colors in the stripeWidth",table:{defaultValue:{summary:`[${t.primary},${t.secondary}]`}}}}},o={args:{borderWidth:"5px",stripeWidth:10,angle:"45deg",colors:["red","orange","lightblue"]},render:()=>r.jsx(c,{...o.args,style:{padding:"2rem",color:t.secondary},children:r.jsx("p",{children:"hello world"})})},p={render:()=>r.jsx(c,{style:{padding:"2rem",color:t.secondary},children:r.jsx("p",{children:"hello world"})})};var u,g,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    borderWidth: '5px',
    stripeWidth: 10,
    angle: '45deg',
    colors: ['red', 'orange', 'lightblue']
  },
  render: () => <StripeBorder {...StripeBorderWithProps.args} style={{
    padding: '2rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </StripeBorder>
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,y,S;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <StripeBorder style={{
    padding: '2rem',
    color: COLOR_THEME.secondary
  }}>\r
      <p>hello world</p>\r
    </StripeBorder>
}`,...(S=(y=p.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const v=["StripeBorderWithProps","StripeBorderDefault"];export{p as StripeBorderDefault,o as StripeBorderWithProps,v as __namedExportsOrder,O as default};
