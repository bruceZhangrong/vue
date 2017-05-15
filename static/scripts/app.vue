<template>
    <div ref="app" class="full-screen bg-fff" @click.prevent="">
        <router-view class="view flex-box" @click.prevent="" ></router-view>
        <section v-if="navShow">
            <ul id="nav" class="pos-f text-center">
                <li>
                    <router-link  class="active" active-class="RouterActive" to="/home">
                        <img :src="`./static/images/company${onIcon[0]}.png`" />
                        <span>首页</span>
                    </router-link>
                </li>
                <li>
                    <router-link class="active" active-class="RouterActive" to="/message">
                        <img :src="`./static/images/information${onIcon[1]}.png`" />
                        <span>消息</span>
                    </router-link>
                </li>
                <li>
                    <router-link class="active" active-class="RouterActive" to="/introduction">
                        <img :src="`./static/images/position${onIcon[2]}.png`" />
                        <span>言职</span>
                    </router-link>
                </li>
                <li>
                    <router-link class="active" active-class="RouterActive" to="/user">
                        <img :src="`./static/images/user${onIcon[3]}.png`" />
                        <span>我</span>
                    </router-link>
                </li>
            </ul>
        </section>
        <Loading></Loading>
    </div>
</template>

<style>
    #nav {
        bottom: 0;
        background: rgb(83, 202, 196);
        width: 100%;
        display: flex;
        justify-content: space-around;
        font-size: 12px;
        border-top: 1px solid #ccc;
    }
    #nav li {
        float: left;
        flex: 1;
    }
    #nav img {
        width: 38px;
        height: 38px;
        margin: 0 auto;
    }
    #nav a {
        display: block;
        color: #fff;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    #nav a.RouterActive {
        background: #fff;
        color: rgb(83, 202, 196);
    }
    #bruce {
        overflow-y: auto; 
    }

</style>

<script>
import CommonFunc from './utils/commonfunc'

import Loading from './components/common/loading/loading';
import './../styles/common/common';


export default {
    components:{
        Loading
    },
    data() {
        return {
            navShow: false,
            onIcon: ['-on','','',''],
            onStr: '-on'
        }
    },
    created() {
        CommonFunc.judgeBrowser();  //判断打开的是PC还是手机
        //CommonFunc.hadFetch();      //判断是否可以使用Fetch Api
        
    },
    beforeMount() {

    },
    mounted(){
        this.$store.dispatch('showLoading', {
            isLoading: false
        });
        this.initialization();
    },
    methods:{
        initialization(){
            this.$refs.app.style.height=window.screen.availHeight+'px';
            this.$refs.app.style.width=window.screen.availWidth+'px';
        },
        watchRouter() {
            let cur_router = this.$route.path;
            if(cur_router == '/home') {
                this.updateCss(0);
            } else if(cur_router == '/message') {
                this.updateCss(1);
            } else if(cur_router == '/introduction') {
                this.updateCss(2);
            } else if(cur_router == '/user') {
               this.updateCss(3);
            }
        },
        updateCss(num) {
            for(let i = 0; i < 4; i ++) {
                if(i !== num) {
                    this.onIcon[i] = '';
                } else {
                     this.onIcon[i] = this.onStr;
                }
            }
        }
    },
    watch: {
        "$route": 'watchRouter'
    }
}
</script>
