function LegoModel(config){
    this.config = Object.assign({
        selector: '.js-lg',
        modPrefix: './mods'
    }, config);
    this.mods = [];
    this.tplLoaders = {};
    this.init();
}

Object.assign(LegoModel.prototype, {
    init: function(){
        console.log('init ---> this.config', this.config);
        this.render();
    },
    render: function(){
        var self = this;
        // $('.mdv-content').append('<div class="js-lg" mdv-name="btn-link" mdv-data=\'{"float":"1","type":"returnBtn3","content":"返回理财日报"}\'></div>');
        console.log('this.config ---> ', this.config);
        var $els = document.querySelector(this.config.selector);
        console.log('render $els ---> ', $els);
        if($els && $els.length > 0){
            $els.forEach(function(el) {
                var data = self.resovleLgData(el);
                self.addModule(el, data);
            })
        }
    },
    resovleLgData: function(el){
        // 获取配置及变量名等传递过来的数据
        var config = this.config;
        var $el = document.querySelector(el);
        console.log('$el ---> ', $el);
        var mod = $el.attr('mdv-name'),
            data = $el.attr('mdv-data');
        console.log('mod,data ---> ', mod,data);
        data = JSON.parse(data);
        return {
            // mod: mod + '/index',
            mod: mod,
            _data: data,
            _container: config.container
        }
    },
    addModule: function(el, data){
        var self = this;
        var mod = data.mod;
        console.log('addModule ---> ', data, el);
        if(!mod) return;
        // 对应模块名称引入加载
        // ? 是否需要模块化式引入
        var lmObj = {
            name: mod,
            el: el,
            // callbacks: []，添加副作用函数
        }
        // 加载的多的话可以设置一个共享变量，处理加载loading
        // lmObj.onload = function () {
        //     seajs.use(mod, function (Mod) {
        //         lmObj.mod = el._mdvMod = Mod.initView(el, data, self);
        //     });
        // };
        // lmObj.onload();
        // var script = document.createElement('script');
        // script.type = 'text/javascript';
        // script.onload = function(){};
        // script.src = `${mod}.js`;
        // document.getElementsByTagName('head')[0].appendChild(script);
        $.getScript(`${mod}.js`,function(){  //加载test.js,成功后，并执行回调函数
            initView(el, data, self)
        });
        self.mods.push(lmObj);
    }
})


function lMInit(box) {
    $pageBox = box || document.body.querySelector('.box') || document.body;
    var ins = new LegoModel({
        container: $pageBox
    })
    return ins;
}