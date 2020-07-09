
const helloData = {
  name: "WeChat"
}
Page({
  data: helloData,
  onLoad: function (options) {
    console.log(options)
  },
  changeName: function(e) {
    this.setData({
      name: "MINA"
    })
  },
  getRunData: function() {
    wx.login({
      success: function(res) {
        let code = res.code
        console.log(res)
        if (code) {
          wx.getWeRunData({
            success: (re) => {
              const encrypteData = re.encryptedData
              wx.getUserInfo({
                success: function(r) {
                  console.log(r)
                }
              })
            },
          })
        }
      }
    })
  },
  back: function () {
    wx.navigateBack({
      delta: 0,
    })
  }
})