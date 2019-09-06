<template>
	<div class="photocontainer">
		<van-tabs v-model="active">
		  <van-tab v-for="item in phototypelist" :title="item.title">
			  <!-- <img v-for="img in photolist" v-lazy="img.imgsrc"> -->
			  <router-link v-for="img in photolist"  :to="{name:'photodetail', params:{id:img.id}}">
				  <p>{{ img.title }}</p>
				  <img :src="img.imgsrc">

			  </router-link>
			  
		  </van-tab>

		</van-tabs>
	</div>
</template>

<script>	

export default {
		data() {
			return {
				active: 0,
				phototypelist:[],
				photolist:[]
			};
		},
		watch:{
			"active":function(newvalue){
				this.getphotosbytype(newvalue)
			}
		},
		created(){
			this.gettypes()
			this.getphotosbytype(this.active)
		},
		methods:{
			gettypes(){
				this.phototypelist=[
					{
						id:1,
						title:"全部"
					},
					{
						id:2,
						title:"家居生活"
					},
					{
						id:3,
						title:"摄影设计"
					},
					{
						id:4,
						title:"明星美女"
					},
					{
						id:5,
						title:"空间设计"
					},
					{
						id:6,
						title:"户外美女"
					}
				]
			},
			getphotosbytype(id){
				
				
				if(id==0){
					
					this.photolist=[]
					for(let j=1;j<this.phototypelist.length;j++){
						for(let i=0;i<j;i++){					
							this.photolist.push({
								id:i,
								imgsrc:"https://img.yzcdn.cn/vant/apple-1.jpg",
								title:this.phototypelist[j].title+ " "+ i
							})
						}		
					}
				}
				else{
					
					this.photolist=[]
					for(let i=0;i<id+1;i++){					
						this.photolist.push({
							id:i,
							imgsrc:"https://img.yzcdn.cn/vant/apple-1.jpg",
							title:this.phototypelist[id].title+ " "+ i
						})
					}
					console.log(this.photolist)
				}
				
				
			},
		}
		

	}
</script>

<style lang="less">
	.photocontainer{
		.van-tabs__content{
			text-align: center;
			padding: 5px;
			img{
				width: 100%;
				border:1px dotted red
			}
		}
	}
	
	
</style>
