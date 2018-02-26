<template>
	<transition ref="forgotInfo" :name='transitionName'>
		<section class="forgot-wrap full-screen">
			<div class="go-back pos-r" @click="goBack">返回</div>
			<p class="title text-center">验证邮箱</p>
			<p class="tips text-center">请填写注册邮箱，收取密码重置邮件</p>
			<div class="check-info">
				<input type="email" name="" placeholder="请输入邮箱" class="check-email">
			</div>
			<button type="button" class="default-btn">验证邮箱</button>
			<a href="mailto:969597302@qq.com?subject=test&body=use mailto sample">send mail</a>
		</section>
	</transition>
</template>


<style>
	.tips {
		color: #ccc;
		padding-bottom: 20px;
	}
	.check-email {
		border-bottom: 1px solid #ccc;
	}
</style>


<script>
	

	import "assets/styles/login/forgot";

	export default {
		data() {
			return {
				transitionName: 'bounce'
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			}
		}
	}


</script>