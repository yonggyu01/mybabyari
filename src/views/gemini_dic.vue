<template>
    <div class="kakaotalk">
        <div class="kakaomain">
            <div class="kakaobg">
                <img src="../assets/img/kakaotalk1.png" alt="">
                <form action="" method="get" name="kakaologin" id="kakaologin">
                    <fieldset>
                        <!-- <legend class="xx">카카오로그인</legend> -->
                        <input type="text" placeholder="카카오계정 (이메일)" id="userId">
                        <input type="password" placeholder="비밀번호" id="userPass">
                        <button type="button" id="userloginbtn">로그인</button>
                        <div class="wrapbb"><input type="checkbox" id="checkb">
                            <!-- <p>잠금모드로 자동로그인</p> -->
                        </div>
                    </fieldset>
                </form>
            </div>
            <!-- 로그인 성공시 kakaobg를 디스플레이 none으로 변경하고 이 화면을 표시 -->
            <div class="loginsuccess">
                <div class="wrapbb1">
                    <div class="kakaoheader">
                        <h2>재미니 단어퀴즈</h2><img src="../assets/img/setting.png" alt="">
                    </div>
                    <div class="blankm"></div>
                    <div class="kakaomain2">
                        <ul>
                            <li v-for="t in newtext" :key="t.id">
                                <h3 style="display:inline; color:white; padding:5px 10px">{{ t }}</h3>
                            </li>
                        </ul>
                        <br>
                        <!-- <button @click="generateContent"> 문제 생성해보기 </button> -->
                        <p>{{ kortext }}</p>
                        <p>{{ engtext }}</p>
                    </div>
                    <div class="kakaofooter">
                        <input type="text" v-model="mytext" @keydown="req" class="textinput">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const newtext = ref([`안녕 나는 잼민이야 Enter한번 쳐봐`,])
const mytext = ref('')
let chatmode = ref(0)
const compute = ['내가 내는 문제를 답해줘',
]
const computenum = ref(0)
const inner = ref('')
const kortext = ref('')
const engtext = ref('')
function req(value) {
    if (value.key == 'Enter' && chatmode.value == 1) {
        newtext.value.push(mytext.value)
        mytext.value = ''
        setTimeout(function () {
            chatmode.value = 2
        }, 1000)
    } else if (value.key == 'Enter' && chatmode.value == 0) {
        newtext.value.push(compute[0])
        generateContent().then(newtext.value.push(engtext)).catch(err=>{generateContent()})
        setTimeout(function () {
            chatmode.value = 1
        }, 1000)
    } else if (value.key == 'Enter' && chatmode.value == 2) {
        generateContent().then(newtext.value.push(engtext))
        setTimeout(function () {
            mytext.value = ''
            chatmode.value = 0
        }, 1000)
    }
}



async function generateContent() {
    try {
        const response = await fetch('https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/generate_easy', {
            method: 'POST'
            ,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: "input: {\"level\":2,\"type\":\"sentence\"}" }),
        });
        if(response.ok){
            const result = await response.text();
            const newtext = JSON.parse(result)
            kortext.value = newtext.kor
            engtext.value = newtext.eng
            inner.value = `<p>${newtext.kor} /  ${newtext.eng}</p>  
            `;
            
        }

    } catch (error) {
        console.error(error);
    }
}

const computermsg = computed(() => {
    return
})

</script>

<style scoped>
.kakaotalk {
    border-right: 1px solid black;
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-bottom: 1px solid black;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.411);

}

.kakaofooter {}

.kakaomain {
    background: #bbb8bb;
    padding: 5px;


}

.kakaobg {
    /* 카카오톡 로그인성공시 아래  */
    display: none;
}

.kakaobg img {
    width: 130px;
    overflow: hidden;
    height: 150px;
    object-fit: contain;
    margin-bottom: 30px;

}

#kakaologin fieldset input {
    font-size: 20px;
    padding: 0 10px;
    box-sizing: border-box;
}

#kakaologin fieldset input:focus {
    outline: none;
}

#kakaologin fieldset {
    border: 0 none;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.wrapbb {
    display: flex;
    gap: 5px;
}

.wrapbb1 {
    width: 100%;
    height: 100%;
}

/* 카카오톡 로그인 성공화면 */
.loginsuccess {
    /* display: none; */
    background: rgb(255, 255, 255);
    width: 100%;
    position: relative;
    height: 100%;
}

.kakaoheader img {
    width: 35px;
    object-fit: contain;
    vertical-align: middle;
}

.kakaoheader {
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    height: 50px;
    align-items: center;
    position: absolute;
    top: 5px;
    background: white;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 1px 1px #00000040;
}

.textinput {
    width: 100%;
    font-size: 20px;
}

.blankm {
    margin-bottom: 50px;
    height: 1px;
}

.kakaomain2 {
    background: #141414;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    height: calc(80vh - 50px);
}

.kakaomain2 img {
    width: 40px;
    object-fit: contain;
    margin-right: 5px;
}

.kakaomain2 a {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.kakaomain2 ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 10px;
    padding-top: 10px;
    box-sizing: border-box;
}

.kakaomain2 h3 {
    margin-left: 10px;
}
</style>