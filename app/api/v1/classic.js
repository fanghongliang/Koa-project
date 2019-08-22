const Router = require('koa-router')
const router = new Router()

router.post('/v1/:id/classic/latest', (ctx, next)=> {
  const path = ctx.params    //url链接中参数
  const query = ctx.request.query     //?后面的query参数
  const headers = ctx.request.header    //header里面的参数，如token
  const body = ctx.request.body   //body里面的json参数
  if(path.id == 3 ) {
    ctx.body = {
      key: "classics",
      name: "fanghl",
      content: `你成功传输了前后端内容${path.id}${body.name}`
    } 
  } else {
    ctx.body = {
      key: "classics",
      name: "fanghl",
      content: `你fail传输了前后端内容`
    }
  }
})

module.exports = router