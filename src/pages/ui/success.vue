<template>
    <div class="pass-wrapper full-screen">
        <div class="pass-head">
            <i class="fa fa-smile-o color-fff"></i>
            <p>{{successTitle}}</p>
        </div>
        <div class="pass-content flex-container">
            <div>{{successText}}</div>
            
        </div>
        <div class="btn-wrapper">
            <button
                class="pass-btn"
                @click="confirmTo"
            >确  定</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .pass-head {
        height: 250px;
        background: #53cac4;
        padding-top: 40px;
        text-align: center;
        p {
            margin-top: 24px;
            font-size: 18px;
            color: #fff;
        }
    }
    .fa {
        font-size: 8em;
        padding-top: 20px;
    }
    .btn-wrapper {
        margin-bottom: 30px;
        padding: 0 20px;
    }
    .pass-btn {
        width: 100%;
        height: 40px;
        background: #53cac4;
        color: #fff;
    }
    .pass-content {
        padding: 20px;
        font-size: 16px;
        text-indent: 20px;
    }

</style>

<script>
    
    export default {
        data() {
            return {
                successTitle: '',
                successText: ''
            }
        },
        created() {
            this.successTitle = this.$route.query.title || `Oh, where is my head？`;
            this.successText = this.$route.query.text || `您没有处理事项`;
        },
        methods: {
            confirmTo() {
                if(this.$route.query.passFunc) {
                    this.$route.query.passFunc();
                } else {
                    this.$router.replace({path:'/home'})
                }
            }
        }
    }
</script>