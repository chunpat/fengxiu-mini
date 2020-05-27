Component({
  data: {},
  properties: {
    banner:Object,
    leftImage:Object,
    rightTopImage:Object,
    rightBottomImage:Object
  },

  methods: {

  },
  observers: {
    'banner': function (banner) {
      if(!banner.items){
        return;
      }

      if(banner.items.length == 0){
        return;
      }
  
      let leftImage = banner.items.find(t=>t.name === "left")
      let rightTopImage = banner.items.find(t=>t.name === "right-top")
      let rightBottomImage = banner.items.find(t=>t.name === "right-bottom")
      this.setData({
        leftImage: leftImage,
        rightTopImage: rightTopImage,
        rightBottomImage: rightBottomImage,
      })
    }
  }
})