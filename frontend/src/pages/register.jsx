import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoginContext } from '../contexts/loginContext';

function Register() {
  const { handleEmployee } = useContext(LoginContext);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fail, setFail] = useState(undefined);
  const navigate = useNavigate();

  const handleClick = async () => {
    const { data } = await axios.post('http://www.localhost:3001/register', {
      firstName,
      lastName,
      email,
      password,
    });
    if (data.message) {
      setFail(data);
    } else {
      handleEmployee(data);
      navigate('/tasks');
    }
  };

  return (
    <form>
      <label htmlFor="firstname-input">
        First Name
        <input
          id="firstname-input"
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
        />
      </label>
      <label htmlFor="lastname-input">
        Last Name
        <input
          id="lastname-input"
          type="text"
          placeholder="Enter your last name"
          value={lastName}
          onChange={({ target }) => setLastName(target.value)}
        />
      </label>
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
      <button
        type="button"
        onClick={handleClick}
      >
        Register
      </button>
      {fail ? <p>{fail.message}</p> : null}
    </form>
  );
}

export default Register;
