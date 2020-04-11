import Finder from '../finder.js'
export default class ColumnSolver extends Finder {
    constructor () {
        super('columnSolver')
    }
    findPossible(puzzle,callback){
        for(let group = 0 ; group < puzzle.columns.length ; group++){
            const used = [];
            let col = puzzle.columns[group];
            for(let member = 0 ; member < 9 ; member++ ){
                let cell = callback(col.members[member]);
                if(cell.value !== 0){
                    used.push(cell.value);
                }
            }
            for(let i = 0 ; i < 9 ; i++){
                let cell = callback(col.members[i]);
                if(cell.value === 0){
                    used.forEach(value=>{
                        cell.potentials.delete(value);
                    })
                }else{
                    cell.potentials = new Set();
                }
            }
        }
    }
}