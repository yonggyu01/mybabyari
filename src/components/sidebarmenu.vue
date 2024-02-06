<template>
  <div class="sidemenu">
      <div class="sidemenuheader">
        <h1>아이디 :{{ store1  }}</h1> <h2 @click="back" > <span class="material-symbols-outlined">
chevron_left
</span>
 </h2>
      </div>
      <hr>
      <div class="sidelist" @click="back">
        <h1>난이도 :
        {{getlevel}} </h1>
      </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const store1 = computed(()=>{  
   return store.getters.userlogin
  })
const getlevel=computed(()=>{
return store.getters.getlevels
  })
const back=()=>{
    store.commit('sidebtnput',true)
    store.commit('setdicemenu',true)
}


</script>

<style scoped>

.sidemenu{
    display: flex;
    flex-direction: column;
    left: -300px;
    max-width: 100%;
    overflow: hidden;
    pointer-events: auto;
    top: 0;
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    position: absolute;
    height: 100%;
   
    width: 256px;
    background-color: white;
    z-index:1;
    box-shadow: 0 0 1px 2px rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.14), 0 0 0 0 rgba(0,0,0,.12);
    transition: all 0.5s;
}
.sidemenuheader h2{font-size:1em;
  margin-left :10px
}
.sidemenuheader h1{
  font-size: 1em;
}
.sidemenuheader{
  display: flex;
  justify-content: space-between;
  padding: 20px 5px 0 0;
}
.sidelist h1{
  margin-top: 20px;
  font-size: 1.2em;
}
.sideon{
  transform: translateX(300px);
}

</style>