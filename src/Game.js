import React, { useState } from "react";
import "./Game.css";

import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import Title from "./components/Title/Title";
import PlayersInfo from "./components/PlayersInfo/PlayersInfo";
import Board from "./components/Board/Board";

const Game = () => {
  const [players, setPlayers] = useState([
    {
      name: "player1",
      scores: [
        {
          winCount: 0,
          loseCount: 0,
          drawCount: 0,
        }
      ],
      sign: "X"
    },
    {
      name: "player2",
      scores: [
        {
          winCount: 0,
          loseCount: 0,
          drawCount: 0,
        }
      ],
      sign: "O"
    }
  ]);

  const [step, setStep] = useState(0); // 0, 1, 2, 3...
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0); // 0, 1
  const nextPlayerIndex = (currentPlayerIndex + 1) % 2;
  const [winner, setWinner] = useState(null); // 0 , 1 , null

  const defaultBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  const [board, setBoard] = useState(defaultBoard);

  const calculateWinner = () => {
    if(winner === null && step === 8){
      onPlayerChangeStatistic(currentPlayerIndex, "drawCount");
      onPlayerChangeStatistic(nextPlayerIndex, "drawCount");
    }
    if(board[0][0]){
      if((board[0][0] === board[0][1] && board[0][0] === board[0][2]) ||
        (board[0][0] === board[1][0] && board[0][0] === board[2][0])) {
        setWinner(currentPlayerIndex);
        onPlayerChangeStatistic(currentPlayerIndex, "winCount");
        onPlayerChangeStatistic(nextPlayerIndex, "loseCount");
      }
    }
    if(board[1][1]){
      if((board[1][1] === board[0][0] && board[1][1] === board[2][2]) ||
        (board[1][1] === board[2][0] && board[1][1] === board[0][2]) ||
        (board[1][1] === board[0][1] && board[1][1] === board[2][1]) ||
        (board[1][1] === board[1][0] && board[1][1] === board[1][2])){
        setWinner(currentPlayerIndex);
        onPlayerChangeStatistic(currentPlayerIndex, "winCount");
        onPlayerChangeStatistic(nextPlayerIndex, "loseCount");
      }
    }
    if(board[2][2]){
      if((board[2][2] === board[2][0] && board[2][2] === board[2][1]) ||
        (board[2][2] === board[0][2] && board[2][2] === board[1][2])) {
        setWinner(currentPlayerIndex);
        onPlayerChangeStatistic(currentPlayerIndex, "winCount");
        onPlayerChangeStatistic(nextPlayerIndex, "loseCount");
      }
    }
  };

  const onSquareClick = (event) => {
    if(winner !== 0 && winner !== 1){
      const row = event.target.dataset.row;
      const col = event.target.dataset.col;
      if(!board[row][col]){
        const newBoard = [...board];
        newBoard[row][col] = players[currentPlayerIndex].sign;
        setBoard(newBoard);
        calculateWinner();
        setStep(step + 1);
        setCurrentPlayerIndex(nextPlayerIndex);
      }
    }
  };

  const onPlayerChangeStatistic = (playerIndex, param) => {
    const playersArray = [...players];
    const playerScores = playersArray[playerIndex].scores;
    const newScore = {...playerScores[playerScores.length - 1]};
    newScore[param]++;
    playerScores.push(newScore);
    setPlayers([...playersArray]);
  };

  const renderMessage = () => {
    if(winner === null && step === 9){
      return (
        <p>Ничья</p>
      )
    } else if (winner !== null){
      return(
        <p>Выиграл {players[winner].name}</p>
      )
    }
  };

  const onRestartGame = () => {
    setBoard(defaultBoard);
    setStep(0);
    setWinner(null);
    setCurrentPlayerIndex(0);
  };

  return (
    <Layout>
      <Title title="Tic-tac-toe" />
      <PlayersInfo players={players} />
      <p>currentPlayer: {currentPlayerIndex}</p>
      {renderMessage()}
      <Board board={board} onSquareClick={onSquareClick}/>
      <button onClick={onRestartGame}>
        restart
      </button>
    </Layout>
  );
};

export default Game;
