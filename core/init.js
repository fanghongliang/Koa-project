const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitManager{
  static initCore(app) {
    //入口方法
    InitManager.app = app
    InitManager.initLoadRouters()
    InitManager.loadHttpException()
  }

  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/app/api`
    requireDirectory(module, apiDirectory, {
      visit: whenLoadModules
    })
    
    function whenLoadModules(obj) {
      if( obj instanceof Router ) {
        InitManager.app.use(obj.routes())
      }
    }
  }

  static loadHttpException() {              //初始启动时，调用静态方法，存储全局错误捕获
    const errors = require('./http-exception')
    global.errs = errors
  }
}

module.exports = InitManager