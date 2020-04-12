import React from "react";
import "./Square.css";

const Square = ({ children, onClick, row, col }) => {
  return (
    <div className="square" data-row={row} data-col={col} onClick={onClick}>
      {children}
    </div>
  );
};

export default Square;
