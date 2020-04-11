import puzzleFactory from "./puzzleFactory.js";
import humanTheorySolver from "./wrappers/humanTheorySolver.js";
import inferenceTheorySolver from "./wrappers/inferenceTheorySolver.js";
import IntersectionSolver from "./finders/intersectionSolver.js";

const puzzles = [
    //Human Theory
    //'076001050000000310004350070840109002700000501002070900080900143630007005401020090',
    //'020456789456080236689237040005362974274090653396574800040618397761040528938725060',
    //'005809470020060001070000069400000100002108906300940028230750694500003800690002350',
    //'530070000600195000098000060800060003400803001700020006060000280000419005000080079',
    //'040027000800640000070030908410900000003005002008000016084000000096000700150490820',
    //'030000412008290050010400700904000000083000074600510080002100840090340100700025009',

    // Inference Theory
    //'000060010010000780603090000760000000000000060000080974801920500050073000040001000',
    //'004600000200800600010509000700000018090000750030100000070410002029000005000008004',
    
    // Stumped
    '450000000000000030020680040697000050005014007000000000500073006063040000000100082',
    //'035070200090800000002001000000008010007650000000007040000090060000000405300086902'
    //'503920100600700009020000030000000005000003040000800200190076000700008060080090000',
    //'080010090000000620300600040050000000060200004070458002000072001000009000040800000',

    //Hardest Puzzle in The World
    //'005300000800000020070010500400005300010070006003200080060500009004000030000009700',


]

function displayPuzzle(cells) {
    for (let i = 0; i < 81; i++) {
        let display = document.getElementById(`${i}`)
        if (cells[i].value !== 0) {
            display.innerText = cells[i].value;
        } else {
            display.classList.add('candidates')
            cells[i].potentials.forEach(value => {
                display.innerText += value
            })
        }
    }
}




puzzles.forEach(puzzleString => {
    let puzzle = puzzleFactory(puzzleString);
    //puzzle.logging = true;
    puzzle.addFinderAlgorithm(new humanTheorySolver());
    puzzle.addFinderAlgorithm(new inferenceTheorySolver());
    puzzle.addFinderAlgorithm(new IntersectionSolver());
    let moves = puzzle.solvePuzzle();
    console.log(moves)
   // let movesDisplay = document.getElementById('moves');
    //movesDisplay.value = moves;
    //displayPuzzle(puzzle.masterList.cells);

})