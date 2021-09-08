
// $.getScript("/lego/util.js",function(e){  //加载成功后，并执行回调函数
//     eval(e);
//     console.log("加载util.js文件");
// });

// function __getWidgetHtml(url, callback) {
//     if (url.indexOf('/') === 0 && url.indexOf('<') === -1) {
//         $.ajax({
//                 url: url,
//                 type: 'get',
//                 dataType: 'html',
//                 "ignore_error": true,
//                 "hideLoading": true
//             })
//             .done(function (data) {
//                 if (data) data.replace(/\\'/g, "'");
//                 callback && callback(data);
//             })
//             .fail(function () {})
//             .always(function () {});
//     } else {
//         callback && callback(url);
//     }
// }


function lqNotice(config){
    this.config = config;
    this.$el = $(this.config.el);
    this.init();
}

Object.assign(lqNotice.prototype, {
    init: function(){
        var self = this;
        var config = self.config;
        self.renderLqNotice(config);
    },
    renderLqNotice: function(config){
        config.cfg._data.showStyleType = 'static';
        if(config.cfg._data.n2 != ''){
          if(config.cfg._data.tip_type){
            if(config.cfg._data.tip_type == '3'){
              if((Number(config.cfg._data.lqt_balance) > parseFloat(config.cfg._data.n2) || Number(config.cfg._data.lqt_balance) == parseFloat(config.cfg._data.n2 )) &&  Number(config.cfg._data.lqt_balance) != 0){
                config.cfg._data.showStyleType = 'lqt';
              }else if((Number(config.cfg._data.wx_lq_balance) > parseFloat(config.cfg._data.n2) || Number(config.cfg._data.wx_lq_balance) == parseFloat(config.cfg._data.n2 )) &&  Number(config.cfg._data.wx_lq_balance) != 0){
                config.cfg._data.showStyleType = 'lq';
              }
            }else if(config.cfg._data.tip_type == '2'){
              if((Number(config.cfg._data.lqt_balance) > parseFloat(config.cfg._data.n2) || Number(config.cfg._data.lqt_balance) == parseFloat(config.cfg._data.n2 )) &&  Number(config.cfg._data.lqt_balance) != 0){
                config.cfg._data.showStyleType = 'lqt';
              }
            }else if(config.cfg._data.tip_type == '1'){
              if((Number(config.cfg._data.wx_lq_balance) > parseFloat(config.cfg._data.n2) || Number(config.cfg._data.wx_lq_balance) == parseFloat(config.cfg._data.n2 )) &&  Number(config.cfg._data.wx_lq_balance) != 0){
                config.cfg._data.showStyleType = 'lq';
              }
            }
          }else{
            if(
              (Number(config.cfg._data.wx_lq_balance) > parseFloat(config.cfg._data.n2) || Number(config.cfg._data.wx_lq_balance) == parseFloat(config.cfg._data.n2 )) &&  Number(config.cfg._data.wx_lq_balance) != 0
            ){
              config.cfg._data.showStyleType = 'lq';
            }
          }
        }

        if(config.cfg._data.isMock && config.cfg._data.style_type == '2'){
          config.cfg._data.showStyleType = 'static';
        }
        // 
        
        // 加载HTML，渲染template
        $.getScript("/lego/util.js",function(){  //加载成功后，并执行回调函数
            console.log("加载util.js文件");
            __getWidgetHtml('/lego/mods/lqtNotice/index.shtml', function (temp) {
                // console.log('temp ---> ', temp);
                console.log('config ---> ', config);
                // ? config.lM.mods 多个？？？6-8
                if (temp) {
                    var html = $(temp).tmpl( config.cfg._data );
                    $(config.el).html(html)
                }
            })
        });
        
    }
})

function initView(el, cfg, lM, callback){
    var ins = new lqNotice({
        el: el,
        cfg: cfg,
        lM: lM
    })
    callback && callback(ins);
    return ins;
}