<template>
    <div class="msg-cell">
        <div class="msg-cell-left">
            <img :src="partLeft" />
        </div>
        <div class="msg-cell-right">
            <div class="center-title">{{partCenter.title}}</div>
            <div class="center-description">{{partCenter.description}}</div>
            <slot name="msgCellRightIcon"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .msg-cell {
        width: 100%;
        padding-left: 10px;
        height: 60px;
        display: flex;
        background: #fff;
        &-left {
            width: 50px;
            padding-top: 10px;
            height: 60px;
            img {
                width:40px;
                height: 40px;
                border-radius: 50%;
                overflow: hidden;
            }
        }
        &-right {
            flex: 1;
            border-bottom: 1px solid #ebebeb;
            padding: 10px;
            padding-left: 0;
            position: relative;
            .center-description {
                color: #999;
                font-size: 12px;
                line-height: 24px;
            }
        }
    }
</style>

<script>
 export default {
    props: {
        partLeft: {
            type: String,
            default: ''
        },
        partCenter: {
            type: Object,
            default: {
                title: 'title',
                description: 'nothing'
            }
        }
    },
    data() {
        return {
            partLeft: ''
        }
    }
}
</script>