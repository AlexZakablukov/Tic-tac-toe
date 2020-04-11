import React from 'react';
import "./PlayersInfo.css";

const PlayersInfo = ({players}) => {
  return (
    <div className="playersInfo">
      {players.map((player, index) => (
        <div className="playersInfo-block" key={index}>
          <h3 className="playersInfo-name">{player.name}</h3>
          <div className="playersInfo-score">
            <p>win: {player.winCount}</p>
            <p>lose: {player.loseCount}</p>
            <p>draw: {player.drawCount}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default PlayersInfo