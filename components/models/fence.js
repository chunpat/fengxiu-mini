import { Cell } from "./cell";

class Fence{
    cells = []
    spec
    key_id
    key
    constructor(spec){
        this.spec = spec
        this.key_id = spec[0].key_id
        this.key = spec[0].key
    }
    init(){
        this.spec.forEach(element => {
            const isExist = this.cells.some(item=>{
                return item.id == element.value_id
            })
            if(isExist){
                return;
            }
            const cell = new Cell(element);
            this.cells.push(cell)
        });
       
    }
}

export {
    Fence
}