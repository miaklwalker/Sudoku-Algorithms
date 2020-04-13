import MasterList from './masterList.js';


export default class SudokuPuzzle {
    constructor(){
        this.finders = [];
        
        this.rows = [];
        this.columns = [];
        this.groups = [];

        this.masterList = new MasterList();

        this.logging = false;

    }

    getCellById = id =>{
        return this.masterList.cells[id];
    }

    addFinderAlgorithm(finder,toStart=0){
        if(toStart === 0) {
        this.finders.push(finder);
        }else{
        this.finders.unshift(finder)
        }
        this[finder.NAME] = finder;
    }
    removeFinderAlgorithm(toStart=0){
        let finder;
        if(toStart === 0) {
        finder = this.finders.pop(finder);
        }else{
        finder = this.finders.shift(finder)
        }
        delete this[finder.NAME]
    }


    findPossible(){
        this.finders.forEach(finder=>{
            finder.findPossible(this,this.getCellById)
        })
    }

    solved(){
        const empty = []
        this.masterList.forEach(cell=>{
            if(cell.value === 0){
                empty.push(cell);
            }
        })
        return (empty.length === 0)
    }

    solveLayer(){
        this.masterList.forEach(cell=>{
            if(cell.potentials.size === 1){
                let value = cell.potentials.values().next().value;
                if(value !== 0){
                cell.value = value
                }
            }
        })
    }
    solvePuzzle(){
        let runs = 0
        while(this.solved() === false && runs < 50){
            runs++
            this.findPossible();
            this.solveLayer();
        }
        return runs;
    }

}

