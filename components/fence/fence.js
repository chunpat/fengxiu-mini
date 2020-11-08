Component({
  data: {},
  properties: {
    fence:Object
  },
  methods: {
    
  },
  //监听数据变化
  observers:{
    'fence':function(fence){
      console.log('fence1',fence)
    }
  }
})