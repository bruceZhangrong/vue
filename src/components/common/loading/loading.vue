<template>
	<div class="loading" v-if="loading.isLoading">
		<div class="loading-bg vertical-center">
			<img src="src/assets/images/loading.png" alt="">
		</div>
	</div>
</template>

<style scoped>
	.loading {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.6);
		z-index: 1010;
	}
	.loading-bg {
		width: 56px;
		height: 56px;
		background-color: rgba(0,0,0,0.8);
		border-radius: 8px;
		padding: 10px;
	}
	.loading-bg img {
		animation: infiniteRotate 1.2s infinite linear;
	}
	@keyframes infiniteRotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(-360deg);
		}

	}
</style>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {

			}
		},
		computed: mapState({
			loading: state => state.common.loading
		})
	}
</script>