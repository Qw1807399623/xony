<template>
    <div>
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="tab1">
                <in-dex></in-dex>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
                <my-product></my-product>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab3">
                <my-cart></my-cart>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab4">
                <my-user></my-user>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar class="my_footer" fixed v-model="active">
            <mt-tab-item id="tab1" class="footer2">
            </mt-tab-item>
            <mt-tab-item id="tab2" class="footer3">
            </mt-tab-item>
            <mt-tab-item id="tab3" class="footer1">
            </mt-tab-item>
            <mt-tab-item id="tab4" class="footer4">
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import Index from './index'
import cart from './cart'
import product from './product'
import user from './user'
export default {
    data () {
        return {
            active:"tab1"
        }
    },
    components:{
        "in-dex":Index,
        "my-cart":cart,
        "my-product":product,
        "my-user":user,
    }
}
</script>
<style scoped>
    .footer1{
        background:url('../../public/img/footer/cart_off.jpg')   no-repeat  ;    
        background-size: cover;
        height:40px;
        position: relative;
        z-index:-1;
    }
    .footer2{
        background:url('../../public/img/footer/Page_off.jpg') no-repeat;
        background-size: cover;
        height:40px;
        position: relative;
        z-index:-1;
    }
    .footer3{
        background:url('../../public/img/footer/product_off.jpg') no-repeat;
        background-size: cover;
        height:40px;
        position: relative;
        z-index:-1;
    }
    .footer4{
        background:url('../../public/img/footer/member.jpg') no-repeat;
        background-size: cover;
        height:40px;
        position: relative;
        z-index:-1;
    }
    .my_footer{
        display: flex;
        /* width:100%; */
    }
    .footer_box{
        width:25%;
        font-size:10px;
        margin:0 auot;
    }
    .footer_box>img{
        width:80%;
    }
</style>

