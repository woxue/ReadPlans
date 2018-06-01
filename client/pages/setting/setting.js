// pages/setting/setting.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    cache: [
      { iconurl: '/images/icon/wx_app_clear.png', title: '缓存清理', tap: 'clearCache' }
    ],
    device: [
      { iconurl: '/images/icon/wx_app_cellphone.png', title: '系统信息', tap: 'showSystemInfo' },
      { iconurl: '/images/icon/wx_app_network.png', title: '网络状态', tap: 'showNetWork' },
      { iconurl: '/images/icon/wx_app_location.png', title: '地图显示', tap: 'showMap' },
      { iconurl: '/images/icon/wx_app_compass.png', title: '指南针', tap: 'showCompass' },
      { iconurl: '/images/icon/wx_app_lonlat.png', title: '当前位置、速度', tap: 'showLonLat' },
      { iconurl: '/images/icon/wx_app_shake.png', title: '摇一摇', tap: 'shake' },
      { iconurl: '/images/icon/wx_app_scan_code.png', title: '二维码', tap: 'scanQRCode' }
    ],
    api: [
      { iconurl: '/images/icon/wx_app_list.png', title: '下载pdf、word文档', tap: 'downloadDocumentList' },
      { iconurl: '', title: '用户登陆', tap: 'login' },
      { iconurl: '', title: '校验用户信息', tap: 'check' },
      { iconurl: '', title: '获取用户加密信息', tap: 'decrypted' },
      { iconurl: '', title: '模板消息', tap: 'tplMessage' },
      { iconurl: '', title: '微信支付', tap: 'wxPay' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app._getUserInfo();
    this.setData({
      userInfo: app.globalData.g_userInfo,
      isLogin: app.globalData.g_userInfo
    })

  },
  //用户登录按钮
  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      app._getUserInfo();
      this.setData({
        isLogin: true,
        userInfo: e.detail.userInfo
      })
    } else {
      //用户按了拒绝按钮
    }
  },

  //显示模态窗口
  showModal: function (title, content, callback) {
    wx.showModal({
      title: title,
      content: content,
      confirmColor: '#1F4BA5',
      cancelColor: '#7F8389',
      success: function (res) {
        if (res.confirm) {
          callback && callback();
        }
      }
    })
  },

  // 缓存清理
  clearCache: function () {
    this.showModal('缓存清理', '确定要清除本地缓存吗？', function () {
      wx.clearStorage({
        success: function (msg) {
          wx.showToast({
            title: "缓存清理成功",
            duration: 1000,
            mask: true,
            icon: "success"
          })
        },
        fail: function (e) {
          console.log(e)
        }
      })
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})