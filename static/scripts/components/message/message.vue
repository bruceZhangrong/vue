<template>
	<div class="bg-fff full-screen">
		<vHeader></vHeader>
		
	</div>
</template>

<style>
	.msg-header {
		font-size: 16px;
	}
</style>


<script>
	import vHeader from '../header/header';
	import { mapState } from 'vuex';

	import '../../../styles/home/home.scss';
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