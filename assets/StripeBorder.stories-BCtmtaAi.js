import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./index-DmM0KDA7.js";import{B as y,C as p}from"./theme-C2E9wPw4.js";function j(o,m){let n=0;const s=[];for(let e=0;e<o.length;e++){const a=m*(e+1),i=o[e];s.push(`${i} ${n}%,${i} ${a}%`),n=a}return s.join(",")}const d={angle:"45deg",stripeWidth:10,colors:[p.primary,p.secondary],borderWidth:y.sm},c=R.forwardRef((o,m)=>{const{children:n,borderWidth:s=d.borderWidth,angle:e=d.angle,stripeWidth:a=d.stripeWidth,colors:i=d.colors,className:W,...$}=o,B=j(i,a),x={inset:`-${s}`,backgroundColor:"green",backgroundImage:`repeating-linear-gradient(${e},${B})`};return r.jsxs("div",{className:`stripe-border-parent-position ${W}`,...$,ref:m,children:[r.jsx("div",{style:x,className:"stripe-border"}),n]})});c.__docgenInfo={description:"",methods:[],displayName:"StripeBorder",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},angle:{required:!1,tsType:{name:"union",raw:"| `${number}deg`\r\n| `${number}grad`\r\n| `${number}rad`\r\n| `${number}turn`",elements:[{name:"literal",value:"`${number}deg`"},{name:"literal",value:"`${number}grad`"},{name:"literal",value:"`${number}rad`"},{name:"literal",value:"`${number}turn`"}]},description:""},stripeWidth:{required:!1,tsType:{name:"number"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"ReactCSSProperties['color']",raw:"React.CSSProperties['color']"}],raw:"React.CSSProperties['color'][]"},description:""}}};const E={component:c,argTypes:{borderWidth:{control:"text",description:"Width of the border",table:{defaultValue:{summary:y.sm}}},stripeWidth:{control:"number",description:"Width of the stripe border the number that you type is in (%) percent unit in css",table:{defaultValue:{summary:"10"}}},angle:{control:"text",description:"Angle of the gradient border must be a valid angle unit in css",table:{defaultValue:{summary:"45deg"}}},colors:{control:"object",description:"List of colors in the stripeWidth",table:{defaultValue:{summary:`[${p.primary},${p.secondary}]`}}}}},t={args:{borderWidth:"5px",stripeWidth:10,angle:"45deg",colors:["red","orange","lightblue"]},render:()=>r.jsx(c,{...t.args,style:{padding:"2rem"},children:r.jsx("p",{children:"hello world"})})},l={render:()=>r.jsx(c,{style:{padding:"2rem"},children:r.jsx("p",{children:"hello world"})})};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    borderWidth: '5px',
    stripeWidth: 10,
    angle: '45deg',
    colors: ['red', 'orange', 'lightblue']
  },
  render: () => <StripeBorder {...StripeBorderWithProps.args} style={{
    padding: '2rem'
  }}>\r
      <p>hello world</p>\r
    </StripeBorder>
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,S,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <StripeBorder style={{
    padding: '2rem'
  }}>\r
      <p>hello world</p>\r
    </StripeBorder>
}`,...(f=(S=l.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const N=["StripeBorderWithProps","StripeBorderDefault"];export{l as StripeBorderDefault,t as StripeBorderWithProps,N as __namedExportsOrder,E as default};
