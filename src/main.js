import Vue from 'vue'
import App from './app'
import Routers from './router/router'
import Store from './store/store'
import http from './utils/api/http'
import urlName from './utils/api/api-name-const';
import COM_FUNC from './utils/commonfunc';
// import Awesome from 'FontAwesome-webpack'
import 'node_modules/font-awesome/css/font-awesome.min.css'


//开启debug模式
Vue.config.debug = true;

//导入服务接口
Vue.prototype.API = http;
Vue.prototype.URL = urlName;

//导入公共方法
Vue.prototype.COM_FUNC = COM_FUNC;


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
