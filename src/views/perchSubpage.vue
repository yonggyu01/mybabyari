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
          <select size="1" id="quantitySelect" name="amount" v-model="useramout" value="1">
            <option value="1" selected>1</option>
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
const useramout = ref(1)
const getbaby = computed(()=>{
    return store.getters.getbabyproduct
})
const number = ref(route.params.item)
console.log(number.value)
console.log(getbaby.value, '베이비')
async function pushitem(){
const userdata = {
        price : getbaby.value[number.value].price,
        src:getbaby.value[number.value].src,
        Quantity :useramout.value,
        title : getbaby.value[number.value].title,
        mode : 'add',
        id : new Date() + Math.random().toFixed(2)*100
        }

const headers = new Headers()
headers.append('Content-Type','application/json')
const fetcha = await fetch('https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/cart',{
// const fetcha = await fetch('http://localhost:3000/cart',{
  method : 'POST',
  headers : headers,
  body : JSON.stringify(userdata)
})
const resultd = await fetcha.json()
console.log(resultd)
store.commit('setbaguni',resultd)
// console.log(store.getters.getcart)
router.go(-1)
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
    background-color: #e7af4779;

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