"use strict";(self["webpackChunkbaby1"]=self["webpackChunkbaby1"]||[]).push([[716],{1716:function(e,t,o){o.r(t),o.d(t,{default:function(){return E}});var s=o(4108),n=o(9096);const l=e=>((0,s.ED)("data-v-76335ed7"),e=e(),(0,s.ii)(),e),a=l((()=>(0,s.QD)("span",{class:"material-symbols-outlined"}," event_note ",-1))),i={key:0},r={key:1},c=l((()=>(0,s.QD)("span",{class:"material-symbols-outlined"}," newspaper ",-1))),d={key:0},u={key:1},y={href:"#none"},b=l((()=>(0,s.QD)("span",{class:"material-symbols-outlined"}," menu_book ",-1))),m={key:0},g={key:1},h=l((()=>(0,s.QD)("span",{class:"material-symbols-outlined"}," dictionary ",-1))),f={key:0},p={key:1},k={href:"#none"},v=l((()=>(0,s.QD)("span",{class:"material-symbols-outlined"}," video_camera_front ",-1))),W={key:0},Q={key:1},w=l((()=>(0,s.QD)("span",{class:"material-symbols-outlined"}," shopping_bag ",-1))),D={key:0},z={key:1};function A(e,t,o,l,A,_){const x=(0,s.E1)("router-link");return(0,s.Wz)(),(0,s.An)("div",{class:(0,n.WN)({mainsite:!0,"cube-wrapper":!l.dice,backwhite:l.dice,front:l.front,buttom:l.buttom,left:l.left,right:l.right})},[(0,s.QD)("div",{class:(0,n.WN)({mybox:!0,"cube-front":!l.dice})},[(0,s.K2)(x,{to:"/weather"},{default:(0,s.Ql)((()=>[a,l.ttfalse?((0,s.Wz)(),(0,s.An)("h2",i,"오늘의 산책 날씨")):((0,s.Wz)(),(0,s.An)("h2",r,"Today_weather"))])),_:1})],2),(0,s.QD)("div",{class:(0,n.WN)({mybox:!0,"cube-back":!l.dice})},[(0,s.K2)(x,{to:"/baby"},{default:(0,s.Ql)((()=>[c,l.ttfalse?((0,s.Wz)(),(0,s.An)("h2",d,"육아수첩")):((0,s.Wz)(),(0,s.An)("h2",u,"Baby_Note"))])),_:1})],2),(0,s.QD)("div",{class:(0,n.WN)({mybox:!0,"cube-left":!l.dice})},[(0,s.QD)("a",y,[b,l.ttfalse?((0,s.Wz)(),(0,s.An)("h2",m,"이번주에 어디가?")):((0,s.Wz)(),(0,s.An)("h2",g,"go where?"))])],2),(0,s.QD)("div",{class:(0,n.WN)({mybox:!0,"cube-right":!l.dice})},[(0,s.K2)(x,{to:"/gemini"},{default:(0,s.Ql)((()=>[h,l.ttfalse?((0,s.Wz)(),(0,s.An)("h2",f,"제미니 단어장")):((0,s.Wz)(),(0,s.An)("h2",p,"Dictionary"))])),_:1})],2),(0,s.QD)("div",{class:(0,n.WN)({mybox:!0,"cube-top":!l.dice})},[(0,s.QD)("a",k,[v,l.ttfalse?((0,s.Wz)(),(0,s.An)("h2",W,"육아정보 유튜브")):((0,s.Wz)(),(0,s.An)("h2",Q,"Baby Tube"))])],2),(0,s.QD)("div",{class:(0,n.WN)({mybox:!0,"cube-bottom":!l.dice})},[(0,s.K2)(x,{to:"/perchasebaby"},{default:(0,s.Ql)((()=>[w,l.ttfalse?((0,s.Wz)(),(0,s.An)("h2",D,"쇼핑하기")):((0,s.Wz)(),(0,s.An)("h2",z,"shopping"))])),_:1})],2)],2)}var _=o(2500),x=o(7192),N={setup(){const e=(0,x.o3)(),t=(0,s.S6)((()=>e.getters.getfront)),n=(0,s.S6)((()=>e.getters.gettop)),l=(0,s.S6)((()=>e.getters.getleft)),a=(0,s.S6)((()=>e.getters.getright)),i=(0,s.S6)((()=>e.getters.getbuttom)),r=e.getters.getback,c=(0,s.S6)((()=>e.getters.getdicemenu)),d=(0,s.S6)((()=>e.getters.getttfalse)),u=(0,_.cB)({front:t,top:n,left:l,right:a,buttom:i,back:r});function y(t){const o=t.coords.latitude;e.commit("setlat",o.toFixed(4));const s=t.coords.longitude;e.commit("setlon",s.toFixed(4))}function b(){alert("GEO 사용 설정을 해야합니다.")}navigator.geolocation.getCurrentPosition(y,b);let m=["front","top","left","right","buttom","back"];const g=e=>{console.log(e);for(let t=0;t<m.length;t++)e==m[t]?u[e]=!u[e]:u[m[t]]=!1};if(0==e.getters.getnowloading){let t=document.createElement("div"),n=document.createElement("img");t.className="hidethree",t.style.backgroundColor="white",t.style.width="100vw",t.style.transition="all 0.5s",t.style.height="100vh",t.style.opacity=1,t.style.position="absolute",t.style.display="flex",t.style.justifyContent="center",t.style.alignItems="center",t.style.zIndex=10,t.style.top=0,n.setAttribute("src",o(9984)),n.style.width="30%",n.style.height="30%",n.style.backgroundColor="white",n.style.display="flex",n.style.justifyContent="center",n.style.alignItems="center",t.append(n),document.body.prepend(t),(0,s.u2)((()=>{let e=document.querySelector(".hidethree");setTimeout((function(){e.style.opacity=0}),500),setTimeout((function(){e.style.display="none"}),1e3)})),(0,s.GE)((()=>{let t=document.querySelector(".hidethree");t.remove(),e.commit("setnowloading",!0)}))}return{ttfalse:d,store:e,dice:c,rotatebtn:g,direction1:u,front:t,right:a,left:l,buttom:i}},name:"Mainview"},S=o(4100);const C=(0,S.c)(N,[["render",A],["__scopeId","data-v-76335ed7"]]);var E=C},9984:function(e,t,o){e.exports=o.p+"img/ari_logo.b8d8631d.png"}}]);
//# sourceMappingURL=716.1f552974.js.map