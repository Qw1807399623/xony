<template>
    <div style="height:622px;">
        <div class="title">
            <div>
                    购物车
            </div>
        </div>
        <div v-if="uid==null">
            <img src="../../public/img/cart/login.png" class="none_img">
            <div class="login" @click="login">
                请先登录
            </div>
        </div>
        <div v-else-if="cart==''">
            <img src="../../public/img/cart/cart.png" alt="" class="none_img">
            <div class="login" @click="shopping">
                先去逛逛
            </div>
        </div>
        <div v-else class="overflow">
            <div class="left">
                <div class="cart" v-for="(p,i) of cart" :key='i'>
                    <div>
                        <input type="checkbox"  :checked="p.cb" @click="pitch" class="cart_input">
                    </div>
                    <div>
                        <img :src="'http://127.0.0.1:3000/pro/'+p.pimg" class="cart_img">
                    </div>
                    <div class="box"> 
                        <div >{{p.pname}}</div>
                        <div >尊享价:{{p.price}}</div>
                        <el-input-number v-model=p.count @change="handleChange" :min="1" size="mini"></el-input-number>
                    </div>
                    <div class="total" @click="totals">
                        小计:￥{{p.price*p.count}}
                    </div>
                </div>
            </div>
        </div>
        <div class="buy">
            <input type="checkbox" >
            <div>总金额:￥{{total}}</div>
            <div class="settle_accounts">去结算</div>
        </div>
    </div>    
</template>
<script>
  export default {
      data () {
          return {
              pitch_on:[],
              uid:'',
              num:1,
              cart:[],
              total:0,
          }
      },
      methods:{
          pitch(){
                for (let i = 0; i < this.cart.length; i++) {
                    this.cart[i].cb=true
                    console.log(this.cart[i].cb)
                } 
                // console.log(this.cart)
          },
          totals(){
            this.total=0;
            for(var i=0;i<this.cart.length;i++){
                this.total+=this.cart[i].count*this.cart[i].price;
                console.log(this.total)
            }
          },
          shopping(){
              sessionStorage.setItem('tab','tab2'),
              this.$router.go('')
          },
          login(){
              sessionStorage.setItem('tab','tab4'),
              sessionStorage.setItem('user_login','login'),
              this.$router.go('')
          },
          getCart(){
              var uid=sessionStorage.getItem('user_id')
            //   console.log(uid)
              this.axios.get('http://127.0.0.1:3000/cart',{params:{uid}})
              .then(result=>{
                  this.cart=result.data
                //   console.log(this.cart)
              })
              .catch(err=>{
                  console.log(err)
              })
          },
          getUid(){
              this.uid=sessionStorage.getItem('user_id')
            //   console.log(this.uid)
          },
          handleChange(value){
              this.totals()
          },
      },
    created () {
        this.getUid(),
        this.getCart(),
        this.totals(),
        setTimeout(() => {
            this.pitch();
        }, 1500);
    },
  };
</script>
<style scoped>
    .total{
        color: #0a83d7;
        margin:5px 0 0 10px;
    }
    .login{
        position: fixed;
        top:40%;
        left:25%;
        width:50%;
        background:#1e95f1;
        padding:10px 0;
        color:#ffffff;
    }
    .settle_accounts{
        width: 120px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        background-color: #0a83d7;
        font-size: 13px;
        color: #fff;
    }
    .buy>div{
        width:40%;
    }
    .buy{
        display:flex;
        width:100%;
        position: fixed;
        justify-content:space-between;
        bottom:52px;
        padding:15px 0px;
        font-size: 20px;
        color: #0a83d7;
    }
    .overflow{
        overflow: scroll;
        margin-bottom:100px;
    }
    .overflow::-webkit-scrollbar {display:none}
    .inline{
        display: inline-block
    }
    .title{
        display: flex;
        border-bottom:solid 1px #eeeeee;
    }
    .title>img{
        display: inline-block;
        margin:10px 0 0 10px;
        height:20px;
    }
    .title>div{
        display: inline;
        margin:7px auto;
        font-size:20px;
    }
    .left{
        text-align:left;
    }
    .none_img{
        position: fixed;
        text-align: left;
        width:100px;
        top:20%;left:35%;
    }
    .cart{
        height:100px;
        display: flex;
        border-bottom:solid 1px #eeeeee;
    }
    .cart_img{
        height:100px;
    }
    .cart_input{
        height:100px;
    }
    .box>div{
        font-size: 13px;
        margin:8px 0;
    }
</style>
