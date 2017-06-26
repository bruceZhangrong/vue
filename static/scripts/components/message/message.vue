<template>
	<div class="bg-f5 full-screen flex-box">
		<vHeader></vHeader>
		<div class="msg-wrapper flex-container">
			<div class="msg-head bg-fff">
				<div class="msg-head-cell" v-for="(v, k) in messageHeads">
					<div
						class="msg-head-img radius-round"
						:class="{
							'bg-red': k == 0,
							'bg-yellow': k == 1,
							'bg-green': k ==2
						}"
					>
						<i :class="`fa fa-2x fa-${v.classIcon}`"></i>
					</div>
					<span>{{v.content}}</span>
				</div>
			</div>
		</div>

		<div class="msg-wrapper">
			<!-- <msgCell
				:partLeft=""
				:partCenter="lookedMe"
			></msgCell> -->
		</div>
	</div>
</template>

<style scoped>
	.msg-header {
		font-size: 16px;
	}
	.fa {
		color: #fff;
		margin-top: 11px;
	}
</style>


<script>
	import vHeader from '../header/header';
	// import msgCell from '../common/message/msg-cell';

	import '../../../styles/home/home.scss';
	import '../../../styles/message/message.scss';
	export default {
		data() {
			return  {
				messageHeads: [
					{
						classIcon: `file-text-o`,
						content: `简历状态`
					},
					{
						classIcon: `server`,
						content: `职位动态`
					},
					{
						classIcon: `commenting-o`,
						content: `言职通知`
					}
				],
				lookedMe: {
					title: '看过我的',
					description: '暂无消息',
				}
			}
		},
		components: {
			vHeader,
			// msgCell
		},
		created() {
			this.$store.dispatch('changeHeader', {
				bgColor: '#f8f8f8',
				centerPart: `
					<p class="msg-header full-screen text-center">消息列表</p>
				`,

			})
		},
		mounted(){
        	this.init();
    	},
    	methods: {
    		init() {
    			this.$parent.navShow = true;
    		}
     	}
	}
</script>