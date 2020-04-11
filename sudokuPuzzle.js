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

    addFinderAlgorithm(finder){
        this.finders.push(finder);
        this[finder.NAME] = finder;
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
                this.logging && console.info('solved by Human Theory Solver');
                cell.value = value
                }
            }
        })
    }
    solvePuzzle(){
        let runs = 0
        while(this.solved() === false && runs < 100){
            runs++
            this.findPossible();
            this.solveLayer();
        }
        return runs;
    }

}

