import{v as L,d as ee,e as ae}from"./index-639fd9e4.js";/* empty css              *//* empty css              */import{d as K,bo as te,bp as O,r as J,c as ne,q as G,F as y,aM as S,aN as o,J as _,aP as t,u as d,G as M,aX as Q,aY as B,aZ as v,aW as X,aV as C,aI as oe,aK as x,w as se,bi as le,bj as ie,bk as re,bl as ce,bm as de,bq as ue,b1 as q,aS as pe,I as F,b0 as fe,br as me,bs as _e,bh as ge,b4 as ye,b5 as ve,b6 as be}from"./ui-a4a953c5.js";import{_ as he}from"./logo-974cec17.js";import{i as we,u as Ae,f as ke}from"./vue-03e3e0b3.js";import{N as D,U as Ie,a as E,b as xe,E as Se,c as z,d as Me}from"./index-560f7adf.js";/* empty css              */import{f as V,M as Be}from"./wallet-67de3d8e.js";import{_ as W}from"./plugin-vueexport-helper-c27b6911.js";const Ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAABdJREFUKFNjZCASMBKpjmFUId6QIjp4AAppAAuXjCs4AAAAAElFTkSuQmCC";let N="";const Ne=D(),Re=we("ipfsCache",new Map),Ue="https://dweb.link/ipfs/";function Y(r){return r.replace("ipfs://",Ue)}async function Te(){N===""&&(N=await Ne.baseURI())}function $e(r){return`${Y(N)}${r}.json`}const P=["E","D","C","B","A","S","SR","SSR"];async function Ee(r){const{value:i}=Re,g=`${N}${r}.json`;let c;if(i.has(g))c=JSON.parse(i.get(g));else{const s=await fetch($e(r)).then(k=>k.text());i.set(g,s),c=JSON.parse(s)}return c.image=Y(c.image),c}const Pe={style:{"max-width":"80vw"}},De={style:{color:"#ff5ab5","font-weight":"700"}},je={key:0,style:{color:"#ff5ab5","font-weight":"700"}},Oe=K({__name:"upgrade",props:te({tokenId:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{},level:{default:0},levelModifiers:{}}),emits:["update:visible","update:level"],setup(r){const{t:i}=L.useI18n(),g=O(r,"visible"),c=O(r,"level"),s=r,k=D(),n=J({loading:!1,payLoading:!1,payInfo:[],selectPay:{token:""}});function R(e){if(e){const l=V(e);return Math.floor(Number(l))}return 0}async function u(){n.payLoading=!0;const e=await k.getPayTokens();n.payInfo=e.map(([l,m,p,a,A,U,T,$])=>({token:l,payAmount:[m,p,a,A,U,T,$],name:"",symbol:"",balance:0n,decimals:18})),await Promise.all(n.payInfo.map(l=>Ie(l))),[n.selectPay]=n.payInfo,n.payLoading=!1}async function f(){const e=E.address.value;if(e){const{selectPay:{token:l,payAmount:m}}=n,p=await Se(l);if(await p.allowance(e,z)>=m[0])return!0;if(p){try{await p.approve(z,Be).then(a=>a.wait())}catch(a){return a.reason?x.error(a.reason):x.error(i("mint.fail")),!1}return!0}}return!1}async function b(){const{value:e}=E.address,{tokenId:l}=s;if(e){n.loading=!0;try{const m=await xe();await f()?(await m.upgradeLevel(l,n.selectPay.token).then(p=>p.wait()),oe.success(i("upgrade.success")),setTimeout(()=>{g.value=!1,n.loading=!1,c.value++},500)):x.warning(i("mint.fail"))}catch(m){m.reason?x.error(m.reason):x.error(i("mint.fail")),n.loading=!1}}}const I=ne(()=>{const{selectPay:e}=n;return e.payAmount&&e.payAmount.length===7?Number(V(e.payAmount[c.value])):0});function w(){se(()=>n.selectPay,e=>{e&&Object.keys(e).includes("name")&&Me(e)})}return G(()=>{w(),u()}),(e,l)=>{const m=le,p=ie,a=re,A=ce,U=ee,T=de,$=ue,Z=q,H=pe;return y(),S(H,{visible:g.value,"onUpdate:visible":l[1]||(l[1]=h=>g.value=h),footer:!1,"mask-closable":!n.loading,title:`${d(i)("gallery.upgradeBtn")} #${s.tokenId}`,"modal-style":{maxWidth:"90vw",padding:"1rem"},simple:""},{default:o(()=>[_("div",Pe,[t(T,{layout:"inline-vertical","table-layout":"fixed",column:2,"label-style":{paddingTop:"10px"},size:"large"},{default:o(()=>[t(a,{label:d(i)("gallery.payType")},{default:o(()=>[t(p,{modelValue:n.selectPay,"onUpdate:modelValue":l[0]||(l[0]=h=>n.selectPay=h),"value-key":"token",style:{width:"120px"}},{default:o(()=>[(y(!0),M(X,null,Q(n.payInfo,h=>(y(),S(m,{key:h.token,value:h,label:h.symbol},{default:o(()=>[B(v(h.symbol),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(a,{label:d(i)("gallery.consume")},{default:o(()=>[t(A,{value:I.value,"value-style":{fontSize:"14px"},"animation-duration":1e3,precision:3,"show-group-separator":"",animation:""},null,8,["value"])]),_:1},8,["label"]),t(a,{label:d(i)("gallery.balance")},{default:o(()=>[t(A,{value:R(n.selectPay.balance),"value-style":{fontSize:"14px"},"animation-duration":1e3,precision:3,"show-group-separator":"",animation:""},null,8,["value"])]),_:1},8,["label"]),t(a,{label:""},{default:o(()=>[_("span",De,v(d(P)[c.value]),1),c.value<6?(y(),M("span",je,[t(U),B(" "+v(d(P)[c.value+1]),1)])):C("",!0)]),_:1})]),_:1}),t($),t(Z,{class:"upgrade",loading:n.loading,size:"medium",long:"",onClick:b},{default:o(()=>[B(v(d(i)("gallery.upgradeBtn")),1)]),_:1},8,["loading"])])]),_:1},8,["visible","mask-closable","title"])}}});const Fe=W(Oe,[["__scopeId","data-v-e9117fa8"]]),j=r=>(ve("data-v-035b25e0"),r=r(),be(),r),ze={class:"gallery-container"},Ve={style:{"padding-bottom":"20px",color:"white","max-width":"90%",width:"800px"}},Le={style:{"font-size":"1.5em","font-weight":"bold"}},Ke=j(()=>_("img",{src:he,width:"80"},null,-1)),Je={key:0,style:{"text-align":"center","padding-top":"50px"}},Ge={class:"nft-box"},Qe=j(()=>_("div",{class:"loader-animate"},null,-1)),Xe=j(()=>_("div",{class:"loader-animate"},null,-1)),qe={style:{color:"#ff5ab5","font-weight":"700"}},We=K({__name:"index",setup(r){const{md:i}=Ae(ke),g=D(),{t:c}=L.useI18n(),s=J({loading:!1,showModal:!1,galleryData:[],selectToken:{}});async function k(){s.loading=!0;const u=E.address.value;if(u){await Te();let f=0;const b=100,{total:I,items:w}=await g.tokenOfOwnerList(u,f,b);for(;I>w.length;){f+=b;const[,e]=await g.tokenOfOwnerList(u,f,b);w.push(...e)}s.galleryData=w.map(e=>({tokenId:Number(e.tokenId),level:Number(e.level)})).map(e=>({ready:!1,checked:!1,name:`BURN MARK #${e.tokenId}`,image:Ce,...e})),s.galleryData.forEach(e=>{Ee(e.tokenId).then(l=>{e.image=l.image,e.name=l.name,e.ready=!0})})}s.loading=!1}function n(u){s.selectToken=u,s.showModal=!0}function R(u){console.log(u.tokenId,"imageError!");const f=u.image;u.image="",setTimeout(()=>{u.image=f},3e3)}return G(()=>{k()}),(u,f)=>{const b=fe,I=me,w=_e,e=ge,l=ae,m=q,p=ye;return y(),M("div",ze,[_("div",Ve,[_("div",Le,[t(b,null,{default:o(()=>[Ke,B(" "+v(d(c)("main-title")),1)]),_:1})]),_("div",null,v(d(c)("main-subtitle")),1)]),s.loading?(y(),M("div",Je,[t(I,{dot:""})])):C("",!0),t(p,{style:{width:"100%","padding-top":"50px"}},{default:o(()=>[s.loading?C("",!0):(y(),S(e,{key:0,flex:"1"},{default:o(()=>[t(p,{gutter:d(i)?[30,30]:[10,10],style:{width:"100%"}},{default:o(()=>[(y(!0),M(X,null,Q(s.galleryData,a=>(y(),S(e,{key:a.tokenId,lg:6,md:8,xs:12},{default:o(()=>[_("div",Ge,[t(w,{src:a.image,width:"100%",preview:!1,style:{"aspect-ratio":"1/1"},loading:"lazy","show-loader":"",onError:A=>R(a)},{error:o(()=>[Qe]),loader:o(()=>[Xe]),_:2},1032,["src","onError"]),_("div",{class:"nft-box-footer",style:F({padding:d(i)?"16px":"8px"})},[t(p,{justify:"space-between",align:"center",gutter:[0,10]},{default:o(()=>[t(e,{md:12,style:{width:"100%"}},{default:o(()=>[_("span",null,v(a.name),1)]),_:2},1024),t(e,{md:12,style:F([{"text-align":d(i)?"right":"left"},{width:"100%","line-height":"20px"}])},{default:o(()=>[t(b,null,{default:o(()=>[_("span",qe,v(d(P)[a.level]),1),a.level!==6?(y(),S(m,{key:0,class:"upgrade",size:d(i)?"small":"mini",onClick:A=>n(a)},{default:o(()=>[B(v(d(c)("gallery.upgradeBtn"))+" ",1),t(l)]),_:2},1032,["size","onClick"])):C("",!0)]),_:2},1024)]),_:2},1032,["style"])]),_:2},1024)],4)])]),_:2},1024))),128))]),_:1},8,["gutter"])]),_:1}))]),_:1}),t(Fe,{visible:s.showModal,"onUpdate:visible":f[0]||(f[0]=a=>s.showModal=a),level:s.selectToken.level,"onUpdate:level":f[1]||(f[1]=a=>s.selectToken.level=a),"token-id":s.selectToken.tokenId},null,8,["visible","level","token-id"])])}}});const ia=W(We,[["__scopeId","data-v-035b25e0"]]);export{ia as default};
