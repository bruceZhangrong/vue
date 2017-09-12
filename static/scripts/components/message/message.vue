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

			<div class="msg-wrapper">
				<MsgCell
					:partLeft="lookedMeTitle"
					:partCenter="lookedMe"
					:alertmessage.sync="alertMessages"
				>
					<i slot="msgCellRightIcon" class="fa fa-angle-right fa-2x arrow-right"></i>
				</MsgCell>
				<template v-for="(v,k) in allDialog">
					<MsgCell
						:partLeft="v.img"
						:partCenter="v.content"
					>
						<i slot="msgCellRightIcon" class="dialog-time">{{v.time}}</i>
					</MsgCell>
				</template>
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
	.arrow-right {
		color: #ccc;
		position: absolute;
		top: 5px;
		right: 20px;
	}
	.dialog-time {
		font-style: normal;
		color: #ccc;
		font-size: 12px;
		position: absolute;
		top: 10px;
		right: 20px;
	}
</style>


<script>
	import vHeader from '../header/header';
	import MsgCell from '../common/message/msg-cell';

	import '../../../styles/home/home.scss';
	import '../../../styles/message/message.scss';
	export default {
		data() {
			return {
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
					description: '暂无消息'
				},
				lookedMeTitle: `./static/images/main-nav03.png`,
				allDialog: [
					{
						img: `./static/images/main-nav01.png`,
						content: {
							title: `one`,
							description: `12345678`,
						},
						time: `2017-05-09`
					},
					{
						img: `./static/images/main-nav02.png`,
						content: {
							title: `two`,
							description: `12345678`,
						},
						time: `2017-05-10`
					},
					{
						img: `./static/images/main-nav04.png`,
						content: {
							title: `three`,
							description: `12345678`,
						},
						time: `2017-05-14`
					},
					{
						img: `./static/images/main-nav02.png`,
						content: {
							title: `four`,
							description: `12345678`,
						},
						time: `2017-05-20`
					},
					{
						img: `./static/images/main-nav04.png`,
						content: {
							title: `five`,
							description: `12345678`,
						},
						time: `2017-06-20`
					},
					{
						img: `./static/images/main-nav01.png`,
						content: {
							title: `six`,
							description: `12345678`,
						},
						time: `2017-06-22`
					}
				]
			}
		},
		components: {
			vHeader,
			MsgCell,
		},
		created() {
			this.$store.dispatch('changeHeader', {
				bgColor: '#f8f8f8',
				centerPart: `<p class="msg-header full-screen text-center">消息列表</p>`
			})
		},
		mounted(){
        	this.init();
    	},
    	methods: {
    		init() {
    			this.$parent.navShow = true;
    		},
    		alertMessages() {
    			console.log('alert-message');
    			this.$toast('你点了我！')
    		}
     	}
	}
</script>