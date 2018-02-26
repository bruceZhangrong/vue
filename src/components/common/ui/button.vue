<template>
    <div :class="`btn-wrapper ${btnClass}`">
        <button
            type="button"
            @click="btnFunc"
            :disabled="isDisable"
        >{{btnText}}</button>
    </div>
</template>

<style lang="scss" scoped> 
    .btn-wrapper {
        margin-bottom: 30px;
        button {
            width: 100%;
            height: 40px;
            background: #53cac4;
            color: #fff;
        }
    }
</style>

<script>
    
    export default {
        props: {
            btnText: {
                type: String,
                default: ''
            },
            btnFunc: {
                type: Function,
                default: () => {}
            },
            isDisable: {
                type: Boolean,
                default: true
            },
            btnClass: {
                type: Function,
                default: ''
            }
        },
        data() {
            return {

            }
        },
        watch: {
            isDisable: res => {
                console.log(res)
            }
        }
    }
</script>