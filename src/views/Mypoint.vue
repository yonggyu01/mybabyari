
<script setup>
    import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import FirstViewpage from './FirstViewpage.vue';
    const mytext = ref('')
    let num = 2
    // 서버에 추가삭제시 post로 create = true면 추가 false면 삭제로 하자
    const fetchdata =ref( [
        {  
            id: 'randomnum0',
            text : '출석체크 하기',
            done : false,
    },{
        id: 'randomnum1',
            text : '홈페이지 만들기',
            done : false,
    }
])
    const store = useStore()
    const userlogininfo = computed(()=>{ return store.getters.userlogin.id || store.getters.userlogin})
    const mydate = new Date().getDate()
        console.log(userlogininfo.value)
    const tt = store.getters.userlogin
    const ttfalse = computed(()=>{return store.getters.getttfalse})
    async function add(action){
        num++
        if(fetchdata.value.length==7){
            return alert('최대갯수입니다')
        }
        const mydata = {
            userid : userlogininfo.value,
            id:'mydata'+num,
            text : mytext.value,
            done : false,
            mode : 'add'

        }
        // fetchdata.value.unshift(mydata)
const fetcha = await fetch('https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/todo',{
    // const fetcha = await fetch('http://localhost:3000/todo',{
        method : 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(mydata)
    })
    const result = await fetcha.json()
    fetchdata.value = result 

    mytext.value=''

    }
    //시작시 보여줄 화면
    async function firstpage(){
const fetcha = await fetch('https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/todo',{
        // const fetcha = await fetch('http://localhost:3000/todo',{
        method : 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:''
     })
     const result = await fetcha.json()
     fetchdata.value = result 
    }
    firstpage()



    async function deletec(id){
        
        // fetchdata.value= fetchdata.value.filter((item)=>{ return item.id+idx != value+idx })
const fetcha = await fetch('https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/todo',{
            // const fetcha = await fetch('http://localhost:3000/todo',{
        method : 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            id : id,
            mode : 'del'
        })
     })
     const result = await fetcha.json()
     fetchdata.value = result 
    }
    async function comlist(id){
const fetcha = await fetch('https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/todo',{
        // const fetcha = await fetch('http://localhost:3000/todo',{
        method : 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            id : id,
            mode : 'update',
        })
     })
     const result = await fetcha.json()
     fetchdata.value = result 
        
    }
</script>
<template>
    <div class="my_point_wrap">
        <div class="my_point_header">
            <div class="my_point_logo">

            </div>
            <div class="text_wrap">
                <h2 v-if="ttfalse"> {{ userlogininfo }} 님의 할일목록</h2>
                <h2 v-else> {{ userlogininfo }}  To-Do list</h2>
            </div>
        </div>
        <div class="my_point_slide">
                <ul>
                    <li> <input type="text" class="textinput" v-model="mytext"> <button  v-if="ttfalse" @click="add()">추가</button><button v-else  @click="add">add</button> </li>
                   
                </ul>
        </div>
        <div class="my_point_status">
            <ul>
                <li v-for="(x,idx) of fetchdata" :key="x.id +idx">
                    <p :class="{'eclipse' : true, 'donetext' : x.done}"> {{x.text}}  </p>
                     <span class="flex"><button v-if="ttfalse" class="comp" @click="comlist(x.id)">완료</button><button v-else class="comp" @click="comlist(x.id)">done</button> 
                        <button v-if="ttfalse" class="del" @click="deletec(x.id)">삭제</button><button v-else class="del" @click="deletec(x.id,idx)">del</button></span>
                </li>
               
            </ul>
        </div>
        <!-- <div class="my_point_result">
            <h2 v-if="ttfalse"> 나의 총합산 점수 : </h2> <h2 v-else> my total point : </h2>
        </div> -->
    </div>
</template>
<style scoped>
ul,li{
    list-style: none;
}
.my_point_header{
    margin: 5vh auto;
    width: 80vw;
    height: 6vh;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: #2c3e50; 
    color :  #E7AE47;
    border-top-left-radius: 25px;
    box-shadow: 0px 4px 12px #000000b5;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
}
.my_point_slide{
    width: 100vw;
    overflow: hidden;
}
.my_point_slide ul{
    /* height: 12vh; */
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 50px;
 
}
.my_point_slide li{
    
    height: 3em;
    background-color: #E7AE47;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    box-sizing: border-box;
}
.my_point_slide li a{
    background-color: white;
    border-radius: 50%;
    width: 2.5em;
    height:2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
}
.my_point_status{
    background-color: #E7AE47;
    width: 80vw;
    /* height: 40vh; */
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    margin: 0 auto 3vh;
}
.my_point_status ul{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 45vh;
    align-items: center;
}
.my_point_status li{
    background-color: white;
    box-shadow: 0 1px 4px black;
    width: 65vw;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    padding: 0 5vw;
    align-items: center;
}
.comp{
font-size: 1em;
width: 3em;
height: 2em;
background:rgb(45, 212, 53);
border: none;
}
.del{
    width: 3em;
    font-size: 1em;
    background: red;
    height: 2em;
    border: none;
    color:white
}
.eclipse{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.flex{
    display: flex;
    gap : 5px

}
.donetext{
    text-decoration: line-through;
    color : red;
}

</style>