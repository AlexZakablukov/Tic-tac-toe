import React from "react";
import "./Login.css";

const Login = ({loginFormHandler}) => {
  return(
    <div className="login">
      <h1 className="login-heading">
        Welcome in Tic-tac-toe
      </h1>
      <p className="login-subheading">
        Please enter your names
      </p>
      <div className="login-bars">
        <div className="login-bar">
          <p className="name">
            Player1
          </p>
          <form onSubmit={loginFormHandler}>
            <input type="text" name="name"/>
            <button>
              Submit
            </button>
          </form>
        </div>
        <div className="login-bar">
          <p className="name">
            Player2
          </p>
          <form onSubmit={loginFormHandler}>
            <input type="text" name="name"/>
            <button>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="login-actions">
        <button>
          Start Game
        </button>
      </div>
    </div>
  )
};

export default Login