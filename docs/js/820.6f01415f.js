"use strict";(self["webpackChunkbaby1"]=self["webpackChunkbaby1"]||[]).push([[820],{6872:function(t,a,i){i.r(a),i.d(a,{default:function(){return $}});var n=i(4108),e=i(9096),r=i.p+"img/zombie1.0102f8d9.png",s=i.p+"img/gun.7c03997a.png";const l=t=>((0,n.ED)("data-v-37324f4a"),t=t(),(0,n.ii)(),t),o={class:"backblack"},c={class:"overwrapbox"},d=(0,n.IL)('<div class="cube-front" data-v-37324f4a><img src="'+r+'" alt="" data-v-37324f4a></div><div class="cube-front1" data-v-37324f4a><img src="'+r+'" alt="" data-v-37324f4a></div><div class="cube-frontfull" data-v-37324f4a></div>',3),u=l((()=>(0,n.QD)("img",{src:s,alt:""},null,-1))),f=[u],g=l((()=>(0,n.QD)("div",{class:"cube-top"},null,-1))),h=l((()=>(0,n.QD)("div",{class:"cube-bottom"},null,-1))),b=l((()=>(0,n.QD)("div",{class:"cube-left"},null,-1))),v=l((()=>(0,n.QD)("div",{class:"cube-right"},null,-1))),p={class:"boxwrap"},m={class:"upbox"},D=l((()=>(0,n.QD)("a",{href:"#none",id:"turnbtn"},"TURN",-1))),Q={class:"threebox"};function x(t,a,i,r,s,l){return(0,n.Wz)(),(0,n.An)("div",o,[(0,n.QD)("div",c,[(0,n.QD)("div",{class:"cube-wrapper",style:(0,e.MN)(l.cubewrapper)},[d,(0,n.QD)("div",{class:"cube-back",style:(0,e.MN)(l.gunaa)},f,4),g,h,b,v],4)]),(0,n.QD)("div",p,[(0,n.QD)("div",m,[(0,n.QD)("a",{href:"#none",id:"upbtn",onClick:a[0]||(a[0]=(...t)=>l.upbtn&&l.upbtn(...t))},"Up"),D]),(0,n.QD)("div",Q,[(0,n.QD)("a",{href:"#none",id:"leftbtn",onClick:a[1]||(a[1]=(...t)=>l.left&&l.left(...t))},"Left"),(0,n.QD)("a",{href:"#none",id:"downbtn",onClick:a[2]||(a[2]=(...t)=>l.downbtn&&l.downbtn(...t))},"Down"),(0,n.QD)("a",{href:"#none",id:"rightbtn",onClick:a[3]||(a[3]=(...t)=>l.right&&l.right(...t))},"Right")])])])}var w={name:"gamepage",methods:{upbtn(){this.moving+=50,console.log(this.gunaa,this.eta)},downbtn(){this.moving-=50},left(){this.moving<6700&&this.leftright<70&&(this.leftright+=7)},right(){this.moving<6700&&this.leftright>-60&&(this.leftright-=7)}},data(){return{leftright:0,moving:0}},computed:{cubewrapper(){return`transform: perspective(700px) rotateX(360deg) rotateY(360deg) translate3d(${this.leftright}px, 0px, ${this.moving}px);transform-origin: 50% 50% ${-this.moving}px`},gunaa(){return`transform = rotateY(180deg) translate3d(${this.leftright-60}px, 67px, ${-500+this.moving}px)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3)`}}},k=i(4100);const C=(0,k.c)(w,[["render",x],["__scopeId","data-v-37324f4a"]]);var $=C}}]);
//# sourceMappingURL=820.6f01415f.js.map