export default class Cell {
    constructor(value, id){

        this.value = value;

        this.potentials = new Set([1,2,3,4,5,6,7,8,9]);;
        
        this.id = id;

    }
}
