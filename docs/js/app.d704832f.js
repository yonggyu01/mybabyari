(function(){"use strict";var e={1680:function(e,t,n){var o=n(7764),a=n(4108),r=n(9096);function s(e,t,n,s,i,l){const c=(0,a.E1)("Navimunu"),u=(0,a.E1)("sidebar"),p=(0,a.E1)("router-view"),d=(0,a.E1)("FootCompo");return(0,a.Wz)(),(0,a.An)(a.ae,null,[(0,a.wt)((0,a.K2)(c,{onPass:l.newpass},null,8,["onPass"]),[[o.Ub,l.loginnow]]),(0,a.K2)(u,{class:(0,r.WN)({sideon:!this.$store.getters.getsidebtnstate})},null,8,["class"]),(0,a.K2)(p,{class:"mainvue"}),(0,a.wt)((0,a.K2)(d,null,null,512),[[o.Ub,l.loginnow]])],64)}const i=e=>((0,a.ED)("data-v-5c4c87f3"),e=e(),(0,a.ii)(),e),l={class:"Navimenu"},c=i((()=>(0,a.QD)("span",{class:"material-symbols-outlined"},"apps",-1))),u=[c],p={key:0,class:"material-symbols-outlined"},d=i((()=>(0,a.QD)("h4",{class:"engg"},"Eng ",-1))),m={key:1,class:"material-symbols-outlined"},g=i((()=>(0,a.QD)("span",{class:"korr"},"한글",-1)));function h(e,t,n,o,s,i){return(0,a.Wz)(),(0,a.An)("div",l,[(0,a.QD)("nav",null,[(0,a.QD)("a",{href:"#none",class:"mylogo",onClick:t[0]||(t[0]=(...e)=>i.usermore&&i.usermore(...e))},u),(0,a.QD)("h2",null,(0,r.WA)(o.store.getters.nowpage),1),(0,a.QD)("a",{href:"#none",onClick:t[1]||(t[1]=(...e)=>o.eng&&o.eng(...e))},[o.store.getters.getttfalse?((0,a.Wz)(),(0,a.An)("span",p,[(0,a.mY)(" language "),d])):((0,a.Wz)(),(0,a.An)("span",m,[(0,a.mY)(" g_translate "),g]))])])])}var f=n(7192),b={setup(){const e=(0,f.o3)(),t=()=>{console.log(e.getters.getttfalse),e.commit("setttfalse",!e.getters.getttfalse)};return{store:e,eng:t}},name:"Navimenu",props:{msg:String},data(){return{tfalse:!0,usermorebtn:!0}},methods:{usermore(){this.usermorebtn=!this.usermorebtn,this.$store.commit("sidebtnput",this.usermorebtn),this.$store.commit("setdicemenu",this.usermorebtn)}}},v=n(4100);const y=(0,v.c)(b,[["render",h],["__scopeId","data-v-5c4c87f3"]]);var k=y;const w=e=>((0,a.ED)("data-v-05ff2cbd"),e=e(),(0,a.ii)(),e),D={class:"FootCompo"},Q={class:"footerwrap"},E={class:"routee"},_=w((()=>(0,a.QD)("span",{class:"material-symbols-outlined",style:{"font-size":"x-large"}},"home",-1))),A={key:0},x={key:1},C={class:"routee"},O=w((()=>(0,a.QD)("span",{class:"material-symbols-outlined",style:{"font-size":"x-large"}}," account_circle",-1))),S={key:0},j={key:1},z={class:"routee"},L=w((()=>(0,a.QD)("span",{class:"material-symbols-outlined",style:{"font-size":"x-large"}}," sports_esports ",-1))),N={key:0},T={key:1},I={class:"routee"},U=w((()=>(0,a.QD)("span",{class:"material-symbols-outlined",style:{"font-size":"x-large"}},"add_shopping_cart",-1))),W={key:0},Y={key:1};function B(e,t,n,o,r,s){const i=(0,a.E1)("router-link");return(0,a.Wz)(),(0,a.An)("div",D,[(0,a.QD)("div",Q,[(0,a.K2)(i,{to:"/loginsuc"},{default:(0,a.Ql)((()=>[(0,a.QD)("span",E,[_,o.ttfalse?((0,a.Wz)(),(0,a.An)("span",A,"메인화면")):((0,a.Wz)(),(0,a.An)("span",x,"Main"))])])),_:1}),(0,a.mY)(" | "),(0,a.K2)(i,{to:"/point"},{default:(0,a.Ql)((()=>[(0,a.QD)("span",C,[O,o.ttfalse?((0,a.Wz)(),(0,a.An)("span",S,"할일목록")):((0,a.Wz)(),(0,a.An)("span",j,"To-Do"))])])),_:1}),(0,a.mY)(" | "),(0,a.K2)(i,{to:"/gameselect"},{default:(0,a.Ql)((()=>[(0,a.QD)("span",z,[L,o.ttfalse?((0,a.Wz)(),(0,a.An)("span",N,"게임하기")):((0,a.Wz)(),(0,a.An)("span",T,"Game"))])])),_:1}),(0,a.mY)(" | "),(0,a.K2)(i,{to:"/baguni"},{default:(0,a.Ql)((()=>[(0,a.QD)("span",I,[U,o.ttfalse?((0,a.Wz)(),(0,a.An)("span",W," 장바구니")):((0,a.Wz)(),(0,a.An)("span",Y,"shopping_cart"))])])),_:1})])])}var P={setup(){const e=(0,f.o3)(),t=(0,a.S6)((()=>e.getters.getttfalse));return{ttfalse:t}}};const K=(0,v.c)(P,[["render",B],["__scopeId","data-v-05ff2cbd"]]);var M=K;const F=e=>((0,a.ED)("data-v-ebc6f024"),e=e(),(0,a.ii)(),e),q={class:"sidemenu"},$={class:"sidemenuheader"},H=F((()=>(0,a.QD)("span",{class:"material-symbols-outlined"}," chevron_left ",-1))),R=[H],V=F((()=>(0,a.QD)("hr",null,null,-1))),J=F((()=>(0,a.QD)("br",null,null,-1))),X={class:"logout"},G=F((()=>(0,a.QD)("hr",null,null,-1)));var Z={__name:"sidebarmenu",setup(e){const t=(0,f.o3)(),n=((0,a.S6)((()=>t.getters.userlogin)),(0,a.S6)((()=>t.getters.getuserpoint))),o=(0,a.S6)((()=>t.getters.userlogin.id||t.getters.userlogin)),s=((0,a.S6)((()=>t.getters.getlevels)),()=>{t.commit("sidebtnput",!0),t.commit("setdicemenu",!0)});function i(){t.commit("userloginnow",!1),t.commit("signup","")}function l(){t.commit("setfront",!t.getters.getfront),setTimeout((()=>{t.commit("setfront",!t.getters.getfront)}),1500)}function c(){t.commit("setbuttom",!t.getters.getbuttom),setTimeout((()=>{t.commit("setbuttom",!t.getters.getbuttom)}),1500)}function u(){t.commit("setleft",!t.getters.getleft),setTimeout((()=>{t.commit("setleft",!t.getters.getleft)}),1500)}function p(){t.commit("setright",!t.getters.getright),setTimeout((()=>{t.commit("setright",!t.getters.getright)}),1500)}return(e,t)=>{const d=(0,a.E1)("router-link");return(0,a.Wz)(),(0,a.An)("div",q,[(0,a.QD)("div",$,[(0,a.QD)("h1",null,"아이디 :"+(0,r.WA)(o.value),1),(0,a.QD)("h2",{onClick:s},R)]),V,(0,a.QD)("div",{class:"sidelist",onClick:s},[(0,a.QD)("p",null,"포인트 : "+(0,r.WA)(n.value),1),J,(0,a.QD)("h4",X,[(0,a.K2)(d,{onClick:i,to:"/"},{default:(0,a.Ql)((()=>[(0,a.mY)("로그아웃")])),_:1})])]),G,(0,a.QD)("div",null,[(0,a.QD)("div",{class:"boxwrap"},[(0,a.QD)("div",{class:"upbox"},[(0,a.QD)("a",{href:"#none",id:"upbtn",onClick:l},"Up")]),(0,a.QD)("div",{class:"threebox"},[(0,a.QD)("a",{href:"#none",id:"leftbtn",onClick:u},"Left"),(0,a.QD)("a",{href:"#none",id:"downbtn",onClick:c},"Down"),(0,a.QD)("a",{href:"#none",id:"rightbtn",onClick:p},"Right")])])])])}}};const ee=(0,v.c)(Z,[["__scopeId","data-v-ebc6f024"]]);var te=ee,ne={name:"indexPage",components:{Navimunu:k,FootCompo:M,sidebar:te},methods:{newpass(e){this.ttfalse=e},sidebaropen(e){console.log("동작하나?"),this.usemorebtn=e,console.log(this.usemorebtn)}},data(){return{ttfalse:!0,usemorebtn:!1}},computed:{loginnow(){return this.$store.state.userloginnow}}};const oe=(0,v.c)(ne,[["render",s]]);var ae=oe,re=n(7464),se=n(6812);(0,f.o3)();const ie=[{path:"/",name:"home",component:se.c,beforeEnter:(e,t,n)=>{t.fullPath.length,n()}},{path:"/login",name:"login",component:()=>Promise.resolve().then(n.bind(n,8572))},{path:"/sign",name:"sign",component:()=>Promise.resolve().then(n.bind(n,5553))},{path:"/mainGame",name:"maingame",component:()=>n.e(984).then(n.bind(n,9752))},{path:"/point",name:"point",component:()=>n.e(280).then(n.bind(n,4280))},{path:"/perchase",name:"perchase",component:()=>n.e(636).then(n.bind(n,9636))},{path:"/loginsuc",name:"loginsuc",component:()=>n.e(40).then(n.bind(n,7040))},{path:"/gemini",name:"gemini",component:()=>n.e(764).then(n.bind(n,8425))},{path:"/level",name:"level",component:()=>n.e(288).then(n.bind(n,4576))},{path:"/naver",name:"naverlogin",component:()=>n.e(900).then(n.bind(n,7900))},{path:"/*",name:"error",component:se.c},{path:"/dice",name:"dice",component:()=>n.e(636).then(n.bind(n,9636))},{path:"/kakao",name:"kakao",component:()=>n.e(624).then(n.bind(n,4624))},{path:"/baby",name:"baby",component:()=>n.e(232).then(n.bind(n,232))},{path:"/weather",name:"weather",component:()=>n.e(839).then(n.bind(n,4839))},{path:"/babydetail/:pagenum",name:"babydetail",component:()=>n.e(684).then(n.bind(n,2684))},{path:"/perchasebaby",name:"perchasebaby",component:()=>n.e(768).then(n.bind(n,768))},{path:"/perchSub/:item",name:"perchSub",component:()=>n.e(696).then(n.bind(n,5076))},{path:"/baguni",name:"baguni",component:()=>n.e(544).then(n.bind(n,9164))},{path:"/youtube",name:"youtube",component:()=>n.e(268).then(n.bind(n,4268))},{path:"/wherego",name:"wherego",component:()=>n.e(556).then(n.bind(n,6556))},{path:"/chika",name:"chika",component:()=>n.e(256).then(n.bind(n,2336))},{path:"/gameselect",name:"gameselect",component:()=>n.e(44).then(n.bind(n,5044))}],le=(0,re.gv)({history:(0,re.oz)("/"),routes:ie});var ce=le;n(3248);(0,re.KX)();var ue=(0,f.eC)({state:{userid:"",userloginnow:!1,nowpagename:"현재페이지",putsidebtn:!0,levels:"빡대가리 모드",userloading:!1,parts:[{input:'{"level":1,"type":"sentence"}'}],naverhtml:"",test:"",mycode:"",ttfalse:!1,nowloading:!1,secret:"9AhFkSWq3P",mykakaocode:"",mynavercode:"",dicemenu:!0,babynote:null,kakaoauth:"",naverauth:"",babyproduct:[{title:"기본기저귀",price:"50,000원",src:"https://cdn.oasis.co.kr:48581/product/81083/thumb/00f5c952-4c2f-48bb-b7a3-a0becbd78106.jpg"},{title:"특대형 기저귀",price:"50,000원",src:"https://digitalchosun.dizzo.com/site/data/img_dir/2020/06/26/2020062680175_0.jpg"},{title:"킨도 기저귀",price:"250,000원",src:"https://kindoh.co.kr/web/product/big/202010/54666d1871db1ac61548fdf42bd120ae.jpg"},{title:"하기스 기저귀",price:"500,000원",src:"https://i.namu.wiki/i/0YFc2p2YQTYw9s0a7vN7NaKEEOAKbgOm1eVSxexH4RsWKhcFg-OT7xCxo3Np6iMpIPApp35HbD15BtRyteokUw.webp"},{title:"액상분유",price:"30,000원",src:"https://cdn.kmpnews.co.kr/news/photo/202007/39752_34857_1742.jpg"},{title:"앱솔루트",price:"130,000원",src:"https://review1004.com/wp-content/uploads/2022/09/Monosnap-%E1%84%8F%E1%85%AE%E1%84%91%E1%85%A1%E1%86%BC-_-%E1%84%8B%E1%85%A2%E1%86%B8%E1%84%89%E1%85%A9%E1%86%AF%E1%84%85%E1%85%AE%E1%84%90%E1%85%B3-%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%A8-2FL-%E1%84%87%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%B2-2%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A8-2022-09-26-12-03-21.jpg"},{title:"쪽족이",price:"250,000원",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4bt8Npf88dA5cssmXUXHcOiX0bVEf25eUfqt-TStnCx3c3kOhXoZwU8UcOPBDDxqYMU&usqp=CAU"},{title:"아기옷",price:"50,000원",src:"https://m.ppoya.co.kr/web/product/big/202308/659cdc5ab4570dbde53da6e4cb84ea1c.jpg"},{title:"특대형 기저귀",price:"50,000원",src:"https://digitalchosun.dizzo.com/site/data/img_dir/2020/06/26/2020062680175_0.jpg"},{title:"킨도 기저귀",price:"250,000원",src:"https://kindoh.co.kr/web/product/big/202010/54666d1871db1ac61548fdf42bd120ae.jpg"},{title:"하기스 기저귀",price:"500,000원",src:"https://i.namu.wiki/i/0YFc2p2YQTYw9s0a7vN7NaKEEOAKbgOm1eVSxexH4RsWKhcFg-OT7xCxo3Np6iMpIPApp35HbD15BtRyteokUw.webp"},{title:"액상분유",price:"350,000원",src:"https://cdn.kmpnews.co.kr/news/photo/202007/39752_34857_1742.jpg"},{title:"앱솔루트",price:"130,000원",src:"https://review1004.com/wp-content/uploads/2022/09/Monosnap-%E1%84%8F%E1%85%AE%E1%84%91%E1%85%A1%E1%86%BC-_-%E1%84%8B%E1%85%A2%E1%86%B8%E1%84%89%E1%85%A9%E1%86%AF%E1%84%85%E1%85%AE%E1%84%90%E1%85%B3-%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%A8-2FL-%E1%84%87%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%B2-2%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A8-2022-09-26-12-03-21.jpg"},{title:"쪽족이",price:"250,000원",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4bt8Npf88dA5cssmXUXHcOiX0bVEf25eUfqt-TStnCx3c3kOhXoZwU8UcOPBDDxqYMU&usqp=CAU"},{title:"아기옷",price:"50,000원",src:"https://m.ppoya.co.kr/web/product/big/202308/659cdc5ab4570dbde53da6e4cb84ea1c.jpg"}],firstlogin:0,weather:{lat:"",lon:"",myweather:"",mylocation:""},yourposition:{top:!1,left:!1,right:!1,buttom:!1,back:!1,front:!1},signdata:null,shoppingcart:[],baguni:[],userpoint:0},getters:{userlogin(e){return e.userid},nowpage(e){return e.nowpagename},getsidebtnstate(e){return e.putsidebtn},getlevels(e){return e.levels},getnaverloginpage(e){return e.naverhtml},gettest(e){return e.test},getmycode(e){return e.mycode},getttfalse(e){return e.ttfalse},getnowloading(e){return e.nowloading},getclient_secret(e){return e.secret},getmykakaocode(e){return e.mykakaocode},getdicemenu(e){return e.dicemenu},getbabynote(e){return e.babynote},getkakaoauth(e){return e.kakaoauth},getnaverauth(e){return e.naverauth},getbabyproduct(e){return e.babyproduct},getfirstlogin(e){return e.firstlogin},getlat(e){return e.weather.lat},getlon(e){return e.weather.lon},getfront(e){return e.yourposition.front},gettop(e){return e.yourposition.top},getleft(e){return e.yourposition.left},getright(e){return e.yourposition.right},getbuttom(e){return e.yourposition.buttom},getback(e){return e.yourposition.back},getsigndata(e){return e.signdata},getmyweather(e){return e.weather.myweather},getmylocation(e){return e.weather.mylocation},getbaguni(e){return e.baguni},getmynavercode(e){return e.mynavercode},getuserpoint(e){return e.userpoint}},mutations:{setttfalse(e,t){return e.ttfalse=t},signup(e,t){return e.userid=t},userloginnow(e,t){return e.userloginnow=t},setnowpage(e,t){return e.nowpagename=t},sidebtnput(e,t){return e.putsidebtn=t},setlevel(e,t){return e.levels=t},fnSetLoading(e,t){return e.userloading=t},setpart(e,t){switch(t){case 0:return e.parts[0]=e.parts.push({text:'input: {level":5,"type":"word"}'});case 1:return e.parts[0]={text:'input: {"level":1,"type":"sentence"}'};case 2:return e.parts.push({text:'input: {"level":2,"type":"sentence"}'});case 3:return e.parts.push({text:'input: {"level":3,"type":"sentence"}'});case 4:return e.parts.push({text:'input: {"level":4,"type":"sentence"}'});case 5:return e.parts.push({text:'input: {"level":5,"type":"sentence"}'});case"word":return e.parts.push({text:'input: {level":5,"type":"word"}'})}},naverloginpage(e,t){return e.naverhtml=t},settest(e,t){return e.test=t},setmycode(e,t){return e.mycode=t},setnowloading(e,t){return e.nowloading=t},setmykakaocode(e,t){return e.mykakaocode=t},setdicemenu(e,t){return e.dicemenu=t},setbabynote(e,t){return e.babynote=t},setkakaoauth(e,t){return e.kakaoauth=t},setnaverauth(e,t){return e.naverauth=t},setfirstlogin(e,t){return e.firstlogin=t},setlon(e,t){return e.weather.lon=t},setlat(e,t){return e.weather.lat=t},setfront(e,t){return e.yourposition.front=t},setbuttom(e,t){return e.yourposition.buttom=t},setleft(e,t){return e.yourposition.left=t},setright(e,t){return e.yourposition.right=t},setsigndata(e,t){return e.signdata=t},setmyweather(e,t){return e.weather.myweather=t},setmylocation(e,t){return e.weather.mylocation=t},setbaguni(e,t){return e.baguni.push(t)},delbaguni(e,t){return e.baguni=e.baguni.filter(((e,n)=>n!=t))},setmynavercode(e,t){return e.mynavercode=t},setuserpoint(e,t){return e.userpoint+=t}},actions:{geminigo({commit:e},t){e("fnSetLoading",!0),generateContent()},async generateContent(e){try{const e=await fetch("https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/generate_easy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:'input: {"level":2,"type":"sentence"}'})}),t=await e.text(),n=document.getElementById("output");n.innerHTML=`<p>${t}</p>`,resultText.push(t),console.log(resultText)}catch(t){console.error(t)}},async fetchnaver(e,t){e.commit()},testaction(e){e.commit("settest","성공")}},modules:{}});(0,o.W0)(ae).use(ue).use(ce).mount("#app")},6812:function(e,t,n){n.d(t,{c:function(){return A}});var o=n(4108),a=n(9096),r=n(7764),s=n(3452);const i=e=>((0,o.ED)("data-v-dfd9e6dc"),e=e(),(0,o.ii)(),e),l={class:"fullwrap"},c={class:"firstlogoWrap"},u={class:"mymanwrap"},p=i((()=>(0,o.QD)("div",{class:"roundbox"},null,-1))),d=i((()=>(0,o.QD)("div",{class:"roundbox2"},null,-1))),m=[p,d],g=i((()=>(0,o.QD)("p",null,"육아정보 페이지에 오신걸 환영합니다.",-1))),h={action:"server.js",method:"post",name:"signlog",id:"signlog"},f=i((()=>(0,o.QD)("legend",{class:"xx"}," 회원가입 및 로그인 ",-1))),b={class:"wrapflexbod"},v={class:"signpage"},y={class:"signpageback"};function k(e,t,n,i,p,d){const k=(0,o.E1)("signbtn"),w=(0,o.E1)("loginbtn");return(0,o.Wz)(),(0,o.An)("div",l,[(0,o.QD)("div",c,[(0,o.QD)("div",u,[(0,o.QD)("img",{src:s,alt:"",class:"myman",onClick:t[0]||(t[0]=(...e)=>d.hide&&d.hide(...e)),style:(0,a.MN)(p.znum)},null,4),(0,o.wt)((0,o.QD)("p",null,[(0,o.QD)("a",{href:"#none",onClick:t[1]||(t[1]=(...e)=>d.hide&&d.hide(...e))},"Click me")],512),[[r.Ub,0==p.hidep]])])]),(0,o.QD)("div",{class:"wraproundbox",style:(0,a.MN)({transform:p.transy})},m,4),(0,o.QD)("div",{class:"loginbtn",style:(0,a.MN)(p.signupcom)},[(0,o.QD)("h1",null,[(0,o.QD)("a",{href:"#none",onClick:t[2]||(t[2]=(...e)=>d.slideupdown&&d.slideupdown(...e))},"Welcome")]),g,(0,o.QD)("form",h,[(0,o.QD)("fieldset",null,[f,(0,o.QD)("div",b,[(0,o.QD)("button",{type:"button",onClick:t[3]||(t[3]=e=>d.gogo("sign"))},"Sign up"),(0,o.QD)("button",{type:"button",onClick:t[4]||(t[4]=e=>d.gogo("login"))},"Login")]),(0,o.QD)("div",v,[(0,o.QD)("div",y,[(0,o.QD)("a",{href:"#none",onClick:t[5]||(t[5]=(...e)=>d.hide&&d.hide(...e))},"Back")]),(0,o.QD)("section",{id:"joinpage",class:"joinpage",style:(0,a.MN)(p.joinpageview)},[(0,o.K2)(k)],4),(0,o.wt)((0,o.K2)(w,{style:(0,a.MN)(p.loginopacity)},null,8,["style"]),[[r.Ub,1==p.logingo]])])])])],4)])}var w=n(5553),D=n(8572),Q={components:{signbtn:w["default"],loginbtn:D["default"]},data(){return{signgo:1,logingo:0,slidemenu:0,hidep:0,transy:{transform:"translateY(15px)"},signup:0,signupcom:"",joinpageview:{transform:"translateY(300px)"},znum:"z-index:1",loginopacity:"opacity:0"}},methods:{gogo(e){this.znum="z-index:0","sign"==e?(this.signup=1,this.signgo=2,this.logingo=0,this.loginopacity="opacity:0",console.log(this.signup),this.signupcom="top:-10vh",this.joinpageview.transform="translateY(40px)",this.transy.transform="translateY(-800px)"):(this.logingo=1,this.signgo=1,this.signupcom="top:45vh",this.transy.transform="translateY(-600px)",this.joinpageview.transform=" translateY(1200px)",setTimeout((()=>{this.loginopacity="opacity:1"}),1e3))},slideupdown(){this.slidemenu++,this.signgo=0,this.slidemenu%2==1?this.signupcom="top:76vh":this.signupcom="top:88vh;",this.slidemenu%2==1?this.transy.transform="translateY(-650px)":this.transy.transform="translateY(-800px)"},hide(){this.transy.transform="translateY(-600px)",this.hidep=1,this.signupcom="top:70vh",this.joinpageview.transform="translateY(1200px)",this.logingo=0,this.loginopacity="opacity:0"}},computed:{}},E=n(4100);const _=(0,E.c)(Q,[["render",k],["__scopeId","data-v-dfd9e6dc"]]);var A=_},8572:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var o=n(4108),a=n(2500),r=n(7764),s=n(7192),i=n(7464);const l={class:"login"},c=["innerHTML"],u={action:"/","on-submit.prevnt":""},p={id:"naver_id_login"};var d={__name:"LoginPage",setup(e){const t=(0,a.IL)(null);(0,i.MJ)();let n=(0,a.IL)("");const d=(0,a.IL)(""),m=(0,a.IL)(""),g=(0,s.o3)();0==g.getters.getfirstlogin&&Kakao.init("e95013522170bcd46c5917164368de34");const h=(0,a.IL)(""),f=(0,a.IL)(""),b=(0,i.KX)(),v=async()=>{if(0==d.value)alert("아이디를 입력하세요");else{var e=new Headers;e.append("Content-Type","application/json");var t=JSON.stringify({newaccount:!1,id:d.value,password:m.value}),n={method:"POST",headers:e,mode:"cors",body:t};const o=await fetch("https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/account/",n),a=await o.json();a.result?(console.log(a.result),alert(a.result)):a.name&&(console.log(a),g.commit("userloginnow",!0),g.commit("signup",a),b.replace("/loginsuc"),console.log(g.userloginnow),g.commit("setfirstlogin",1))}};async function y(){const e=g.getters.getkakaoauth;e?g.commit("setfirstlogin",1):alert("네이버 회원가입부터 진행하세요")}window.call=function(e){console.log(e),g.commit("setmycode",e)};const k=async()=>{const e="https://kapi.kakao.com/v1/user/logout",t=new Headers;t.append("Authorization",`Bearer ${g.getters.getkakaoauth}`);const n={myheaders:t,method:"POST"},o=await fetch(e,n),a=await o;console.log(a)};let w=(0,o.S6)((()=>0==g.getters.getfirstlogin));const D=async()=>{const e=g.getters.getkakaoauth;e?(Kakao.isInitialized(),Kakao.Auth.setAccessToken(e),Kakao.API.request({url:"/v2/user/me",data:{property_keys:["kakao_account.name","kakao_account.email","profile_nickname","kakao_account.profile_nickname","email"]}}).then((function(e){console.log(e),g.commit("signup",e.id),g.commit("userloginnow",!0);var t=new Headers;t.append("Content-Type","application/json");var n=JSON.stringify({newaccount:w.value,id:e.id,password:"카카오로그인",kakao:!0,name:e.id});console.log(w);var o={method:"POST",headers:t,mode:"cors",body:n};fetch("https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/account",o);g.commit("setfirstlogin",1),b.replace("/loginsuc")})).catch((function(e){console.log(e)}))):alert("카카오 회원가입부터 진행하세요")},Q=e=>{console.log(e),e.key};return(e,s)=>((0,o.Wz)(),(0,o.An)("div",l,[(0,o.QD)("div",{class:"page",reg:"page",innerHTML:(0,a.KV)(n)},null,8,c),(0,o.QD)("form",u,[(0,o.wt)((0,o.QD)("input",{type:"text",id:"user_loginID",placeholder:"아이디 입력","onUpdate:modelValue":s[0]||(s[0]=e=>d.value=e),onEnter:(0,r.Y7)(Q,["stop"])},null,544),[[r.Og,d.value]]),(0,o.wt)((0,o.QD)("input",{type:"password",name:"pass",id:"user_loginPass","onUpdate:modelValue":s[1]||(s[1]=e=>m.value=e),placeholder:"비밀번호 입력",onEnter:(0,r.Y7)(Q,["stop"])},null,544),[[r.Og,m.value]]),(0,o.QD)("input",{type:"button",value:"로그인",id:"loginbtn",onClick:v})]),(0,o.QD)("div",p,[(0,o.QD)("span",{onClick:k}),(0,o.QD)("a",{href:"#none",id:"myfetch",onClick:s[2]||(s[2]=e=>y(h.value))},"네이버로그인"),(0,o.QD)("a",{href:"#none",id:"myfetch2",onClick:s[3]||(s[3]=e=>D(f.value))},"카카오로그인"),(0,o.QD)("form",{action:"",ref_key:"myform",ref:t,id:"myaccount"},null,512)])]))}},m=n(4100);const g=(0,m.c)(d,[["__scopeId","data-v-07de7e3a"]]);var h=g},5553:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});n(2168),n(5104),n(8312);var o=n(4108),a=n(9096),r=n(7764),s=n(2500),i=n(7192),l=n(7464);const c=e=>((0,o.ED)("data-v-1ac8c342"),e=e(),(0,o.ii)(),e),u={class:"sign"},p=c((()=>(0,o.QD)("caption",null," 회원가입",-1))),d=c((()=>(0,o.QD)("thead",null,[(0,o.QD)("tr",null,[(0,o.QD)("th",null," * 는 필수 입력항목입니다")])],-1))),m=c((()=>(0,o.QD)("th",null,[(0,o.QD)("label",{for:"user_name"},"* 이름")],-1))),g=c((()=>(0,o.QD)("th",null,[(0,o.QD)("label",{for:"user_id"},"* 아이디")],-1))),h=c((()=>(0,o.QD)("br",null,null,-1))),f=c((()=>(0,o.QD)("span",{style:{"font-size":"0.7em"}},"4~12글자 입력 가능",-1))),b=c((()=>(0,o.QD)("span",{class:"idresultbox",style:{"margin-left":"10px"}},null,-1))),v=c((()=>(0,o.QD)("th",null,[(0,o.QD)("label",{for:"user_pass"},"비밀번호")],-1))),y=c((()=>(0,o.QD)("th",null,[(0,o.QD)("label",{for:"user_passcheck"},"비밀번호 확인")],-1))),k={class:"wrapbox"},w={class:"buttonwraping"};var D={__name:"SignPage",setup(e){const t=(0,i.o3)();let n=`${location.href}`;const c=(0,s.IL)(null),D=(0,s.IL)(null),Q=(0,s.IL)(null),E=(0,s.IL)(null),_=(0,s.IL)(null),A=((0,s.IL)(""),(0,l.KX)(),(0,s.IL)("")),x=(0,l.MJ)();let C=(0,s.IL)("");const O=(0,s.IL)(""),S=(0,s.IL)(""),j=(0,s.IL)(""),z=(0,s.IL)(!0),L=e=>{z.value=!z.value};async function N(e){const t=[D,E,_,Q];var n=new Headers;n.append("Content-Type","application/json");var o=JSON.stringify({newaccount:!0,id:A.value,password:O.value,name:j.value}),a={method:"POST",headers:n,mode:"cors",body:o};if(console.log(A.value.length),A.value.length<4||A.value.length>12)return alert("아이디는 4~12글자 입력해줘"),console.log(D.value),!1;if(O.value.length<4||O.value.length>8)return alert("비밀번호는 4~8글자 이상 입력해줘"),Q.value=focus,!1;if(O.value!=S.value)return alert("비밀번호가 틀렸습니다.");{const e=await fetch("https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/account",a),t=await e.json();console.log(t)}t.forEach(((e,t)=>{if(console.log(e),!e.value.value)return e.value.focus(),alert(`${e.value.placeholder}에 내용이 없습니다.`)})),L()}(0,o._O)((()=>{})),(0,o.u2)((()=>{x.query.state&&"kakaoreturn"==x.query.state?(opener.kakaoreturn(x.query.code),window.close()):"naverreturn"==x.query.state?(opener.childrenplay(x.query.code),window.close()):"navertoken"==x.query.state&&(opener.navertoken(x.query.code),window.close())}));const T=async()=>{const e="https://kauth.kakao.com/oauth/authorize",o="e70be9702841c3bccff0ed4af83a83a9";location.href.match(/#none/gm)&&(location.href=location.href.replace(/\/#none/gm,""));const a="kakaoreturn",r="code";let s="resizable=yes";const i="profile_nickname";let l=e+`?response_type=${encodeURI(r)}&client_id=${encodeURI(o)}&redirect_uri=${encodeURI(n)}&scope=${encodeURI(i)}&state=${encodeURI(a)}`;C.value=window.open(l,"",s),0!=t.getters.getfirstlogin&&setTimeout((()=>{I(C.value.location.href.match(/(?<==).+[^#\none]/gm)),C.value.close()}),300)},I=async e=>{const o="https://kauth.kakao.com/oauth/token",a="e70be9702841c3bccff0ed4af83a83a9",r="kUetYsMO5y8vv2WL7KJJCunRkiAgvLFf",s="authorization_code",i="myfirstid",l="profile_nickname, account_email",c=e;let u=new FormData;u.append("client_id",a),u.append("redirect_uri",n),u.append("client_secret",r),u.append("grant_type",s),u.append("code",c),u.append("nonce",i),u.append("scope",l);let p=new URLSearchParams(u);try{const e=await fetch(o,{method:"POST",headers:{"Content-type":"application/x-www-form-urlencoded;charset=utf-8"},body:p}),n=await e.text();let a=JSON.parse(n);t.commit("setkakaoauth",a.access_token),console.log(JSON.parse(n)),console.log(t.getters.getkakaoauth)}catch(d){console.error(d)}};window.kakaoreturn=e=>{console.log(e),t.commit("setmykakaocode",e),I(e)};function U(e){const n=e,o="QJ5hHy5NLVcKEmQDp7OS",a="authorization_code",r=encodeURI("navertoken"),s="https://nid.naver.com/oauth2.0/token",i=s+`?grant_type=${a}&client_id=${o}&client_secret=${t.getters.getclient_secret}&code=${n}&state=${r}`;window.open(i,"","popup=true")}return window.childrenplay=async e=>{console.log(e,"네이버 코드"),t.commit("setmynavercode",e),U(e)},(e,t)=>((0,o.Wz)(),(0,o.An)("div",u,[(0,o.QD)("legend",{class:(0,a.WN)({xx:!z.value}),style:{"text-align":"center","font-size":"2.5em",margin:"40px 0 20px"}},"회원가입",2),(0,o.QD)("table",{class:(0,a.WN)({hiding:z.value})},[p,d,(0,o.QD)("tbody",null,[(0,o.QD)("tr",null,[m,(0,o.QD)("td",null,[(0,o.wt)((0,o.QD)("input",{type:"text",id:"user_name",placeholder:"이름","onUpdate:modelValue":t[0]||(t[0]=e=>j.value=e),ref_key:"myname",ref:E},null,512),[[r.Og,j.value]])])]),(0,o.QD)("tr",null,[g,(0,o.QD)("td",null,[(0,o.wt)((0,o.QD)("input",{type:"text",id:"user_id",placeholder:"아이디",name:"user_id",ref_key:"myid",ref:D,maxlength:"12",minlength:"4","onUpdate:modelValue":t[1]||(t[1]=e=>A.value=e)},null,512),[[r.Og,A.value]]),h,f,b])]),(0,o.QD)("tr",null,[v,(0,o.QD)("td",null,[(0,o.wt)((0,o.QD)("input",{type:"password",id:"user_pass",placeholder:"비밀번호",name:"user_pass",ref_key:"passw",ref:Q,"onUpdate:modelValue":t[2]||(t[2]=e=>O.value=e)},null,512),[[r.Og,O.value]])])]),(0,o.QD)("tr",null,[y,(0,o.QD)("td",null,[(0,o.wt)((0,o.QD)("input",{type:"password",id:"user_passcheck",placeholder:"비밀번호 확인",ref_key:"passcheck",ref:_,"onUpdate:modelValue":t[3]||(t[3]=e=>S.value=e)},null,512),[[r.Og,S.value]])])])])],2),(0,o.QD)("div",k,[(0,o.wt)((0,o.QD)("button",{id:"joinbtn",onClick:(0,r.Y7)(L,["prevent"])}," 회원가입하기 ",512),[[r.Ub,z.value]]),(0,o.wt)((0,o.QD)("button",{id:"joinbtn1",type:"submit",onClick:(0,r.Y7)(N,["prevent"])}," 회원가입하기 ",512),[[r.Ub,!z.value]]),(0,o.wt)((0,o.QD)("button",{id:"joinbtn2",onClick:(0,r.Y7)(L,["prevent"])}," 돌아가기 ",512),[[r.Ub,!z.value]])]),(0,o.QD)("div",w,[(0,o.QD)("button",{type:"button",id:"kakaosign",onClick:T},"카카오톡"),(0,o.QD)("form",{action:"",ref_key:"myform",ref:c},null,512)])]))}},Q=n(4100);const E=(0,Q.c)(D,[["__scopeId","data-v-1ac8c342"]]);var _=E},3452:function(e,t,n){e.exports=n.p+"img/myman.9124d662.png"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],r=e[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{40:"67edbe68",44:"b8d968d3",232:"b30ae6c3",256:"1f129d68",268:"3f08f064",280:"6f02bec0",288:"651409e9",544:"14742e95",556:"d8c38c35",624:"a9e7d7ef",636:"f72f16d2",684:"ca027cf7",696:"3bd412df",764:"96f463f1",768:"856f370d",839:"9d74eab9",900:"7c8ebb47",984:"b906d04d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{40:"d568f337",44:"36d33c04",232:"c10641c5",256:"5fa7393c",268:"54928197",280:"27d6b4b4",288:"ede1cce6",544:"78a60dda",556:"7f981155",636:"40f52be5",684:"f3f34f06",696:"3c14af61",764:"739e213e",768:"b970acfe",839:"0dfa7e34",984:"f2d3e5a7"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="baby1:";n.l=function(o,a,r,s){if(e[o])e[o].push(a);else{var i,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+r){i=p;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+r),i.src=o),e[o]=[a];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(m);var a=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var s=n&&n.type,i=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+": "+i+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,r.parentNode&&r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=s,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){a=s[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var s=n.miniCssF(o),i=n.p+s;if(t(s,i))return a();e(o,i,null,a,r)}))},a={524:0};n.f.miniCss=function(e,t){var n={40:1,44:1,232:1,256:1,268:1,280:1,288:1,544:1,556:1,636:1,684:1,696:1,764:1,768:1,839:1,984:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var s=n.p+n.u(t),i=new Error,l=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,a[1](i)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,s=o[0],i=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var u=l(n)}for(t&&t(o);c<s.length;c++)r=s[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkbaby1"]=self["webpackChunkbaby1"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[999],(function(){return n(1680)}));o=n.O(o)})();
//# sourceMappingURL=app.d704832f.js.map