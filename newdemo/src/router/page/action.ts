import { RouteRecordRaw } from "vue-router";

const actionRoute: Array<RouteRecordRaw> = [
  {
    path: 'action',
    // name: '',
    redirect: '/action/list',
    // component:
    meta: {
      title: 'Action',
      // icon:'',
    },
    children: [
      {
        path: 'list',
        name: 'page-list',
        meta: {
          title: '动作列表',
          // icon: '',
          keepAlive: false,
        },
        component: () => import(/* webpackChunkName: "main" */ '@/views/page/action/list/index.vue')
      }
    ]
  }
]
export default actionRoute;
