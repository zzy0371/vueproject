import Vue from 'vue'
import App from './components/App.vue'

import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import './lib/mui/css/mui.css'

const vm = new Vue({
	el:"#app",
	render:creatEle=>{
		return creatEle(App)
	}
})