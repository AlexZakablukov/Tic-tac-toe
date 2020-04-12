import React, { useState } from "react";
import "./Game.css";

import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import Title from "./components/Title/Title";
import PlayersInfo from "./components/PlayersInfo/PlayersInfo";
import Board from "./components/Board/Board";
import Actions from "./components/Actions/Actions";

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

  const [readyToStart, setReadyToStart] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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

  const onRestartGame = () => {
    setBoard(defaultBoard);
    setStep(0);
    setWinner(null);
    setCurrentPlayerIndex(0);
  };

  const onInputChange = (event, playerIndex) => {
    const playersArray = [...players];
    playersArray[playerIndex].name = event.target.value;
    setPlayers(playersArray);
  };

  const onReadyGame = (event) => {
    if(players[0].name.length >= 2 && players[1].name.length >=2){
       setReadyToStart(true);
    }else{
      setErrorMessage("Player`s name have to consist at least two character")
    }
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

  return (
    <Layout>
      <Title title="Tic-tac-toe" />
      <PlayersInfo players={players} />
      {renderMessage()}
      {!readyToStart ? (
        <Login players={players} onInputChange={onInputChange} onReadyGame={onReadyGame} errorMessage={errorMessage}/>
      ) : (
        <>
          <Board board={board} onSquareClick={onSquareClick}/>
          <Actions onRestartGame={onRestartGame}/>
        </>
      )}
    </Layout>
  );
};

export default Game;
