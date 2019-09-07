<template>
    <div>
        <my-header></my-header>
        <div class="product-box">
            <div class="box-left">
                <ul >
                    <li v-for="(p,i) of menu" :key='i' :class="{'leftshow':proshow==i}" @click="isshow($event,i)" :data-pro=p>{{p}}</li>
                </ul>
            </div>
            <div v-for="(p,i) of menu" :key='i' class="hidden" :class="{'rightshow':proshow==i}">
                <div class="box-right">
                    <div v-for="(p,i) of arr" :key='i' @click="details($event,i)">
                        <img :src="'http://127.0.0.1:3000/pro/'+p.pimg" alt="" class="small_img">
                        <p>{{p.pname}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import Bus from '../assets/bus'
export default {
    data () {
        return {
            arr:[],
            menu:['电视机/音响','PlayStaion@','微单数码相机','镜头','数码相机','数码摄像机','手机','耳机','音乐播放器','音频设备','数码配件','潮玩科技'],
            proshow:0,
            shop:'电视机/音响',
            pid:''
        }
    },
    methods: {
        details(e,i){
            this.pid=this.arr[i].pid
            sessionStorage.setItem('pid',this.pid)
            this.$router.push('/details')
        },
        isshow(e,i){
            this.proshow=i
            this.shop=e.target.dataset.pro
            console.log(this.shop);
            this.load()
        },
        load(){
            this.axios.get("http://127.0.0.1:3000/product",{params:{shop:this.shop}})
            .then(result=>{
                this.arr=result.data
            })
        }
    },
    created () {
        this.load()
    }
}
</script>
<style scoped>
    .leftshow{
        background-color:#ffffff
    }
    .rightshow.hidden{
       display: block;
    }
    .hidden{
        display:none ;
    }
    p{
        margin: 0;
    }
    .small_img{
        width:100%;
    }
    .product-box{
        width:100%;
        display: flex
    }
    .box-left{
        width:30%;
        background-color:#eee;
        height:575px;
        text-align: left;
    }
    .box-right{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-content:flex-start;
        flex-wrap: wrap;
        height:575px;
    }
    .box-right>div{
        width:28%;
        height:115px;
        overflow-wrap: break-word;
        flex-grow: 0;
        margin:5px;
        font-size:15px;
    }
    .box-left>ul>li.active{
        background: #ffffff;
        color:#2484ee
    }
    .box-left>ul>li{
        font-size:10px;
        height:45px;
        line-height: 45px;
        padding-left:10px;
        border-bottom:solid 1px #dddddd;
    }
</style>

