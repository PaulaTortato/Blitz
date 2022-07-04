import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { EmployeeContext } from '../contexts/employeeContext';

function Login() {
  const { handleToken } = useContext(EmployeeContext);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fail, setFail] = useState({});
  const navigate = useNavigate();

  const handleClick = async () => {
    const { data } = await axios.post('http://www.localhost:3001/login', { email, password });
    if (data.message) {
      setFail(data);
    } else {
      handleToken(data);
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
      {fail.message ? <p>{fail.message}</p> : null}
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
