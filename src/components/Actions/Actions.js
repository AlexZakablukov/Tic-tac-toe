import React from "react";
import './Actions.css';

const Actions = ({onRestartGame, renderMessage}) => {
  return (
    <div className="actions">
      {renderMessage() ? (
        <button onClick={onRestartGame} className="btn">
          {renderMessage()}
        </button>
      ) : null}
    </div>
  )
};

export default Actions