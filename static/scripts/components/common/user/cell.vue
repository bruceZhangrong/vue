<template>
	<div class="my-function clearfix">
		<div class="func-item bg-fff" v-for="(v, k) in cellDatas">
			<div class="is-left">
				<img :src="v.icon" alt="">
				<span>{{v.title}}</span>
			</div>
			<div class="is-right">
				<span slot="v.rightTip">{{v.rightTip}}</span>
				<i></i>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.func-item {
		display: flex;
		padding-left: 10px;
		float: left;
		width: 100%;
		height: 48px;
		line-height: 48px;
	}
	.func-item:not(:last-child) .is-left,
	.func-item:not(:last-child) .is-right {
		border-bottom: 1px solid #ddd;
	}
	.is-left {
		flex: 1;
	}
	.is-left img {
		float: left;
		height: 24px;
		margin-top: 12px;
		margin-right: 10px;
	}
	.is-right {
		flex: 1;
		text-align: right;
		padding-right: 20px;
		font-size: 12px;
		color: #999;
	}
	.is-right i {
		display: block;
		width: 24px;
		height: 24px;
		background: url(../../../../images/arrow-right.png);
		float: right;
		margin-top: 12px;
		margin-left: 10px;
	}
</style>

<script>
	export default {
		props:['cellDatas'],
		data() {
			return {

			}
		}

	}
</script>