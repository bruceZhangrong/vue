<template>
	<div class="bg-fff full-screen">
		<vHeader></vHeader>
		
	</div>
</template>

<style>
	.edite {
		font-size: 14px;
		right: 5%;
	}
	.edite img {
		float: left;
		margin-top: 3px;
	}
	.edite span {
		padding-left: 30px;
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
				isBgColor: true,
				opacity: 1,
				bgColor: '#f8f8f8',
				rightPart: `
					<div class="edite pos-a">
						<img class="pos-a right" src="./static/images/editer.png" alt="" />
						<span>编辑</span>
					</div>`
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