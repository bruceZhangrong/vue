<template>
	<div class="header">
		<div>{{ myPageType}}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'hello bruce'
			},
			props: ['myPage'],
			computed: {
				myPageType: function() {
					let name;
					switch(this.myPage) {
						case 'index': 
							name = 'index';
							break;
						case 'page1':
							name = 'page one';
							break;
						case 'page2':
							name = 'page two';
							break;
					}
					return name;
				}
			}
		}
	}
</script>

