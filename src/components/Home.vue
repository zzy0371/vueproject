<template>
	<div>
		<div>			
			<van-swipe :autoplay="3000" indicator-color="white">
			  <van-swipe-item v-for="item in lunbotulist" :key="item">
				  <img :src="item" alt="">
			  </van-swipe-item>			 
			</van-swipe>
		</div>
		
		<div>
			<van-grid square :column-num="3">
			  <van-grid-item icon="newspaper-o"	text="新闻资讯" to="/home/newslist"/>
			  <van-grid-item icon="photo-o"	text="图片分享" to="/home/photolist"/>
			  <van-grid-item icon="cart-o"	text="商品购买" to="/home/goodlist"/>
			  <van-grid-item icon="comment-o"	text="留言反馈"/>
			  <van-grid-item icon="video-o"	text="视频专区"/>
			  <van-grid-item icon="chat"	text="联系我们"/>
			</van-grid>			
		</div>
		
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				lunbotulist:[]
			};
		},
		created(){
			this.getlunbotu()
		},
		methods:{
			getlunbotu(){
				this.$http.get("https://yesno.wtf/api").then(res=>{
					console.log(res.body)
// 					if(res.body.answer=="yes")
// 					{
						
						// TODO 接入 轮播图接口
						// Toast('hahahah ');
						this.lunbotulist.push("https://gss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3137563062,3085872715&fm=173&app=49&f=JPEG?w=218&h=146&s=BA01E14C6510A471425F1F930300709C")
						this.lunbotulist.push("https://f11.baidu.com/it/u=268081561,2342394872&fm=76")
						this.lunbotulist.push("https://gss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1785609872,2293487424&fm=173&app=49&f=JPEG?w=218&h=146&s=C6E39E56C69001C0180B2EEC0300703C")
						
// 						
// 					}
// 					else{
						// this.$toast.fail('轮播图加载失败');
						
					// }
				})
			}
		}
	}
</script>

<style lang="scss">
	.van-swipe{
		text-align: center;
		margin: 5px;
		img{
			width: 100%;
		}
	}

</style>
