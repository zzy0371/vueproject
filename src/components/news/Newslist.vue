<template>
	<div>		
		<van-list
		v-model="loading"
		:finished="finished"
		finished-text="没有更多了"
		@load="onLoad"
		>
		<router-link to="/home/newsdetail/10" v-for="item in newslist">		
			<van-row class="newsitem">
			  <van-col span="4" class="newsimage">
				  <img :src="item.imagesrc" alt="">
			  </van-col>
			  <van-col span="20">			 
					<van-row>
						 <van-cell class="newstitle"	:key="item.id" :title="item.title">
						 </van-cell>
					</van-row>
					<van-row class="newsinfo">
						<span>发表时间： {{ item.time }}</span> 
						<span>查看数： {{ item.views }}</span>
					</van-row> 
			  </van-col>
			</van-row>
		</router-link>
		</van-list>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				newslist:[],
				loading: false,
				finished: false
			};
		},
		created(){
			this.getnewslist()
			console.log(this.newslist)
		},		
		methods:{
			onLoad(){
				console.log("加载完毕")
			},
			getnewslist(){
				// TODO 接入新闻列表接口
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
				this.newslist.push({id:1, title:"无人驾驶巴士第1万名乘客产生！", imagesrc:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58",time:"2012-12-12 12:12:12",views:50  })
			}
		}
	}
</script>

<style lang="less">
.newsitem{
	.newsimage{
		img{
			width: 100%;
		}
		
	}
	.newstitle{		
		text-align: center;
		padding: 3px;
	}
	.newsinfo{
		padding-left: 5px;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
	}
}
</style>
