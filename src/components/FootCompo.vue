<template>
  <div class="FootCompo">
    <div class="footerwrap">
      <router-link to="/loginsuc">
        <span class="routee">
        <span class="material-symbols-outlined" style="font-size: x-large">home</span>
        <span v-if="ttfalse">메인화면</span><span v-else>Main</span>
        </span>
         </router-link> |
      <router-link to="/point">
        <span  class="routee">
          <span class="material-symbols-outlined" style="font-size: x-large">
account_circle</span>
<span v-if="ttfalse">포인트보기</span><span v-else>Point</span>
</span>
        </router-link> |
     <router-link to="/mainGame"><span  class="routee"><span class="material-symbols-outlined" style="font-size: x-large">
sports_esports
</span><span v-if="ttfalse">게임하기</span><span v-else>Game</span>

</span>
      </router-link> |
    <router-link to="/perchase"><span  class="routee"><span class="material-symbols-outlined" style="font-size: x-large">add_shopping_cart</span>
      <span v-if="ttfalse"> 충전하기</span> <span v-else>Purchase</span></span>
     </router-link>

    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup(){
    const store = useStore()
    const ttfalse = computed(()=>{
      return store.getters.getttfalse
    })

    return{
      ttfalse
    }
  }
}

</script>
<style scoped>
.FootCompo{
    width: 100vw;
    position: absolute;
    display: flex;
    justify-content: center;
    bottom:0;
  margin: 0 auto;
    transform: translateX();
    background-color: #e7af47;

}
.footerwrap{
  width: 60%;
  display: flex;
    justify-content: space-evenly;
    gap : 10px;
    align-items: center;
    height: 80px;
}
.footerwrap span,.footerwrap a{
  font-size:0.9em;
  width: 6em;
  min-width: 4.5em;
  text-align: center;
}
.routee{
  display: flex;flex-direction: column;justify-content: center;align-items: center;gap:5px
}
.material-symbols-outlined {

  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}


</style>