<template>
    <div>
        <div class="wrapbox">
            <h1>{{ mypost.title }}</h1>
            <div class="username">
                <img :src="`https://steemitimages.com/u/${mypost.author}/avatar/small`" alt="" class="userlogo">
                <h5>{{ mypost.author }}</h5>
            </div>
            <br>
            <span v-for=" (x, idx ) of mypost.body.match(hangul)" :key="'my' + idx">
                <p> {{ x }} </p>
            </span>
            <br>
            <div class="flexbox">

                <img :src="mypost.body.match(par)[0]" alt="" class="img1">
            </div>

        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
const route = useRoute()
const router = useRouter()
const store = useStore()
const pagenum = route.params.pagenum
console.log(route.params.pagenum)
const mypost = store.getters.getbabynote[pagenum]
const hangul = /[ㄱ-ㅣ가-힣].+/gm
const par = /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi
onBeforeMount(() => {
    if (!pagenum) {
        router.push('/baby')
    }
})
onUnmounted(() => {

})
</script>

<style>
.flexbox{
    display: flex;
    justify-content: center ;
}
.img1 {

    width: 70vw;
}
.username{
    display: flex;
    align-items: center;
    gap:5px;
}
.username img{
    width: 50px;
    border-radius: 50%;


}
.wrapbox{
    width: 80vw;
    height: 90vh;
    margin: 0 auto 0;
    border-left: 1px solid goldenrod;
    border-right: 1px solid goldenrod;
    padding-left: 5px;
    padding-top: 5px;
}
.wrapbox h1{
    margin: 10px 0 0 0;
}
</style>