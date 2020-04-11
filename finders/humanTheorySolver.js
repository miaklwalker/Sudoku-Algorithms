import Finder from '../finder.js'
import RowSolver from './rowSolver.js';
import ColumnSolver from './columnSolver.js';
import GroupSolver from './groupSolver.js';


export default class humanTheorySolver extends Finder {
    constructor () {
        super('humanTheorySolver')
        this.solvers = [
            new RowSolver(),
            new ColumnSolver(),
            new GroupSolver(),
        ]
    }
    findPossible(puzzle , callback){
        this.solvers.forEach( solver =>{
            solver.findPossible(puzzle,callback);
        });
    }
}