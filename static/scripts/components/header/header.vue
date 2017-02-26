<template>
	<div 
		class="header-wrapper" 
		:class="{'is-border': header.isBorder}" 
		:style="`background:${ !header.isBgColor ? header.bgColor : `rgba(83, 202, 196,${header.opacity}` }`"
	>
		<div slot="leftPart" @click.prevent="header.leftFunc" v-html="header.leftPart"></div>
		<div @click.prevent="header.centerFunc" v-html="header.centerPart">
		</div>
		<div class="right-part" slot="rightPart" @click.prevent="header.rightFunc" v-html="header.rightPart">
		</div>
	</div>
</template>

<style>
	.header-wrapper {
		box-sizing: border-box;
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: transparent;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		padding: 0 5%;
	}
	.is-border {
		border-bottom: 1px solid #ccc;
	}
</style>


<script>
	import { mapState } from 'vuex'
	export default {
		updated() {
		},
		computed: mapState({
			header: state => state.common.header
		})
	}
</script>