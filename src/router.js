import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from './components/Home.vue'
import Member from './components/Member.vue'
import Shopcar from './components/Shopcar.vue'
import Search from './components/Search.vue'

let router = new VueRouter({
	routes:[
		{
			path:"/home",
			component:Home
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
		
		
	],
	linkActiveClass:"mui-active"
})

export default router