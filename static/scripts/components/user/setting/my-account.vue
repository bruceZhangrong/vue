<template>
    <div class="my-account">
        <vHeader></vHeader>
        <div class="hr"></div>
        <Cell :cell-datas="userInfo"></Cell>
        <div class="hr"></div>
        <Cell :cell-datas="changePsd"></Cell>
    </div>
</template>

<style scoped>
    .my-account {
        height: 100%;
        background: #ddd;
    }
</style>

<script>
    import vHeader from '../../header/header';
    import Cell from '../../common/user/cell';


    import '../../../../styles/home/home';
    import '../../../../styles/user/user';

    export default {
        components: {
            vHeader,
            Cell
        },
        data() {
            return {
                userInfo: [
                    { 
                        title: '手机号',
                        rightTip: this.COM_FUNC.replacePhone(window.localStorage.getItem('phone'), '****') || '未绑定'
                    },
                    { 
                        title: '邮箱', 
                        rightTip: this.COM_FUNC.replacePhone(window.localStorage.getItem('email'), '****') || '未绑定'
                    }
                ],
                changePsd: [
                    { 
                        title: '修改密码',
                        to: 'change-password'
                    }
                ]
            }
        },
        created() {
            this.$store.dispatch('changeHeader', {
                leftPart: `<i class="fa fa-arrow-left color-fff"></i>`,
                leftFunc: this.goBack,
                centerPart: `<p class="msg-header full-screen text-center color-fff">我的账户</p>`,
                rightPart: `<div></div>`
            })
        },
        methods: {
            goBack() {
                this.$router.replace({path: '/setting'});
            }
        }
    }
</script>