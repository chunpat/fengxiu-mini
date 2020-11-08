const { FenceGroup } = require("../models/fence-group");
const { Judger } = require("../models/judger");
const { SkuCode } = require("../models/sku-code");

Component({
  data: {
    fenceGroup:[],
    judger:Object
  },
  properties: {
    spu:Object
  },
  methods: {
    init(spu){
      const fenceGroup = new FenceGroup(spu);
      fenceGroup.initFences(spu)

      //排列组合
      this.judger = new Judger(spu)
      this.fenceGroup = fenceGroup.value
      this.setData({
        fenceGroup:fenceGroup.value
      });
    },
    onCellTap(event){
      console.log('onCelltap',event)
      console.log('this.fenceGroup',this.fenceGroup)
      this.judger.changeStatus(event.detail.cell,this.fenceGroup)
      this.setData({
        fenceGroup:this.judger.fenceGroup
      })
    }
  },
  //监听数据变化
  observers:{
    'spu':function(spu){
      if(!spu){
        return
      }
      this.init(spu)
    }
  }

})