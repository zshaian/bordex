import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-DmM0KDA7.js";const n=t=>{const u=Array.from({length:5},(r,i)=>i+1),[g,y]=x.useState(0);return e.jsxs("div",{className:`star-rating rating-${t.theme}`,children:[e.jsx("h1",{children:t.title}),u.map((r,i)=>{const h=r<=g?"starActive":"starInactive";return e.jsx("button",{disabled:t.disabled,"data-testid":`${t.testIdPrefix}-${i}`,className:`${h}`,onClick:()=>y(r),children:e.jsx("span",{className:"star",children:"★"})},r)})]})};n.__docgenInfo={description:"",methods:[],displayName:"SmartRating",props:{title:{required:!1,tsType:{name:"string"},description:""},testIdPrefix:{required:!0,tsType:{name:"string"},description:""},theme:{required:!0,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const S={component:n},a={render:()=>e.jsx(n,{title:"default theme",theme:"primary",testIdPrefix:"rating"})},s={render:()=>e.jsx(n,{title:"secondary theme",theme:"secondary",testIdPrefix:"raing"})};var d,o,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <SmartRating title="default theme" theme="primary" testIdPrefix="rating" />
}`,...(m=(o=a.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var c,l,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <SmartRating title="secondary theme" theme="secondary" testIdPrefix="raing" />
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const j=["RatingTest","RatingTestSecondary"];export{a as RatingTest,s as RatingTestSecondary,j as __namedExportsOrder,S as default};
