<template>
	
		<div class="goodlist">
			<div class="gooditem">
				<img src="http://fc4tn.baidu.com/it/u=2606635529,2140853140&fm=202" alt="">
				<h1>
					充电器插头
					<br>
					充电器插头
					<br>
					充电器插头
					<br>
					
				</h1>
				<div class="info">
					<p class="price">
						<span class="now">
							$100
						</span>
						<span class="old">
							$200
						</span>
					</p>
					<p class="sell">
						<span>热卖中</span>
						<span>还剩60件</span>
					</p>
				</div>
			</div>
			<div class="gooditem">
				<img src="http://fc4tn.baidu.com/it/u=2606635529,2140853140&fm=202" alt="">
				<h1>充电器插头</h1>
				<div class="info">
					<p class="price">
						<span class="now">
							$100
						</span>
						<span class="old">
							$200
						</span>
					</p>
					<p class="sell">
						<span>热卖中</span>
						<span>还剩60件</span>
					</p>
				</div>
			</div>
			<div class="gooditem">
				<img src="http://fc4tn.baidu.com/it/u=2606635529,2140853140&fm=202" alt="">
				<h1>充电器插头</h1>
				<div class="info">
					<p class="price">
						<span class="now">
							$100
						</span>
						<span class="old">
							$200
						</span>
					</p>
					<p class="sell">
						<span>热卖中</span>
						<span>还剩60件</span>
					</p>
				</div>
			</div>
			<div class="gooditem">
				<img src="http://fc4tn.baidu.com/it/u=2606635529,2140853140&fm=202" alt="">
				<h1>充电器插头</h1>
				<div class="info">
					<p class="price">
						<span class="now">
							$100
						</span>
						<span class="old">
							$200
						</span>
					</p>
					<p class="sell">
						<span>热卖中</span>
						<span>还剩60件</span>
					</p>
				</div>
			</div>
			<div class="gooditem">
				<img src="http://fc4tn.baidu.com/it/u=2606635529,2140853140&fm=202" alt="">
				<h1>充电器插头</h1>
				<div class="info">
					<p class="price">
						<span class="now">
							$100
						</span>
						<span class="old">
							$200
						</span>
					</p>
					<p class="sell">
						<span>热卖中</span>
						<span>还剩60件</span>
					</p>
				</div>
			</div>
		</div>
	
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.goodlist{
	padding: 5px;
	display: flex;
	flex-wrap: wrap;
	.gooditem{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		
		margin: 2px;
		border: 1px dotted red;
		width: 48%;
	
		
		img{
			width: 100%;
			
		}
		h1{
			font-size: 16px;
			text-align: center;
		}
		.info{
			padding-left: 5px;
			padding-right: 5px;
			background: #eee;
			p{
				margin-bottom: 0;
			}
			.price{
				.now{
					color: red;
					font-weight: bold;
				}
				.old{
					text-decoration: line-through;
					font-size: 14px;
					margin-left: 10px;
				}
			}
			.sell{
				display: flex;
				justify-content: space-between;
			}
		}
	}
	
}
</style>
