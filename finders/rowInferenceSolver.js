import Finder from '../finder.js'

export default class rowInferenceSolver extends Finder {
    constructor () {
        super('inferenceSolver')
    }
    findPossible(puzzle,callback){
        puzzle.rows.forEach(group => {
            let groupPossible = new Set();
            let candidates = {}
            group.members.forEach(member=>{
                let cell = callback(member);
                cell.potentials.forEach(potential=>groupPossible.add(potential))
            })
            for(let value of groupPossible.values()){
                candidates[value] = [];
            }
            for(let neededValue in candidates){
                group.members.forEach(member=>{
                    let cell = callback(member);
                    if(cell.potentials.has(+neededValue)){
                        candidates[neededValue].push(cell)
                    }
                })
                if(candidates[neededValue].length === 1){
                    puzzle.logging && console.info('Solved By Row Inference Solver')
                    candidates[neededValue][0].value = +neededValue;
                }
            }
        });
    }
}