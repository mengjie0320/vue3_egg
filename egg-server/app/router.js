module.exports = app => {
    // app.get('/', 'test.testProxy');
    app.get('/eggServer/testProxy', 'test.index.testProxy');
    // router.post('/news/api', controller.news.api);
};