import React from "react";
import "./Login.css";

const Login = ({players, onInputChange, onReadyGame, errorMessage}) => {
  return(
    <div className="login">
      <h2 className="login-subheading">
        Please enter your names
      </h2>

      <div className="login-bars">
        {players.map(( player, index )=>{
          return(
            <div className="login-bar" key={index}>
              <input type="text" value={player.name} name="name" onChange={(event) => onInputChange(event, index)}/>
            </div>
          )
        })}
      </div>
      {errorMessage ? (
        <p className="error">{errorMessage}</p>
      ) : null}
      <div className="login-actions">
        <button onClick={onReadyGame}>
          Start Game
        </button>
      </div>
    </div>
  )
};

export default Login