import WINNING_COMBINATION from "./winning-combination";


export default function deriveWinner(board, players){
    let winner = null;

    for(const combination of WINNING_COMBINATION){
        const firstSquareSymbol = board[combination[0].row][combination[0].col];
        const secondSquareSymbol = board[combination[1].row][combination[1].col];
        const thirdSquareSymbol = board[combination[2].row][combination[2].col];
        if(firstSquareSymbol 
            && firstSquareSymbol === secondSquareSymbol 
            && firstSquareSymbol === thirdSquareSymbol){
                winner = players[firstSquareSymbol];
        }
    }
    return winner;
}