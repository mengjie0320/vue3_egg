var $wrap = null,_d = null;
    
function aboutLct(config) {
    if(!(this instanceof aboutLct)) {
        return new aboutLct(config);
    }
    
    this.config = config;
    this.$el = $(this.config.el);
    this.init();
    return this;
}

$.extend(aboutLct.prototype, {
    init: function () {
        var self = this;
        var config = self.config;
        if( config.cfg._data){
            _d = config.cfg._data;
        }else{
            return;
        }
        $.getScript("/lego/util.js",function(){  //加载成功后，并执行回调函数
            console.log("加载util.js文件");
            __getWidgetHtml('/lego/mods/riskNotice/index.shtml', function (temp) {
                if (temp) {
                    var html = $(temp).tmpl( config.cfg._data );
                    $(config.el).html(html)
                }
            })
        });
    }
});

function initView(el, cfg, mdvApp, callback) {
    
    var ins = new aboutLct({
        el: el,
        cfg: cfg,
        mdvApp: mdvApp
    });

    callback && callback(ins);
    return ins;

}