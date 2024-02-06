<template>
  <div class="location">
    <div class="twrap">
      <h1 v-html="nowweather.name" ></h1>
      <p v-html="nowweather.weather"></p>

      <img :src="imgs" alt="날씨사진">
    </div>
    <button @click="weather">가져오기</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const nowweather = ref('')

// const whereRu = ref('서울')
// const temp = ref('맑음')
const imgs = ref('')
// const city = 'Seoul'
// const lang = 'kr'
let nowlat = ref('')  
let nowlon = ref('')
// const initialLat = 36.5683
// const initialLon = 126.9778
// const API_key = 'b6936804ece7929668756f2462b592cc'
function onGeoOk(position) {
  const lat = position.coords.latitude;
  nowlat = lat.toFixed(4)
  const lon = position.coords.longitude;
  nowlon = lon.toFixed(4)
}
function errorGeo(){
  alert('GEO 사용 설정을 해야합니다.')
}
navigator.geolocation.getCurrentPosition(onGeoOk,errorGeo)

const weather = async () => {
  if(nowlat.length== 0){
    navigator.geolocation.getCurrentPosition(onGeoOk,errorGeo)
  }else{
    const API_key = 'b6936804ece7929668756f2462b592cc'
      //위치부터 찾아야함
    
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      // fetch("https://api.openweathermap.org/data/2.5/weather?lat=36.5683&lon=126.9778&lang=kr&appid=b6936804ece7929668756f2462b592cc", requestOptions)
      //   .then(response => response.text())
      //   .then(result => console.log(result))
      //   .catch(error => console.log('error', error));
     const mydata = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${nowlat}&lon=${nowlon}&lang=kr&appid=${API_key}`, requestOptions)
     const result = await mydata.text()
     const parsedata = JSON.parse(result)
     console.log(parsedata)

  }
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${initialLat}&lon=${initialLon}&appid=${API_key}&lang=kr`
//   const getdata = await fetch(url)
//   const result = await getdata
//   console.log(result)
}

// weather()

</script>

<style></style>