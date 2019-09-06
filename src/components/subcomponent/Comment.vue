<template>
	<div class="cmt-container">
		<h3>发表评论</h3>
		<textarea class="newcomment" v-model="newcomment" placeholder="请输入内容"></textarea>
		<van-button @click="addcomment" type="primary" size="large">发表评论</van-button>
		<div class="cmt-list">
			<div class="cmt-item" v-for="(item,i) in comments">
				第{{ i+1 }}楼
				<br>
				用户：{{ item.user }} 
				<br>
				发表时间 {{ item.time }}
				<br>
				{{ item.content }}

			
			</div>
		</div>
		<van-button type="danger" size="large"  @click="getmore()">加载更多</van-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				newcomment:"",
				comments:[]
			};
		},
		created(){
			this.getComment()
		},
		methods:{
			getmore(){
				this.getComment()
			},
			getComment(){
				// TODO 接入新闻评论接口
				this.comments.push({id:1,user:"zzy",time:"2012-12-12 12:12:12",content:"锄禾日当午"}),
				this.comments.push({id:1,user:"zzy",time:"2012-12-12 12:12:12",content:"锄禾日当午"}),
				this.comments.push({id:1,user:"zzy",time:"2012-12-12 12:12:12",content:"锄禾日当午"}),
				this.comments.push({id:1,user:"zzy",time:"2012-12-12 12:12:12",content:"锄禾日当午"}),
				this.comments.push({id:1,user:"zzy",time:"2012-12-12 12:12:12",content:"锄禾日当午"})

			},
			addcomment(){
				if(this.newcomment=="")
				{
					// console.log(this);
					 this.$toast('提示文案');
				}
				else
				{
					this.comments.unshift({id:1,user:"zzy",time:"2012-12-12 12:12:12",content:this.newcomment})

				}
			}
		},
	}
</script>

<style lang="scss">
.cmt-container{
	text-align: center;
	padding: 5px;
	textarea{
		width: 95%;
		height: 100px;
		
	}
	.cmt-list{
		margin: 5px 0;
		.cmt-item{
			margin: 5px;
			background-color: #ccc;
		}
	}
	
}

</style>
