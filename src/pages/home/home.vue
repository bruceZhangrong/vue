<template>
	<div class="index-wrap full-screen bg-f5" v-on:scroll="changeOpacity($event)">
		<vHeader :otherClass="`pos-f`"></vHeader>
		<div class="home-contain-wrapper" ref="containWrapper">
			<Banner v-if="needBanner"></Banner>
			<section class="main-content">
				<ul class="main-nav bg-fff">
					<li v-for="(v, k) in mainNav">
						<i :class="`fa fa-2x fa-${v.clasIcon}`"></i>
						<p>{{v.title}}</p>
					</li>
				</ul>
			</section>
			<HomeList 
				@add-offset="addOffset"
				:loadDatas="loadDatas"
			></HomeList>
		</div>
		
	</div>
</template>

<style lang="scss" scoped>
	.fa {
		display: block;
	    margin: 10px 0;
	    color: purple;
	}
</style>


<script>
	import $ from 'jquery';
	import vHeader from 'components/header/header';
	import Banner from 'components/common/banner/banner'; 
	import HomeList from 'components/common/home/home-list'; 
	import { mapState } from 'vuex';

	import 'assets/styles/home/home';
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
				loadDatas: [], 
				viewHeight: window.screen.availHeight,
				mainNav: [
					{clasIcon: 'money',title:'超级雇主'},
					{clasIcon: 'diamond',title:'豪门大赏'},
					{clasIcon: 'gbp',title:'高薪必投'},
					{clasIcon: 'rocket',title:'急速热招'},
					{clasIcon: 'cc-visa',title:'超级CXO'},
					{clasIcon: 'level-up',title:'成长独角兽'},
					{clasIcon: 'thumbs-o-up',title:'好评精选'},
					{clasIcon: 'shield',title:'新锐态度'}
				]
			}
		},
		created() {
			this.$store.dispatch('changeHeader', {
    			isBorder: false,
    			bgColor: 'transparent',
				centerPart: `
					<div class="top-search pos-f">
						<div v-if="header.centerClass" class="search-cont text-center">
							<img src="./static/images/Search.png" alt="" />
							搜索职位/公司/商区
						</div>
					</div>` ,
				rightPart: `<i class="fa home-head-fa fa-2x fa-crosshairs"></i>`
			});
		},
		mounted(){
    	},
    	methods: {
    		changeOpacity(event) {
    			let opacity = parseFloat(event.target.scrollTop/(this.scrollHeight-40));
    			this.$store.dispatch('changeHeader', {
    				isBorder: false,
					isBgColor: true,
					opacity: opacity,
					centerPart: `
						<div class="top-search pos-f">
							<div v-if="header.centerClass" class="search-cont text-center">
								<img src="./static/images/Search.png" alt="" />
								搜索职位/公司/商区
							</div>
						</div>` ,
					rightPart: `<i class="fa home-head-fa fa-2x fa-crosshairs"></i>`
				});
				let distance = this.$refs.containWrapper.offsetHeight - (this.viewHeight + event.target.scrollTop);
				if(this.COM_FUNC.LOGIN()) {
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
				}
    		},
    		addOffset() {
    			this.offset += this.num; 
    		}
     	}
	}
</script>