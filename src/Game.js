import React, {useState} from 'react';
import './Game.css';

import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import Title from "./components/Title/Title";
import PlayersInfo from "./components/PlayersInfo/PlayersInfo";

const Game = () => {

  const [players, setPlayers] = useState([
    {
      name: "player1",
      winCount: 0,
      loseCount: 0,
      drawCount: 0
    },
    {
      name: "player2",
      winCount: 0,
      loseCount: 0,
      drawCount: 0
    }
  ]);

  const onWin = (playerIndex) => {
    const playersArray = [...players];
    playersArray[playerIndex].winCount++;
    setPlayers(playersArray)
  };

  return (
    <Layout>
        <Title title="Tic-tac-toe"/>
        <PlayersInfo players={players}/>

    </Layout>
  );
};

export default Game;
