<template>
	<div class="newsdetailcontainer">
		<h3 class="title">
			{{ news.title }}
		</h3>
		
		<p class="subtitle">
			<span>
				发表时间： {{ news.time }}
			</span>
			<br>
			<span>
				点击次数： {{ news.views }}次
			</span>
		</p>
		
		<div class="content">
			<img :src="news.imgsrc" alt="">
			<p>{{ news.content }}</p>
		</div>
		
		<div class="comment">
			<comment-box></comment-box>
		</div>
		<!-- 新闻详情页{{ this.$route.params.id }} -->
	</div>
</template>

<script>
	import Comment from '../subcomponent/Comment.vue'
	export default {
		data() {
			return {
				news:{}
			};
		},
		created(){
			this.getnewsdetail(this.$route.params.id)
		},
		components:{
			"CommentBox":Comment,
		},
		methods:{
			getnewsdetail(id){
				// TODO 接入新闻详情页接口
				this.news={
					"title":"无人驾驶巴士第1万名乘客产生",
					"content":"无人驾驶巴士第1万名乘客产生无人驾驶巴士第1万名乘客产生无人驾驶巴士第1万名乘客产生无人驾驶巴士第1万名乘客产生无人驾驶巴士第1万名乘客产生",
					"time":"2012-12-12 12:12:12",
					"views":50,
					"imgsrc":"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=652602501,1807310767&fm=58"
					
				}
			}
		}
	}
</script>

<style lang="less">

.newsdetailcontainer{
	padding: 5px;
	.title{
		// font-size: 36px;
		text-align: center;
		margin: 15px 0;
		color: red;
	}
	.subtitle{
		color:#226aff;
	}
	
	.content{		
		p{
			line-height: 40px;
		}
		
		img{
			width: 100%;
		}
	}
	
}
</style>
