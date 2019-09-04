<template>
	<div>
		<div>
			<mt-swipe :auto="4000">
			  <mt-swipe-item v-for="item in lunbotulist" :key="item">
				  <img :src="item" alt="">
			  </mt-swipe-item>
			  
			</mt-swipe>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
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
					if(res.body.answer=="yes")
					{
						Toast('hahahah ');
						this.lunbotulist.push("https://gss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3137563062,3085872715&fm=173&app=49&f=JPEG?w=218&h=146&s=BA01E14C6510A471425F1F930300709C")
						this.lunbotulist.push("https://f11.baidu.com/it/u=268081561,2342394872&fm=76")
						this.lunbotulist.push("https://gss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1785609872,2293487424&fm=173&app=49&f=JPEG?w=218&h=146&s=C6E39E56C69001C0180B2EEC0300703C")
						
						
					}
					else{
						Toast('网络出错');
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.mint-swipe{
	height: 200px;
	.mint-swipe-item{
		background-color: red;
	}
	img{
		width: 100%;
		height: 100%;
	}
}
</style>
