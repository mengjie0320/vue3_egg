import { createApp } from 'vue'
import App from './App.vue'
import router, {setupRouter} from './router/'
import {setupStore} from './store'
import { setupDirectives, setupGlobalMethods, setupCustomComponents } from './plugins/'; // setupAntd,
// import {post,fetch,patch,put} from './utils/http/axios' 

// antd全局引用方式
// import antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css';
// antd局部引用 + use，但很多组件式有很多其他方式
// import { Button, Breadcrumb, Layout } from 'ant-design-vue';
// import { Icons } from '@ant-design/icons-vue'

// console.log(antd);
const app = createApp(App);
// const app = createApp(App, { $post: post, $fetch: fetch, $patch: patch, $put: put });


// 注册全局常用的ant-design-vue组件  关键代码：app.use(Form).use(...)
// setupAntd(app);
// 注册全局自定义组件,如：<svg-icon />  关键代码: app.component(SvgIcon.name, SvgIcon);
setupCustomComponents(app);
// 注册全局自定义指令，如：v-permission权限指令  关键代码：app.directive('permission', permission);
setupDirectives(app);
// 注册全局方法，如：app.config.globalProperties.$message = message   关键代码：app.use(hasPermission);
setupGlobalMethods(app);

// 挂载vuex状态管理  关键代码：app.use(store);
setupStore(app);

// 挂载路由  关键代码：app.use(router); // 创建路由守卫 createRouterGuards(router);
setupRouter(app);
// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'));
