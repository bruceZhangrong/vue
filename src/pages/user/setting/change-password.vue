<template>
    <div class="change-psd">
        <vHeader></vHeader>
        <div class="contain flex-container">
            <div class="input-list-word">
                <InputList
                    :inputTitle="`原密码`"
                    :inputPlaceholder="`请输入原密码`"
                    :checkFeild="checkFeild"
                    ref="oldPsd"
                ></InputList>
                <InputList
                    :inputTitle="`新密码`"
                    :inputPlaceholder="`请输入新密码`"
                    :checkFeild="checkFeild"
                    ref="newPsd"
                ></InputList>
                <InputList
                    :inputTitle="`确认密码`"
                    :inputPlaceholder="`再次输入新密码`"
                    :checkFeild="checkFeild"
                    ref="confirmPsd"
                ></InputList>
            </div>  
        </div>
        <Btn
            :btnText="`确  认`"
            :btnFunc="confirmChange"
            :isDisable="isEmpty"
            :btnClass="`btn-self-wrapper`"
        ></Btn>
    </div>
</template>

<style scoped lang="scss">
    .change-psd {
        height: 100%;
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
                oldPsdVal: '',
                newPsdVal: '',
                confirmPsdVal: '',
                isEmpty: true
            }
        },
        created() {
            this.$store.dispatch('changeHeader', {
                leftPart: `<i class="fa fa-arrow-left color-fff"></i>`,
                leftFunc: this.goBack,
                centerPart: `<p class="msg-header full-screen text-center color-fff">修改密码</p>`,
                rightPart: `<div></div>`
            })
        },
        methods: {
            goBack() {
                this.$router.replace({path: '/my-account'});
            },
            checkFeild (event) {
                let curVal = event.target.value;
                this.oldPsdVal = this.$refs.oldPsd.value();
                this.newPsdVal = this.$refs.newPsd.value();
                this.confirmPsdVal = this.$refs.confirmPsd.value();
                if(curVal == '') {
                    this.isEmpty = true;
                } else if(this.oldPsdVal != '' && this.newPsdVal != '' && this.confirmPsdVal != '') {
                    this.isEmpty = false;
                }
            },
            confirmChange() {
                if(this.newPsdVal != this.confirmPsdVal) {
                    this.$toast('新密码两次输入不一致');
                    return;
                }
                this.API({
                    select_type: '',
                    url: this.URL.CHANGE_PASSWORD,
                    datas: {
                        old_password: this.oldPsdVal,
                        new_password: this.newPsdVal
                    },
                    success: res => {
                        if(res.status_code == 200) {
                            this.$router.push({
                                path: '/success',
                                query: {
                                    title: `修改密码成功`,
                                    text: `恭喜您修改密码成功,请记住您的新密码：${this.newPsdVal}`,
                                    passFunc: this.goTo
                                }
                            });
                        } else {
                            this.$toast(res.message);
                        }
                        
                    },
                    error: res => {
                        this.$toast(res);
                    }
                })
            },
            goTo() {
                this.$router.replace({path: '/login'});
            }
        }
    }
</script>