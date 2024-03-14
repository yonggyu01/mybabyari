<template>
<div class="myfull"> 
  <div class="inputflexbox">
    <input type="text" v-model="selectlist"> 
    <input type="number" v-model="number">
    <button @click="getYoutubeDatas(selectlist,number)">변경</button>
  </div>
  <div >
	<div class="max-w-screen-xl p-5 mx-auto bg-gray-100 text-gray-800 pt-8">
		<div class="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
			<div v-for="(t,idx ) in playlist" :key="'video1'+idx" class="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500">
        <a href="#" className="block">
          <iframe  ref="videos" class="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500" :src="`https://www.youtube.com/embed/${t.id.videoId}?enablejsapi=1&autoplay=0&mute=1&controls=1&loop=1&playlist=${t.id.videoId}`" frameborder="0"></iframe>
           <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl truncate ">{{ t.snippet.title }}</h3>  
        </a>
			</div>
		</div>
	</div>
  
  </div>
</div>
</template>
<script setup>
import { onMounted,ref } from "vue"
const playlist = ref([])
const selectlist=ref('육아정보')
const number = ref(8)
const videos =ref([])

const key = 'AIzaSyBTie4zHatrhyduBs7NWN6MYOg1op_BRhs'
onMounted(()=>{
  getYoutubeDatas('육아정보','8')
})

async function getYoutubeDatas(value, num){
  let url = new URL('https://www.googleapis.com/youtube/v3/search');
  let params = {   key: key,
        q: value,
        part: "snippet",
        type: "video",
        maxResults: num,
        fields: "items(id, snippet(title))",
        videoEmbeddable: true};
  url.search = new URLSearchParams(params).toString();
  const headers = new Headers()
    headers.append("Content-type" , "application/json")
    const youtubedata = await fetch(url).catch(err=> console.log('데이터 회신불가'))
    const result = await youtubedata.json()
    const {items} = result
    playlist.value  = items
    console.log(playlist.value )
}
</script>
<style scoped>
details{
  margin: auto;
}
summary{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 400px;
}
.myfull{
  background-color: #e7af4779;
  /* height: calc(100vh - 160px); */
  padding-left: 10px;
  padding-right: 10px;
}
.slide_video{
  width: 400px;
  height: 315px;
  
}
.slidebox{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr) );
  gap: 20px;
}
.inputflexbox{
  display: flex;
  gap:10px;
  margin: 10px 0; 
  font-size: 15px;
  justify-content: center;
}
</style>