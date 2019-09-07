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
            <mt-tab-item id="tab1" 
            >
            <img :src="active=='tab1'?require('../../public/img/footer/Page_on.jpg'):require('../../public/img/footer/Page_off.jpg')" class="footer">
            </mt-tab-item>
            <mt-tab-item id="tab2" 
            >
            <img :src="active=='tab2'?require('../../public/img/footer/product_on.jpg'):require('../../public/img/footer/product_off.jpg')" class="footer">
            </mt-tab-item>
            <mt-tab-item id="tab3" 
            >
            <img :src="active=='tab3'?require('../../public/img/footer/cart_on.jpg'):require('../../public/img/footer/cart_off.jpg')" class="footer">
            </mt-tab-item>
            <mt-tab-item id="tab4" 
            >
            <img :src="active=='tab4'?require('../../public/img/footer/member.jpg'):require('../../public/img/footer/member.jpg')" class="footer">
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
            active:"",
            tab:''
        }
    },
    methods:{
        getTab(){
            this.active=sessionStorage.getItem('tab')
            if(this.active==null){
               return this.active="tab1"
            }
        }
    },
    components:{
        "in-dex":Index,
        "my-cart":cart,
        "my-product":product,
        "my-user":user,
    },
    created(){
        this.getTab()
    },
    watch: {
        active(){
            sessionStorage.setItem('tab',this.active)
        }
    }
}
</script>
<style scoped>
    a{
        padding:0px;
    }
    .footer{
        width:100%;
        background-size: cover;
        position: relative;
        z-index:1;
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

