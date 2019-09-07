<template>
    <div>
        <reg-slide></reg-slide>
        <div>
            <div class="title">
                <div class="title_left"></div>
                <span>
                    登录索尼会员
                </span>
                <div class="title_right"></div>
            </div>
        </div>
        <div class="login_list"  >
            <div @touchstart.stop="name = true,pwd = false">
                <img src="../../public/img/reg/icon7.png" alt="">
                <input type="text" placeholder="请填写用户名" v-model="uname">
            </div>
            <div  @touchstart.stop="pwd = true,name = false">
                <img src="../../public/img/reg/icon4.png" alt="">
                <input type="password" placeholder="请填写6-20位密码" v-model="upwd">
            </div>
        </div>
        <div class="login_button" @click="user_login">登录</div>
        <div class="reg" @click="reg">免费注册</div>
        <van-number-keyboard
        :show="name"
        extra-key="."
        close-button-text="完成"
        @blur="name = false"
        @input="userInput"
        @delete="userDelete"
        />
        <van-number-keyboard
        :show="pwd"
        extra-key="."
        close-button-text="完成"
        @blur="pwd = false"
        @input="pwdInput"
        @delete="pwdDelete"
        />
    </div>
</template>
<script>
import qs from 'qs'
import config from '../stores/idnex.js'
import Bus from '../assets/bus'
export default {
    data () {
        return {
            name: false,
            pwd: false,
            uname:'',
            upwd:'',
            uid:1,
            login_success:false,
        }
    },
    methods: {
        userInput(value) {
            this.uname=(this.uname+value).slice(0,16)
        },
        userDelete() {
            this.uname=this.uname.slice(0,-1)
        },
        pwdInput(value) {
            this.upwd=(this.upwd+value).slice(0,16)
        },
        pwdDelete() {
            this.upwd=this.upwd.slice(0,-1)
        },
        user_login(){
            if(this.uname==''){
                this.$toast({
                    message:'用户名不能为空',
                    position:"bottom"
                })
                return
            }else if(this.upwd==''){
                 this.$toast({
                    message:'密码不能为空',
                    position:"bottom"
                })
                return
            }else{
                var tmp=qs.stringify({
                    uname:this.uname,
                    upwd:this.upwd
                })
                this.axios.post('http://127.0.0.1:3000/login',tmp)
                .then(result=>{
                    if(result.data.code==-1){
                        this.$toast({
                        message:'用户名或密码错误',
                        position:"bottom"
                        })
                        return
                    }else{
                        this.$toast({
                        message:'登陆成功',
                        position:"bottom"
                        })
                        this.$store.dispatch('sclogin')
                        sessionStorage.setItem("user_login",this.$store.getters.isShow)
                        this.uid=result.data[0].id
                        sessionStorage.setItem("user_id",this.uid)
                        this.$router.go('/xony')
                        return
                    }
                })
            }
        },
        reg(){
            this.$store.dispatch('nologin')
            sessionStorage.setItem("user_login",this.$store.getters.isShow)
            this.$router.go('/xony')
        },
        back(){
            this.$router.push('/xony') 
        }
    }
}
</script>
<style scoped>
    .title{
        margin:10px 0 20px;
    }
    .title_left{
        display: inline;
        background: url('../../public/img/reg/border1.jpg') repeat-x center;
        padding-left:35px;
        margin-right:10px
    }
    .title_right{
        display: inline;
        background: url('../../public/img/reg/border1.jpg') repeat-x center;
        padding-right:35px;
        margin-left:10px
    }
    .title>span{
        margin-top:10px;
        font-size:17px;
    }
    .login_list{
        width:100%;
    }
    .login_list>div{
        width:80%;
        margin:auto;
        padding:10px;
        border-top: 1px solid #ededed;
        border-bottom: 1px solid #ededed;
        text-align: left;
    }
    .login_list>div>input{
        border:none;
        font-size:14px;
        height:30px;
        line-height:30px;
    }
    .login_list>div>img{
        margin:5px 10px 0 0;
        width:20px;
    }
    .login_button{
        width:90%;
        margin:10px auto;
        padding:5px 0px;
        border:solid 1px #008fff;
        border-radius:30px;
        color:#008fff;
        box-shadow: 0px 5px 6px #c6edff;
    }
    .reg{
        margin-top:20px;
        color:#008fff;
    }
</style>

