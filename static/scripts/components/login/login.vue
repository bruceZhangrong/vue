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
					<img src="./../../../images/LoginIcon.png" alt="flag">
					<div class="login-account">
						<label>
							<input 
								@keyup="checkFeild($event)" 
								ref="phone" 
								type="text" 
								value="" 
								placeholder="请输入已验证的手机号码或邮箱" 
								v-model="phone_val"
							>
						</label>
						<label>
							<input 
								type="text" 
								ref="password" 
								value="" 
								@keyup="checkFeild($event)" placeholder="请输入密码" 
								v-model="password_val"
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
						@click.active.prevent="userLogin" 
					>登录</button>
				</div>
				<div class="register-btn">
					<button type="button" >注册</button>
				</div>
			</div>
		</div>
	</transition>
</template>

<style type="text/css">
	
</style>


<script>
import { Toast } from "mint-ui";
import vTools from '../../utils/tools';
// import $_AXIOS from '../../api/get-api'

import "../../../styles/login/login";

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
		window.localStorage.removeItem('token');
	},
	methods: {
		close() {
			this.isShow = false;
			this.$parent.navShow = true;
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
						this.$router.push({path:'/home'});
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
		checkFeild(event) {
			let val = event.target.value;
			if(val == '' ) {
				this.noEmpty = false;
				event.target.parentNode.className = '';
			} else {
				if(this.phone_val != '' && this.password_val != '') {
					this.noEmpty = true;
				}
				event.target.parentNode.className = 'active';
			}
		}
	}
}

</script>