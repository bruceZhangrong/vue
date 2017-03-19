<template>
	<div class="index-wrap full-screen bg-f5" v-on:scroll="changeOpacity($event)">
		<vHeader></vHeader>
		<div class="home-contain-wrapper" ref="containWrapper">
			<Banner v-if="needBanner"></Banner>
			<section class="main-content">
				<ul class="main-nav bg-fff">
					<li v-for="k in this.mainNav">
						<img :src="k.imgs" alt="">
						<p>{{k.title}}</p>
					</li>
				</ul>
				<div class="live-part">
					<div class="live-item">
						<span>Live</span>
						<br />
						<span>互联网大咖实时分享</span>
					</div>
					<div class="live-item">
						<span>朋友圈人气职位</span>
						<span>六大职能Top30</span>
					</div>
					<div class="live-item">
						<div>首发职位</div>
						<div>城市专场</div>
					</div>
					<div class="live-item">
						<span>24小时急速入职</span>
						<br />
						<span>有投必应，急速入职</span>
					</div>
				</div>
			</section>
			<HomeList @add-offset="addOffset" :load-datas="loadDatas"></HomeList>
		</div>
		
	</div>
</template>

<style>
	
</style>


<script>
	import $ from 'jquery';
	import vHeader from '../header/header';
	import Banner from '../common/banner/banner'; 
	import HomeList from '../common/home/home-list'; 
	import { mapState } from 'vuex';	

	import '../../../styles/home/home';
	export default {
		components: {
			Banner,
			vHeader,
			HomeList
		},
		data() {
			return  {
				needBanner: true,
				scrollHeight: 210,
				offset: 10,
				num: 10,
				loadDatas: '',
				viewHeight: window.screen.availHeight,
				mainNav: [
					{imgs:'./static/images/main-nav01.png',title:'超级雇主'},
					{imgs:'./static/images/main-nav02.png',title:'豪门大赏'},
					{imgs:'./static/images/main-nav03.png',title:'高薪必投'},
					{imgs:'./static/images/main-nav04.png',title:'急速热招'},
					{imgs:'./static/images/main-nav04.png',title:'超级CXO'},
					{imgs:'./static/images/main-nav03.png',title:'成长独角兽'},
					{imgs:'./static/images/main-nav02.png',title:'好评精选'},
					{imgs:'./static/images/main-nav01.png',title:'新锐态度'}
				]
			}
		},
		created() {
			this.$store.dispatch('changeHeader', {
    			isBorder: false,
				centerPart: `
					<div class="top-search pos-f">
						<div v-if="header.centerClass" class="search-cont text-center">
							<img src="./static/images/Search.png" alt="" />
							搜索职位/公司/商区
						</div>
					</div>` ,
				rightPart: `
					<img class="scan pos-a" src="./static/images/scan-btn.png" alt="" />`
			});
		},
		mounted(){
        	this.init();
    	},
    	methods: {
    		init() {
    			this.$parent.navShow = true;
    		},
    		changeOpacity(event) {
    			let opacity = parseFloat(event.target.scrollTop/(this.scrollHeight-40));
    			this.$store.dispatch('changeHeader', {
    				isBorder: false,
					isBgColor: true,
					bgColor: `rgba(83, 202, 196, ${opacity}`,
					centerPart: `
						<div class="top-search pos-f">
							<div v-if="header.centerClass" class="search-cont text-center">
								<img src="./static/images/Search.png" alt="" />
								搜索职位/公司/商区
							</div>
						</div>` ,
					rightPart: `
						<img class="scan pos-a" src="./static/images/scan-btn.png" alt="" />`
				});
				let distance = this.$refs.containWrapper.offsetHeight - (this.viewHeight + event.target.scrollTop);
				if(distance == 0) {
					this.API({
						select_type: '',
						url: this.URL.HOME_LIST,
						datas: {
							offset: this.offset,
							num: this.num,
							uid: 0,
							type: `recommend`,
							published: 0
						},
						success: res => {
							this.loadDatas = res.data;
						}
					});
				}

				
    		},
    		addOffset() {
    			this.offset += this.num; 
    		}
     	}
	}
</script>