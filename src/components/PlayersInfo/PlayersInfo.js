import React from "react";
import "./PlayersInfo.css";
import History from "../History/History";

const PlayersInfo = ({ players }) => {
  return (
    <div className="playersInfo">
      {players.map((player, index) => {
        const lastScore = player.scores[player.scores.length - 1];
        return(
          <div className="playersInfo-block" key={index}>
            <h3 className="playersInfo-name">{player.name}</h3>
            <div className="playersInfo-score">
              <p>win: {lastScore.winCount}</p>
              <p>lose: {lastScore.loseCount}</p>
              <p>draw: {lastScore.drawCount}</p>
            </div>
            <div className="more">
              <span>More</span>
              <History playerScores={player.scores}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlayersInfo;