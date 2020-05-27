Component({
  data: {},
  properties: {
    data: Object,
  },
  methods: {
    spu:[],
    tags:[]
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