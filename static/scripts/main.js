import Vue from 'vue'
import App from './app'
import Routers from './router/router'
import Store from './store/store';

//开启debug模式
Vue.config.debug = true;

//初始化全局数据
[
    window.log,
    window.__ISLOGIN__,
    window.__Url__
] = [
    console.log,
    false,
    `http://www.ih5.cn`
];

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    store: Store,
    router: Routers,
    render: h => h(App)
}).$mount('#app')
