import { Spu } from "../../models/spu";

Page({
    data: {
        spuId:null,
        spu:Object
    },
    async onLoad(options) {
        this.spuId = options.id;
        this.spu = await Spu.getSpuDetail(this.spuId);
    },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  onShareTimeline: function () {
    return {
      title: '自定义转发标题',
      query: 'id=123',
      imageUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3302088356,2539165849&fm=26&gp=0.jpg'
    }
  },
})