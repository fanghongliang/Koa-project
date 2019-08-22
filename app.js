const Koa = require('koa')
const requireDirectory = require('require-directory')
const book = require('./api/v1/book')
const classic = require('./api/v1/classic')
const Router = require('koa-router')

const app = new Koa()

const modules = requireDirectory(module, './api', {
  visit: whenLoadModules
})

function whenLoadModules(obj) {
  if( obj instanceof Router ) {
    app.use(obj.routes())
  }
}
// app.use(book.routes())    添加自动注册插件 requireDirectory 
// app.use(classic.routes())

app.listen(3000)