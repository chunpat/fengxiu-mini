import { Matrix } from "./matrix"

const { Fence } = require("./fence")

class FenceGroup{
    spu
    skuList
    value
    constructor(spu){
        this.spu = spu
        this.skuList = spu.sku_list
    }

    initFences1(){
        const matrix = this._createMatrix(this.skuList)
        let current = -1
        let fenceGroup = []
        let fence = this._createFence()
        matrix.forEach((element,i,j)=>{
           if(current !== j){
             console.log('j',j)
             current = j
             fenceGroup[j] = this._createFence()
           }
           fenceGroup[j].pushValueTitle(element.value)
        });
        console.log(fenceGroup)
    }

    initFences(){
        console.log('fence')
        const matrix = this._createMatrix(this.skuList)
        let current = -1
        let fenceGroup = []
        let transponse = matrix.transponse()
        transponse.forEach((trans)=>{
            const fence = new Fence(trans)
            fence.init()
            fenceGroup.push(fence)
        });
        this.value = fenceGroup
        console.log('fenceGroup',fenceGroup)
    }

    _createFence(){
        return new Fence();
    }

    _createMatrix(skuList){
        let matrix = [];
        skuList.forEach(element => {
            matrix.push(element.specs)
        });
        return new Matrix(matrix);
    }
}

export {
    FenceGroup
}