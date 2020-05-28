Component({
  data: {
    spu:[],
    tags:[]
  },
  properties: {
    data: Object,
  },
  methods: {
    onSpuDetail: function(event) {
      console.log('event',event)
      wx.redirectTo({
        url: '/pages/detail/detail?id=' + event.currentTarget.dataset.id
      });;
    }
  },

  observers: {
    'data': function (data) {
      if(!data){
        return;
      }
      var tags = [];
      if(data.tags){
        tags = data.tags.split('$')
      }
      this.setData({
        spu: data,
        tags:tags
      })
    }
  }

})