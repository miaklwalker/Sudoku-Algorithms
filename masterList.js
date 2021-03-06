import Cell from "./cell.js";

export default class MasterList {
    constructor(config){
        this.cells = config||this.init();
    }
    init(){
        let cells = {}
            for(let i = 0 ; i < 81 ; i++){
                cells[i] = new Cell(0,i);
            }
        return cells;
    }
    forEach(callBack){
        for(let i = 0; i < 81 ; i++){
            callBack(this.cells[i],i)
        }
    }
}