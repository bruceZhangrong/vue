<template>
	<div>
		<com-header :my-page="$route.name"></com-header>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
		<com-footer :my-page="page"></com-footer>
	</div>
</template>

<style>
	body {
		background-color: #fff;
	}
</style>

<script>
	import Header from './components/header';
	import Footer from './components/footer';
	import Index from './components/index';
	require('./css/app.scss');

	var data = {
		page: 'index'
	}

	export default {
		data() {
			return data
		},
		components: {
			comHeader: Header,
			comFooter: Footer,
			comIndex: Index
		}
	}
</script>