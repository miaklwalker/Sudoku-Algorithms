import Finder from '../finder.js'
import GroupSolver from './groupSolver.js';
export default class RowSolver extends Finder {
    constructor () {
        super('rowSolver')
    }
    findPossible(puzzle,callback){
        for(let group = 0 ; group < puzzle.rows.length ; group++){
            const used = [];
            let row = puzzle.rows[group];
            for(let member = 0 ; member < 9 ; member++ ){
                let cell = callback(row.members[member]);
                if(cell.value !== 0){
                    used.push(cell.value);
                }
            }
            for(let i = 0 ; i < 9 ; i++){
                let cell = callback(row.members[i]);
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