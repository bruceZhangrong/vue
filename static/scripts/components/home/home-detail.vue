<template>
    <div>
        <vHeader></vHeader>
        <div class="container">
            <div class="first-title">{{homeDetails.title}}</div>
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
        }
        .second-title {
            color: #999;
            display: flex;
            .items {
                flex: 1;
                &.description {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                &.browser-times {
                    text-align: right;
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
    import vHeader from '../header/header'; 

    export default {
        components: {
            vHeader
        },
        data() {
            return {
                nid: '',
                homeDetails: {}
            }
        },
        created() {
            this.nid = this.$route.query.nid;
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
                this.$router.replace({path: '/home'});
            }
        }
    }
</script>