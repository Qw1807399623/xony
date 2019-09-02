<template>
    <div>
        <div>
            <div class="myheader">
                <div class="head">
                        <div class="edit_profile">
                            <img src="../../public/img/member/header.png" class="portrait">
                            <img src="../../public/img/member/header-right.png" class="medal">
                            <div>编辑资料</div>
                        </div>
                        <div class="user_name">
                            <div>JDD8DD2C</div>
                            <div>成长值:6</div>
                        </div>
                </div>
                <div class="sign_in">
                    <div>练习签到</div>
                    <div><span>0</span>天</div>
                    <div class="sign_button">立即签到</div>
                </div>
            </div>
            <div>
                <ul class="menus">
                    <li>
                        <img src="../../public/img/member/menus1.png" alt="">
                        <div>
                            我的订单
                        </div>
                    </li>
                    <li>
                        <img src="../../public/img/member/menus2.png" alt="">
                        <div>
                            我的评论
                        </div>
                    </li>
                    <li>
                        <img src="../../public/img/member/menus3.png" alt="">
                        <div>
                            我的优惠券
                        </div>
                    </li>
                    <li>
                        <img src="../../public/img/member/menus4.png" alt="">
                        <div>
                            心愿单
                        </div>
                    </li>
                    <li>
                        <img src="../../public/img/member/menus5.png" alt="">
                        <div>
                            订购指南
                        </div>
                    </li>
                    <li>
                        <img src="../../public/img/member/menus6.png" alt="">
                        <div>
                            我的成长值
                        </div>
                    </li>
                    <li>
                        <img src="../../public/img/member/menus7.png" alt="">
                        <div>
                            我的收货地
                        </div>
                    </li>
                    <li>
                        <img src="../../public/img/member/menus8.png" alt="">
                        <div>
                            产品注册
                        </div>
                    </li>
                    <li>
                        <img src="../../public/img/member/menus10.png" alt="">
                        <div>
                            帮助
                        </div>
                    </li>
                    <li>
                        <img src="../../public/img/member/menus9.png" alt="">
                        <div>
                            在线客服
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h2>我的·特权</h2>
                <div style="width:100%;height:375px;">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item>
                            <img src="../../public/img/member/tequan_chengzhangzhi.jpg" class="w-50">
                            <img src="../../public/img/member/tequan_shenghuo.jpg" class="w-50">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="../../public/img/member/tequan_huiyuanjia.jpg" class="w-50">
                            <img src="../../public/img/member/tequan_yanbao.jpg" class="w-50">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="../../public/img/member/tequan_shenghuo.jpg" class="w-50">
                            <img src="../../public/img/member/tequan_zhucefuli.jpg" class="w-50">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="../../public/img/member/tequan_yanbao.jpg" class="w-50">
                            <img src="../../public/img/member/tequan_chengzhangzhi.jpg" class="w-50">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="../../public/img/member/tequan_zhucefuli.jpg" class="w-50">
                            <img src="../../public/img/member/tequan_huiyuanjia.jpg" class="w-50">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
            </div>
            <div class="footer">
                <img src="../../public/img/member/title.png" class="title">
                <div>微摄会热门活动、热门课程</div>
                <img src="../../public/img/member/footer1.jpg" class="footer_img">
                <img src="../../public/img/member/footer2.jpg" class="footer_img">
                <img src="../../public/img/member/footer3.jpg" class="footer_img">
                <img src="../../public/img/member/footer4.jpg" class="footer_img">
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
    .footer_img{
        width:100%;
        margin-top:10px;
    }
    .title{
        margin-top:20px;
        height:30px;
    }
    .footer{
        background-image: url('../../public/img/member/acafe_bg.b2e7df2.jpg');
        height: 900px;
        background-size: cover;
        color:#ffffff;
        font-size:15px;
        margin-bottom:70px;
    }
    .w-50{
        width:50%;
    }
    h2{
        margin:0;
    }
    .myheader{
        display:flex;
        height:165px;
        background: url('../../public/img/member/logindbg1.499593d.png') no-repeat;
        background-size: contain
    }
    .head{
        display: flex;
        position: relative;
        top:35px;left:10px;
        height: 100px;
        width:70%;
        color:#ffffff;
        font-size: 15px;
    }
    .portrait{
        width:66px;
        position: relative;
        left:10px; 
    }
    .medal{
        position: relative;
        right:10px;
        bottom:45px;
        z-index: 1;
    }
    .user_name{
        margin:20px 0 0 5px;
        text-align:left;
    }
    .sign_in>div{
        margin-bottom:5px;
    }
    .sign_in>div>span{
        font-weight:bold;
        font-size: 30px;
    }
    .sign_in{
        width:20%;
        position: relative;
        color:#ffffff;
        padding-left:20px;
        top:30px;
        height:90px;
        border-left:solid 1px #ffffff; 
    }
    .sign_button{
        background-color: #fff;
        color:#1e95f1;
        border-radius:5px;
        font-size:10px;
        padding:5px;
    }
    .menus{
        display:flex;
        margin-top:30px;
        flex-wrap: wrap;
    }
    .menus>li{
        width:20%;
        font-size: 13px;
        color:#788088;
        margin-bottom:20px;
    }
    .menus>li>img{
        width:70%;
    }
</style>
