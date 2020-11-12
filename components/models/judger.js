import { CellStatus } from "../../core/enum";
import { SkuCode } from "./sku-code";
import { CellsPendding } from "./cells-pendding";

class Judger{
    spu
    pathDict = []
    fenceGroup
    cellsPendding
    potentialPath = []

    constructor(spu,fenceGroup){
        this.spu = spu
        this.fenceGroup = fenceGroup
        this._initPathDirt()
    }

    //路劲字典
    _initPathDirt(){
        this.spu.sku_list.forEach(element => {
            const skuCode = new SkuCode(element.code)
            this.pathDict = this.pathDict.concat(skuCode.codes)
        });
        console.log('this.pathDict',this.pathDict);
    }

    change(cell,cellsPendding){
        console.log('fenceGroup',this.fenceGroup)
        this.cellsPendding = cellsPendding
        let index = this._changeCurrentCellStatus(cell)
        this._changeOtherCellStatus(cell,index)
    }

    _changeCurrentCellStatus(cell){
        let currentIndex = 0;
        this.fenceGroup.forEach((fence,index)=>{
            fence.cells.forEach(oldCell=>{
                if(oldCell.id == cell.id){
                    if(cell.status == CellStatus.WAITING){
                        oldCell.status = CellStatus.SELECTED
                        this.cellsPendding.updateCell(index,cell.id)
                    }else if(cell.status == CellStatus.SELECTED){
                        oldCell.status = CellStatus.WAITING
                        this.cellsPendding.removeCell(index)
                    }else{
                        return;
                    }
                    currentIndex = index
                    return index;
                }
                
            })
        })
        return currentIndex;
    }

    _changeOtherCellStatus(currentCell,currentIndex){
        this._fencesForEach((cell,x,y)=>{
            console.log('cell',cell)
            //排除已选
            if(this.cellsPendding.cells.includes(cell.id)){
               return ;
            }
         
            //当前行
            console.log('currentCell.id',currentCell.id)
            console.log('this.cellsPendding[x]',this.cellsPendding.cells[x])
            
            if(this.pathDict.includes(this._findCellPotentialPath(cell,x))){
                this.fenceGroup[x].cells[y].status = CellStatus.WAITING
            }else{
                this.fenceGroup[x].cells[y].status = CellStatus.FORBIDDEN    
            }
               

        })
    }

    //找出当前cell的潜在路劲
    _findCellPotentialPath(cell,x){
        let path = [];
     
        this.cellsPendding.cells.forEach((value,index)=>{
            //不是同行加其他行已选
            if(value && index != x){
                path.push(this._cellCode(value,index))
            }
            
            //同行加自己
            if(index == x){
                path.push(this._cellCode(cell.id,index))
            }
            
        });
        console.log("path.join('#')",path.join('#'))
        return path.join('#')
    }

    _cellCode(value,x){
        return this.fenceGroup[x].key_id + '-' + value
    }

    _check(cell){
        
    }

    _fencesForEach(cb){
        console.log('this.fenceGroup',this.fenceGroup)
        for (let x = 0; x < this.fenceGroup.length; x++) {
            for (let y = 0; y < this.fenceGroup[x].cells.length; y++) {
                cb(this.fenceGroup[x].cells[y],x,y)
            }
        }
      
    }


}

export {
    Judger 
}