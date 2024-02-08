<template>
     <section class="Product">
      <a href="#none" class="Visual ">
          <img :src="getbaby[number].src" :alt="getbaby[number].title">
      </a>
      <form action="" class="Form">
        <h3>제품명 : {{getbaby[number].title}}</h3>

        <span class="Price"> 가격 {{getbaby[number].price}}</span>
        <fieldset id="quantity-list" class="QtField">
          <label for="quantitySelect">Quantity:</label>
          <select size="1" id="quantitySelect" name="amount" v-model="useramout">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </fieldset>

        <div >
          <button class="Button" @click.prevent="pushitem" >장바구니</button>
        </div>
      </form>
    </section>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import {computed, ref} from 'vue'
const store = useStore()
const router = useRouter()
const route = useRoute()
const useramout = ref('')
const getbaby = computed(()=>{
    return store.getters.getbabyproduct
})
const number = ref(route.params.item)
console.log(number.value)
function pushitem(){
const userdata = {
        price : getbaby[number].price,
        src:getbaby[number].src,
        Quantity :useramout.value,
        title : getbaby[number].title
        }

store.commit('setcart',userdata)
console.log(store.getters.getcart)
}

</script>

<style scoped>
.Product{
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    
}
.Form{
    padding: 20px;

}
  .Visual {
    width: 100%;
    }
      .Visual img{
        width: 100%;
        object-fit: fill;
      }

    fieldset {
      padding: 0;
      border: none;
    }

     input {
        appearance: none;
        background: none;
        border: none;
        inline-size: 100%;
        block-size: 100%;
      }
  .Visual {
    margin: 0;
    padding: 0;
  }
  .Form{
    width: 100%;
  }
  
</style>