<template>
    <div class="header">
        <div class="clearflex">
            <p class="title">SONY</p>
            <div  class="myinput">
                <input type="text">
                <img src="../../public/img/header/放大镜 (2).png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    }
}
</script>
<style scoped>
    .header{
        background-color: #000000;
        border-bottom:solid 1px #787878;
    }
    .clearflex:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    }
    .clearflex{
        margin-bottom:10px;
    }
    .my_header{
        width:100%;
        display: flex;
    }
    .dowm{
        height:10px;
    }
    .my_header>li{
        width:25%;
        color:#ffffff;
        height:50px;
        line-height: 50px;
        font-family:"楷体"
    }
    .myinput>input{
        margin:4px;
        background:#000000;
        border:0px;
    }
    .myinput{
        margin:5px 5px 0 0;
        height:27px;
        display:flex;
        float:right;
        border:solid 2px #424242;
        background:#000000;
    }
    .title{
        margin:5px 0 0 5px;
        font-size:1.5rem;
        color:#ffffff;
        float: left;
    }
</style>

