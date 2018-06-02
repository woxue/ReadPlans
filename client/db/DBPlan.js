var util = require("../utils/util.js");

class DBPlan {
  constructor(PlanId) {
    this.storageKeyName = 'planList';
    this.PlanId = PlanId;
  }

  //获取指定id号的文章数据
  getPlanItemById() {
    var PlansData = this.getAllPlanData();
    var len = PlansData.length;
    for (var i = 0; i < len; i++) {
      if (PlansData[i].planId == this.PlanId) {
        return {
          index: i,
          data: PlansData[i]
        }
      }
    }
  }

  getPlanItemById(id) {
    var PlansData = this.getAllPlanData();
    var len = PlansData.length;
    for (var i = 0; i < len; i++) {
      if (PlansData[i].planId == id) {
        return {
          index: i,
          data: PlansData[i]
        }
      }
    }
  }

  /*得到全部文章信息*/
  getAllPlanData() {
    var res = wx.getStorageSync(this.storageKeyName);
    if (!res) {
      res = require('../data/data.js').planList;
      this.execSetStorageSync(res);
    }
    return res;
  }

  /*初始化缓存数据*/
  execSetStorageSync(data) {
    wx.setStorageSync(this.storageKeyName, data);
  }

  //更新本地的数据
  updatePlanData(operator) {

  }

  //从首页更新进度写入storage
  updateSchedule(id, page) {
    var itemData = this.getPlanItemById(id);
    var planData = itemData.data;
    var allPlanData = this.getAllPlanData();
    planData.pagesFinished = page;
    allPlanData[itemData.index] = planData;
    this.execSetStorageSync(allPlanData);
    return planData;
  }

  //从首页删除计划写入storage
  deletePlan(id) {
    var itemData = this.getPlanItemById(id),
      planData = itemData.data,
      allPlanData = this.getAllPlanData();
    for (var i = itemData.index; i < allPlanData.length; i++) {
      allPlanData[i] = allPlanData[i+1];
    }
    allPlanData.length--;
    this.execSetStorageSync(allPlanData);
    return planData;
  }

  //新建计划
  updateNewPlan(Plan) {
    var allPlanData = this.getAllPlanData();
    allPlanData.unshift(Plan);
    this.execSetStorageSync(allPlanData);
  }

  //修改计划
  updateChangedPlan(planChanged) {
    var itemData = this.getPlanItemById(planChanged.planId),
      planData = itemData.data,
      allPlanData = this.getAllPlanData();
    allPlanData[itemData.index] = planChanged;
    this.execSetStorageSync(allPlanData);
  }

};

export { DBPlan }