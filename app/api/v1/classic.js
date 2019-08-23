const Router = require('koa-router')
const router = new Router()

// const {HttpException, ParameterException} = require('../../../core/http-exception')

router.post('/v1/:id/classic/latest', (ctx, next)=> {
  const path = ctx.params    //url链接中参数
  const query = ctx.request.query     //?后面的query参数
  const headers = ctx.request.header    //header里面的参数，如token
  const body = ctx.request.body   //body里面的json参数

  if(true) {
    const error = new global.errs.ParameterException('错误', 605)   //param: msg, errorCode
    // throw error
  }

  if(path.id == 3 ) {
    ctx.body = {
      key: "classics",
      name: "fanghl",
      content: `你成功传输了前后端内容${path.id}${body.name}`
    } 
  } else {
    ctx.body = {
      status: `ok`,
      code: 601
    }
  }
})

module.exports = router