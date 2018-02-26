<template>
	<div v-show="visible" class="temp-load">
		<div class="loading-wrapper">
			<div class="loading-ui-wrapper">
				<template>
					<div :class="`loading-ui-cell is-circle${n}`"></div>
				</template>
			</div>
		</div>
		<div class="cover" v-if="!showLoading"></div>
	</div>
</template>

<style lang="scss" scoped>
	.temp-load {
		display: inline-block;
	    vertical-align: middle;
	}
	.cover {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10000;
	}
	.loading-ui-wrapper {
		width: 20px;
		height: 20px;
	    display: inline-block;
	    margin-right: 5px;
	    vertical-align: middle;

	    .loading-ui-cell.is-circle1 {
	    	transform: rotate(30deg);
	    	&::before {
	    		animation-delay: -1.1s;
	    	}
	    }
	    .loading-ui-cell.is-circle2 {
	    	transform: rotate(2 * 30deg);
	    	&::before {
	    		animation-delay: -1s;
	    	}
	    }
	    .loading-ui-cell.is-circle3 {
	    	transform: rotate(3 * 30deg);
	    	&::before {
	    		animation-delay: -0.9s;
	    	}
	    }
	    .loading-ui-cell.is-circle4 {
	    	transform: rotate(4 * 30deg);
	    	&::before {
	    		animation-delay: -0.8s;
	    	}
	    }
	    .loading-ui-cell.is-circle5 {
	    	transform: rotate(5 * 30deg);
	    	&::before {
	    		animation-delay: -0.7s;
	    	}
	    }
	    .loading-ui-cell.is-circle6 {
	    	transform: rotate(6 * 30deg);
	    	&::before {
	    		animation-delay: -0.6s;
	    	}
	    }
	    .loading-ui-cell.is-circle7 {
	    	transform: rotate(7 * 30deg);
	    	&::before {
	    		animation-delay: -0.5s;
	    	}
	    }
	    .loading-ui-cell.is-circle8 {
	    	transform: rotate(8 * 30deg);
	    	&::before {
	    		animation-delay: -0.4s;
	    	}
	    }
	    .loading-ui-cell.is-circle9 {
	    	transform: rotate(9 * 30deg);
	    	&::before {
	    		animation-delay: -0.3s;
	    	}
	    }
	    .loading-ui-cell.is-circle10 {
	    	transform: rotate(10 * 30deg);
	    	&::before {
	    		animation-delay: -0.2s;
	    	}
	    }
	    .loading-ui-cell.is-circle11 {
	    	transform: rotate(11 * 30deg);
	    	&::before {
	    		animation-delay: -0.1s;
	    	}
	    }
	    .loading-ui-cell.is-circle12 {
	    	transform: rotate(12 * 30deg);
	    }
	}
	
	.loading-ui-cell {
		width: 100%;
	    height: 100%;
	    top: 0;
	    left: 0;
	    position: absolute;
	}
	.loading-ui-wrapper .loading-ui-cell::before{
		background-color: #56606b;
		content: " ";
	    display: block;
	    margin: 0 auto;
	    width: 15%;
	    height: 15%;
	    border-radius: 100%;
	    animation: fading-circle 1.2s infinite ease-in-out both;
	}
	.loading-api {
		position: absolute;
	    top: 40%;
	    margin-top: -50px;
	    margin: 0px auto;
	    left: 0px;
	    right: 0px;
	    height: 90px;
	    width: 100px;
	    border-radius: 5px;
	    background-color: rgb(37, 51, 65);
	    z-index: 10001;
	    .loading-ui-wrapper {
	    	height: 54px;
		    width: 54px;
		    margin-top: 18px;
		    margin-left: 23px;
	    }
		.loading-ui-wrapper .loading-ui-cell::before{
			background-color: #fff;
			width: 13%;
	    	height: 13%;
		}
	}

	@-webkit-keyframes fading-circle {
	    0%, 39%, 100% {
	        opacity: 0
	    }
	    60% {
	        opacity: 1
	    }
	}
	@keyframes fading-circle {
	    0%, 39%, 100% {
	        opacity: 0
	    }
	    60% {
	        opacity: 1
	    }
	}
</style>

<script>
	export default {
		props: {
			showLoading: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				visible: false
			}
		},
		created() {
			if(this.showLoading) {
				this.visible = true;
			}
		}
	}
</script>