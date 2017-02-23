<template>
	<div>
		<div>
			<p>{{ data }}</p>
			<p>{{ num }}</p>
			<a class="btn" @click="randomNum">click me!</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data: 'index',
				num: 1
			}
		},
		methods: {
			randomNum: function() {
				this.num = parseInt(10 * Math.random());
			}
		}
	}
</script>