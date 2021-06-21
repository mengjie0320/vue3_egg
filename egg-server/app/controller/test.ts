import { Context } from 'egg';
class TestController {
    async testProxy(ctx: Context){
        return await ctx.service.test.index.testProxy(ctx.query);
    }
}

module.exports = TestController;