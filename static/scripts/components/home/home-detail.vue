<template>
    <div>
        <vHeader></vHeader>
        <div class="container">
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>

<script>
    import vHeader from '../header/header'; 

    export default {
        components: {
            vHeader
        },
        data() {
            return {
                nid: ''
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
                },
                error: res => {
                    this.$toast(res);
                }
            });
            this.$store.dispatch('changeHeader', {
                leftPart: `<span class="color-fff">返回</span>`,
                bgColor: '#53cac4',
                centerPart: `<p class="msg-header full-screen text-center">作品详情</p>`,
            })
        },
        mounted() {

        },


    }
</script>