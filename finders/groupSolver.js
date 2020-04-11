import Finder from '../finder.js'
export default class GroupSolver extends Finder {
    constructor () {
        super('groupSolver')
    }
    findPossible(puzzle , callback){
        for(let group = 0 ; group < puzzle.groups.length ; group++){
            const used = [];
            let grid = puzzle.groups[group];
            for(let member = 0 ; member < 9 ; member++ ){
                let cell = callback(grid.members[member]);
                if(cell.value !== 0){
                    used.push(cell.value);
                }
            }
            for(let i = 0 ; i < 9 ; i++){
                let cell = callback(grid.members[i]);
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