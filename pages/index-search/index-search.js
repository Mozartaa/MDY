// pages/index-search/index-search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
  },
  bindInput: function (e) {
    // console.log(e);
    this.setData({
      searchValue: e.detail.value
    })
  },
  bindSearch: function () {
    wx.showLoading({
      title: '搜索中',
    })

    wx.navigateTo({
      url: '../index-search/index-search?searchValue=' + this.data.searchValue,
      success: (res) => {
        wx.hideLoading()
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  //收藏
  close_tap: function () {
    this.setData({
      isShow: true
    })
  },

  open_tap: function () {
    this.setData({
      isShow: false
    })
  },
})