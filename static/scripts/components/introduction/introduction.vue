<template>
	<div class="intro-wrap full-screen bg-fff">
		<vHeader></vHeader>
		
	</div>
</template>

<style>
	.icon {
		width: 24px;
		height: 24px;
		margin-top: 8px;
		top: 0;
	}
	.icon.left {
		left: 5%;
	}
	.icon.right {
		right: 5%;
	}

</style>

<script>
	import vHeader from '../header/header';
	import '../../../styles/home/home';
	import { mapState } from 'vuex';

	import '../../../styles/introduction/introduction';

	export default {
		data() {
			return  {

			}
		},
		components: {
			vHeader
		},
		created() {
			this.$store.dispatch('changeHeader', {
				bgColor: '#f8f8f8',
				leftPart:`<img class="icon pos-a left" src="./static/images/topic.png" alt="" />`,
				centerPart:`<p class="text-center">言职</p>`,
				rightPart: `<img class="icon pos-a right" src="./static/images/topic-user.png" alt="" />`
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

