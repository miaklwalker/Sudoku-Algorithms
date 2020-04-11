import Finder from '../finder.js'
import rowInferenceSolver from './rowInferenceSolver.js';
import columnInferenceSolver from './columnInferenceSolver.js';
import groupInferenceSolver from './groupInferenceSolver.js';

export default class inferenceTheorySolver extends Finder {
    constructor () {
        super('humanTheorySolver')
        this.solvers = [
            new rowInferenceSolver(),
            new columnInferenceSolver(),
            new groupInferenceSolver(),
        ]
    }
    findPossible(puzzle , callback){
        this.solvers.forEach( solver =>{
            solver.findPossible(puzzle,callback);
        });
    }
}