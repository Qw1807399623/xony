<template>
    <div>
        <reg-slide></reg-slide>
        <div>
            <div class="title">
                免费注册，立即拥有索尼会员！
            </div>
            <div class="reg_list">
                <div  @touchstart.stop="show = true">
                    <img src="../../public/img/reg/icon7.png" alt="">
                    <input type="text" placeholder="请填写用户名" v-model="uname">
                </div>
                <div  @touchstart.stop="show = true">
                    <img src="../../public/img/reg/icon4.png" alt="">
                    <input type="password" placeholder="请填写6-20位密码" v-model="upwd">
                </div>
                <div  @touchstart.stop="show = true">
                    <img src="../../public/img/reg/icon1.png" alt="">
                    <input type="text" placeholder="请填写常用手机号码" v-model="phone">
                </div>
                <div  @touchstart.stop="show = true">
                    <img src="../../public/img/reg/icon3.png" alt="">
                    <input type="text" placeholder="请验证码" v-model="code">
                    <div @click=" refreshCode">
                        <s-identify :identifyCode="identifyCode" id="restVal"></s-identify>
                    </div>
                </div>
            </div>
            <div class="reg_button" @click="user_reg">免费注册</div>
            <div class="login" @click="login">已有账号,请登录>></div>
            <van-number-keyboard
            :show="show"
            extra-key="."
            close-button-text="完成"
            @blur="show = false"
            @input="onInput"
            @delete="onDelete"
            />
        </div>
    </div>    
</template>
<script>
import Identify from '../components/Identify'
import config from '../stores/idnex'
import qs from 'qs'
export default {
    data () {
        return {
            identifyCodes: "1234567890",
            identifyCode: "",
            show: false,
            uname:'',
            upwd:'',
            phone:'',
            code:'',
            arr:{},
            success_reg:false,
        }
    },
    components: {
        "s-identify":Identify
    },
    methods: {
        onInput(value) {
            Toast(value);
        },
        onDelete() {
            Toast('删除');
        },
        user_reg(){
            let uname_reg=/^\w{6,16}$/;
            let phone_reg=/^1[3-8]\d{9}$/;
            let upwd_reg=/^\w{6,16}$/
            // 用户名验证
            if(this.uname==''){
                this.$toast({
                    message:'请输入请输入用户名',
                    position:'bottom'
                })
                return
            }else if(uname_reg.test(this.uname)==false){
                    this.$toast({
                    message:'用户名格式错误',
                    position:'bottom'
                    })
                    return
            // 密码验证
            }else if(this.upwd==''){
                this.$toast({
                    message:'请输入请输入密码',
                    position:'bottom'
                })
                return
            }else if(upwd_reg.test(this.upwd)==false){
                this.$toast({
                    message:'密码格式错误',
                    position:'bottom'
                })
                return
            // 手机验证
            }else if(this.phone==''){
                this.$toast({
                    message:'请输入手机号',
                    position:'bottom'
                })
                return
            // 验证码验证
            }else if(phone_reg.test(this.phone)==false){
                this.$toast({
                    message:'手机格式错误',
                    position:'bottom'
                })
                return
            }else if(this.code==''){
                this.$toast({
                    message:'请输入验证码',
                    position:'bottom'
                })
                return
            }else if(this.code!=this.identifyCode){
                this.$toast({
                    message:'验证码错误',
                    position:'bottom'
                })
                return
            }{
             var tmp =qs.stringify({
                uname:this.uname,
                phone:this.phone,
                upwd:this.upwd
            })
            this.axios.post('http://127.0.0.1:3000/reg',tmp)
            .then(res=>{
                this.success_reg=true
                if(res.data.code==-1){
                    this.$toast({
                        message:res.data.msg,
                        position:"bottom",
                    })
                    return
                }else{
                    this.$toast({
                        message:res.data.msg,
                        position:"bottom"
                    })
                        this.$store.dispatch('islogin')
                        sessionStorage.setItem("user_login",this.$store.getters.isShow)
                        this.$router.go('/xony')
                        return
                    }
            })
            .catch(err=>{console.log(err)})
            }
        },
        login(){
            this.$store.dispatch('islogin')
            sessionStorage.setItem("user_login",this.$store.getters.isShow)
            this.$router.go('/xony')
        },
        ramdomNum(min,max){
            return Math.floor(Math.random()*(max-min)+min)
        },
        refreshCode(){
            this.identifyCode="";
            this.makeCode(this.identifyCodes,4)
            
        },
        makeCode(o,l){
            for(let i = 0;i<l;i++){
                this.identifyCode+=this.identifyCodes[this.ramdomNum(0,this.identifyCodes.length)]
            }
        },
    },
    mounted() {
        this.identifyCode="";
        this.makeCode(this.identifyCodes,4)
    },
}
</script>
<style scoped>
    .title{
        margin:10px;
        font-size:14px;
        color:#555555;
    }
    .reg_list{
        width:100%;
    }
    .reg_list>div{
        width:80%;
        margin:auto;
        padding:5px;
        border-top: 1px solid #ededed;
        border-bottom: 1px solid #ededed;
        text-align: left;
    }
    .reg_list>div>input{
        border:none;
        font-size:14px;
        height:30px;
        line-height:30px;
    }
    .reg_list>div>img{
        margin:5px 10px 0 0;
        width:20px;
    }
    .reg_button{
        width:90%;
        margin:10px auto;
        padding:5px 0px;
        border:solid 1px #008fff;
        border-radius:30px;
        color:#008fff;
        box-shadow: 0px 5px 6px #c6edff;
    }
    .login{
        margin-top:20px;
        color:#008fff;
    }
    #restVal{
    position: absolute;
    width: 136px;
    height: 42px;
    top:395px;
    right:8px;
    z-index: 5;
    }
</style>

