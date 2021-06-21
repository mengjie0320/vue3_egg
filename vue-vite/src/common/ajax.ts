import axios from 'axios';
// axios.defaults.baseURL = 'eggServer';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = false; // 跨域设置，false忽略跨域cookies（Access-Control-Allow-Headers:*）
axios.defaults.timeout = 16000;

// 动态设置本地和线上接口域名
// Vue.axios.defaults.baseURL = gbs.host;

function getCsrfToken() {
    var token = /;?\s*csrfToken\=([^;]*)/.exec(document.cookie);
    return (token && token[1]) || '';
}

/**
 * 封装axios的通用请求
 * @param  {string}   type      get或post
 * @param  {string}   url       请求的接口URL
 * @param  {object}   data      传的参数，没有则传空对象
 * @param  {Function} fn        回调函数
 * @param  {boolean}   tokenFlag 是否需要携带token参数，为true，不需要；false，需要。一般除了登录，等需要
 */
var ajax = {
    fetch: function (opts) {
        opts = Object.assign({
            type: 'get'
        }, opts || {});
        // if (!/^\/lct/.test(opts.url)) {
        //     opts.url = '/lct' + opts.url;
        // }

        opts.url = '//localhost:7003' + opts.url; // TODO process
        // if (process.env.NODE_ENV !== 'production' && !/oa\.com$/.test(location.host)) {
        //     opts.url = '//localhost:7003' + opts.url;
        // }

        return new Promise((resolve, reject) => {
            if(opts.useCache){
                var data = window.sessionStorage.getItem(opts.url + JSON.stringify(opts.data));
                if(data!=null) {
                    return  resolve(JSON.parse(data) || {});
                }
            }
            axios[opts.type](opts.url, opts.data || {}, opts.config || {}).then((res) => {
                if (res.status === 302 || res.status === 301) {
                    location.href = res.headers.location;
                }
                if (res.status !== 200) {
                    console.error(res);
                }
                if(opts.useCache){
                    window.sessionStorage.setItem(opts.url +  JSON.stringify(opts.data), JSON.stringify(res.data));
                }
                resolve(res.data || {});
            }).catch((err) => {
                console.log('ajax fetch err ---> ', err);
                // if (typeof err.response === 'undefined'&&process.env.NODE_ENV !== 'local') {
                //     location.href = 'http://passport.oa.com/modules/passport/signin.ashx?url=' + encodeURIComponent(location.href);
                // } else {
                //     reject(err);
                // }
            });
        });
    },
    getCsrfToken: getCsrfToken
};

export default ajax;
