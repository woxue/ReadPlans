var util = require("../utils/util.js");

class DBNote {
  constructor(planId) {
    this.storageKeyName = 'NoteList';
    this.planId = planId;
  }

  //获取指定noteId号的文章数据
  getNoteItemById() {
    var NotesData = this.getAllNoteData();
    var len = NotesData.length;
    for (var i = 0; i < len; i++) {
      if (NotesData[i].noteId == this.NoteId) {
        return {
          index: i,
          data: NotesData[i]
        }
      }
    }
  }

  getNoteItemById(id) {
    var NotesData = this.getAllNoteData();
    var len = NotesData.length;
    for (var i = 0; i < len; i++) {
      if (NotesData[i].noteId == id) {
        return {
          index: i,
          data: NotesData[i]
        }
      }
    }
  }

  //获取指定planId的笔记列表
  getNotesByPlanId(pid) {
    var NotesData = this.getAllNoteData();
    var len = NotesData.length;
    var resList = [];
    for (var i = 0; i < len; i++) {
      if (NotesData[i].planId == pid) {
          resList.push({
            index: i,
            data: NotesData[i]
          });
      }
    }
    //按时间降序排列笔记
    resList.sort(this.compareWithTime);
    var len = resList.length;
    for(var i = 0; i < len; i++) {
      //将note中的时间戳转换成可以阅读的格式
      resList[i].data.createTime = util.getDiffTime(resList[i].data.createTime, true);
    }
    return resList;
  }

  //排序笔记用的比较函数
  compareWithTime(value1, value2) {
    var flag = parseFloat(value1.createTime) - parseFloat(value2.createTime);
    if (flag < 0) {
      return 1;
    } else if (flag > 0) {
      return -1;
    } else {
      return 0;
    }
  }

  //将新笔记存入storage.NoteList
  updateNewNote(note) {
    var allNoteData = this.getAllNoteData();
    allNoteData.unshift(note);
    this.execSetStorageSync(allNoteData);
  }

  //将新笔记存入storage.NoteList
  updateChangeNote(noteNew) {
    var allNoteData = this.getAllNoteData();
    var itemData = this.getNoteItemById(noteNew.noteId);
    var noteData = itemData.data;
    allNoteData[itemData.index] = noteNew;
    this.execSetStorageSync(allNoteData);
  }

  //从storage删除笔记
  deleteNote(id) {
    var itemData = this.getNoteItemById(id),
      noteData = itemData.data,
      allNoteData = this.getAllNoteData();
    for (var i = itemData.index; i < allNoteData.length; i++) {
      allNoteData[i] = allNoteData[i + 1];
    }
    allNoteData.length--;
    this.execSetStorageSync(allNoteData);
  }

  /*得到全部文章信息*/
  getAllNoteData() {
    var res = wx.getStorageSync(this.storageKeyName);
    if (!res) {
      res = require('../data/data.js').noteList;
      this.execSetStorageSync(res);
    }
    return res;
  }

  /*初始化缓存数据*/
  execSetStorageSync(data) {
    wx.setStorageSync(this.storageKeyName, data);
  }

  //更新本地的数据
  updateNoteData(operator) {

  }

};

export { DBNote }