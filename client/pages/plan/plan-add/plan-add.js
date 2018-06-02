// pages/plan/plan-add/plan-add.js
import { DBPlan } from '../../../db/DBPlan.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    plan: {
      userId: "",
      planId: 1,
      isbn13: "",
      bookImgUrl: "/images/book-1.jpg",
      bookName: "",
      dateStart: "2018-2-22",
      dateFinish: "2018-5-21",
      pagesFinished: "0",
      pagesTotal: "",
      description: "",
      price: "",
      isPrivate: false,
    },
    textNum: 0,
    changePlan: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.planId) {//更改计划的情况
      var dbPlan = new DBPlan();
      this.dbPlan = new DBPlan();

      var item = dbPlan.getPlanItemById(options.planId);
      this.setData({
        plan: item.data,
        changePlan: true,
        idx: item.index,
      });
    }
    else {
      var date = new Date();
      var dateInit = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();
      this.setData({
        "plan.dateStart": dateInit,
        "plan.dateFinish": dateInit,
      })
    }
    
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

  //输入书名
  inputName: function (event) {
    var val = event.detail.value;
    this.data.plan.bookName = val;
  },

  //输入页数
  inputPage: function (event) {
    var val = event.detail.value;
    this.data.plan.pagesTotal = val;
  },

  //输入价格
  inputPrice: function (event) {
    var val = event.detail.value;
    this.data.plan.price = val;
  },

  //输入描述
  inputDescription: function (event) {
    var val = event.detail.value;
    this.data.plan.description = val;
    var len = val.length;
    this.setData({
      textNum: len
    });
  },

  //用户改变隐私设置
  switchChangePrivacy: function (e) {
    this.data.plan.isPrivate = !this.data.plan.isPrivate;
  },

  //按键：确认表单信息
  onTapToConfirm(event) {
    var validPlan = this.data.plan;
    if (validPlan.bookName == "" || validPlan.pagesTotal == "") {
      wx.showToast({
        title: "请完善计划信息",
        duration: 1000,
        icon: "loading"
      })
      return;
    }
    //没有将用户个人信息（userId）写入
    //PlanId唯一标识笔记：生成方式为userId+createTime
    this.data.plan.planId = this.data.plan.userId.toString() + new Date().getTime() / 1000;
    var dbPlan = new DBPlan();
    dbPlan.updateNewPlan(this.data.plan);

    //将笔记存入数据库（后端）


    //返回到计划详情页
    wx.navigateBack({
      delta: 1
    });

    //显示操作结果
    wx.showToast({
      title: "创建成功",
      duration: 1000,
      icon: "success"
    })
  },

  onTapToConfirmChange(event) {
    var validPlan = this.data.plan;
    if (validPlan.bookName == "" || validPlan.pagesTotal == "") {
      wx.showToast({
        title: "请完善计划信息",
        duration: 1000,
        icon: "loading"
      })
      return;
    }

    var dbPlan = new DBPlan();
    dbPlan.updateChangedPlan(this.data.plan);

    //将笔记存入数据库（后端）


    //返回到计划详情页
    wx.navigateBack({
      delta: 1
    });

    //显示操作结果
    wx.showToast({
      title: "修改成功",
      duration: 1000,
      icon: "success"
    })
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