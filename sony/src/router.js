import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/index.vue'
import Xony from './views/xony.vue'
import cart from './views/cart.vue'
import product from './views/product.vue'
import member from './views/member.vue'
import reg from './views/reg.vue'
import login from './views/login.vue'
import user from './views/user.vue'
import details from './views/details.vue'
import beat1 from './views/beat1.vue'
import beat2 from './views/beat2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/sony',component: Index},
    {path: '/xony',component: Xony},
    {path: '/cart',component: cart},
    {path: '/product',component: product},
    {path: '/member',component: member},
    {path: '/reg',component: reg},
    {path: '/login',component: login},
    {path: '/user',component: user},
    {path: '/details',component: details},
    {path: '/beat1',component: beat1},
    {path: '/beat2',component: beat2},
  ]
})
