import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/common/font/font.css'
import 'ant-design-vue/dist/antd.css';
import Tabs from 'ant-design-vue'
import { Menu } from 'ant-design-vue';
import { Icon } from 'ant-design-vue';
import { Collapse } from 'ant-design-vue';
import axios from 'axios'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Carousel3d from 'vue-carousel-3d';
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import Share from 'vue-social-share'
import Sharethis from 'vue-sharethis'
import vshare from 'vshare'
Vue.use(Sharethis)


 Vue.use(vshare)

import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);

axios.defaults.baseURL = 'http://www.dummylcdtv.com/';

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Tabs);
Vue.use(Collapse);
Vue.use( VueSplide );
Vue.use(Carousel3d);
Vue.use(preview)
Vue.use(Share)

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title
	}
	window.scrollTo(0, 0);
	next()
})
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
