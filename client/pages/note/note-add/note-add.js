// pages/note/note-add/note-add.js
import { DBNote } from '../../../db/DBNote.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    note:{
      noteId: "",
      userId: "",
      planId: "",
      createTime: "",
      content: "",
      isPrivate: false,
    },
    textNum: 0,
    changeNote: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.id) {
      this.data.note.planId = options.id;//取得查看详情传来的参数：planId
    }
    else {
      var dbNote = new DBNote();
      this.dbNote = new DBNote();
      
      var item = dbNote.getNoteItemById(options.noteId);
      this.setData({
        note: item.data,
        changeNote: true,
        idx: item.index,
      });
    }
  },

  // 获取用户输入
  bindNoteInput: function (event) {
    var val = event.detail.value;
    this.data.note.content = val;
    var len = val.length;
    this.setData({
      textNum: len
    });
  },

  //用户改变隐私设置
  switchChangePrivacy: function (e) {
    this.data.note.isPrivate = !this.data.note.isPrivate;
  },

  //按键：确认添加，将笔记内容放入notes
  onTapToConfirm: function(event) {
    //没有将用户个人信息（userId）写入

    this.data.note.createTime = new Date().getTime() / 1000;
    //noteId唯一标识笔记：生成方式为userId+createTime
    this.data.note.noteId = this.data.note.userId.toString() + this.data.note.createTime.toString();
    //将笔记存入storage
    var dbNote = new DBNote();
    dbNote.updateNewNote(this.data.note);
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

  //按键：确认修改，将笔记内容更新入notes
  onTapToConfirmChange: function (event) {
    //将笔记存入storage
    var dbNote = new DBNote();
    dbNote.updateChangeNote(this.data.note);
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