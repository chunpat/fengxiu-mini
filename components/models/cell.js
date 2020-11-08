import { CellStatus } from "../../core/enum"

class Cell{
    id
    title
    status = CellStatus.WAITING
    constructor(cell){
        this.title = cell.value
        this.id = cell.value_id
    }
}

export {
    Cell
}