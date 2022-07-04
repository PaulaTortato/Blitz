import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginContextProvider from './contexts/loginContext';
import Login from './pages/login';
import Register from './pages/register';
import Tasks from './pages/tasks';

function App() {
  return (
    <LoginContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </LoginContextProvider>
  );
}

export default App;
