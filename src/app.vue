<template>
    <div ref="app" class="full-screen bg-fff" @click.prevent="">
        <router-view class="view flex-box" @click.prevent="" ></router-view>
        <section v-if="footBar.isNavigate">
            <ul id="nav" class="pos-f text-center">
                <li>
                    <router-link  class="active" :class="{'RouterActive': firstTimes}" active-class="RouterActive" to="/home">
                        <!-- <img :src="`./static/images/company${onIcon[0]}.png`" /> -->
                        <i class="fa fa-2x fa-home"></i>
                        <span>首页</span>
                    </router-link>
                </li>
                <li>
                    <router-link class="active" active-class="RouterActive" to="/message">
                        <!-- <img :src="`./static/images/information${onIcon[1]}.png`" /> -->
                        <i class="fa fa-2x fa-commenting-o"></i>

                        <span>消息</span>
                    </router-link>
                </li>
                <li>
                    <router-link class="active" active-class="RouterActive" to="/introduction">
                        <!-- <img :src="`./static/images/position${onIcon[2]}.png`" /> -->
                        <i class="fa fa-2x fa-medium"></i>

                        <span>言职</span>
                    </router-link>
                </li>
                <li>
                    <router-link class="active" active-class="RouterActive" to="/user">
                        <!-- <img :src="`./static/images/user${onIcon[3]}.png`" /> -->
                        <i class="fa fa-2x fa-user-circle"></i>

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
        box-shadow: 0 -1px 10px #fff;
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
    .view {
        width: 100%;
        height: 100%;
    }
    #nav i {
        display: block;
        margin-bottom: 5px; 
    }

</style>

<script>

import Loading from 'components/common/loading/loading';
import 'assets/styles/common/common';
import { mapState } from 'vuex';


export default {
    components:{
        Loading
    },
    data() {
        return {
            // onIcon: ['-on','','',''],
            // onStr: '-on'
            firstTimes: true
        }
    },
    created() {
        if(!this.COM_FUNC.LOGIN()) {
            this.$router.push({path:'/login', query: {toPage: this.$route.path}});
        }
        this.COM_FUNC.judgeBrowser();  //判断打开的是PC还是手机
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
    computed: mapState({
            footBar: state => state.common.footBar
    }),
    methods:{
        initialization(){
            this.$refs.app.style.height=window.screen.availHeight+'px';
            this.$refs.app.style.width=window.screen.availWidth+'px';
        },
        watchRouter() {
            if(this.$route.path == '/') {
                this.firstTimes = true;
            } else {
                this.firstTimes = false;
            }
        }
    },
    watch: {
        "$route": 'watchRouter'
    }
}
</script>
