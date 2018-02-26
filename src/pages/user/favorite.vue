<template>
    <div class="love-wrapper">
        <vHeader></vHeader>
        <div class="flex-container">
            <HomeList
                :apiType="`like`"
            ></HomeList>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .flex-container {
        padding-top: 20px;
    }
</style>

<script>
    import vHeader from 'components/header/header';
    import HomeList from 'components/common/home/home-list'; 

    import 'assets/styles/home/home';

    export default {
        components: {
            vHeader,
            HomeList
        },
        data() {
            return {
                allUid: [],
                loadDatas: []
            }
        },
        created() {
            let that = this;
            this.$store.dispatch('changeHeader', {
                leftPart: `<i class="fa fa-arrow-left color-fff"></i>`,
                leftFunc: this.goBack,
                centerPart: `<p class="msg-header full-screen text-center color-fff">我的收藏</p>`,
                rightPart: `<div></div>`
            });
        },
        methods: {
            goBack() {
                this.$router.replace({path: '/user'});
            }
        }
    }
    
</script>