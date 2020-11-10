class CellsPendding{
  //已选cell
  cells = [];
  constructor(cellsLength){
    for (let index = 0; index < cellsLength; index++) {
      this.cells[index] = null;
    }
  }

  updateCell(index,value){
    this.cells[index] = value
  }

  removeCell(index){
    this.cells[index] = null
  }
}

export {
  CellsPendding
}