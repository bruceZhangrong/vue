<template>
	<transition ref="forgotInfo" :name='transitionName'>
		<section class="forgot-wrap full-screen">
			<div class="go-back pos-r" @click="goBack">返回</div>
			<p class="title text-center">验证手机</p>
			<div class="check-info">
				<input 
					type="tel" 
					maxlength="11" 
					placeholder="手机号（仅支持中国大陆号）" class="check-phone"
				>
				<div class="check-code">
					<input 
						type="tel" 
						maxlength="6" 
						minlength="6" 
						placeholder="验证码"
					>
					<p 
						class="code-btn float-r text-center" 
						@click="sendShortMsg">获取验证码
					</p>
				</div>
			</div>
			<button type="button" class="default-btn">下一步</button>
			<div class="find-back">邮箱用户找回密码，请<router-link class="to-email" to='/check-email'>点击这里</router-link></div>
		</section>
	</transition>
</template>

<script>
	import "assets/styles/login/forgot";

	export default {
		data() {
			return {
				transitionName: 'bounce'
			}
		},
		created() {
			console.log(this.$parent.navShow)
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			}
		}
	}


</script>