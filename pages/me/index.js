//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    userInfo: {},
    systemInfo: {},
  },
  getSystemInfo:function(){
    var _this =this;
    wx.getSystemInfo({
      success: function(res) {
      _this.setData({
        systemInfo:res
      });
      },
    })
  },
  getUserInfo: function (callback) {
    var _this = this;
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        _this.setData({
          userInfo: res.userInfo
        });
      }
    })
  },
  onShow: function () {
    this.getUserInfo();
    this.getSystemInfo();
  },
  onLoad: function () {

  }
});