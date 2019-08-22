const Koa = require('koa')
const Router = require('koa-router')
const InitManager = require('./core/init')

const app = new Koa()

InitManager.initCore(app)

app.listen(3000)