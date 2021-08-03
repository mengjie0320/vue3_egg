import { isNavigationFailure, Router } from "vue-router";
import store from '@/store';
import Nprogress from 'nprogress';

Nprogress.configure({showSpinner: false});

// const allowList = ['login', 'icons', 'error', 'error-404']; // no redirect whitelist

export function createRouterGuard(router: Router): void{
  router.beforeEach(async (to, from, next) => {
    Nprogress.start();
    // const hasRoute = router.hasRoute(to.name!);
    // 检测路由缓存，无获取初始化路由
    console.log('store.getters ---> ', store.getters);
    // if(!store.getters.addRouters.length){
    //   // 请求后台获取路由
    // }
    next();
  });

  router.afterEach(async (to, from, failure) => {
    if(isNavigationFailure(failure)){
      console.log('failure Navigation ---> ', failure);
    }
    Nprogress.done();
  });

  router.onError((err) => {
    console.log('路由错误：err ---> ', err);
  })
}
