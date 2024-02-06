import { Store, createStore, useStore } from 'vuex'
import { useRouter} from 'vue-router'
const router =useRouter()
export default createStore({
  state: {
    userid : '',
    userloginnow: false,
    // 개발중에는 임시로 true로 해두자
    nowpagename:'현재페이지',
    putsidebtn:true,
    levels:'빡대가리 모드',
    userloading:false,
    parts:[{input: `{\"level\":1,\"type\":\"sentence\"}`}],
    naverhtml :``,
    test : '',
    mycode:'',
    ttfalse : false,
    nowloading : false,
    secret : '9AhFkSWq3P',
    mykakaocode:'',
    dicemenu:true,
    babynote:null,
    kakaoauth:''

  },
  getters: {
    userlogin(state){
      return state.userid
    },
    nowpage(state){
      return state.nowpagename
    },
    getsidebtnstate(state){
      return state.putsidebtn
    },
    getlevels(state){
      return state.levels
      },
      getnaverloginpage(state){
        // console.log( state.naverhtml)
        return state.naverhtml
      },
      gettest(state){
        return state.test
      },
      getmycode(state){
        return state.mycode
      },
      getttfalse(state){
        return state.ttfalse
      },
      getnowloading(state){
        return state.nowloading
      },
      getclient_secret(state){
        return state.secret
      },
      getmykakaocode(state){
        return state.mykakaocode
      },
      getdicemenu(state){
        return state.dicemenu
      },
      getbabynote(state){
        return state.babynote
      },
      getkakaoauth(state){
        return state.kakaoauth
      }

  },
  mutations: {
    setttfalse(state,value){
      return state.ttfalse = value
    },
    signup(state,value){
      return state.userid = value
    },
    userloginnow(state,value){
      return state.userloginnow = value
    },
    setnowpage(state,pagename){
      return state.nowpagename = pagename
    },
    sidebtnput(state,value){
      return state.putsidebtn = value
    },
    setlevel(state,value){
      return state.levels = value
    },
    fnSetLoading(state,value){
      return state.userloading = value
    },// 제미니 실행해야함
    setpart(state,value){
      switch (value) {
        case 0: 
        return  state.parts[0] = state.parts.push({text: "input: {level\":5,\"type\":\"word\"}"})
        case 1: 
        return state.parts[0] = {text: "input: {\"level\":1,\"type\":\"sentence\"}"}  
        case 2: 
        return state.parts.push( {text: "input: {\"level\":2,\"type\":\"sentence\"}"})
        case 3: 
        return state.parts.push({text: "input: {\"level\":3,\"type\":\"sentence\"}"})
        case 4: 
        return state.parts.push({text: "input: {\"level\":4,\"type\":\"sentence\"}"})
        case 5: 
        return  state.parts.push({text: "input: {\"level\":5,\"type\":\"sentence\"}"})
        case 'word': 
        return state.parts.push({text: "input: {level\":5,\"type\":\"word\"}"})
      }
    },
    naverloginpage(state,html){
      return state.naverhtml = html
    },
    settest(state,value){
      return state.test= value
    },
    setmycode(state,value){
      return state.mycode = value
    },
    setnowloading(state,val){
      return state.nowloading = val
    },
    setmykakaocode(state,value){
      return state.mykakaocode = value
    },
    setdicemenu(state,value){
      return state.dicemenu = value
    },
    setbabynote(state,value){
      return state.babynote = value
    },
    setkakaoauth(state,value){
      return state.kakaoauth = value
    }
  },
  actions: {
     //dispatch로 실행해야함
      geminigo({ commit }, payload) {
        commit('fnSetLoading', true) 
        generateContent()
      },
      async generateContent( aaa) {
        try {
      const response = await fetch('https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/generate_easy', {
          method: 'POST'
          ,
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({text: "input: {\"level\":2,\"type\":\"sentence\"}"}),
      });
      const result = await response.text();
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = `<p>${result}</p>`;
      resultText.push(result)
      console.log(resultText)
    } catch (error) {
      console.error(error);
    }
  },
  async fetchnaver(payload,value){
      payload.commit()
    // const url = '/oauth2.0/token'
    // const redirect_uri = 'http://localhost:8080/neweng/naver'
    // const response_type = 'code'
    // let fullurl = url +`?response_type=${response_type}&client_id=${client_id}&redirect_uri=${encodeURI(redirect_uri)}&state=${mystate}`
 //
    // const url = 'https://nid.naver.com/oauth2.0/token'
    // const client_id = 'QJ5hHy5NLVcKEmQDp7OS'
    // const client_secret = '9AhFkSWq3P'
    // const authorization_code = value
    // const grant_type = 'authorization_code'
    // const mystate = encodeURI('Random_state')
    // const formdata=new FormData()
    // formdata.append( 'grant_type' , grant_type )
    // formdata.append( 'client_id' , client_id )
    // formdata.append( 'client_secret' , client_secret )
    // formdata.append( 'code' , authorization_code )
    // formdata.append( 'state' , mystate )
    // formdata.append( 'expires_in' , 360000 )
    //

    // await fetch(url,{
    //    method : 'POST',
    //    headers : {
    //     'Access-Control-Allow-Origin' : '*'
    //    },
    //    body : formdata,
    //  }).then((data)=>{console.log(data)
    //     payload.commit('naverloginpage',result)

    //   })//
    //    
      
    // .catch(error => console.log('error', error)) 
  
    // .then((result)=>{console.log(result) }).catch(error => console.log('error', error));
    },
    testaction(one){
      one.commit('settest','성공')
    }

},
  modules: {
  
}})
