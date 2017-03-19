<template>
	<div class="home-list">
		<div class="list-item" v-for="(v,k) in homeLists">
			<div class="list-img">
				<img :src="v.image" alt="v.title">
			</div>
			<div class="title">{{v.title}}</div>
			<div class="user-info">
				<div class="avatar float-l">
					<img :src="v.user.picture" alt="">
				</div>
				<div class="info-detail">
					<span class="nickname">{{v.user.nick_name}}</span>
					<p class="description">{{v.description}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="" scoped>
	.home-list {
		padding-left: 10px;
		padding-right: 10px;
	}
	.list-item {
		border-radius: 10px;
		width: 100%;
		margin-bottom: 20px;
		/*padding-bottom: 20px;*/
		border-radius: 6px;
		overflow: hidden;
		box-shadow: 5px 8px 10px #888;
	}
	.list-img {
		width: 100%;
		height: 240px;
		overflow: hidden;
	}
	.list-item img {
		width: 100%;
	}
	.title {
		font-size: 16px;
		line-height: 36px;
		padding: 0 10px;
	}
	.user-info {
		border-top: 1px solid #eee;
		/*border-bottom: 1px solid #eee;*/
		height: 80px;
		padding: 10px 10px;
		line-height: 60px;
	}
	.avatar {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 20px;
	}
	.avatar img {
		width: 100%;
		height: 100%;
	}
	.info-detail {
		padding: 6px 0;
		line-height: 26px;
		padding-left: 80px;
		width: 100%;
	}
	.nickname {
		font-size: 16px;
	}
	.description {
		color: #999;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

</style>

<script>
	export default {
		props:['loadDatas'],
		data() {
			return {
				homeLists: [],
				firstLoad: true,
			}
		},
		created() {
			this.API({
				select_type: '',
				url: this.URL.HOME_LIST,
				datas: {
					offset:0,
					num:10,
					uid:0,
					type:`recommend`,
					published:0
				},
				success: res => {
					this.firstLoad = false;
					this.homeLists = res.data;
				}
			});
		},
		watch: {
			loadDatas: function(val) {
				this.homeLists = this.homeLists.concat(this.loadDatas);
				this.$emit('add-offset');
			}
		}
	}
</script>