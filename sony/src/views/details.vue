<template>
    <div class="realtive">
        <div class="de_title">
            <div class="sony" @click="back">XONY</div>
            <div>商品</div>
            <div>详情</div>
            <div>评论</div>
        </div>
        <div class="price_box">
            <div>
                <img :src="'http://127.0.0.1:3000/pro/'+arr.pimg" style="width:100%">
            </div>
            <div>
                <p  style="font-size:18px;color:#3a3a3a">
                    {{arr.pname}}{{arr.classify}}
                </p>
            </div>
            <div>
                <p  style="font-size:12px;color:#808080">
                    银幕声场旗舰版/图像处理芯片X1旗舰版/杜比视界及杜比全景声/ 智能电视，搭载安卓8.0系统/ AI智能语音功能
                </p>
            </div>
            <div style="margin:2%;">
                <span style="font-size:12px;color:#999999">价格</span>
                <span style="font-size:18px;color:#000000;">RMB {{arr.price}}.00</span>
            </div>
            <div class="selected"  @click="show">
                <div class="selected-l">
                    <p style="font-size:14px;color:#aa0000">已选</p>
                </div>
                <div class="selected-r">
                    <div>{{arr.pname}}</div>
                    <div>颜色:黑</div>
                    <div>数量1件</div>
                </div>
            </div>
        </div>
        <div class="details_footer">
            <div>
                <img src="../../public/img/details/wish.png" class="footer_img">
                <p>
                    心愿单
                </p>
            </div>
            <div @click="tocart">
                <img src="../../public/img/details/service.jpg" class="footer_img">
                <p>
                    购物车
                </p>
            </div>
            <div>
                <img src="../../public/img/details/cart.png" class="footer_img">
                <p>
                    在线客服
                </p>
            </div>
            <div class="cart" @click="gobuy">
                加入购物车
            </div>
        </div>
        <div class="right" :class="{'show':isshow}">
            <div class="right_header" @click="none">
                <img src="http://127.0.0.1:3000/pro/A9G系列.jpg" class="small_img">
                <div>
                    <div style="font-size:16px">
                        {{arr.pname}}
                    </div>
                    <div style="font-size:12px">
                        价格
                    </div>
                    <div style="font-size:15px;color:#2484ee">
                        RMB  {{arr.price}}.00
                    </div>
                </div>
            </div>
            <div class="right_center">
                <div>规格</div>
                <span class="active">{{arr.pname}}</span>
                <span class="">KD-65A9G</span>
                <span class="">KD-77A9G</span>
            </div>
            <div style="padding:20px 24px;border-bottom:2px dotted #e5e4e4">
                <div style="font-size:14px;color:#aa0000;margin:12px 0px">颜色</div>
                <span style="color: #2484ee;border: 1px solid #2484ee;padding:5px;font-size:16px;">黑</span>
            </div>
            <div style="padding:20px 24px">
                <div style="font-size:14px;color:#aa0000;margin:12px 0px;">数量</div>
                <el-input-number v-model="num" :min="1" size="mini"></el-input-number>
            </div>
            <div style="background:#2484ee;color:#ffffff;width:90%;margin:20px auto;text-align:center;padding:10px 0">
                确认
            </div>
        </div>
    </div>    
</template>
<script>
import Bus from '../assets/bus'
import qs from 'qs'
export default {
    data () {
        return {
            num:1,
            isshow:false,
            arr:[]
        }
    },
    methods: {
        tocart(){
            sessionStorage.setItem('tab','tab3')
            this.$router.push('/xony')
        }, 
        gobuy(){
            var carts={
                uid:sessionStorage.getItem('user_id'),
                pname:this.arr.pname,
                pimg:this.arr.pimg,
                price:this.arr.price,
            }
            console.log(carts)
            this.axios.get('http://127.0.0.1:3000/gobuy',{params:carts})
            .then(result=>{

            })
            .catch(err=>{

            })
        },
        none(){
            this.isshow=false
        },
        show(){
            this.isshow=true
            
        },
        back(){
            this.$router.push('/xony')
        },
        getCart(){
            var pid=sessionStorage.getItem('pid')
            this.axios.get('http://127.0.0.1:3000/buy',{params:{pid}})
            .then(result=>{
                this.arr=result.data[0]
            })
            .catch(err=>{
                console.log(err)
            })
        },
    },
    created () {
        this.getCart()
    }
}
</script>
<style scoped>
    .show{
        right:0 !important
    }
    .right_center{
        padding:5px 24px 20px;
        border-bottom:2px dotted #e5e4e4
    }
    .right_center>span.active{
        color: #2484ee;
        border: 1px solid #2484ee;
    }
    .right_center>span{
        border: 1px solid #9f9f9f;
        font-size:12px;
        color:#585858;
        padding:4px 6px;
        margin-right:10px;
    }
    .right_center>div{
        font-size: 14px;
        color:#aa0000;
        margin:12px 0px;
    }
    .right_header{
        display: flex;
        padding:60px 18px 20px;
        border-bottom:2px dotted #e5e4e4
    }
    .right_header>img{
        margin-right:20px;
    }
    .right_header>div{
        margin-top:25px;
    }
    .small_img{
        width:115px;
    }
    .right{
        background:#ffffff;
        text-align: start;
        position: fixed;
        top:0; 
        right:-90%;
        width:90%;
        height:666px;
        overflow: hidden;
        z-index:1;
        transition: all 0.5s linear;
    }
    p{
        margin:3%;
    }
    .footer_img{
        width:20px;
    }
    .cart{
        width:40% !important;
        line-height:50px;
        color:#ffffff !important;
        background-color:#dc2828
    }
    .details_footer>div{
        width:20%;
        justify-content:center;
        align-items: center;
        color:#5f5f5f;
        font-size: 12px;
    }
    .details_footer{
        display: flex;
        height:50px;
    }
    .selected{
        display: flex;
        padding:1% 0px;
    }
    .selected-r{
        width:70%;
        text-align:left;
        font-size:14px;
        color:#999999;
        background: url('../../public/img/details/right.png') no-repeat 100% 0
    }
    .selected-l{
        width:30%
    }
    .price_box{
        background-color:#f7f7f7
    }
    .de_title{
        display: flex;
        justify-content:center;
        align-items: center;
        border-bottom:solid 1px #eeeeee;
    }
    .de_title>div{
        width:25%;
        text-align: center;
        padding:11px 0;
        font-size:18px;
    }
    .sony{
        font-size:30px !important;
    }
</style>




