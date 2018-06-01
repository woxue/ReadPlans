//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
        //this._getUserInfo();
    },
    //获取用户信息
    _getUserInfo: function () {
      var userInfoStorage = wx.getStorageSync('user');
      if (!userInfoStorage) {
        var that = this;
        wx.login({
          success: function () {
            wx.getUserInfo({
              success: function (res) {
                that.globalData.g_userInfo = res.userInfo
                wx.setStorageSync('user', res.userInfo)
              },
              fail: function (res) {
              }
            })
          }
        })
      }
      else {
        this.globalData.g_userInfo = userInfoStorage;
      }
    },
    //全局变量
    globalData: {
      g_userInfo: null
    }
})