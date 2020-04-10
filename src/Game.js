import React, {useState} from 'react';
import './Game.css';

import Player from "./models/Player";

import Login from "./components/Login/Login";

const Game = () => {
  const [player1, setPlayer1] = useState(new Player("Player1"));
  const [player2, setPlayer2] = useState(new Player("Player2"));

  return (
    <div className="Game">
      Tic-tac-toe
    </div>
  );
};

export default Game;
