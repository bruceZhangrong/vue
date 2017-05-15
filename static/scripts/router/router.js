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
                require(['../components/login/login'],resolve);
            }
        },
        {
            path: '/home',
            component:(resolve)=>{
                require(['../components/home/home'],resolve);
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
    next(); //必须要加来进行resolve
})

export default routers;