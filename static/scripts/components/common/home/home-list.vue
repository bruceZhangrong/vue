<template>
	<div class="home-list">
		<div class="list-item" v-for="(v,k) in homeLists">
			<div class="list-img">
				<img 
					:src="v.image" 
					:alt="v.title" 
					:data-nid="v.nid" 
					:data-uid="v.uid"
					@click="jumpToDetail"
				>
			</div>
			<div class="title-wrapper">
				<div class="title">{{v.title}}</div>
				<div class="focus-wrapper">
                    <div
                        v-if="noFocused[k]" 
                        class="focus"
                        @click="focusIt" 
                        :data-id="k"
                        :data-uid="v.uid"
                        ref="noFocus"
                    ><i class="fa fa-plus"></i>关注</div>
                    <div v-else class="focus on">已关注</div>
                </div>
			</div>
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

<style lang="scss" scoped>
	.title-wrapper {
        padding: 10px;
        font-size: 18px;
        display: flex;
        .title {
            flex: 3;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .focus-wrapper {
            flex: 1;
            .focus {
                width: 54px;
                border: 1px solid #ccc;
                border-radius: 5px;
                height: 24px;
                line-height: 22px;
                color: #666;
                font-size: 12px;
                text-align: center;
                float: right;
                i {
                    margin-right: 5px;
                }
                &.on {
                    color: #999;
                }
            }
        }
    }
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
		props: {
			loadDatas: {
				type: Array,
				default: []
			},
			apiType: {
				type: String,
				default: 'recommend'
			}
		},
		data() {
			return {
				homeLists: [],
				firstLoad: true,
				allUid: [],
				uidDatas: [],
				noFocused: []
			}
		},
		created() {
			let that = this;
			if(this.COM_FUNC.LOGIN()) {
				//首次加载列表
				this.API({
					select_type: '',
					url: this.URL.HOME_LIST,
					datas: {
						offset:0,
						num:10,
						uid:0,
						type: this.apiType,
						published:0
					},
					success: res => {
						this.firstLoad = false;
						this.homeLists = res.data;
						console.log('list',res)
						this.filterFocusLists();
					}
				});
				//关注列表
				this.API({
					select_type: '',
					url: this.URL.FOCUS_LIST,
					datas: {
						type: `focus`,
						num: 20,
						offset: 0
					},
					success: res => {
						if(res.status_code == 200) {
                            res.data.forEach(res => {
                                that.allUid.push(res.uid);
                            });
                            console.log('focus',res)
                            this.filterFocusLists();
						} else {
                            this.$toast(res.message)
						}
					}
				});
			}
			// console.log('created',this.noFocused);
		},
		mounted() {
		},
		updated() {
			this.filterFocusLists();
		},
		watch: {
			loadDatas: function(val) {
				this.homeLists = this.homeLists.concat(this.loadDatas);
				this.$emit('add-offset');
				this.filterFocusLists();
			}
		},
		methods: {
			focusIt(e) {
				console.log('mounted',this.$refs.noFocus)

                let uid = e.target.getAttribute('data-uid');
                let id = e.target.getAttribute('data-id');
                let el = this.$refs.noFocus;
                let ref = null;
                let k = 0;
                el.forEach(res => {
                	if(res.dataset.id == id) {
                		ref = res;
                	}
                	k++;
                })
                this.API({
                    select_type: '',
                    noLoading: true,
                    url: this.URL.USER_FOCUS,
                    datas: {
                        uid: uid
                    },
                    success: res => {
                        if(res.status_code == 200) {
                            // this.noFocused[id] = false;
                            console.log(ref)
                            ref.className += ' on';
                            ref.innerHTML = `已收藏`;
							this.filterFocusLists();

                        } else {
                        	this.$toast(res.message)
                        }
                    },
                    error: res => {
                        this.$toast(res)
                    }
                })
            },
			jumpToDetail(e) {
				let nid = e.target.getAttribute('data-nid');
				let uid = e.target.getAttribute('data-uid');
				let focused = 0;
				for( let i = 0; i < this.allUid.length; i ++) {
					if(this.allUid[i]) {
						focused = 1;
					}
				}
				this.$router.push({
					path: '/home-detail', 
					query: {
						'nid': nid,
						'uid': uid,
						'focus': focused
					}
				})
			},
			filterFocusLists() {
				let that = this;
				let i = 0;
				if(this.homeLists.length > 0 && this.allUid.length > 0) {
					this.homeLists.forEach(res => {
						let uid = res.uid;
						this.allUid.every(res => {
							if(uid == res) {
								that.noFocused[i] = false;
								return false;
							} else {
								that.noFocused[i] = true;
								return true;
							}
						})
						i++;
					});
				}
			}
		}
	}
</script>