<template>
    <div class="change-phone">
        <vHeader></vHeader>
        <div class="hr"></div>
        <div class="contain flex-container ">
            <div class="input-list-word">
                <InputList
                    :inputTitle="`原手机号码`"
                    :disable='true'
                    ref="oldPhone"
                    :inputValue="oldPhoneVal"
                ></InputList>
                <InputList
                    :inputTitle="`新手机号码`"
                    :inputType="`tel`"
                    :maxLength="11"
                    :checkFeild="checkFeild"
                    :inputPlaceholder="`请输入新手机号码`"
                    ref="newPhone"
                ></InputList>
                <InputList
                    :inputTitle="`验证码`"
                    :checkFeild="checkFeild"
                    :inputPlaceholder="`短信验证码`"
                    ref="SMS"
                >
                    <button 
                        slot="extra" 
                        class="sms-btn" 
                        ref="smsBtn"
                        @click="getSMS"
                        :disabled="phoneEmpty"
                    >{{smsText}}</button>
                </InputList>
            </div>
        </div>
        <Btn
            :btnText="`确  认`"
            :btnFunc="confirmChangePhone"
            :isDisable="allEmpty"
            :btnClass="`btn-self-wrapper`"
        ></Btn>
    </div>
</template>

<style lang="scss" scoped>
    .change-phone {
        height: 100%;
        .hr {
            background-color: #ddd;
        }
        .contain {
            padding: 20px 20px 0;
            flex: 1;
            input {
                border-bottom: 1px solid #ebebeb;
                height: 55px;
                line-height: 55px;
            }
        }
    }
</style>

<script>
    import vHeader from 'components/header/header';
    import InputList from 'components/common/ui/input'
    import Btn from 'components/common/ui/button'

    export default {
        components: {
            vHeader,
            InputList,
            Btn
        },
        data() {
            return {
                oldPhoneVal: window.localStorage.getItem('phone') || `您还为绑定手机号码`,
                phoneEmpty: true,
                allEmpty: true,
                newPhoneVal: '',
                smsVal: '',
                smsText: '获取验证码',
                isCountdown: false
            }
        },
        mounted() {
            this.$store.dispatch('changeHeader', {
                leftPart: `<i class="fa fa-arrow-left color-fff"></i>`,
                leftFunc: this.goBack,
                centerPart: `<p class="msg-header full-screen text-center color-fff">修改手机号码</p>`,
                rightPart: `<div></div>`
            })
        },
        methods: {
            getSMSAgain() {
                let timer = 60;
                let that = this;
                let fo = setInterval(function() {
                    timer --;
                    if(timer > 0) {
                        that.smsText = `重新获取(${timer})`;
                        that.phoneEmpty = true;
                        that.isCountdown = true;
                    } else {
                        that.smsText = `获取验证码`;
                        that.phoneEmpty = false;
                        that.isCountdown = false;
                        clearInterval(fo);
                    }
                },1000)
            },
            checkFeild(event) {
                let val = event.target.value;
                this.newPhoneVal = this.$refs.newPhone.value();
                this.smsVal = this.$refs.SMS.value();
                if(val != '') {
                    if(this.newPhoneVal != '' && this.smsVal != '') {
                        this.allEmpty = false;
                    } else {
                        this.allEmpty = true;
                    }
                } else {
                    this.allEmpty = true;
                }
                if(!this.isCountdown) {
                    if(this.newPhoneVal != '') {
                        this.phoneEmpty = false;
                    } else {
                        this.phoneEmpty = true;
                    }
                }
                
            },
            getSMS() {
                this.phoneEmpty = true;
                this.newPhoneVal = this.$refs.newPhone.value();
                 if(!this.COM_FUNC.checkPhone(this.newPhoneVal)) {
                    this.$toast('手机格式错误！');
                    return;
                }
                this.API({
                    select_type: '',
                    url: this.URL.SEND_SMS,
                    datas: {
                        phone: this.newPhoneVal,
                        type: 'modify'
                    },
                    success: res => {
                        if(res.status_code !== 200) {
                            this.$toast(res.message)
                        } else {
                            this.getSMSAgain();
                        }
                    },
                    error: res => {
                        this.$toast(res);
                    }
                })
            },
            confirmChangePhone() {
                this.newPhoneVal = this.$refs.newPhone.value();
                this.smsVal = this.$refs.SMS.value();
                if(!this.COM_FUNC.checkPhone(this.newPhoneVal)) {
                    this.$toast('手机格式错误！');
                    return;
                }
                if(this.smsVal.length != 6) {
                    this.$toast('验证码格式错误');
                    return;
                }
                this.API({
                    select_type: '',
                    url: this.URL.BIND_PHONE,
                    datas: {
                        phone: this.newPhoneVal,
                        code: this.smsVal
                    },
                    success: res => {
                        if(res.status_code == 200) {
                            this.$router.push({
                                path: '/success',
                                query: {
                                    title: `修改手机号码成功`,
                                    text: `恭喜您修改手机号码成功，请记住您绑定的手机号码：${this.newPhone.value()}`,
                                    passFunc: this.goTo
                                }
                            })
                        } else {
                            this.$toast(res.message);
                        }
                    },
                    error: res => {
                        this.$toast(res)
                    }
                })
            },
            goTo() {
                this.$router.replace({path: '/user'});
            },
            goBack() {
                this.$router.replace({path: '/my-account'});
            },
        }
    }
</script>