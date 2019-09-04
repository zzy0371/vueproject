import Vue from 'vue'
import App from './components/App.vue'

import 'mint-ui/lib/style.css'

import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

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