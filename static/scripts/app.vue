<template>
    <div ref="app" class="full-screen bg-fff" @click.prevent="">
        <router-view class="view" @click.prevent="" ></router-view>
        <section v-if="navShow">
            <ul id="nav" class="pos-f text-center">
                <li>
                    <router-link  class="active" active-class="RouterActive" to="/home">
                        <img src="../images/company.png" />
                        <span>首页</span>
                    </router-link>
                </li>
                <li>
                    <router-link class="active" active-class="RouterActive" to="/message">
                        <img src="../images/information.png" />
                        <span>消息</span>
                    </router-link>
                </li>
                <li>
                    <router-link class="active" active-class="RouterActive" to="/introduction">
                        <img src="../images/position.png" />
                        <span>言职</span>
                    </router-link>
                </li>
                <li>
                    <router-link class="active" active-class="RouterActive" to="/user">
                        <img src="../images/user.png" />
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
        padding-top: 10px;
        padding-bottom: 5px;
        font-size: 12px;
        border-top: 1px solid #ccc;
    }
    #nav li {
        float: left;
    }
    #nav img {
        width: 25px;
        height: 25px;
        margin: 0 auto;
    }
    #nav a {
        color: #333;
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
            navShow: false
        }
    },
    created() {
        CommonFunc.judgeBrowser();  //判断打开的是PC还是手机
        CommonFunc.hadFetch();      //判断是否可以使用Fetch Api
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
        }
    }
}
</script>
