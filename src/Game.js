import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./Game.css";

import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import Stats from "./components/Stats/Stats";
import Board from "./components/Board/Board";
import Actions from "./components/Actions/Actions";
import Navbar from "./components/Navbar/Navbar";

const Game = () => {
  const [players, setPlayers] = useState([
    {
      name: "player1",
      scores: [
        {
          winCount: 0,
          loseCount: 0,
          drawCount: 0
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
          drawCount: 0
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
    if (winner === null && step === 8) {
      onPlayerChangeStatistic(currentPlayerIndex, "drawCount");
      onPlayerChangeStatistic(nextPlayerIndex, "drawCount");
    }
    if (board[0][0]) {
      if (
        (board[0][0] === board[0][1] && board[0][0] === board[0][2]) ||
        (board[0][0] === board[1][0] && board[0][0] === board[2][0])
      ) {
        setWinner(currentPlayerIndex);
        onPlayerChangeStatistic(currentPlayerIndex, "winCount");
        onPlayerChangeStatistic(nextPlayerIndex, "loseCount");
      }
    }
    if (board[1][1]) {
      if (
        (board[1][1] === board[0][0] && board[1][1] === board[2][2]) ||
        (board[1][1] === board[2][0] && board[1][1] === board[0][2]) ||
        (board[1][1] === board[0][1] && board[1][1] === board[2][1]) ||
        (board[1][1] === board[1][0] && board[1][1] === board[1][2])
      ) {
        setWinner(currentPlayerIndex);
        onPlayerChangeStatistic(currentPlayerIndex, "winCount");
        onPlayerChangeStatistic(nextPlayerIndex, "loseCount");
      }
    }
    if (board[2][2]) {
      if (
        (board[2][2] === board[2][0] && board[2][2] === board[2][1]) ||
        (board[2][2] === board[0][2] && board[2][2] === board[1][2])
      ) {
        setWinner(currentPlayerIndex);
        onPlayerChangeStatistic(currentPlayerIndex, "winCount");
        onPlayerChangeStatistic(nextPlayerIndex, "loseCount");
      }
    }
  };

  const onSquareClick = event => {
    if (winner !== 0 && winner !== 1) {
      const row = event.target.dataset.row;
      const col = event.target.dataset.col;
      if (!board[row][col]) {
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
    const newScore = { ...playerScores[playerScores.length - 1] };
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

  const renderMessage = () => {
    if(winner === null && step === 9){
      return 'It is a draw. Another one?';
    } else if (winner !== null){
      return `${players[winner].name} wins. Another one?`;
    }
  };

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/stats">
            <Navbar links={[]} isBackArrow={true} />
            <Stats players={players} />
          </Route>
          <Route path="/game">
            <Navbar
              links={[{ to: "/stats", title: "Stats" }]}
              isBackArrow={false}
            />
            <Board board={board} onSquareClick={onSquareClick} />
            <Actions renderMessage={renderMessage} onRestartGame={onRestartGame} />
          </Route>
          <Route path="/">
            <Login players={players} onInputChange={onInputChange} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default Game;
