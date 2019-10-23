Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideList:[],
    navList:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    // console.log("a:页面加载完毕");
    // console.log(wx);
    // console.log(window);
    // console.log(document);
    wx.request({
      url:'https://locally.uieee.com/slides ',
      success:res=>{
        this.setData({
          slideList:res.data
        })
      }
    });
    wx.request({
      url: 'https://locally.uieee.com/categories',
      success:res=>{
        this.setData({
          navList:res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log("a:页面初次渲染完成");
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log("a:监听页面显示")
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log("a:监听页面隐藏");
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log("a:监听页面卸载")
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // console.log("a:监听用户下拉动作")
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log("a:监听上拉触底时间")
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    // console.log("a:监听分享");
  }
})