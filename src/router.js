import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from './components/Home.vue'
import Member from './components/Member.vue'
import Shopcar from './components/Shopcar.vue'
import Search from './components/Search.vue'

import Newslist from './components/news/Newslist.vue'
import Newsdetail from './components/news/Newsdetail.vue'
import Photolist from './components/photo/Photolist.vue'
import Photodetail from './components/photo/Photodetail.vue'
import Goodlist from './components/good/Goodlist.vue'
let router = new VueRouter({
	routes:[
		{
			path:"/",
			redirect:"/home"
		},
		{
			path:"/home",
			component:Home,
		},
		{
			path:"/member",
			component:Member
		},
		{
			path:"/shopcar",
			component:Shopcar
		},
		{
			path:"/search",
			component:Search
		},
		{
			path:"/home/newslist",
			component:Newslist
		},
		{
			name:"newsdetail",
			path:"/home/newsdetail/:id",
			component:Newsdetail
		},
		{
			name:"photolist",
			path:"/home/photolist",
			component:Photolist
		},
		{
			name:"photodetail",
			path:"/home/photodetail/:id",
			component:Photodetail
		},
		{
			name:"goodlist",
			path:"/home/goodlist",
			component:Goodlist
		}
		
		
	],
	linkActiveClass:"mui-active"
})

export default router