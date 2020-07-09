//index.js
//获取应用实例
const app = getApp()
let ST = null;
Page({
  // 当前页面WXML模板中可以用来做数据绑定的初始数据
  data: {
    motto: 'Hello World',
    arrForObj: [
      {id: 123, name: 'aaa'},
      {id: 456, name: 'bbb'}
    ],
    arr: [ 123, 345, 567],
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2020-07-09'
    },
    item2: {
      index: 1,
      msg: 'this is a template2',
      time: '2020-07-09'
    }
  },
  // 监听页面加载，触发时机早于onShow和onReady: onLoad在页面没被销毁之前只会触发1次
  onLoad: function (options) {// options: url参数
    const global = getApp()
    this.setData({
      msg: global.globalData.msg
    }, () => { // 在这次setData对界面渲染完毕后触发
      console.log(this)
    })
    console.log(options)
  },
  // 监听页面初次渲染完成: 表示页面已经准备妥当，在逻辑层就可以和视图层进行交互了
  onReady: function () {

  },
  // 监听页面显示，触发事件早于onReady: 页面显示之后，Page构造器参数所定义的onShow方法会被调用，一般从别的页面返回到当前页面时，当前页的onShow方法都会被调用。
  onShow: function () {},
  // 监听页面隐藏
  onHide: function () {},
  // 监听页面卸载: 使用wx.redirectTo或wx.navigateBack返回到其他页时,当前页面会被微信客户端销毁回收,onUnload方法会被调用
  onUnload: function () {},
  // 页面相关事件处理函数--监听用户下拉动作： 需要在json中配置enablePullDownRefresh为true
  onPullDownRefresh: function () {
    console.log('下拉了')
    ST = setTimeout(() => {
      // 停止当前页面的下拉刷新
      wx.stopPullDownRefresh({
        success: (res) => {
          console.log('停止下拉')
        },
      })
    }, 1000)
  },
  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
    console.log('最底下了')
  },
  // 用户点击右上角转发： 在用户点击转发按钮的时候会调用，此事件需要return一个Object，包含title和path两个字段，用于自定义转发内容
  onShareAppMessage: function (options) {
    console.log(options)
    return {
      title: "要转发了",
      path: "https://www.baidu.com"
    }
  },
  // 页面滚动触发事件的处理函数
  onPageScroll: function () {},
  // 其他,可以添加任意的函数或数据，在Page实例的其他函数中用 this 可以访问
  goTestPage: function () {
    // navigateTo跳转的页面不能tabBar配置的页面，可使用wx.switchTab跳转。绝对路劲前加'/'，否则报错
    // 补充：wx.navigateTo和wx.redirectTo只能打开非TabBar页面，wx.switchTab只能打开Tabbar页面
    // wx.navigateBack() 退出当前页面栈的最顶上页面
    // wx.redirectTo({ url: 'pageE' }) 替换当前页变成pageE
    // wx. reLaunch({ url: 'pageH' }) 重启小程序
    wx.navigateTo({
      url: '/pages/test/test?form=index&other=test'
    })
  },
  handleTap1() {
    console.log('handleTap1')
  },
  handleTap2() {
    console.log('handleTap2')
  },
  handleTap3() {
    console.log('handleTap3')
  },
  handleTap4() {
    console.log('handleTap4')
  },
  goFlexDemo() {
    wx.navigateTo({
      url: '/pages/flexDemo/flexDemo'
    })
  }
})
