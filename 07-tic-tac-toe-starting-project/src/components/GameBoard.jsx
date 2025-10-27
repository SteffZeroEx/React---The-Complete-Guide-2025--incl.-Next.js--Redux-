import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, coloumnIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
      updatedBoard[rowIndex][coloumnIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, coloumnIndex) => (
              <li key={coloumnIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, coloumnIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
