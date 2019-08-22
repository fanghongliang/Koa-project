const Router = require('koa-router')
const router = new Router()

router.get('/v1/book/latest', (ctx, next)=> {
  ctx.body = {
    key: "book",
    name: "冰与火之讴歌"
  }
})

module.exports = router