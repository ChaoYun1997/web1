import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
	path: '',
	name: 'MainPage',
	component: () => import('../views/Page/MainPage.vue'),
	meta: {
		title: ''
	},
	children: [{
			path: '/',
			name: 'Home',
			component: () => import('../views/Home.vue'),
			meta: {
				title: 'YIJIA - Home'
			}
		},
		{
			path: '/Product',
			name: 'Product',
			component: () => import('../views/Product.vue'),
			meta: {
				title: 'YIJIA - Product'
			}
		},
		{
			path: '/Details',
			name: 'Details',
			component: () => import('../views/Details.vue'),
			meta: {
				title: 'YIJIA - Details'
			}
		},
		{
			path: '/Contact',
			name: 'Contact',
			component: () => import('../views/Contact.vue'),
			meta: {
				title: 'YIJIA - Contact'
			}
		},
		{
			path: '/Industry',
			name: 'Industry',
			component: () => import('../views/Industry.vue'),
			meta: {
				title: 'YIJIA - Industry'
			}
		},
		{
			path: '/NewsDetails',
			name: 'NewsDetails',
			component: () => import('../views/NewsDetails.vue'),
			meta: {
				title: 'YIJIA - NewsDetails'
			}
		},
		{
			path: '/Company',
			name: 'Company',
			component: () => import('../views/Company.vue'),
			meta: {
				title: 'YIJIA - Company'
			}
		},
		{
			path: '/CustomProp',
			name: 'CustomProp',
			component: () => import('../views/CustomProp.vue'),
			meta: {
				title: 'YIJIA - CustomProp'
			}
		}
	]
}]


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
