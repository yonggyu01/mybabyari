<template>
    <div>
        <div class="fullwrap">
          <h1 v-if="ttfalse">구매목록</h1>
          <h1 v-else> my-cart</h1>
          <div class="contentbox">
              <ul>
                <li class="myli" v-for="(x,idx) of mycartdata" :key="x.title+idx">
                  <img :src="x.src" alt="">
                  <div class="flexdata">
                    <h2 class="title">{{x.title}}</h2>
                    <p> 구매정보</p>
                    <h4>
                      갯수 :  <span> <select name="q" class="mynum" v-model="x.Quantity">
                      <option value="1" checked>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select></span>
                    </h4>
                    <h4>가격 : {{ Number(x.price.replace(/,/,'').replace(/원/,''))* Number(x.Quantity) + '원' }} </h4>
                  </div>
                  <div class="btnbox">
                    <button v-if="ttfalse" class="delbtn" @click="del(idx)">삭제</button>
                    <button v-else class="delbtn" @click="del(x.id)">del</button>
                  </div>
                </li>
              </ul>
          </div>
        </div>
    </div>
</template>

<script setup>
import { computed,ref } from "vue";
import { useStore } from "vuex";
const store = useStore()
const myq = ref([])
let mycartdata = ref([])
const userlogininfo = computed(()=>{ return store.getters.userlogin.id || store.getters.userlogin})
// computed(()=>{
//   return store.getters.getbaguni
// })
const ttfalse = computed(()=>{
  return store.getters.getttfalse
})

async function del(id){
  const fdata = {
    mode : 'del',
    id : id,
    // userid : userlogininfo.value
  }
  const fetcha = await fetch('https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/cart',{
    method:'POST',
    headers:{
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(fdata)
  })
  const result =await fetcha.json()
  mycartdata.value=result



  // store.commit('delbaguni', num)
  // console.log(store.getters.getbaguni)
}
async function fetchdata (){
const fetcha = await fetch('https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/cart',{
  // const fetcha = await fetch('http://localhost:3000/cart',{
    method:'POST',
    headers:{
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      userid : userlogininfo.value,
      
    })
  })
  const result =await fetcha.json()
  mycartdata.value=result
  console.log(result)}

  fetchdata()
</script>


<style scoped>
.fullwrap{
  background-color: #e7af4779;
  display: flex;
  align-items: center;
  gap:40px;
  /* justify-content: space-between  ; */
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 140px);
}
.contentbox{
  background-color: white;
  width: 90vw;
  /* height: 70vh; */
  margin-bottom: 20px;
  border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    box-shadow: 1px 1px 3px black;
}
.myli{
  display: grid;
  gap : 5px;
  grid-template-columns: 100px 1fr 4em;
  background-color: #f09f0979;
  width: 95%;
  margin: 5px auto;
  border-top-left-radius: 25px;
  align-items: center;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    padding: 5px;
    box-sizing: border-box;
    box-shadow: 1px 1px 3px black;
    overflow: hidden;
}
.myli img{
  max-width: 100%;
  max-height: 100%;
  object-fit: fill;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
}
.delbtn{
  background-color:red;
  border: none;
  border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    width: 3em;
    height: 3em;
    color:white;
    box-shadow: 1px 1px 3px black;
  font-size: 1em;
}
.btnbox{
  display: flex;
    justify-content: center;
    align-items: center;
}
.title{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
  ;
}
</style>