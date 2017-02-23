<template>
	<div class="footer">
		<div>
			<router-link to="/index">index</router-link>
			<router-link to="/page1">page one</router-link>
			<router-link to="/page2/123">page two</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'hell bruce-zhang'
			}
		},
		methods: {
			selnav: function(e) {
				console.log(this.msg)
			}
		}
	}
</script>