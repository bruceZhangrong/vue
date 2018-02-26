<template>
    <div>
        <vHeader></vHeader>
        <div class="container flex-container">
            <div class="first-title">
                <div class="title-left">{{homeDetails.title}}</div>
                <div class="attention-wrapper">
                    <div
                        v-if="!attentioned" 
                        class="attention"
                        @click="attentionIt"
                    ><i class="fa fa-plus"></i>关注</div>
                    <div v-else class="attention on">已关注</div>
                </div>
                <div class="like-wrapper">
                    <div class="like" @click="favoriteFn">
                        <i :class="`fa ${!!homeDetails.islikeed ? 'color-liked fa-heart' : 'fa-heart-o'}`"
                        ></i>
                    </div>
                </div>
            </div>
            <div class="second-title">
                <div class="items description">{{homeDetails.description}}</div>
                <div class="items browser-times">
                    <span class="browser-cell"><i class="fa fa-eye"></i>{{homeDetails.play_count}}</span>
                    <span class="browser-cell"><i class="fa fa-comment"></i>{{homeDetails.screen_num}}</span>
                    <span class="browser-cell"><i class="fa fa-heart"></i>{{homeDetails.like_count}}</span>
                </div>
            </div>
            <div class="img-show">
                <div class="iframe-wrapper">
                    <iframe ref="iframe" :src="`${homeDetails.play_url}?${Math.random()}`"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        padding: 0 20px;
        .first-title {
            padding: 10px 0;
            font-size: 18px;
            display: flex;
            .title-left {
                flex: 5;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .attention-wrapper {
                flex: 2;
                .attention {
                    width: 54px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    height: 24px;
                    line-height: 22px;
                    color: #666;
                    font-size: 12px;
                    text-align: center;
                    float: right;
                    i {
                        margin-right: 5px;
                    }
                    &.on {
                        color: #999;
                    }
                }
            }
            .like-wrapper {
                text-align: right;
                flex: 1;
            }
        }
        .second-title {
            color: #999;
            display: flex;
            .items {
                &.description {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    flex: 2;
                }
                &.browser-times {
                    text-align: right;
                    flex: 3;
                    i {
                        margin: 0 5px;
                    }
                }
            }

        }
        .img-show {
            margin-top: 20px;
            width: 100%;
            height: 500px;
            overflow: hidden;
            box-shadow: 0 0 10px #333;
            border-radius: 10px;
            .iframe-wrapper {
                width: 100%;
                height: 100%;
                overflow: scroll;
                iframe {
                    width: 640px;
                    height: 100%;
                    border: none;
                }
            }
            
        }
    }
</style>

<script>
    import vHeader from 'components/header/header'; 
    import { MessageBox } from 'mint-ui';

    export default {
        components: {
            vHeader,
            MessageBox
        },
        data() {
            return {
                nid: '',
                uid: '',
                homeDetails: {},
                attentioned: false
            }
        },
        created() {
            if(!!parseInt(this.$route.query.focus)) {
                this.attentioned = true;
            } else {
                this.attentioned = false;
            }
            this.nid = this.$route.query.nid;
            this.getCurrentDetail();
            this.$store.dispatch('changeHeader', {
                leftPart: `<i class="fa fa-arrow-left color-fff"></i>`,
                leftFunc: this.goBack,
                bgColor: '#53cac4',
                centerPart: `<p class="msg-header full-screen text-center">作品详情</p>`,
                rightPart: `<div></div>`
            })
        },
        mounted() {
            // let winWidth = window.screen.availWidth;
            // let moveDis = (640 - winWidth)/2 + 20 + 'px';
            // this.$refs.iframe.style.transform = `translate3d(-${moveDis},0,0)`;
        },
        methods: {
            goBack() {
                this.$router.back();
            },
            getCurrentDetail() {
                this.API({
                    select_type: '',
                    url: this.URL.HOME_DETAIL,
                    datas: {
                        nid: this.nid
                    },
                    success: res => {
                        console.log(res)
                        this.homeDetails = res.data;
                    },
                    error: res => {
                        this.$toast(res);
                    }
                });
            },
            attentionIt() {
                this.uid = this.$route.query.uid;
                this.API({
                    select_type: '',
                    url: this.URL.USER_FOCUS,
                    datas: {
                        uid: this.uid
                    },
                    success: res => {
                        if(res.status_code == 200) {
                            this.attentioned = true;
                        }
                    },
                    error: res => {
                        this.$toast(res)
                    }
                })
            },
            favoriteFn() {
                let that = this;
                let content = '你确定收藏此作品？';
                let cUrl = this.URL.MY_FAVORITE;
                if(this.homeDetails.islikeed) {
                    content = '你确定取消收藏此作品？';
                    cUrl = this.URL.CANCEL_FAVORITE
                }
                MessageBox.confirm(content).then( () => {
                    this.API({
                        select_type: '',
                        url: cUrl,
                        datas: {
                            nid: this.nid
                        },
                        success: res => {
                            if(!this.homeDetails.islikeed) {
                               that.$toast('收藏成功！'); 
                            } else {
                                that.$toast('取消收藏成功！'); 
                            }
                            this.getCurrentDetail();
                        },
                        error: res => {
                            this.$toast(res)
                        }
                    });
                })
            }
        }
    }
</script>