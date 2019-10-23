// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList:[
    ],
    catId:1,
    pageSize:20,
    pageIndex:0,
    // 判断是否触底的变量
    haMore:true
  },
  // 封装请求数据方法
  loadMore(){
    // 如果已经触底不再请求数据，直接返回
    if (this.data.hasMore==false) {
      return false;
    }
    wx.request({
      url: 'https://locally.uieee.com/categories/' + this.data.catId + '/shops',
      data: {
        _limit: this.data.pageSize,
        // 每次请求都更新当前页码
        _page: ++this.data.pageIndex
      },
      success: res => {
        console.log(res);
        // 累加请求到的数据
        var newList = this.data.shopList.concat(res.data)
        var total = res.header['X-Total-Count'] - 0;
        console.log(total)
        var flag = this.data.pageIndex*this.data.pageSize < total
        this.setData({
          shopList: newList,
          hasMore:flag
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 根据首页传递过来的参数，设置导航条标题
    wx.setNavigationBarTitle({    
      title: options.title
    })
    // 设置catId的原因是因为在触发上拉触底的事件中没有opations参数
    this.setData({
      catId:options.cat
    })
    this.loadMore()
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
    this.setData({
      shopList:[],
      pageIndex:0,
      hasMore:true
    })
    this.loadMore()
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉触底")
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})