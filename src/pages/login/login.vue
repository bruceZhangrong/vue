<template>
	<transition :name="transitionName">
		<div 
			ref="loginInfo"
			class="full-screen wrap" 
			v-if="isShow"
		>
			<div class="cover full-screen pos-a"></div>
			<div class="content pos-r">
				<span class="close" v-on:click="close()">×</span>
				<div class="login-main flex-box">
					<img src="src/assets/images/LoginIcon.png" alt="flag">
					<div class="login-account">
						<label>
							<input 
								@keyup="checkFeild($event)" 
								ref="phone" 
								type="text" 
								value="" 
								placeholder="请输入已验证的手机号码或邮箱" 
							>
						</label>
						<label>
							<input 
								type="password" 
								ref="password" 
								value="" 
								@keyup="checkFeild($event)" placeholder="请输入密码" 
							>
						</label>
					</div>
					<div class="forgot-routewrap">
						<router-link class="forgot-psd" to="/forgot">忘记密码</router-link>
					</div>
						
					<button 
						type="button" 
						class="login-btn" 
						:class="{active: noEmpty}" 
						@click.prevent="userLogin" 
					>登录</button>
				</div>
				<div class="register-btn">
					<button type="button" @click="registerFunc">注册</button>
				</div>
			</div>
		</div>
	</transition>
</template>

<style type="text/css">
	
</style>


<script>
import { Toast } from "mint-ui";
import vTools from 'utils/tools';
// import CommonFunc from '../../utils/commonfunc'
// import $_AXIOS from '../../api/get-api'

import "assets/styles/login/login";

export default {
	components: {
	},
	data(){
		return {
			isShow: true,
			transitionName: 'fulldown',
			noEmpty: false,
			phone_val: '',
			password_val: '',
			tipOnce: false
		}
	},
	created() {
		// window.localStorage.clear();

	},
	mounted() {
		this.$parent.navShow = false;
		let phoneVal = window.localStorage.getItem('name');
		if(phoneVal) {
			this.$refs.phone.value = phoneVal;
			this.$refs.phone.parentNode.className = 'active';
			// this.$refs.password.focus();
		}
		this.phone_val = this.$refs.phone.value;
		this.password_val = this.$refs.password.value;
		console.log(this.phone_val, this.password_val)
		if(this.phone_val != '' && this.password_val != '') {
			this.noEmpty = true;
		}

	},
	methods: {
		close() {
			this.isShow = false;
			this.$parent.navShow = true;
			this.$router.replace({path: this.$route.query.toPage})
		},
		userLogin() {
			let is_right = false;
			if(this.phone_val != '' && this.password_val != '') {
				if(!vTools.checkPhone(this.phone_val)) {
					this.$toast('号码格式错误!');
					return;
				}
				if(!vTools.checkPassword(this.password_val)) {
					this.$toast('请输入6位由数字、字符、字符组成的密码!');
					return;
				}
				
				this.API({
					select_type: '',
					url: this.URL.LOGIN,
					datas: {
						username: this.phone_val,
						password: this.password_val
					},
					success: res => {
						window.localStorage.setItem('token',res.token);
						this.getUserInfo();
						// this.$router.push({path:'/home'});
					},
					error: res => {
						this.$refs.phone.parentNode.className = 'error';
						this.$refs.password.parentNode.className = 'error';
					}
				})
			} else {
				if(!this.tipOnce) {
					this.$toast({
						message: '输入不能为空',
						position: 'middle'
					})
					this.tipOnce = true;
				}
			}
		},
		getUserInfo() {
			this.API({
				select_type: '',
				url: this.URL.USER_INFO,
				datas: {},
				success: res => {
					console.log(res.data);

					this.COM_FUNC.setLocalStorage(['nick_name','phone','email','name'], res.data);
					this.$router.push({path:'/home'});
				},
				error: res => {}
			})
		},
		checkFeild(event) {
			let val = event.target.value;
			this.phone_val = this.$refs.phone.value;
			this.password_val = this.$refs.password.value;
			if(val == '' ) {
				this.noEmpty = false;
				event.target.parentNode.className = '';
			} else {
				if(this.phone_val != '' && this.password_val != '') {
					this.noEmpty = true;
				}
				event.target.parentNode.className = 'active';
			}
		},
		registerFunc() {
			this.$toast(`此功能暂未开放，敬请原谅`);
		}
	}
}

</script>