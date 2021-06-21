exports.keys = 'lct_account_new';

exports.cors = {
    origin: 'http://localhost:3000',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    // 下面这条加上才能共享跨域session，同时前端ajax请求也要加上响应的参数
    credentials: true, 
};

// exports.security = {
//     // 关闭csrf验证
//     csrf: {
//         enable: false,
//     },
//     // 白名单
//     domainWhiteList: ['*']
// };
