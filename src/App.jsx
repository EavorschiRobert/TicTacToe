import { useState } from "react";
import Header from "./components/header/Header";
import Player from "./components/player/Player";
import GameBoard from "./components/grid/GameBoard";
import Log from "./components/log/Log";
import WINNING_COMBINATION from "./components/utils/winning-combination";
import GameOver from "./components/gameOver";
import deriveWinner from "./components/utils/derive-winner";
import gameBoard from "./components/utils/game-board";

function deriveActivePlayer(gameTurns){
    let currentPlayer = 'X';

    if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O'
    }
    return currentPlayer;
}


function App() {
    // const [activePlayer, setActivePlayer] = useState("X");
    const [players, setPlayers] = useState({
        'X': 'Player 1',
        'O': 'Player 2'
    })
    const [gameTurns, setGameTurns] = useState([]);

    const board = gameBoard(gameTurns)

    const activePlayer = deriveActivePlayer(gameTurns);

    const winner = deriveWinner(board, players);

    const hasDraw = gameTurns.length === 9 && !winner;

    const handleSelectSquare = (rowIndex, colIndex) => {
        // setActivePlayer((prevState) => (prevState === "X" ? "O" : "X"));
        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);
            const updatedTurns = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer,
                },
                ...gameTurns,
            ];
            return updatedTurns;
        });
    };

    const handleRestart = () => {
        setGameTurns([]);
    }
    const handlePlayerChange = (symbol, newName) => {
        setPlayers((prevState) => {
            return{
                ...prevState,
                [symbol]: newName
            }
        })
    }
    return (
        <>
            <Header />
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName="Player 1"
                        symbol="X"
                        isActive={activePlayer === "X"}
                        handlePlayerChange={handlePlayerChange}
                        
                    />
                    <Player
                        initialName="Player 2"
                        symbol="O"
                        isActive={activePlayer === "O"}
                        handlePlayerChange={handlePlayerChange}
                    />
                </ol>
                {(winner  || hasDraw) && 
                    <GameOver winner={winner} handleRestart={handleRestart}/>
                }
                <GameBoard onSelectSquare={handleSelectSquare} board={board}/>
            </div>
            <Log turns={gameTurns}/>
        </>
    );
}

export default App;
