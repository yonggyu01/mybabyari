"use strict";(self["webpackChunkbaby1"]=self["webpackChunkbaby1"]||[]).push([[940],{940:function(t,e,a){a.r(e),a.d(e,{default:function(){return C}});var n=a(4108),l=a(2500),o=a(9096),i=a(7764),s=a(7192);const c=t=>((0,n.ED)("data-v-48349059"),t=t(),(0,n.ii)(),t),u={class:"fullwrap"},r={key:0},d={key:1},p={class:"contentbox"},v=["src"],b={class:"flexdata"},y={class:"title"},m=c((()=>(0,n.QD)("p",null," 구매정보",-1))),g=["onUpdate:modelValue"],h=(0,n.IL)('<option value="1" checked data-v-48349059>1</option><option value="2" data-v-48349059>2</option><option value="3" data-v-48349059>3</option><option value="4" data-v-48349059>4</option><option value="5" data-v-48349059>5</option>',5),f=[h],Q={class:"btnbox"},k=["onClick"],D=["onClick"];var A={__name:"baguni",setup(t){const e=(0,s.o3)(),a=(0,n.S6)((()=>e.getters.getguest));(0,l.IL)([]);let c=(0,n.S6)((()=>e.getters.getbaguni));const h=(0,n.S6)((()=>e.getters.userlogin.id||e.getters.userlogin)),A=(0,n.S6)((()=>e.getters.getttfalse));async function W(t){if(a.value)e.commit("delbaguni",t);else{const a={mode:"del",id:t},n=await fetch("https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/cart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),l=await n.json();e.commit("fetchbaguni",l)}}async function w(){if(!a.value){const t=await fetch("https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/cart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userid:h.value})}),e=await t.json();c.value=e,console.log(e)}}return(0,n.u2)((()=>{w()})),(t,e)=>((0,n.Wz)(),(0,n.An)("div",null,[(0,n.QD)("div",u,[A.value?((0,n.Wz)(),(0,n.An)("h1",r,"구매목록")):((0,n.Wz)(),(0,n.An)("h1",d," my-cart")),(0,n.QD)("div",p,[(0,n.QD)("ul",null,[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)((0,l.KV)(c),((t,e)=>((0,n.Wz)(),(0,n.An)("li",{class:"myli",key:t.title+e},[(0,n.QD)("img",{src:t.src,alt:""},null,8,v),(0,n.QD)("div",b,[(0,n.QD)("h2",y,(0,o.WA)(t.title),1),m,(0,n.QD)("h4",null,[(0,n.mY)(" 갯수 : "),(0,n.QD)("span",null,[(0,n.wt)((0,n.QD)("select",{name:"q",class:"mynum","onUpdate:modelValue":e=>t.Quantity=e},f,8,g),[[i.Ip,t.Quantity]])])]),(0,n.QD)("h4",null,"가격 : "+(0,o.WA)(Number(t.price.replace(/,/,"").replace(/원/,""))*Number(t.Quantity)+"원"),1)]),(0,n.QD)("div",Q,[A.value?((0,n.Wz)(),(0,n.An)("button",{key:0,class:"delbtn",onClick:e=>W(t.id)},"삭제",8,k)):((0,n.Wz)(),(0,n.An)("button",{key:1,class:"delbtn",onClick:e=>W(t.id)},"del",8,D))])])))),128))])])])]))}},W=a(4100);const w=(0,W.c)(A,[["__scopeId","data-v-48349059"]]);var C=w}}]);
//# sourceMappingURL=940.32bae7ff.js.map