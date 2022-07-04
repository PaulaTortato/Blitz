import React, { useState, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { LoginContext } from '../contexts/loginContext';

function Login({ history }) {
  const { handleEmployee } = useContext(LoginContext);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fail, setFail] = useState(undefined);

  const handleClick = async () => {
    const credentials = await axios.post('http://www.localhost:3001/login', { email, password });
    if (credentials.message) {
      setFail(credentials);
    } else {
      handleEmployee(credentials);
      history.push('/tasks');
    }
  };

  return (
    <form>
      <label htmlFor="email-input">
        <input
          id="email-input"
          type="email"
          placeholder="exemplo@exemplo"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </label>
      <label htmlFor="password-input">
        <input
          id="password-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </label>
      {fail ? <p>{fail.message}</p> : null}
      <button
        type="button"
        onClick={handleClick}
      >
        Enter
      </button>
    </form>
  );
}

export default Login;

Login.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string),
}.isRequired;
