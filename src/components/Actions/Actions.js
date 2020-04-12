import React from "react";
import './Actions.css';

const Actions = ({onRestartGame}) => {
  return (
    <div className="actions">
      <button onClick={onRestartGame} className="btn">
        Restart game
      </button>
    </div>
  )
};

export default Actions