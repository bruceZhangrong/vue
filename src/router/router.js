import Vue from 'vue'
import VueRouter from "vue-router";
import COM_FUNC from 'utils/commonfunc'

Vue.use(VueRouter);

const routers = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '',
            component:(resolve)=>{
                require(['pages/home/home'],resolve);
            }
        },
        {
            path: '/',
            component:(resolve)=>{
                require(['pages/home/home'],resolve);
            }
        },
        {
            path: '/home',
            component:(resolve)=>{
                require(['pages/home/home'],resolve);
            }
        },
        {
            path: '/home-detail',
            component:(resolve)=>{
                require(['pages/home/home-detail'],resolve);
            }
        },
        {
            path:'/login',
            component:(resolve)=>{
                require(['pages/login/login'],resolve);
            },

        },
        {
            path:'/forgot',
            component:(resolve)=>{
                require(['pages/login/forgot'],resolve);
            }
        },
        {
            path:'/check-email',
            component:(resolve) => {
                require(['pages/login/check-email'], resolve);
            }
        },
        {
            path:'/message',
            component:(resolve)=>{
                require(['pages/message/message'],resolve);
            }
        },
        {
            path:'/introduction',
            component:(resolve)=>{
                require(['pages/introduction/introduction'],resolve);
            }
        },
        {
            path:'/user',
            component:(resolve)=>{
                require(['pages/user/user'],resolve);
            }
        },
        {
            path:'/setting',
            component:(resolve)=>{
                require(['pages/user/setting'],resolve);
            }
        },
        {
            path:'/favorite',
            component:(resolve)=>{
                require(['pages/user/favorite'],resolve);
            }
        },
        {
            path:'/my-account',
            component:(resolve)=>{
                require(['pages/user/setting/my-account'],resolve);
            }
        },
        {
            path:'/change-password',
            component:(resolve)=>{
                require(['pages/user/setting/change-password'],resolve);
            }
        },
        {
            path:'/change-phone',
            component:(resolve)=>{
                require(['pages/user/setting/change-phone'],resolve);
            }
        },
        {
            path:'/success',
            component:(resolve)=>{
                require(['pages/ui/success'],resolve);
            }
        },

    ]
})

routers.beforeEach((to, from, next) => {
    let store = routers.app.$options.store;

    //footbar show or hide
    if( to.path == '/' || 
        to.path == '/introduction' || 
        to.path == '/home' ||
        to.path == '/message' ||
        to.path == '/user' ) {
        store.dispatch('footBar',{
            isNavigate: true
        })
    } else {
        store.dispatch('footBar',{
            isNavigate: false
        })
    }
    // jump to login 
    if(!COM_FUNC.LOGIN()) {
        if( to.path == '/' || 
            to.path == '/introduction' || 
            to.path == '/home' ||
            to.path == '/message' ||
            to.path == '/user' ||
            to.path == '/login' ||
            to.path == '/forgot' || 
            to.path == 'check-email') {
            next();
        } else {
            routers.go({
                name: 'login'
            });
        }
    }
    next(); //必须要加来进行resolve
})

export default routers;