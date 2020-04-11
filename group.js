import Cell from './cell.js'

export default class Group{
    constructor(){
        this.members = [];
    }
    addMember(id){
        this.members.push(id)
    }
}
