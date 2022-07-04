import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoginContext } from '../contexts/loginContext';

function Login() {
  const { handleEmployee } = useContext(LoginContext);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fail, setFail] = useState(undefined);
  const navigate = useNavigate();

  const handleClick = async () => {
    const { data } = await axios.post('http://www.localhost:3001/login', { email, password });
    if (data.message) {
      setFail(data);
    } else {
      handleEmployee(data);
      navigate('/tasks');
    }
  };

  return (
    <form>
      <label htmlFor="email-input">
        Email
        <input
          id="email-input"
          type="email"
          placeholder="exemplo@exemplo.com"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </label>
      <label htmlFor="password-input">
        Password
        <input
          id="password-input"
          type="password"
          placeholder="Enter your password"
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
