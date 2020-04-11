import Finder from '../finder.js'

let subGroup = 0


export default class IntersectionSolver extends Finder {
    subGroups;
    constructor () {
        super('intersectionSolver')
        this.initialized = false;
    }
    findPossible(puzzle,callback){
        if(!this.initialized){
            this.init(puzzle,callback)
        }
    }
    init(puzzle,callback){
        this.subGroups = {}
        puzzle.groups.forEach(group=>{
            group.members.forEach(makeSubGroups(this.subGroups,callback))
            formGroups(this.subGroups)
        })
        console.log(this.subGroups);
    }
}

function Rows(subGroups){
    let rows = {}
        for(let i = 0 ; i < 9 ; i++){
            rows[i]=[]
            for(let j = 0 ; j < 3 ; j++){
                rows[i].push(subGroups[i + ( j * 9)])
            }
            rows[i]=rows[i].flat()
        }
    return rows;
}
function Groups (subGroups){
    let groups = {}
    for(let i = 0 ; i < 9 ; i++){
        groups[i]=[]
        for(let j = 0 ; j < 3 ; j++){
        groups[i].push(subGroups[i * 3 + j])
        }
        groups[i]=groups[i].flat()
    }
    return groups;
}
function Columns(subGroups){
    let columns = {}
    for(let i = 0 ; i < 9 ; i++){
        columns[i] = []
        for(let j = 0 ; j < 9 ; j++){
            columns[i].push(subGroups.rows[j][i]);
        }
        columns[i] = columns[i].flat();
    }
    return columns;
}
function formGroups(subGroups){
    subGroups.rows = Rows(subGroups);
    subGroups.groups = Groups(subGroups)
    subGroups.columns = Columns(subGroups)
}
function makeSubGroups(subGroups,callback){
    subGroups[subGroup] = []
    return (member,index)=>{
        if((index+1) % 3 === 0){
            subGroups[subGroup].push(callback(member));
            subGroup++
            subGroups[subGroup] = []
        }else{
            subGroups[subGroup].push(callback(member));
        }
    }
}