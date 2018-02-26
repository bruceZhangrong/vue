<template>
	<div 
		class="header-wrapper" 
		:class="`${header.isBorder?'is-border': ''} ${otherClass}`" 
		:style="`background:${ !header.isBgColor ? header.bgColor : `rgba(83, 202, 196,${header.opacity})` }`"
	>
		<div :class="{'head-cell': header.leftPart}" slot="leftPart" @click.prevent="header.leftFunc" v-html="header.leftPart"></div>
		<div class="head-center font-16" @click.prevent="header.centerFunc" v-html="header.centerPart">
		</div>
		<div class="right-part" :class="{'head-cell': header.rightPart}" slot="rightPart" @click.prevent="header.rightFunc" v-html="header.rightPart">
		</div>
	</div>
</template>
<style scoped lang="scss">
	.header-wrapper {
		box-sizing: border-box;
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: #53cac4;
		z-index: 1000;
		padding: 0 5%;
		display: flex;
	}
	.head-cell {
		flex: 1;
	}
	.head-center {
		flex: 2;
	}
	.is-border {
		border-bottom: 1px solid #ccc;
	}
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
	.right-part {
		text-align: right;
	}
</style>


<script>
	import { mapState } from 'vuex'
	export default {
		props: {
			otherClass: {
				type: String,
				default: ''
			}
		},
		updated() {
		},
		computed: mapState({
			header: state => state.common.header
		})
	}
</script>