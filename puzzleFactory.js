import buildPuzzle from './buildPuzzle.js';
import SudokuPuzzle from './sudokuPuzzle.js';
import Group from './group.js';
import id from './id.js';


export default function puzzleFactory(puzzleString){
    let puzzleConfig = buildPuzzle(puzzleString)
    let parsedPuzzle = new SudokuPuzzle()
    
    for(let type in puzzleConfig){
        const typeString = puzzleConfig[type];
        const groups = [];
        for ( let i = 0 ; i < 9 ; i++ ){
            let group = new Group();

            for ( let j = 0 ; j < 9 ; j++){
                let cellID = id[type][j + (i * 9)];
                
                group.addMember(cellID);

                if(type === 'rows'){
                    parsedPuzzle.masterList.cells[j + (i * 9)].value = +typeString[j + (i * 9)];
                }

            }
            groups.push(group);
        }
        parsedPuzzle[type]=groups;
    
    }
    return parsedPuzzle;
}