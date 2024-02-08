<template>
    <div>
        <div id="wrapa">
        <div class="userpic" v-for="(x,idx) in cartdata" :key="'baby'+idx">
      <router-link to="">
      <img :src="x.src" alt="기저귀">
      <span>{{x.title}}  </span>
      <p>{{x.price}}</p>
    </router-link>
    </div>
  </div>

    </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore()
store.getters.getbabyproduct
const cartdata =store.getters.getcart
store.commit('getcart',)

</script>

<style>

</style>