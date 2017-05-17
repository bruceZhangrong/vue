<template>
	<div class="bg-fff full-screen">
		<vHeader></vHeader>
		<div class="user-wrapper">
			<div class="my-info banner-height text-center">
				<div class="my-avatar">
					<img :src="myAvatar" alt="">
				</div>
				<strong>{{myNickname}}</strong>
				<p>{{myDescription}}</p>
			</div>
			<Cell :cell-datas="firstDatas"></Cell>
			<div class="hr"></div>
			<Cell :cell-datas="secondDatas"></Cell>
			<div class="outlogin bg-fff text-center" @click="outLogin">{{outLoginVal}}</div>
		</div>
	</div>
</template>

<style lang='scss' scoped>
	.outlogin {
		margin-top: 20px;
		height: 48px;
		line-height: 48px;
		font-size: 16px;
	}
</style>
<script>
	import Cell from '../common/user/cell';
	import vHeader from '../header/header';
	import { mapState } from 'vuex';
	
	import '../../../styles/home/home';
	import '../../../styles/user/user';

	export default {
		components: {
			vHeader,
			Cell
		},
		data() {
			return  {
				myAvatar:'../static/images/banner03.jpg',
				myNickname: window.localStorage.getItem('nick_name'),
				myDescription: window.localStorage.getItem('phone'),
				firstDatas: [
					{
						icon: `./static/images/pages.png`,
						title:`简历`,
						rightTip:`完整度：0%`
					},
					{
						icon: `./static/images/chance.png`,
						title:`机会+`,
						rightTip:`去开启`
					}
				],
				secondDatas: [
					{
						icon: `./static/images/opinion.png`,
						title:`收藏`
					},
					{
						icon: `./static/images/yijian.png`,
						title:`意见反馈`
					},
					{
						icon: `./static/images/setting.png`,
						title:`设置`
					}
				],
				outLoginVal: '退出'
			}
		},
		created() {
			this.$store.dispatch('changeHeader', {
				isBgColor: true,
				isBorder: false,
				opacity: 1,
				rightPart: `
					<div class="edite pos-a">
						<img class="pos-a right" src="./static/images/editer.png" alt="" />
						<span>编辑</span>
					</div>`
			})
		},
		mounted(){
        	this.init();
        	this.outLoginVal = this.COM_FUNC.LOGIN() ?  '退出' : '登录';
    	},
    	methods: {
    		init() {
    			this.$parent.navShow = true;
    		},
    		outLogin() {

    			window.localStorage.clear();
    			this.$router.push({path: '/login', query: {toPage: this.$route.path}})
    		}
     	}
	}
</script>