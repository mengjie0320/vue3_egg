/**
 * 向后台请求用户菜单，动态生成路由
 */
import { start } from "nprogress";
import { Module } from "vuex";


const state = {
  addRouters: ['/About'], //[], 初始化默认为空，此处无后台提供路由默认提供
  menus: [],
  // platform: '', // 多平台初始化分类
  // sortedMenus: {},
};

type StateType = typeof state; // 定义一个 state Type
const asyncRouter:Module<StateType,any> = {
  namespaced: true, // 命名空间模块（asyncRouter），更高封装度和复用性
  state,
  mutations: {
    SET_ROUTES: (state, routers) => {
      state.menus = routers;
      // state.sortedMenus = {};
      // console.log(state.sortedMenus)
    },
    SET_PLATFORM: (state, platform) => {
      // state.platform = platform;
    }
  },
  actions: {
    GenerateRoutes({commit}) {
      return new Promise((resolve, reject) => {
        // resolves(routers)
      })
    }
  }
}
export default asyncRouter;
