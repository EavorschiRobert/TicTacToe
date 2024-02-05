import React from "react";



function GameBoard({onSelectSquare, board}) {
  
  /*
    const [board, setBoard] = useState(initialGameBoard);

    const handleSelect = (rowIndex, colIndex) => {
        setBoard((prevState) => {
            const board = [...prevState.map((innerArray) => [...innerArray])];
            board[rowIndex][colIndex] = playerSymbol;
            return board;
        });
        onSelectSquare();
    };
    */
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                                    disabled={playerSymbol !== null}
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}

export default GameBoard;
