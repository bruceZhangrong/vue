import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routers = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component:(resolve)=>{
                require(['../components/home/home'],resolve);
            }
        },
        {
            path: '/home',
            component:(resolve)=>{
                require(['../components/home/home'],resolve);
            }
        },
        {
            path: '/home-detail',
            component:(resolve)=>{
                require(['../components/home/home-detail'],resolve);
            }
        },
        {
            path:'/login',
            component:(resolve)=>{
                require(['../components/login/login'],resolve);
            },

        },
        {
            path:'/forgot',
            component:(resolve)=>{
                require(['../components/login/forgot'],resolve);
            }
        },
        {
            path:'/check-email',
            component:(resolve) => {
                require(['../components/login/check-email'], resolve);
            }
        },
        {
            path:'/message',
            component:(resolve)=>{
                require(['../components/message/message'],resolve);
            }
        },
        {
            path:'/introduction',
            component:(resolve)=>{
                require(['../components/introduction/introduction'],resolve);
            }
        },
        {
            path:'/user',
            component:(resolve)=>{
                require(['../components/user/user'],resolve);
            }
        },
    ]
})

routers.beforeEach((to, from, next) => {
    let store = routers.app.$options.store;
    console.log(store)
    if( to.path == '/' || 
        to.path == '/introduction' || 
        to.path == '/home' ||
        to.path == '/message' ||
        to.path == '/user' ) {
        store.dispatch('footBar',{
            isNavigate: true
        })
        console.log('1+1')
    } else {
        store.dispatch('footBar',{
            isNavigate: false
        })
        console.log('0+0');

    }
    next(); //必须要加来进行resolve
})

export default routers;