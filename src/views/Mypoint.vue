
<script>
export default {
    props : {ttfalse : Boolean}
    ,    data(){
        return{
            mydate : new Date().getDate(),
            tt : this.$store.getters.userlogin
           
        }
    },

}
</script>
<template>
    <div class="my_point_wrap">
        <div class="my_point_header">
            <div class="my_point_logo">

            </div>
            <div class="text_wrap">
                <h2 v-if="ttfalse"> {{ tt }} 님은 {{ mydate }}일 접속하셨습니다.</h2>
                <h2 v-else> today :{{ mydate }} days</h2>
            </div>
        </div>
        <div class="my_point_slide">
                <ul>
                    <li> <a href="#none">1 </a> </li>
                    <li> <a href="#none">2 </a></li>
                    <li> <a href="#none">3 </a></li>
                    <li> <a href="#none">4 </a></li>
                </ul>
        </div>
        <div class="my_point_status">
            <ul>
                <li>
                    <p> 출석체크 미션  </p><input type="checkbox" name="datecheck" id="datecheck" checked>
                </li>
                <li>
                    <p> 잼민이 단어장 클리어하기 </p> <input type="checkbox" name="gemin" id="gemin" >
                </li>
                <li>
                    <p> 충전하기  </p><input type="checkbox" name="per" id="per" >
                </li>
            </ul>
        </div>
        <div class="my_point_result">
            <h2 v-if="ttfalse"> 나의 총합산 점수 : </h2> <h2 v-else> my total point : </h2>
        </div>
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
    height: 12vh;
    display: flex;
    justify-content: space-evenly;
    gap : 5vw
}
.my_point_slide li{
    width: 3em;height: 3em;
    background-color: #E7AE47;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-right-radius: 50%;
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
    height: 40vh;
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
    height: 40vh;
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
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 5vw;
    align-items: center;
}
.my_point_result{
    background-color: #47aae7;
    width: 80vw;
    height: 6vh;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    margin: 0 auto;
    color: white;
    display: flex;
    align-items: center;
    padding-left: 10px;
}

</style>