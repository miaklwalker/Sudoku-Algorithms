

function buildRows(puzzleString){
    let rows = ''
    for (let i = 0 ; i < 9 ; i++){
        for (let j = 0 ; j < 9 ; j++){
            rows+=puzzleString[9*i+j];
        }
    }
    return rows
}
function buildColumns(puzzleString){
    let cols = '';
    for(let i = 0 ; i < 9 ; i++){
        for( let j = 0 ; j < 9 ; j++){
            cols+= puzzleString[j * 9 + i]

        }
    }
    return cols
}
function buildGroups(puzzleString){
    let group = '';

    for(let i = 0 ; i < 3 ; i++){
        for(let j = 0 ; j < 9 ; j++){
            for(let k = 0 ; k < 3 ; k++){
                group +=puzzleString[ j + k + ( 8 * j ) + ( 3 * i )];

            }
        }
    }

    return group
}
export default function buildPuzzle(puzzleString){
    let sudoku = {
        rows:buildRows(puzzleString),
        columns:buildColumns(puzzleString),
        groups:buildGroups(puzzleString),
    }
    return sudoku
}


