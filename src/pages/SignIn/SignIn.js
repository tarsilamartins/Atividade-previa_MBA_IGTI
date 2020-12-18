import React, { useState } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div>
      <div className="container-1">
        <h3>Sign In</h3>
        <form className="form-1" action="">
          <label className="login-label" for="email">
            E-mail
          </label>
          <input className="login-input" type="text" placeholder="E-mail" />
          <label className="login-label" for="password">
            Password
          </label>
          <input
            className="login-input"
            type="password"
            placeholder="Password"
          />
        </form>
        <div>
          <Link to="/signup">
            <button id="create">Criar Conta</button>
          </Link>
          <Link to="/userslist">
            <button id="enter">Entrar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
