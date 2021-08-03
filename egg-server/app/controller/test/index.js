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

let line = 180 || 2000000014;
console.log(line);
    let str = '', num = line, center = line / 2;
    while(line != 1 && line > center){
        for(let i = 2; i <= center; i++){
            if(line % i == 0){
                line /= i;
                str = str + i + " ";
                break;
            }
        }
    }
    if(line > 1){
        if(line == num){
            str = 1 + " " + num + " ";
        }else{
            str = str + line + " ";
        }
    }
    
    console.log(str);