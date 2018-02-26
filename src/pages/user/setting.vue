<template>
    <div class="setting">
        <vHeader></vHeader>
        <div class="hr"></div>
        <Cell :cell-datas="accountMsg"></Cell>
        <div class="hr"></div>
        <Cell :cell-datas="pushMsg"></Cell>
        <div class="hr"></div>
        <Cell :cell-datas="aboutMsg"></Cell>
    </div>
</template>

<style lang="scss" scoped="">
    .setting {
        height: 100%;
        background: #ddd;
    }
</style>

<script>
    import vHeader from 'components/header/header';
    import Cell from 'components/common/user/cell';


    import 'assets/styles/home/home';
    import 'assets/styles/user/user';

    export default {
        components: {
            vHeader,
            Cell
        },
        data() {
            return {
                accountMsg: [
                    { 
                        title: '我的账号', 
                        noRightArrow: true, 
                        to: 'my-account' 
                    }
                ],
                pushMsg: [
                    { 
                        title: '消息推送设置', 
                        noRightArrow: true 
                    },
                    { title: '清除缓存', noRightArrow: true }
                ],
                aboutMsg: [
                    { title: '关于我们', noRightArrow: true },
                    { title: '用户协议', noRightArrow: true }
                ]
            }
        },
        created() {
            this.$store.dispatch('changeHeader', {
                leftPart: `<i class="fa fa-arrow-left color-fff"></i>`,
                leftFunc: this.goBack,
                centerPart: `<p class="msg-header full-screen text-center color-fff">设置</p>`,
                rightPart: `<div></div>`
            })
        },
        mounted() {

        },
        methods: {
            goBack() {
                this.$router.replace({path: '/user'});
            }
        }
    }
</script>