<template>
	<div class="my-function clearfix">
		<div class="func-item bg-fff" v-for="(v, k) in cellDatas" @click="goTo(v.to)">
			<div class="is-left">
				<i :class="`fa fa-${v.classIcon}`"></i>
				<span>{{v.title}}</span>
			</div>
			<div class="is-right">
				<span slot="v.rightTip">{{v.rightTip}}</span>
				<i v-if="!v.noRightArrow" class="fa fa-2x fa-angle-right"></i>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
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
		i {
			margin-right: 5px;
		}
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
		float: right;
		margin-top: 11px;
		margin-left: 10px;
	}
</style>

<script>
	export default {
		props: {
			cellDatas: {
				type: Array,
				default: []
			}
		},
		data() {
			return {

			}
		},
		methods: {
    		goTo(to) {
    			if(to == undefined) {
    				this.$toast('此功能暂未开发');
    				return;
    			} else {
    				this.$router.push({path: '/'+ to});
    			}
    			
    		}
		}

	}
</script>