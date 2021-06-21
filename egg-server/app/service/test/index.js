
module.exports = app => {
    // const cgiLib = new Cgi(app);
    // const tableLib = new Table(app);
    class TestIndexService extends app.Service {
        async testProxy(params){
            console.log('params ---> ', params);
            return { retcode: 0, retmsg: '通了' }
        }
    }
    return TestIndexService
}

