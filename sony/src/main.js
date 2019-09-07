import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './stores/idnex'
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
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.use(Vant);
Vue.use(Vuex)

Vue.prototype.axios=axios;
Vue.use(MintUi)
Vue.component("my-header",header)
Vue.component("my-footer",myfooter)
Vue.component("my-slideshow",slideshow)
Vue.component("my-shop",shop)
Vue.component("reg-slide",regslide)
Vue.config.productionTip = false
axios.defaults.withCredentials=true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
