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


import "../../../styles/login/login";

export default {
	data(){
		return {
			isShow: true,
			transitionName: 'fulldown',
			noEmpty: false,
			phone_val: '',
			password_val: '',
			tipOnce: false,
			user_info: {
				'13113618318': 'qq1234',
				'13828477648': 'lbb123',
				'18270715695': 'jjlg1234'
			}
		}
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
				for(let k in this.user_info) {

					if(this.phone_val == k) {
						if(this.password_val == this.user_info[k]) {
							this.isShow = false;
							this.$router.push({path: '/main'});
						} else {
							this.$toast('您的密码输入有误！');
							this.$refs.password.value = '';
							this.password_val = '';
							this.$refs.password.parentNode.className = 'error';
						}
						is_right = true;
					}
				}
				if(!is_right) {
					this.$toast('账号不存在');
					this.$refs.phone.parentNode.className = 'error';
				}
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