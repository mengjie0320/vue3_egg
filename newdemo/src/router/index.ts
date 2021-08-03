import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import { App } from 'vue'
import 'nprogress/nprogress.css'
import { errorRoutes } from './error'
import { createRouterGuard } from './router-guard'
import pageRoute from './page';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/page',
    name: '初始页面',
    component: () => import(/* webpackChunkName: "main" */ '@/layout/index.vue'),
    children: [...pageRoute]
  },
  errorRoutes,
]
console.log('routes ---> ', routes);
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export function setupRouter (app: App) :void {
  app.use(router);
  createRouterGuard(router);
}

export default router
