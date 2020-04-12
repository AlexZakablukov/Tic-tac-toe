import React from "react";
import "./Login.css";
import {Link} from "react-router-dom";

const Login = ({players, onInputChange, errorMessage}) => {
  return(
    <div className="login">
      <h2 className="login-subheading">
        Please enter your names
      </h2>
      <div className="login-bars">
        {players.map(( player, index )=>{
          return(
            <div className="login-bar" key={index}>
              <label>
                <p>{index === 0 ? "Сrosses" : "Noughts"} username</p>
                <input type="text" value={player.name} name="name" onChange={(event) => onInputChange(event, index)}/>
              </label>
            </div>
          )
        })}
      </div>
      <div className="login-actions">
        <Link className="btn" to="/game">
          Start
        </Link>
      </div>
    </div>
  )
};

export default Login