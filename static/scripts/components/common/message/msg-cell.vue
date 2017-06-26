<template>
    <div class="msg-cell">
        <div class="msg-cell-left">
            <img :src="partLeft">
        </div>
        <div class="msg-cell-center">
            <div class="center-title">{{partCenter.title}}</div>
            <div class="center-description">{{partCenter.description}}</div>
        </div>
        <slot name="msgCellRight"></slot>
    </div>
</template>

 <style lang="scss" scoped>
     
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

            }
        }
    }
 </script>