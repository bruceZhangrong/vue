<template>
	<div 
		class="wrap"
		v-on:touchstart="touchStart($event)"
		v-on:touchmove.prevent="touchMove($event)"
		v-on:touchend="touchEnd($event)"
	>
		<ul ref="ulWrap" class="banner-wrap">
			<li v-for="(v, k) in imgs" ref="v_li" :data-id="'li'+k">
				<img :src="v" alt="banner">
			</li>
		</ul>
		<div class="v-point" v-if="pointShow">
			<span v-for="k in imgs" ref="point"></span>
		</div>
	</div>
</template>

<style>
	.wrap {
		position: relative;
		max-width: 100%;
		overflow: hidden;
		z-index: 997;
	}
	.banner-wrap {
		position: relative;
		-webkit-transition: all .5s ease-in-out;
		-moz-transition: all .5s ease-in-out;
		transition: all .5s ease-in-out; 
	}
	.banner-wrap, .banner-wrap li {
		height: 210px;
	}
	.banner-wrap li {
		float: left;
		position: relative;
		/*transition-duration: 300ms;*/
	}
	li img {
		max-width: 100%;
	}
	.v-point {
		position: absolute;
		bottom: 5px;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto; 
		text-align: center;
	}
	.v-point span {
		display: inline-block;
		margin-right: 5px;
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: #fff;
		border: 1px solid red;
	}
	.v-point span.active {
		background: #f90;
	}
</style>



<script>
	import vTools from '../../utils/tools';
	import $ from 'jquery';
	export default {
		data() {
			return {
				imgs: [
					'./static/images/banner01.jpg',
					'./static/images/banner02.jpg',
					'./static/images/banner03.jpg',
					'./static/images/banner04.jpg'
				],
				startX: 0,
				endX: 0,
				distanceX: 0,
				liLength: 0,
				translate_x: [],
				setTime: null,
				pointShow: true,
				winWidth: window.screen.availWidth
			}
		},
		mounted(){
        	this.init();
    	},
     	destroyed() {
     		clearInterval(this.setTime);
     	},
		methods: {
			init(){
				clearInterval(this.setTime);
				this.liLength = this.imgs.length;
				this.$refs.ulWrap.style.width = `${this.liLength * this.winWidth}px`;
				for( let v = 0; v < this.$refs.v_li.length; v++ ) {
					let cssObj = {
						'width' : `${this.winWidth}px`,
						'left' : `${-v * this.winWidth}px`,
						'webkitTransform' : `translateX(${v * this.winWidth}px)`
					};
					vTools.setDomStyle(this.$refs.v_li[v], cssObj);
					if(this.pointShow) {
						this.$refs.point[0].className = 'active';
					} 
					this.translate_x[v] = v * this.winWidth;
				}
				this.translate_x[this.liLength-1] = -this.winWidth;
				this.$refs.v_li[this.liLength-1].style.webkitTransform = `translateX(${this.translate_x[this.liLength-1]}px)`;
				this.setTimer();
			},
			touchStart(event) {
				clearTimeout(this.setTime);
				[this.startX] = [event.touches[0].pageX];
			},
			touchMove(event) {
				[this.endX] = [event.touches[0].pageX];
				[this.distanceX]= [this.endX - this.startX];
				for( let v in this.$refs.v_li ) {
					this.$refs.v_li[v].style.webkitTransform = `translateX(${this.translate_x[v] + this.distanceX}px)`;
					this.$refs.v_li[v].style.transitionDuration =  '0ms';
				}
			},
			touchEnd(event) {
				[this.endX] = [event.changedTouches[0].clientX];
				this.distanceX = this.endX - this.startX;
				if(Math.abs(this.distanceX) < 30) {
					return;
				}
				if(Math.abs(this.distanceX) > this.winWidth/2) {
					if(this.distanceX > 0) {
						this.slideLeftOrRight(1);
					} else {
						this.slideLeftOrRight(-1);
					}
				} else {
					for( let v in this.$refs.v_li ) {
						this.$refs.v_li[v].style.webkitTransform = `translateX(${this.translate_x[v]}px)`;
						this.$refs.v_li[v].style.transitionDuration =  '300ms';
					}
				}
				this.setTimer();
			},
			slideLeftOrRight(slideDirection) { //左滑动 -1; 右滑动 1;
				if(this.pointShow) {
					for(let i = 0; i < this.liLength; i++) {
						this.$refs.point[i].className = '';
					}
				}
				
				for( let v = 0; v < this.$refs.v_li.length; v++ ) {
					this.translate_x[v] = this.translate_x[v] + (slideDirection * this.winWidth);
					this.$refs.v_li[v].style.transitionDuration =  '300ms';
					if(this.translate_x[v] == slideDirection * ((this.liLength-1) * this.winWidth)) {
						this.translate_x[v] = -(slideDirection * this.winWidth);
						this.$refs.v_li[v].style.transitionDuration =  '0ms';
					}
					if(this.pointShow) {
						if(this.translate_x[v] == 0) {
							this.$refs.point[v].className = 'active';
						}
					}
					this.$refs.v_li[v].style.webkitTransform = `translateX(${this.translate_x[v]}px)`;
				}
			},
			setTimer() {
				var _this = this;
				this.setTime = setInterval(function(){
					_this.slideLeftOrRight(-1);
				}, 1500);
			}
		}
	}
</script>