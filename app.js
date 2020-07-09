//app.js
// 对于小程序，可以在 App 的 onLaunch 和 onShow，或wx.getLaunchOptionsSync 中获取上述场景值。
// 对于小游戏，可以在 wx.getLaunchOptionsSync 和 wx.onShow 中获取上述场景值
App({
  // 当小程序初始化完成时触发（全局只触发一次）
  // 微信客户端会把打开方式带给onLaunch和onShow的调用参数options
  onLaunch: function (options) {
    
  },
  // 当小程序启动或从后台进入前台显示触发
  onShow: function (options) {

  },
  // 当小程序从前台进入后台会触发
  onHide: function () {

  },
  // 当小程序发生脚本错误，或者 API 调用失败时，会触发 onError 并带上错误信息
  onError: function (error) {

  },
  // 其他字段，可以添加任意的函数或数据到 Object 参数中，在App实例回调用 this 可以访问
  // 全局变量
  globalData: {
    userInfo: null,
    msg: '共享数据'
  }
})