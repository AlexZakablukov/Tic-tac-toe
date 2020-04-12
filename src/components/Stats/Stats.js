import React from "react";
import "./Stats.css";

const Stats = ({ players }) => {
  return (
    <div className="stats">
      <table>
        <thead>
          <tr>
            <td>{players[0].name}</td>
            <td>Draw</td>
            <td>{players[1].name}</td>
          </tr>
        </thead>
        <tbody>
          {players[0].scores.map((score) => (
            <tr>
              <td>{score.winCount}</td>
              <td>{score.drawCount}</td>
              <td>{score.loseCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stats;
