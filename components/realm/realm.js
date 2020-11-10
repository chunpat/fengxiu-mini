const { FenceGroup } = require("../models/fence-group");
const { Judger } = require("../models/judger");
const { SkuCode } = require("../models/sku-code");
const { CellsPendding } = require("../models/cells-pendding");

Component({
  data: {
    fences:[],
    judger:Object,
    cellsPendding:[] //已选cell
  },
  properties: {
    spu:Object
  },
  methods: {
    init(spu){
      const fenceGroup = new FenceGroup(spu);
      fenceGroup.initFences(spu)
     
      //排列组合
      this.judger = new Judger(spu,fenceGroup.value)
      
      //绑定整体数据
      this.fences = fenceGroup.value

      //初始化已选cell
      this.cellsPendding = new CellsPendding(this.fences.length);

      console.log('this.cellsPendding',this.cellsPendding)

      this.setData({
        fences:this.fences
      });
    },
    onCellTap(event){
      this.judger.change(event.detail.cell,this.cellsPendding)
      console.log('this.judger.cellsPendding',this.judger.cellsPendding)
      this.setData({
        fences:this.judger.fenceGroup
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