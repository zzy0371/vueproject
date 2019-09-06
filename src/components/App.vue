<template>
	<div class="container">
		<!-- 头部 -->
		<div class="header">
			<van-row>
					  <van-col span="24">
						  <van-col @click="goBack" span="2" v-show="flag"> <van-icon name="arrow-left" class="header-icon" /> </van-col>
						  
						  <van-col span="8" :offset="titleoffset"> Vue 项目开发 </van-col>
					  </van-col>
			
			</van-row>
		</div>
		
		
				
		<!-- 中间 -->
		<transition>
			<router-view></router-view>
		</transition>
		

		<!-- 底部 -->
		<van-tabbar v-model="active" route>
		  <van-tabbar-item icon="location-o" to="/home">首页</van-tabbar-item>
		  <van-tabbar-item icon="friends-o" to="/member">会员</van-tabbar-item>
		  <van-tabbar-item icon="shopping-cart-o" to="/shopcar">购物车</van-tabbar-item>
		  <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flag:false,
				active: 0,
				titleoffset:8
			};
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			}
		},
		created(){
			if(this.$route.path == "/home"){
				this.flag=false
				this.titleoffset = 10
			}
			else
			{
				this.flag=true
				this.titleoffset = 8
			}
		},
		watch:{
			"$route.path":function(newvalue){
				if(newvalue == "/home"){
					this.flag=false
					this.titleoffset = 10
				}
				else
				{
					this.flag=true
					this.titleoffset = 8
				}
			}
		}
	}
</script>

<style lang="less" scoped="scoped">

.container{
// 	padding-top: 40px;
// 	padding-bottom: 50px;
	.header{
		// position: fixed;
		height: 40px;
		line-height: 40px;
		background: #245fd7;
		color:#fff;
		
	}
	
}

.v-enter, {
	opacity: 0;
	transform: translateX(100%);
}

.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
.v-enter-active, .v-leave-active{
	transition: all 0.5s;
}

</style>
