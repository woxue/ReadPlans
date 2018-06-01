// pages/plan/plan-add/plan-add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    plan: {
      planId: 1,
      isbn13: "9787505715660",
      bookImgUrl: "https://img3.doubanio.com\/mpic\/s1001902.jpg",
      bookName: "小王子",
      dateStart: "2018-2-22",
      dateFinish: "2018-5-21",
      pagesFinished: "11",
      pagesTotal: "111",
      description: "",
      isPrivate: false,
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  //输入计划开始日期
  bindDateChangeStart: function (e) {
    this.setData({
      "plan.dateStart": e.detail.value
    })
  },

  //输入计划结束日期
  bindDateChangeFinish: function (e) {
    this.setData({
      "plan.dateFinish": e.detail.value
    })
  },

  //按键：确认表单信息
  onTapToConfirm(event) {

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