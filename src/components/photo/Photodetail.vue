<template>
	<div class="photocontainer">
		<h3>{{ photoinfo.title }}</h3>
		<p class="subtitle">
			<span>发布时间:{{ photoinfo.time }}</span>
			<br>
			<span>查看数:{{ photoinfo.views }}</span>
		</p>
		
		<!-- 缩略图区域 -->
		<div class="thumb">
			<img @click="preview" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2270154477,3695819426&fm=26&gp=0.jpg" alt="">
			
		</div>
		
		
		<!-- 图片内容区域 -->
		<div class="content">
			{{ photoinfo.content }}
		</div>
		
		<!-- 评论子组件 -->
		<comment-box></comment-box>
		
	</div>
</template>

<script>
	import Comment from '../subcomponent/Comment.vue'
					import Vue from 'vue';
					import { ImagePreview } from 'vant';
					Vue.use(ImagePreview);
	
	
	export default {	
		
		data() {
			return {
				id:this.$route.params.id,
				photoinfo:{},
				photothumbs:[]
			};
		},
		created(){
			this.getphotoinfo()
			this.getphotothumbs()
		},
		methods:{
			preview(){
				ImagePreview(this.photothumbs);
			},
			getphotothumbs(){
				this.photothumbs=[
				'https://f11.baidu.com/it/u=268081561,2342394872&fm=76',
				'https://img.yzcdn.cn/2.jpg'
				]
			},
			
			getphotoinfo(){
				this.photoinfo={
					id: Math.random()*50,
					title:"图片标题"+ parseInt(Math.random()*50) ,
					views: parseInt(Math.random()*200),
					time:"2012-12-12",
					content:"这个是一张神奇的图片"
				}
			}
		},
		
		components:{
			"CommentBox":Comment,
		},
	}
</script>

<style lang="scss">
.photocontainer{
	padding: 5px;
	h3{
		color: #26A2FF;
		font-size: 15px;
		text-align: center;
	}
	.thumb{
		img{
			width: 100%;
		}
	}
}
</style>
