// pages/plan/plan.js
import { DBPlan } from '../../db/DBPlan.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  //跳转到详情页面
  onTapToDetail(event) {
    var planId = event.currentTarget.dataset.planId;
    wx.navigateTo({
      url: 'plan-detail/plan-detail?id=' + planId,
    })
  },

  onTapToCreate(event) {
    wx.navigateTo({
      url: 'plan-add/plan-add'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var dbPlan = new DBPlan();
    this.dbPlan = new DBPlan();
  },

  //删除操作：弹出确认框
  openConfirm: function (e) {
    var planId = e.currentTarget.dataset.planId;
    var len = this.data.planList.length;
    var planList = this.data.planList;
    var that = this;

    wx.showModal({
      title: '确认删除',
      content: '您确认要删除当前选择的这个读书计划么',
      confirmText: "确认",
      cancelText: "取消",
      success: function (res) {
        if (res.confirm) {//删除这个计划
          var idx;
          for(idx = 0; idx < len; idx++) {
            if(planList[idx].planId == planId)
              break;
          }
          for(var i = idx; i < len; i++) {
            planList[i] = planList[i+1];
          }
          planList.length--;
          that.setData({
            planList: planList
          })
          that.dbPlan.deletePlan(planId);
        }
        //显示操作结果
        wx.showToast({
          title: "删除成功",
          duration: 1000,
          icon: "success"
        })
      }
    });
  },
  //更新操作：选择读到的页数
  bindPickerChange: function (e) {
    var planId = e.currentTarget.dataset.planId;
    for(var planidx in this.data.planList) {
      if (this.data.planList[planidx].planId == planId) {
        this.data.planList[planidx].pagesFinished = e.detail.value;
        this.dbPlan.updateSchedule(planId, e.detail.value);//将进度信息存到storage中
        //更新进度条
        var plan = this.data.planList[planidx];
        var a = plan.pagesFinished;
        var b = plan.pagesTotal;
        var percent = Math.floor(a / b * 100);
        //添加表示阅读百分比的percent
        this.data.planList[planidx].planPercent = percent;
      }
    }
    this.setData({
      planList: this.data.planList
    })
    
    //尚未将数据更新到data.js中:只更新的缓存中的数据，没有上传到数据库
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
    this.setData({
      planList: this.dbPlan.getAllPlanData()
    });

    var length = this.data.planList.length;
    for (var i = 0; i < length; i++) {
      var plan = this.data.planList[i];
      var a = plan.pagesFinished;
      var b = plan.pagesTotal;
      var percent = Math.floor(a / b * 100);
      //添加表示阅读百分比的percent
      this.data.planList[i].planPercent = percent;
      //添加表示页数的pageArray数组
      var array_page = Array.from(new Array(parseInt(b) + 1), (val, index) => index);
      this.data.planList[i].pageArray = array_page;
    }
    //将数据渲染到界面上
    this.setData({
      planList: this.data.planList
    })
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