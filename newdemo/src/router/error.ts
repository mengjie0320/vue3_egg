import { RouterTransition } from '@/components/transition';
import { markRaw } from 'vue';
import { RouteRecordRaw } from 'vue-router'

const routeName = 'error';

export const notFound:RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  redirect: '/error/404',
  component: () => import(/* webpackChunkName: "main" */ '@/views/error/404.vue'),
};
// /* webpackMode: "lazy" *//* webpackPrefetch: true *//* webpackChunkName: "main" */ '@/views/error/404.vue'
// /* webpackMode: "lazy" *//* webpackPrefetch: true *//* webpackChunkName: "main" */ '@/views/error/404.vue'
export const errorRoutes:RouteRecordRaw = {
  path: '/error',
  name: routeName,
  redirect: '/error/404',
  component: markRaw(RouterTransition),
  meta: {
    title: '错误页',
    icon: 'EditOutlined',
    hidden: true,
  },
  children: [
    {
      path: '404',
      name: `${routeName}-404`,
      meta: {
        title: '404',
        icon: 'UserOutlined',
      },
      component: () => import(/* webpackChunkName: "main" */ '@/views/error/404.vue'),
    },
  ],
};
