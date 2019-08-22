const Router = require('koa-router')
const router = new Router()

router.get('/v1/classics/latest', (ctx, next)=> {
  ctx.body = {
    key: "classics",
    name: "fanghl"
  }
})

module.exports = router