import Vue from 'vue'
import App from './components/App.vue'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


import router from './router.js'


import VueResource from 'vue-resource'
Vue.use(VueResource)



const vm = new Vue({
	el:"#app",
	render:creatEle=>{
		return creatEle(App)
	},
	router
})

Vue.filter("timeformat",function(value,pattern="YYYY-MM-DD HH:mm:ss"){
	
	
})