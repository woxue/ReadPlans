//这里是数据类，所有从数据库中缓存过来的数据都应该在这里

//计划列表
var planList = [
  {
    userId: "",
    planId: 1,
    isbn13: "9787505715660",
    bookImgUrl: "https://img3.doubanio.com\/mpic\/s1001902.jpg",
    bookName: "小王子",
    dateStart: "2018-2-22",
    dateFinish: "2018-5-21",
    pagesFinished: "11",
    pagesTotal: "111",
    description: "书中以一位飞行员作为故事叙述者，讲述了小王子从自己星球出发前往地球的过程中，所经历的各种历险。作者以小王子的孩子式的眼光，透视出成人的空虚、盲目，愚妄和死板教条，用浅显天真的语言写出了人类的孤独寂寞、没有根基随风流浪的命运。同时，也表达出作者对金钱关系的批判，对真善美的讴歌。",
    price: "",
    isPrivate: false,
  },
  {
    userId: "",
    planId: 2,
    isbn13: "9787505715660",
    bookImgUrl: "https://img3.doubanio.com\/mpic\/s1001902.jpg",
    bookName: "小王子",
    dateStart: "2018-2-22",
    dateFinish: "2018-5-21",
    pagesFinished: "11",
    pagesTotal: "111",
    description: "书中以一位飞行员作为故事叙述者，讲述了小王子从自己星球出发前往地球的过程中，所经历的各种历险。作者以小王子的孩子式的眼光，透视出成人的空虚、盲目，愚妄和死板教条，用浅显天真的语言写出了人类的孤独寂寞、没有根基随风流浪的命运。同时，也表达出作者对金钱关系的批判，对真善美的讴歌。",
    price: "",
    isPrivate: false,
  },
  {
    userId: "",
    planId: 3,
    isbn13: "9787505715660",
    bookImgUrl: "https://img3.doubanio.com\/mpic\/s1001902.jpg",
    bookName: "小王子",
    dateStart: "2018-2-22",
    dateFinish: "2018-5-21",
    pagesFinished: "11",
    pagesTotal: "111",
    description: "书中以一位飞行员作为故事叙述者，讲述了小王子从自己星球出发前往地球的过程中，所经历的各种历险。作者以小王子的孩子式的眼光，透视出成人的空虚、盲目，愚妄和死板教条，用浅显天真的语言写出了人类的孤独寂寞、没有根基随风流浪的命运。同时，也表达出作者对金钱关系的批判，对真善美的讴歌。",
    price: "",
    isPrivate: false,
  }
]

//笔记列表
var noteList = [
  {
    noteId: 1,
    userId: "",
    planId: "1",
    createTime: "1484723344",
    content: "那一年的毕业季，我们挥挥手，来不及说再见，就踏上了远行的火车。",
    isPrivate: false,
  },
  {
    noteId: 2,
    userId: "",
    planId: "1",
    createTime: "1481018319",
    content: "夏日的蝉鸣与夜晚的火车，时长会在未来无数的日子里不断的在我耳边响起，难以忘怀",
    isPrivate: false,
  },
]

module.exports = {
  planList: planList,
  noteList: noteList,
}