<template>
	<div class="intro-wrap full-screen bg-fff">
		<vHeader></vHeader>
		<div class="flex-container">
			<div class="yz">
				
			</div>
		</div>
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
	import vHeader from 'components/header/header';
	import 'assets/styles/home/home';
	import { mapState } from 'vuex';

	import 'assets/styles/introduction/introduction';

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
				leftPart:`<i class="fa fa-coffee"></i>`,
				centerPart:`<p class="text-center">言职</p>`,
				rightPart: `<i class="fa fa-user-o"></i>`
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

