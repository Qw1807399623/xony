import Vue from 'vue';
import Vuex from 'vuex';
import reg from './modules/reg'
Vue.use(Vuex);

const state={   //要设置的全局访问的state对象
    userlogin:'reg',
    //要设置的初始属性值
  };
const getters = {   //实时监听state值的变化(最新状态)
   isShow(state) {  //承载变化的showFooter的值
      return state.userlogin
   },
};
const mutations = {
   user_login(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
      state.userlogin = 'login';
   },
   user_reg(state) {  //同上
      state.userlogin = 'reg';
   },
   user_member(state) {  //同上
      state.userlogin = 'user';
   },
};
const actions = {
    islogin(context) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
       context.commit('user_login');
    },
    nologin(context) {  //同上注释
       context.commit('user_reg');
    },
    sclogin(context) {  //同上注释
       context.commit('user_member');
    },
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
export default store;