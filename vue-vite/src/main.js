import { createApp } from 'vue'
import vuex from 'vuex';
import vueRouter from 'vue-router';
// import elementUI from 'element-ui';

// import 'element-ui/lib/theme-chalk/index.css'
// import lang from 'element-ui/lib/locale/lang/en'
// import locale from 'element-ui/lib/locale'
// locale.use(lang)

import App from './App.vue'
import './index.css'


// Vue.filter('numToThousandth', math.numToThousandth);
// Vue.prototype.$http = axios; .use(elementUI).use(vuex).use(vueRouter).
createApp(App).mount('#app');
