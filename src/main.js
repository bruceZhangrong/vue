import Vue from 'vue'
import VueRouter from 'vueRouter'
import App from './app'
import Index from './components/index'
import Page1 from './components/page1'
import Page2 from './components/page2'
 

// require('./css/style.scss');

Vue.use(VueRouter);

const routes = [
	{
		path: '/', component: App,
		childern: [
			{
				path: 'index', component: Index
			},
			{
				path: 'page1', component: Page1
			},
			{
				path: 'page2', component: Page2
			}
		]
	}
];

const router = new VueRouter({
	routes,
	linkActiveClass: 'active'
});

const app = new Vue({
	router
}).$mount('#home');