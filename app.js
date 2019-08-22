const Koa = require('koa')

const app = new Koa()

// 应用程序对象 中间件

// 发送HTTP KOA 接受HTTP 

// 中间件 接受HTTP 中间件即一个 ： 函数

function test() {
  console.log('hello, fanghl')
}

app.listen(3000)