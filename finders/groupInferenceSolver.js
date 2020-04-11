import Finder from '../finder.js'
export default class groupInferenceSolver extends Finder {
    constructor () {
        super('inferenceSolver')
    }
    findPossible(puzzle,callback){
        puzzle.groups.forEach(group => {
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
                    puzzle.logging && console.info('Solved By Group Inference Solver')
                    candidates[neededValue][0].value = +neededValue;
                }
            }
        });
    }
}