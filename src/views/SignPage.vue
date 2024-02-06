<template>
  <div class="sign">
   

    <legend :class="{'xx' : !hiding}" style="text-align: center; font-size: 2.5em; margin: 40px 0 20px">회원가입</legend>
    <table :class="{'hiding': hiding }">
        <caption > 회원가입</caption>
       <thead>
        <tr>
            <th> * 는 필수 입력항목입니다</th>
        </tr>
    </thead>
        <tbody>
        
        <tr>
            
            <th><label for="user_name">* 이름</label> <!--for안에는 id값 넣어주면됨 -->
            </th>
            <td><input type="text" id ="user_name" placeholder="이름" v-model="username"></td>
        </tr>
        <tr>
            <th><label for="user_id">* 아이디</label> </th>
            <td><input type="text" id ="user_id" placeholder="아이디" name="user_id" maxlength="12" minlength="4">
                
               <br><span style="font-size:0.7em">4~12글자 입력 가능</span>
                <span class="idresultbox" style="margin-left: 10px;"></span> </td>
        </tr>
        <tr>
            <th><label for="user_pass">비밀번호</label> </th>
            <td><input type="password" id ="user_pass" placeholder="비밀번호" name="user_pass"></td>
        </tr>
        <tr>
            <th><label for="user_passcheck">비밀번호 확인</label> </th>
            <td><input type="password" id ="user_passcheck" placeholder="비밀번호 확인"></td>
        </tr>
     
      </tbody>
    </table>
    <div class="wrapbox">  <button type="submit" id="joinbtn"  @click.prevent="signupbtn"> 회원가입하기 </button>

    </div>
    <div class="buttonwraping">
        <button type="button" id="naversign" >네이버</button>
        <button type="button" id="kakaosign" @click="kakao">카카오톡</button>
        <form action="" ref="myform" > 
              </form>
    </div>


  </div>
</template>

<script setup>
import {ref,onBeforeMount} from 'vue'
import { useStore } from 'vuex';
import { useRoute,useRouter } from 'vue-router';
const store = useStore()
const myform = ref(null)
const myaccess = ref('')
const router = useRouter()
const route = useRoute()
const kakaowin = ''
      const username = ref('')
       const hiding =ref(true)
 const signupbtn=()=>{
    hiding.value=!hiding.value
}
onBeforeMount(() => {
    if(route.fullPath.length>1){
        console.log(route.query.code)
        // opener.kakaoreturn(route.query.code)
        kakaoreturn(route.query.code)
    }
})

/// z코드수정중임 여기서 수정해야함  -> 카카오 로그인페이지를 루트페이지에서 해결해야함  
const kakao =async(value)=>{
      const url ='https://kauth.kakao.com/oauth/authorize'
      const client_id ='e70be9702841c3bccff0ed4af83a83a9'
        console.log(location.href)
      const redirect_uri = `${location.href}`
      const response_type = 'code'
      const nonce = 'myfirstid'
      let option = 'resizable=yes'
        const scope = 'profile_nickname'
        let fullurl = url +`?response_type=${encodeURI(response_type)}&client_id=${encodeURI(client_id)}&redirect_uri=${encodeURI(redirect_uri)}`
  
        kakaowin= window.open(fullurl, '', option)
        setTimeout(() => {
            kakaowin.close()
        }, 500);
      }
    const kakaoreq= async (value)=>{
      const url ='https://kauth.kakao.com/oauth/token'
      const client_id ='e70be9702841c3bccff0ed4af83a83a9'
      const redirect_uri = `${location.href}`
      const client_secret = 'kUetYsMO5y8vv2WL7KJJCunRkiAgvLFf'
      const grant_type = 'authorization_code'
      const nonce = 'myfirstid'
      const scope = 'profile_nickname'
      const code =value
      let form_data = new FormData()
      form_data.append('client_id',client_id)
      form_data.append('redirect_uri',redirect_uri)
      form_data.append('client_secret',client_secret)
      form_data.append('grant_type',grant_type)
      form_data.append('code',code)
      form_data.append('nonce',nonce)
      form_data.append('scope',scope)

      //application/x-www-form-urlencoded;charset=utf-8 타입으로 자료를 보내려면 
      // POST 방식 Data encoding 을 해야하며  해당 encoding을 해주는 기능임  new URLSearchParams()
	    let url_form_data = new URLSearchParams(form_data)
    try{
        console.log('code' ,value )
     const response = await fetch(url,{
      method : 'POST',
      headers:{'Content-type'	:'application/x-www-form-urlencoded;charset=utf-8'},
      body:url_form_data
     })
     const result = await response.text()
     let mydata =JSON.parse(result)
     store.commit('setkakaoauth',mydata.access_token)
     console.log(JSON.parse(result))
     console.log(store.getters.getkakaoauth)
  

    } 
    catch(error){
      console.error(error);
    }
  }
  function kakaoreturn(value){
      console.log(value)
      store.commit('setmykakaocode',value) 
      kakaoreq(value)
    }

</script>

<style scoped>
.hiding{
    height: 0;
    display: block;
    overflow: hidden;
}
.wrapbox{
    display: flex;
    padding: 10px;
    justify-content: space-evenly;

}
table,tr,td,th{
    border-spacing: 0;
}   
caption{
    font-size: 2.5em;
    text-align: center;
    margin-bottom: 1.5em;
    padding-top: 1em;
}
fieldset table tbody tr{

width: 100vw;
display: flex;
box-sizing: border-box;
align-items: center;
background-color : white

}
thead> tr> th{
text-align: start;
padding-left: 1.6em;
padding-bottom: 1em;
background-color : white
}

tbody{
 
width: 100vw;
}
fieldset table tbody th {
border-collapse: collapse;
border-bottom: 1px solid rgba(0, 0, 0, 0.174);
width: 35vw;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box  ;
}
fieldset table tbody td:not(.lastone){
    border-collapse: collapse;
    border-bottom: 1px solid rgba(0, 0, 0, 0.174);
    display: flex;
    gap: 10px;
    width: calc(100vw - 35vw);
    height: 70px;
    box-sizing: border-box  ;
    align-items: center;
}

tbody input{
    font-size: 15px;
    width: 40vw;
    border:none;
    background-color: antiquewhite;
    padding: 10px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
}
#joinbtn,#backbtn,#naversign,#kakaosign{
    height: 50px;
    width: 40vw;
    margin-right: 5px;
    border: 0 none;
    border-top-left-radius: 20px;
    border-top-right-radius:20px ;
    border-bottom-right-radius:20px ;
    border-bottom-left-radius: 20px;
}
#id_check{
    width: 100px;
    box-sizing: border-box;
}
.joinpage{
    margin-bottom: 50px;
}
.buttonwraping{
    display: flex;
    flex-direction: column;
    gap:15px;
    width: 100vw;
    align-items: center;
}


</style>