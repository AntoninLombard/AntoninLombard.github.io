import{j as e,R as m,i as n,e as s,P as u,s as l,h as d,p as c,k as g,g as f}from"../chunks/chunk-FIcMEeLq.js";/* empty css                      */const x=({data:o})=>{const{system:t,resources:i,url:r}=o;return e.jsx(m.Provider,{value:{imageLoader:n,assetBaseUrl:s,resources:i},children:e.jsx(u,{system:t},r)})},j=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),h=({data:o})=>{const{pageMeta:t}=o,{origin:i}=new URL(o.url);let r=t.socialImageUrl;return t.socialImageAssetName&&(r=`${i}${n({src:t.socialImageAssetName,format:"raw"})}`),e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),l,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),l,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:p})=>e.jsx("meta",{property:a,content:p},a)),d&&e.jsx("link",{rel:"icon",href:n({src:`${s}${d.name}`,width:144,height:144,fit:"pad",quality:100,format:"auto"})}),c.map(a=>e.jsx("link",{rel:"preload",href:`${s}${a.name}`,as:"font",crossOrigin:"anonymous"},a.id)),g.map(a=>e.jsx("link",{rel:"preload",href:`${s}${a.name}`,as:"image"},a.id))]})},y=Object.freeze(Object.defineProperty({__proto__:null,Head:h},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:y}}};export{P as configValuesSerialized};
