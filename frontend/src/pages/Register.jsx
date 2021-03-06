import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { EmployeeContext } from '../contexts/employeeContext';

function Register() {
  const { handleToken } = useContext(EmployeeContext);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fail, setFail] = useState({});
  const navigate = useNavigate();
  const config = { validateStatus: (status) => status < 500 };

  const handleClick = async () => {
    const { data } = await axios.post('http://www.localhost:3001/register', {
      firstName,
      lastName,
      email,
      password,
    }, config);
    if (data.message) {
      setFail(data);
    } else {
      handleToken(data);
      navigate('/tasks');
    }
  };

  return (
    <form>
      <h1>Register</h1>
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
      {fail.message ? <p>{fail.message}</p> : null}
    </form>
  );
}

export default Register;
