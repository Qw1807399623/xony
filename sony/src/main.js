import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import header from './components/header.vue'
import slideshow from './components/slideshow.vue'
import shop from './components/shop.vue'
import myfooter from './components/myfooter.vue'
import regslide from './components/reg_slide.vue'
import MintUi from "mint-ui"
import 'mint-ui/lib/style.css'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


Vue.use(MintUi)
Vue.component("my-header",header)
Vue.component("my-footer",myfooter)
Vue.component("my-slideshow",slideshow)
Vue.component("my-shop",shop)
Vue.component("reg-slide",regslide)
Vue.config.productionTip = false
Vue.prototype.axios=axios;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
