import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const EmployeeContext = createContext();

function EmployeeContextProvider({ children }) {
  const [token, setToken] = useState({});

  const handleToken = (data) => {
    setToken(data);
  };

  return (
    <EmployeeContext.Provider value={{ token, handleToken }}>
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeContextProvider;

EmployeeContextProvider.propTypes = {
  children: PropTypes.obj,
}.isRequired;
