<template>
    <div>
        <my-header></my-header>
        <div class="product-box">
            <div class="box-left">
                <ul>
                    <li class="active">电视机/音响</li>
                    <li class="">PlayStation®</li>
                    <li class="">微单™数码相机</li>
                    <li class="">镜头</li>
                    <li class="">数码相机</li>
                    <li class="">数码摄像机</li>
                    <li class="">手机</li>
                    <li class="">耳机</li>
                    <li class="">音乐播放器/录音棒</li>
                    <li class="">高解析度音频设备</li>
                    <li class="">数码配件</li>
                    <li class="">潮玩科技</li>
                </ul>
            </div>
            <div class="box-right">
                <div v-for="(p,i) of 8">
                    <img src="../../public/img/product/img_55a9g_b1.jpg" alt="" class="small_img">
                    <p>A9G系列</p>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style scoped>
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
        width:70%;
        height:575px;
    }
    .box-right>div{
        width:33%;
        height:115px;
        flex-grow: 0;
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

