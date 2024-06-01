import{v as D}from"./index-33ec6d7f.js";/* empty css              */import{N as F,a as w,b as U,U as L,E as O,c as k,d as j}from"./index-d0645c66.js";/* empty css              */import{d as $,r as q,c as I,q as G,F as x,G as P,aP as n,aN as s,J as y,aZ as u,u as d,aW as J,aX as K,aM as W,aY as A,aI as X,aK as m,w as S,bh as Y,bi as Z,bj as H,bk as Q,bl as ee,bm as te,bn as ae,b4 as ne,b1 as oe,b5 as se,b6 as le}from"./ui-a4a953c5.js";import{f as N,M as ie}from"./wallet-67de3d8e.js";import{_ as re}from"./plugin-vueexport-helper-c27b6911.js";import"./vue-03e3e0b3.js";const ce=f=>(se("data-v-7673c880"),f=f(),le(),f),de={class:"mint-container"},pe={class:"title"},ue={class:"description"},me={class:"mint-box"},ye=ce(()=>y("h2",{style:{color:"#e19a2f"}},"Burn Mark - Mint",-1)),fe={style:{"font-size":"12px"}},_e=$({__name:"index",setup(f){const{t:l}=D.useI18n(),g=F(),t=q({loading:!1,payLoading:!1,payInfo:[],selectPay:{symbol:"loading.."},start:0,totalSupply:0,maxTokenId:0}),M=I(()=>{const{selectPay:e}=t;return e.payAmount&&e.payAmount.length===7?Number(N(e.payAmount[0])):0}),T=I(()=>{const{start:e,totalSupply:a,maxTokenId:o}=t;return Math.floor((a-e)/(o-e)*100)/100});async function B(){const e=w.address.value;if(e){const{selectPay:{token:a,payAmount:o}}=t,i=await O(a);if(await i.allowance(e,k)>=o[0])return!0;if(i){try{await i.approve(k,ie).then(r=>r.wait())}catch(r){return r.reason?m.error(r.reason):m.error(l("mint.fail")),!1}return!0}}return!1}async function C(){const e=w.address.value,{selectPay:{token:a}}=t;if(e){t.loading=!0;try{await B()?(await(await U()).mint(a,1).then(i=>i.wait()),X.success(l("mint.success")),t.selectPay.balance-=t.selectPay.payAmount[0]):m.warning(l("mint.fail"))}catch(o){o.reason?m.error(o.reason):m.error(l("mint.fail"))}t.loading=!1}}async function z(){t.payLoading=!0,g.totalSupply().then(a=>{t.totalSupply=Number(a)}),g.maxTokenId().then(a=>{t.maxTokenId=Number(a)});const e=await g.getPayTokens();t.payInfo=e.map(([a,o,i,r,p,_,b,h])=>({token:a,payAmount:[o,i,r,p,_,b,h],name:"",symbol:"",balance:0n,decimals:18})),await Promise.all(t.payInfo.map(a=>L(a))),[t.selectPay]=t.payInfo,t.payLoading=!1}function E(e){if(e){const a=N(e);return Math.floor(Number(a))}return 0}function R(){S(w.address,e=>{e&&console.log(233)}),S(()=>t.selectPay,e=>{console.log(e),e&&Object.keys(e).includes("name")&&j(e)})}return G(()=>{z(),R()}),(e,a)=>{const o=Y,i=Z,r=H,p=Q,_=ee,b=te,h=ae,v=ne,V=oe;return x(),P("div",de,[n(v,{style:{width:"600px","max-width":"90%",margin:"auto"},gutter:[20,20]},{default:s(()=>[n(o,null,{default:s(()=>[y("div",pe,u(d(l)("mint.title")),1),y("div",ue,u(d(l)("mint.description")),1)]),_:1}),n(o,{style:{width:"100%"}},{default:s(()=>[y("div",me,[ye,n(v,{style:{width:"100%"},gutter:[0,30]},{default:s(()=>[n(o,{md:12,style:{width:"100%","text-align":"left"}},{default:s(()=>[n(b,{layout:"inline-vertical",column:1,size:"large","label-style":{paddingTop:"20px"}},{default:s(()=>[n(p,{label:d(l)("gallery.payType")},{default:s(()=>[n(r,{modelValue:t.selectPay,"onUpdate:modelValue":a[0]||(a[0]=c=>t.selectPay=c),"value-key":"token"},{default:s(()=>[(x(!0),P(J,null,K(t.payInfo,c=>(x(),W(i,{key:c.token,value:c,label:c.symbol},{default:s(()=>[A(u(c.symbol||"loading.."),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),n(p,{label:d(l)("gallery.consume")},{default:s(()=>[n(_,{value:M.value,"value-style":{fontSize:"14px"},"animation-duration":1e3,precision:3,"show-group-separator":"",animation:""},null,8,["value"])]),_:1},8,["label"]),n(p,{label:d(l)("gallery.balance")},{default:s(()=>[n(_,{value:E(t.selectPay.balance),"value-style":{fontSize:"14px"},"animation-duration":1e3,precision:3,"show-group-separator":"",animation:""},null,8,["value"])]),_:1},8,["label"])]),_:1})]),_:1}),n(o,{md:12,style:{width:"100%","text-align":"center"}},{default:s(()=>[n(h,{"stroke-width":10,percent:T.value,color:{"0%":"rgb(var(--primary-6))","100%":"rgb(var(--success-6))"},type:"circle",size:"large",style:{zoom:"2.5"}},{text:s(({percent:c})=>[y("span",fe,u(Math.floor(c*1e4)/100)+"% ",1)]),_:1},8,["percent","color"])]),_:1})]),_:1}),n(V,{class:"mint",long:"",loading:t.loading,onClick:C},{default:s(()=>[A(u(d(l)("mint.title")),1)]),_:1},8,["loading"])])]),_:1})]),_:1})])}}});const Pe=re(_e,[["__scopeId","data-v-7673c880"]]);export{Pe as default};
