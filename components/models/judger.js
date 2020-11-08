import { CellStatus } from "../../core/enum";
import { SkuCode } from "./sku-code";

class Judger{
    spu
    pathDict = []
    fenceGroup

    constructor(spu){
        this.spu = spu
        this._initPathDirt()
    }

    _initPathDirt(){
        this.spu.sku_list.forEach(element => {
            const skuCode = new SkuCode(element.code)
            this.pathDict = this.pathDict.concat(skuCode.codes)
        });
        console.log('this.pathDict',this.pathDict);
    }

    changeStatus(cell,fenceGroup){
        let newStatus;
        if(cell.status == CellStatus.WAITING){
            newStatus = CellStatus.SELECTED
        }else if(cell.status == CellStatus.SELECTED){
            newStatus = CellStatus.WAITING
        }else{
            return;
        }
        console.log('newStatus',newStatus)
        fenceGroup.forEach(fence=>{
            fence.cells.forEach(oldCell=>{
                if(oldCell.id == cell.id){
                    oldCell.status = newStatus
                    return;
                }
            })
        })
        this.fenceGroup = fenceGroup
    }
}

export {
    Judger 
}