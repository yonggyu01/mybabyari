"use strict";(self["webpackChunkbaby1"]=self["webpackChunkbaby1"]||[]).push([[556],{6556:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(4108),o=a(9096),c=a(2500),s=a(7192);const l={class:"ful"},r={class:"wrapbox"};var u={__name:"wherego",setup(e){const t=(0,s.o3)(),a=(0,c.IL)(""),u=(0,n.S6)((()=>t.getters.getmylocation.name)),i=(0,n.S6)((()=>t.getters.getmyweather));async function p(e,t){const n={text:`input: {"weather":"${t} ","type":"sentence","location":"${e}"}`};try{const e=await fetch("https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/today",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),t=await e.text(),o=JSON.parse(t);a.value=o}catch(o){console.error(o)}}return console.log(i.value,u.value),p(u.value,i.value),(e,t)=>((0,n.Wz)(),(0,n.An)("div",l,[(0,n.QD)("div",r,[(0,n.QD)("h2",null,(0,o.WA)(a.value.result),1),(0,n.QD)("button",{class:"btn",onClick:t[0]||(t[0]=e=>p(u.value,i.value))},"다른 제안듣기")])]))}},i=a(4100);const p=(0,i.c)(u,[["__scopeId","data-v-cdbecc62"]]);var v=p}}]);
//# sourceMappingURL=556.d8c38c35.js.map