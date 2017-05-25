<template>
        <div class="input-list">
            <div class="list-title">{{inputTitle}}<span style="float: right;">：</span></div>
            <div 
                class="list-text"
                @click="selectFunc"
            >
                <input 
                    class="text-input"
                    :type="inputType"
                    :placeholder="inputPlaceholder"
                    @keyup="checkFeild($event)"
                    ref="input"
                    :disabled="disable"
                    :value="currentValue"
                    :maxlength="maxLength"
                    @input="handleInput"
                />
                <slot name="extra"></slot>
            </div>
        </div>
</template>

<style scoped>

</style>

<script>
    export default {
        props: {
            selectFunc: {
                type: Function,
                default: ()=>{}
            },
            inputValue: {
                type: String,
                default: null
            },
            inputTitle: {
                type: String,
                default: ''
            },
            inputType: {
                type: String,
                default: 'text'
            },
            inputPlaceholder: {
                type: String,
                default: ''
            },
            checkFeild: {
                type: Function,
                default: () => {}
            },
            getInputVal: {
                type: Function,
                default: () => {}
            },
            disable: {
                type: Boolean,
                default: false
            },
            maxLength: {
                type: Number,
                default: null
            }
        },
        data() {
            return {
                inputModel: '',
                currentValue: this.inputValue,
            }
        },
        watch: {
            inputValue(val) {
                this.currentValue = val;
            },
        },
        methods: {
            value() {
                return this.$refs.input.value
            },
            setValue(value){
                this.currentValue = value;
            },
            handleInput(evt) {
                this.currentValue = evt.target.value;
            },
        }
    }
</script>
