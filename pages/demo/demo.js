
Page({
  data: {
    demo: [{
      image: 'http://img.zzhpeng.cn/Fr9Zq23WuchKUcBHAZB7gwhCIZvR',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。上身挺括显瘦，垂坠飘逸、不易皱好打理。上身挺括显瘦，垂坠飘逸、不易皱好打理。上身挺括显瘦，垂坠飘逸、不易皱好打理。上身挺括显瘦，垂坠飘逸、不易皱好打理。上身挺括显瘦，垂坠飘逸、不易皱好打理。',
      count: '888',
      delCount: '666'
    },{
        image: 'http://img.zzhpeng.cn/Fr9Zq23WuchKUcBHAZB7gwhCIZvR',
      title: '显瘦中长款系带风衣',
      describe: '柔软顺滑、上身挺括',
      count: '888',
      delCount: '666'
      },{
        image: 'http://img.zzhpeng.cn/Fr9Zq23WuchKUcBHAZB7gwhCIZvR',
      title: '显瘦中长款系带风衣',
        describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。飘逸、不易皱好打理。飘逸、不易皱好打理。飘逸、不易皱好打理。飘逸、不易皱好打理。飘逸、不易皱好打理。飘逸、不易皱好打理。飘逸、不易皱好打理。',
      count: '888',
      delCount: '666'
      }, {
        image: 'http://img.zzhpeng.cn/Fr9Zq23WuchKUcBHAZB7gwhCIZvR',
        title: '显瘦中长款系带风衣',
        describe: '柔软顺滑、上身挺括显瘦，垂坠飘逸、不易皱好打理。飘逸、不易皱好打理。飘逸、不易皱好打理。飘逸、不易皱好打理。飘逸、不易皱好打理。飘逸、不易皱好打理。飘逸、不易皱好打理。飘逸、不易皱好打理。',
        count: '888',
        delCount: '666'
      }

    ]
  },

  onLoad(options) {
    wx.lin.renderWaterFlow(this.data.demo, false, () => {
      console.log('渲染成功')
    })
  }
})  