"use strict";(self["webpackChunkbaby1"]=self["webpackChunkbaby1"]||[]).push([[876],{7256:function(t,a,e){e.r(a),e.d(a,{default:function(){return C}});var n=e(4108),l=e(2500),o=e(9096),c=e(7764),s=e(7192);const i=t=>((0,n.ED)("data-v-14b2dc0a"),t=t(),(0,n.ii)(),t),u={class:"fullwrap"},d={key:0},r={key:1},p={class:"contentbox"},b=["src"],v={class:"flexdata"},y={class:"title"},h=i((()=>(0,n.QD)("p",null," 구매정보",-1))),m=["onUpdate:modelValue"],f=(0,n.IL)('<option value="1" checked data-v-14b2dc0a>1</option><option value="2" data-v-14b2dc0a>2</option><option value="3" data-v-14b2dc0a>3</option><option value="4" data-v-14b2dc0a>4</option><option value="5" data-v-14b2dc0a>5</option>',5),Q=[f],k={class:"btnbox"},D=["onClick"],g=["onClick"];var A={__name:"baguni",setup(t){const a=(0,s.o3)();(0,l.IL)([]);let e=(0,l.IL)([]);(0,n.S6)((()=>a.getters.userlogin.id||a.getters.userlogin));const i=(0,n.S6)((()=>a.getters.getttfalse));async function f(t){const a={mode:"del",id:t},n=await fetch("https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/cart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),l=await n.json();e.value=l}async function A(){const t=await fetch("https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/cart",{method:"POST",headers:{"Content-Type":"application/json"},body:""}),a=await t.json();e.value=a,console.log(a)}return A(),(t,a)=>((0,n.Wz)(),(0,n.An)("div",null,[(0,n.QD)("div",u,[i.value?((0,n.Wz)(),(0,n.An)("h1",d,"구매목록")):((0,n.Wz)(),(0,n.An)("h1",r," my-cart")),(0,n.QD)("div",p,[(0,n.QD)("ul",null,[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)((0,l.KV)(e),((t,a)=>((0,n.Wz)(),(0,n.An)("li",{class:"myli",key:t.title+a},[(0,n.QD)("img",{src:t.src,alt:""},null,8,b),(0,n.QD)("div",v,[(0,n.QD)("h2",y,(0,o.WA)(t.title),1),h,(0,n.QD)("h4",null,[(0,n.mY)(" 갯수 : "),(0,n.QD)("span",null,[(0,n.wt)((0,n.QD)("select",{name:"q",class:"mynum","onUpdate:modelValue":a=>t.Quantity=a},Q,8,m),[[c.Ip,t.Quantity]])])]),(0,n.QD)("h4",null,"가격 : "+(0,o.WA)(Number(t.price.replace(/,/,"").replace(/원/,""))*Number(t.Quantity)+"원"),1)]),(0,n.QD)("div",k,[i.value?((0,n.Wz)(),(0,n.An)("button",{key:0,class:"delbtn",onClick:t=>f(a)},"삭제",8,D)):((0,n.Wz)(),(0,n.An)("button",{key:1,class:"delbtn",onClick:a=>f(t.id)},"del",8,g))])])))),128))])])])]))}},W=e(4100);const w=(0,W.c)(A,[["__scopeId","data-v-14b2dc0a"]]);var C=w}}]);
//# sourceMappingURL=876.8cf04fab.js.map