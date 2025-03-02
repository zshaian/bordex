import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{G as d}from"./GradientBorder-B69ZZLmv.js";import{B as m,C as t}from"./theme-C2E9wPw4.js";import"./index-DmM0KDA7.js";const f={component:d,argTypes:{angle:{control:"text",description:"Angle of the gradient border must be a valid angle unit in css",table:{defaultValue:{summary:"45deg"}}},colors:{control:"object",descripttion:"List of the colors for gradient",table:{defaultValue:{summary:`[${t.primary},${t.secondary}]`}}},borderWidth:{control:"text",description:"Width of the border",table:{defaultValue:{summary:m.sm}}}}},r={args:{angle:"45deg",colors:["red","green","blue"],borderWidth:m.sm},render:()=>o.jsx(d,{...r.args,style:{padding:"2rem"},children:o.jsx("p",{children:"helllo world"})})},e={render:()=>o.jsx(d,{style:{padding:"2rem"},children:o.jsx("p",{children:"helllo world"})})};var a,n,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    angle: '45deg',
    colors: ['red', 'green', 'blue'],
    borderWidth: BORDER_SIZE.sm
  },
  render: () => <GradientBorder {...GradientBorderWithProps.args} style={{
    padding: '2rem'
  }}>\r
      <p>helllo world</p>\r
    </GradientBorder>
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var l,i,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <GradientBorder style={{
    padding: '2rem'
  }}>\r
      <p>helllo world</p>\r
    </GradientBorder>
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const B=["GradientBorderWithProps","GradientBorderDefault"];export{e as GradientBorderDefault,r as GradientBorderWithProps,B as __namedExportsOrder,f as default};
