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
                <input type="text" placeholder="请填写用户名" :value="uname">
            </div>
            <div  @touchstart.stop="pwd = true,name = false">
                <img src="../../public/img/reg/icon4.png" alt="">
                <input type="password" placeholder="请填写6-20位密码" :value="upwd">
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
export default {
    data () {
        return {
            name: false,
            pwd: false,
            uname:'',
            upwd:''
        }
    },
    methods: {
        userInput(value) {
            this.uname=(this.uname+value).slice(0,6)
        },
        userDelete() {
            this.uname=(this.uname+value).slice(0,-1)
        },
        pwdInput(value) {
            this.upwd=(this.upwd+value).slice(0,6)
        },
        pwdDelete() {
            this.upwd=(this.upwd+value).slice(0,-1)
        },
        user_login(){
            this.$router.push('/xony')
        },
        reg(){
            this.$router.push('/reg') 
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

