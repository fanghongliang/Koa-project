//全局错误捕获中间件
const {HttpException} = require('../core/http-exception')

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    //开发环境
    //生产环境
    if(global.config.environment === "dev") {
      throw error
    }
    
    if(error instanceof HttpException) {        //已知异常
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.code
    } else {                                   //处理未知异常
      ctx.body = {
        msg: 'make a error',
        error_code: 999,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = 500
    }
  }
}

module.exports = catchError