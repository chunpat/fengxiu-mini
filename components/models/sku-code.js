import { combination } from "../../utils/util"

class SkuCode{
    codes = []
    code
    spuId

    constructor(code){
        this.code = code
        this._splitToSegments()
    }
    _splitToSegments(){
        const spuAndSpec = this.code.split('$')
        this.spuId = spuAndSpec[0]
        const specs = spuAndSpec[1].split('#')
        for (let index = 1; index <= specs.length; index++) {
            let segments = combination(specs,index)
           
            const newSegment = segments.map(segs=>{
                return segs.join('#')
            })
            newSegment.forEach(item=>{
                this.codes.push(item)
            })
        }
    }
}

export {
    SkuCode 
}