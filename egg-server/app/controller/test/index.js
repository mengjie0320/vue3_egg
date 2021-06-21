// import { Context } from 'egg';
// export default class TestIndexController {
//     async testProxy(ctx: Context){
//         return await ctx.service.test.index.testProxy(ctx.query);
//     }
// }


const Controller = require('egg').Controller;
class TestController extends Controller{
    async testProxy(){
        const { service, ctx } = this;
        console.log('ctx ---> ', ctx);
        console.log('ctx.query ---> ', ctx.query);
        let result = await service.test.index.testProxy(ctx.query);
        ctx.body = {
            retcode: '0',
            retmsg: 'ok',
            data: result
        };
    }
}
module.exports = TestController;
