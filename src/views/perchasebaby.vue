<template>
<div class="titlep">
    <h1> 아기용품 구매페이지 입니다.</h1>
    <div class="maindiv">
  
      <div id="gallery">
        <div class="myfig" v-for="(x,idx) in babyp" :key="'baby'+idx">
      <router-link to="" @click.prevent="movepage(idx)">
      <img :src="x.src" alt="기저귀">
      <span>{{x.title}}  </span>
      <p>{{x.price}}</p>
    </router-link>
    </div>
  </div>
</div>
</div>

</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import {ref} from 'vue'
const store = useStore()
const router = useRouter()
function movepage(number){
  router.push({
    name:'perchSub',
    params:{
      item : number
    }
  })
}

const babyp = [
    {
        title : '기본기저귀',
        price : '50,000원',
        src : 'https://cdn.oasis.co.kr:48581/product/81083/thumb/00f5c952-4c2f-48bb-b7a3-a0becbd78106.jpg'
    },
    {
        title : '특대형 기저귀',
        price : '50,000원',
        src : 'https://digitalchosun.dizzo.com/site/data/img_dir/2020/06/26/2020062680175_0.jpg'
    },
    {
        title : '킨도 기저귀',
        price : '250,000원',
        src : 'https://kindoh.co.kr/web/product/big/202010/54666d1871db1ac61548fdf42bd120ae.jpg'
    },
    {
        title : '하기스 기저귀',
        price : '500,000원',
        src : 'https://i.namu.wiki/i/0YFc2p2YQTYw9s0a7vN7NaKEEOAKbgOm1eVSxexH4RsWKhcFg-OT7xCxo3Np6iMpIPApp35HbD15BtRyteokUw.webp'
    },
    {
        title : '액상분유',
        price : '3,050,000원',
        src : 'https://cdn.kmpnews.co.kr/news/photo/202007/39752_34857_1742.jpg'
    },
    {
        title : '앱솔루트',
        price : '13,050,000원',
        src : 'https://review1004.com/wp-content/uploads/2022/09/Monosnap-%E1%84%8F%E1%85%AE%E1%84%91%E1%85%A1%E1%86%BC-_-%E1%84%8B%E1%85%A2%E1%86%B8%E1%84%89%E1%85%A9%E1%86%AF%E1%84%85%E1%85%AE%E1%84%90%E1%85%B3-%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%A8-2FL-%E1%84%87%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%B2-2%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A8-2022-09-26-12-03-21.jpg'
    },
    {
        title : '쪽족이',
        price : '213,050,000원',
        src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4bt8Npf88dA5cssmXUXHcOiX0bVEf25eUfqt-TStnCx3c3kOhXoZwU8UcOPBDDxqYMU&usqp=CAU'
    },
    {
        title : '아기옷',
        price : '50,000원',
        src : 'https://m.ppoya.co.kr/web/product/big/202308/659cdc5ab4570dbde53da6e4cb84ea1c.jpg'
    },
    {
        title : '특대형 기저귀',
        price : '50,000원',
        src : 'https://digitalchosun.dizzo.com/site/data/img_dir/2020/06/26/2020062680175_0.jpg'
    },
    {
        title : '킨도 기저귀',
        price : '250,000원',
        src : 'https://kindoh.co.kr/web/product/big/202010/54666d1871db1ac61548fdf42bd120ae.jpg'
    },
    {
        title : '하기스 기저귀',
        price : '500,000원',
        src : 'https://i.namu.wiki/i/0YFc2p2YQTYw9s0a7vN7NaKEEOAKbgOm1eVSxexH4RsWKhcFg-OT7xCxo3Np6iMpIPApp35HbD15BtRyteokUw.webp'
    },
    {
        title : '액상분유',
        price : '3,050,000원',
        src : 'https://cdn.kmpnews.co.kr/news/photo/202007/39752_34857_1742.jpg'
    },
    {
        title : '앱솔루트',
        price : '13,050,000원',
        src : 'https://review1004.com/wp-content/uploads/2022/09/Monosnap-%E1%84%8F%E1%85%AE%E1%84%91%E1%85%A1%E1%86%BC-_-%E1%84%8B%E1%85%A2%E1%86%B8%E1%84%89%E1%85%A9%E1%86%AF%E1%84%85%E1%85%AE%E1%84%90%E1%85%B3-%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%A8-2FL-%E1%84%87%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%B2-2%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A8-2022-09-26-12-03-21.jpg'
    },
    {
        title : '쪽족이',
        price : '213,050,000원',
        src : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4bt8Npf88dA5cssmXUXHcOiX0bVEf25eUfqt-TStnCx3c3kOhXoZwU8UcOPBDDxqYMU&usqp=CAU'
    },
    {
        title : '아기옷',
        price : '50,000원',
        src : 'https://m.ppoya.co.kr/web/product/big/202308/659cdc5ab4570dbde53da6e4cb84ea1c.jpg'
    },
    
]


</script>

<style scoped>
.titlep{
    overflow-x: hidden;
}
.titlep h1{
    text-align: center;
    
}

.maindiv {
    --adjust-size: 0px; 
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;

}


#gallery {
  position: relative;
  left: calc(-1 * var(--adjust-size));
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  max-width: calc(100vw - 40px);
  padding: 20px;
  -webkit-perspective: 0;
  perspective: 0;
  box-sizing: border-box;
}

#gallery .myfig {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  margin: var(--adjust-size);
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 7px 8px rgba(0, 0, 0, 0.4);
  width: 100%;
  height: auto;
  text-align: center;
  background-color: ghostwhite;
  background-image: url("https://images.unsplash.com/photo-1629968417850-3505f5180761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTMzMjQ3ODJ8&ixlib=rb-4.0.3&q=80&w=500");
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;

  transform-origin: center 0.22rem;
  will-change: transform;
  break-inside: avoid;
  overflow: hidden;
  outline: 1px solid transparent;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.myfig img {
  aspect-ratio: 1 /1;
  width: 100%;
  object-fit: cover;
  display: block;
  border-radius: 5px;
  margin-bottom: 10px;
  z-index: 1;
}
.myfig span {
  font-size: 14px;
  font-weight: 400;
  z-index: 1;
}

.myfig p {
  font-size: 17px;
}

.myfig > div {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

#info {
  position: relative;
  text-align: center;
  z-index: 1;
}
#info a {
  font-size: 1.1rem;
}

@media (min-width: 340px) {
  #gallery {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}
</style>