<template>
    <div class="kakaotalk">
        <div class="kakaomain">
            <div class="kakaobg">
                <img src="../assets/img/kakaotalk1.png" alt="">
                <form action="" method="get" name="kakaologin" id="kakaologin">
                    <fieldset>
                        <legend class="xx">카카오로그인</legend>
                        <input type="text" placeholder="카카오계정 (이메일)" id="userId">
                        <input type="password" placeholder="비밀번호" id="userPass">
                        <button type="button" id="userloginbtn">로그인</button>
                        <div class="wrapbb"><input type="checkbox" id="checkb">
                            <p>잠금모드로 자동로그인</p>
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
                                <a href="#none" v-html="t"></a>
                            </li>
                        </ul>
                        <input type="text" v-model="mytext" @keydown="req">
                        <br>
                        <button @click="generateContent"> 문제 생성해보기 </button>
                        <p>{{ this.kortext }}</p>
                        <p>{{ this.engtext }}</p>
                    </div>
                    <div class="kakaofooter" v-html="inner">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mytext: '',
            newtext: [` 
                                <img src="./assets/img/Untitled-2.png" alt="">
                                <span>
                                <h3 style="display:inline; background:#f2f2f2; padding:5px 10px">안녕 나는 잼민이야</h3>
                                <!-- <p>재미니와 놀아보는 단어방</p> -->
                                </span>
                            
                        `,],
            chatmode: 0,
            compute: [`
                                <img src="./assets/img/Untitled-2.png" alt="">
                                <span>
                                <h3 style="display:inline; background:white; padding:5px 10px; box-shadow:0 1px 2px black"> 내가 내는 문제를 답해줘 </h3>
                                </span>
                           `,
                        
                        ],
            computenum: 0,
            inner:'',
            kortext : '',
            engtext:''


         

        }
    },
    methods: {
        req(value) {
            // console.log(this.$emit, value)
            this.chatmode++
            if (value.key == 'Enter' && this.chatmode % 3 == 1) {

                this.newtext.push(`
                                <img src="./assets/img/Untitled-2.png" alt="">
                                <span>
                                <h3 style="display:inline; background:yellow; padding:5px 10px">${this.mytext}</h3>
                                </span>
                             `)
                this.mytext = ''


            } else if (value.key == 'Enter' && this.chatmode % 3 == 0) {
                this.newtext.push(this.compute[0])
                this.computenum++
            } else if (value.key == 'Enter' && this.chatmode % 3 == 2) {
                setTimeout(function () {
                    this.newtext.push(this.computermsg)

                }, 500)

            }

        },
        async generateContent() {
            try {
                const response = await fetch('https://port-0-gemini-server-f9ohr2alrrcybbl.sel5.cloudtype.app/generate_easy', {
                    method: 'POST'
                    ,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({text: "input: {\"level\":2,\"type\":\"sentence\"}"}) ,
                });
                const result = await response.text();
                const newtext =  JSON.parse(result)
              

             this.kortext =   newtext.kor
             this.engtext = newtext.eng
             this.inner = `<p>${newtext.kor} /  ${newtext.eng}</p>  
         
             `;
             
            } catch (error) {
                console.error(error);
            }

        }


    },
    computed: {
        computermsg(){
           if(this.engtext.length > 0){
            console.log(computermsg)
           return  `<img src="./assets/img/Untitled-2.png" alt=""> <span>  <h3 style="display:inline; background:white; padding:5px 10px; box-shadow:0 1px 2px black">${ this.engtext} </h3>
                                   </span>`
           }
        }

        }

    }


</script>

<style scoped>
.kakaotalk {
    border-right: 1px solid black;
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-bottom: 1px solid black;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.411);

}

.kakaomain {
    background: #bbb8bb;
    padding: 5px;


}

.kakaobg {
    background: yellow;
    width: 350px;
    height: 600px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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
    background: white;
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

.blankm {
    margin-bottom: 50px;
    height: 1px;
}

.kakaomain2 {
    background: #f2f2f2;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    height: calc(80vh - 18px);
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
}</style>