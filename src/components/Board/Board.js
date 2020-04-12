import React from "react";
import "./Board.css";
import Square from "../Square/Square";

const Board = ({ board, onSquareClick }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {row.map((square, colIndex) => (
            <Square
              key={colIndex}
              onClick={onSquareClick}
              row={rowIndex}
              col={colIndex}
            >
              {square}
            </Square>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
