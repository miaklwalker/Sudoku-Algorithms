import Finder from '../finder.js'

export default class InferenceSolver extends Finder {
    constructor () {
        super('inferenceSolver')
    }
    findPossible(group,callback){
        group.forEach(group => {
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
                    candidates[neededValue][0].value = +neededValue;
                }
            }
        });
    }
}