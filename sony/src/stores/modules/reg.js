
const state={   //要设置的全局访问的state对象
    userlogin:false
    //要设置的初始属性值
  };
const getters = {   //实时监听state值的变化(最新状态)
   isShow(state) {  //承载变化的showFooter的值
      return state.userlogin
   },
};
const mutations = {
   show(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
       state.userlogin = true;
   },
   hide(state) {  //同上
       state.userlogin = false;
   },
};
const actions = {
    islogin(context) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
        context.commit('show');
    },
    nologin(context) {  //同上注释
        context.commit('hide');
    },
};

export default {
    namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}
