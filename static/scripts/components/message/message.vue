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

			<div class="message-content">
				<div class="msg-cont-cell cell-head">
					<div class="msg-cont-img">
						<img src="" alt="">
					</div>
					<div class="msg-cont-contain">
						<strong>1234</strong>
						<span>12345678987654</span>
					</div>
					<i class="msg-cont-time"></i>
				</div>
				<dvi 
					class="msg-cont-cell"
					v-for="(v, k) in companies"
				>
					<div class="msg-cont-img">
						<img src="" alt="">
					</div>
					<div class="msg-cont-contain">
						<strong>1234</strong>
						<span>12345678987654</span>
					</div>
					<i class="pos-a msg-cont-time"></i>
				</dvi>
			</div>
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
				]
			}
		},
		components: {
			vHeader
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