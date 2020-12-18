import React, { useState, useEffect } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

function SignUp({ cadastrar }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit() {
    const user = { name, email };
    cadastrar(user);
  }

  return (
    <div>
      <div className="container-2">
        <h3>Sign Up</h3>
        <form className="form-1" action="">
          <label className="login-label-2">Nome</label>
          <input
            className="login-input-2"
            id="name"
            type="text"
            placeholder="Nome"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <label className="login-label-2">E-mail</label>
          <input
            className="login-input-2"
            id="email"
            type="text"
            placeholder="E-mail"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label className="login-label-2">Confirm E-mail</label>
          <input
            className="login-input-2"
            id="confemail"
            type="text"
            placeholder="Confirm E-mail"
          />
          <label className="login-label-2">Password</label>
          <input
            className="login-input-2"
            type="password"
            placeholder="Password"
          />
          <label className="login-label-2">Confirm Password</label>
          <input
            className="login-input-2"
            type="password"
            placeholder="Confirm Password"
          />
        </form>
        <div>
          <Link to="/userslist">
            <button onClick={handleSubmit} id="send">
              Enviar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
