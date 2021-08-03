// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

// 引入vuex，导出vuex.store
import { App } from 'vue';
import { createStore, createLogger } from 'vuex';

type MyStore = {

}

const store = createStore<MyStore>({
    // modules,
    // getters,
    plugins: [createLogger()]
});

export default store;

export function setupStore(app: App){
    app.use(store);
}
