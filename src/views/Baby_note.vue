<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex';
import { useRoute,useRouter } from 'vue-router';
const store = useStore()
const router =useRouter()
const par = /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi
const hangul = /[ㄱ-ㅣ가-힣].+/gm
var client = new dsteem.Client('https://api.steemit.com')
let textme = ref(null)
var mapdata = async (mytag, num) => {
    const mydata = await client.database.getDiscussions('trending', { tag: mytag, limit: num })
    const result = await mydata
    textme.value = result
    console.log(result)
    store.commit('setbabynote',result)
    console.log(store.getters.getbabynote, '스토어에서 가져옴')

}
mapdata('momscafe', 15)

const selecttext= (num)=>{

    router.push({ name: 'babydetail', params: { pagenum: num }})
}



</script>
<template>
    <div>
        <div class="babybox">
        <div class="textbox" v-for="(x, idx) in textme" :key="x?.post_id" @click="selecttext(idx)">
            <img :src="x?.body?.match(par)" alt="" class="mainimg">
            <div class="textlinewrap">
                <router-link to="">
                     <span class="author"> <img :src="`https://steemitimages.com/u/${x?.author}/avatar/small`" alt="" class="userlogo" > : {{ x?.author }}</span>
                    <h2><span>{{ x?.title }} </span> </h2>
                    <p>{{ x?.body?.match(hangul)[0] }}</p>
                </router-link >
                </div>
            </div>
    </div>
    </div>
  
</template>
<style scoped>
.babybox {
    width: 90vw;
    margin: 20px auto 0;
    box-sizing: border-box;
    overflow-x: hidden;
}
.userlogo{
    width: 30px;
    border-radius:50% ;
}
.mainimg{
    min-width: 120px;
    max-width: 120px;
    height: 100px;
    object-fit: cover;
}
.textbox {
    width: 95%;
display: flex;
border: 1px solid rgb(248, 152, 74);
    overflow: hidden;
    margin-bottom: 20px;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    box-sizing: border-box;
}
.textbox:hover{
    box-shadow: 1px 1px 5px red;
    box-sizing: border-box;
}
.textlinewrap {
    display: flex;
    flex-direction: column;
    gap : 10px;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
}
.textlinewrap h2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 5px;
}
.textlinewrap p {
    width: 62vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.author{
    font-size: 0.8em;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}
</style>