const path = require('path')
module.exports = {
  // productionSourceTip: false, // 打包不生成.map文件  notAllowed
  // lintOnSave: false, // 如果有配置eslint想关闭的话
  configureWebpack: config => {
    config.optimization = {
      splitChunks: {
        // minSize: 1000000, // 单个文件的最小size
        // maxSize: 2000000, // 单个文件最大的size
        // minChunks: 2, // 最小被引用
        // maxAsyncRequests: 5, // 首页加载资源
        // maxInitialRequests: 3,
        // automaticNameDelimiter: '~', // 打包文件自定义的链接符
        // name: true,
        chunks: 'all', // initial(初始块)、async(按需加载块)、all(默认，全部块)
        minSize: 100000,
        cacheGroups: {
        //   'assets': {
        //     name: 'assets',
        //     test: /[\\/]src[\\/]assets[\\/]/,
        //     priority: -10
        //   },
          'antd-vue': {
            name: 'antd-vue',
            test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
            priority: -10
          },
          'chunk-vendors': {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]vuex|vue-router|axios[\\/]/,
            priority: -10
          },
        }
      }
    }

    return {
      // externals: {
      //   'vue': 'Vue',
      // },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src')
        }
      },
    }
  },
  devServer: {
    // open: true,
    // port: 8501,
    proxy: {
      '/eggServer': { // 请求开头识别
        target: 'http://localhost:7003', // 跨域地址
        changeOrigin: true, // 是否跨域
        secure: false, // 是否使用https
        rewrite: path => path.replace(/^\/eggServer/, 'eggServer')
        // pathRewrite: {
        //   '^/eggServer': '/eggServer'
        // }
      },
      '/mockTable': { // 请求开头识别
        target: 'http://localhost:8080', // 跨域地址
        // changeOrigin: true, // 是否跨域
        secure: false, // 是否使用https
        rewrite: path => path.replace(/^\/mock/, 'mock/randomTable.json')
        // pathRewrite: {
        //   '^/eggServer': '/eggServer'
        // }
      }
    }
  }
}

// import vue from '@vitejs/plugin-vue'
// plugins: [vue()],
