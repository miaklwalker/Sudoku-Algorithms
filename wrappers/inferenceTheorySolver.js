import Finder from '../finder.js'
import InferenceSolver from '../finders/InferenceSolver.js';

export default class inferenceTheorySolver extends Finder {
    constructor () {
        super('humanTheorySolver')
        this.solver = new InferenceSolver()

    }
    findPossible(puzzle , callback){
        [puzzle.rows,puzzle.groups,puzzle.columns]
        .forEach(type=>{
            this.solver.findPossible(type,callback)
        })

    }
}