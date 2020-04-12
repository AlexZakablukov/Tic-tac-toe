import React from "react";
import './History.css';

const History = ({playerScores}) => {
  return (
    <table className="history">
      <thead>
        <tr>
          <td>№</td>
          <td>Win</td>
          <td>Draw</td>
          <td>Lose</td>
        </tr>
      </thead>
      <tbody>
      {playerScores.map((score, index) => {
        return(
          <tr key={index}>
            <td>{index}</td>
            <td>{score.winCount}</td>
            <td>{score.drawCount}</td>
            <td>{score.loseCount}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
};

export default History