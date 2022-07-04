import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LoginContext = createContext();

function LoginContextProvider({ children }) {
  const [employee, setEmployee] = useState({});

  const handleEmployee = (data) => {
    setEmployee(data);
  };

  return (
    <LoginContext.Provider value={{ employee, handleEmployee }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;

LoginContextProvider.propTypes = {
  children: PropTypes.obj,
}.isRequired;
