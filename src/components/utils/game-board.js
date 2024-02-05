const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function(gameTurns){
    let board = [...initialGameBoard.map(array => [...array])];

    for(const turn of gameTurns){
        const {square, player} = turn;
        const {row, col} = square;
        board[row][col] = player;
    }
    return board;
}