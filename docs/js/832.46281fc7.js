"use strict";(self["webpackChunkbaby1"]=self["webpackChunkbaby1"]||[]).push([[832],{1832:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});a(2168),a(5104),a(8312);var l=a(4108),n=a(7764),o=a(9096),s=a(2500);const u={class:"myfull"},i={class:"inputflexbox"},c=["src"],d="AIzaSyBTie4zHatrhyduBs7NWN6MYOg1op_BRhs";var p={__name:"youtube",setup(e){const t=(0,s.IL)([]),a=(0,s.IL)("육아정보"),p=(0,s.IL)(15),r=(0,s.IL)([]);function v(){}async function b(e,a){let l=new URL("https://www.googleapis.com/youtube/v3/search"),n={key:d,q:e,part:"snippet",type:"video",maxResults:a,fields:"items(id, snippet(title))",videoEmbeddable:!0};l.search=new URLSearchParams(n).toString();const o=new Headers;o.append("Content-type","application/json");const s=await fetch(l).catch((e=>console.log("데이터 회신불가"))),u=await s.json(),{items:i}=u;t.value=i,console.log(t.value)}return(0,l.u2)((()=>{b("육아정보","15")})),(e,s)=>((0,l.Wz)(),(0,l.An)("div",u,[(0,l.QD)("div",i,[(0,l.wt)((0,l.QD)("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>a.value=e)},null,512),[[n.Og,a.value]]),(0,l.wt)((0,l.QD)("input",{type:"number","onUpdate:modelValue":s[1]||(s[1]=e=>p.value=e)},null,512),[[n.Og,p.value]]),(0,l.QD)("button",{onClick:s[2]||(s[2]=e=>b(a.value,p.value))},"변경")]),(0,l.QD)("div",{class:"slidebox",onClick:v},[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(t.value,((e,t)=>((0,l.Wz)(),(0,l.An)("details",{key:"video1"+t},[(0,l.QD)("summary",null,(0,o.WA)(e.snippet.title),1),(0,l.QD)("iframe",{ref_for:!0,ref_key:"videos",ref:r,class:"slide_video",src:`https://www.youtube.com/embed/${e.id.videoId}?enablejsapi=1&autoplay=0&mute=1&controls=1&loop=1&playlist=${e.id.videoId}`,frameborder:"0"},null,8,c)])))),128))])]))}},r=a(4100);const v=(0,r.c)(p,[["__scopeId","data-v-33bbd0fe"]]);var b=v}}]);
//# sourceMappingURL=832.46281fc7.js.map