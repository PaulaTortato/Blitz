import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeContextProvider from './contexts/employeeContext';
import TaskContextProvider from './contexts/taskContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Tasks from './pages/Tasks';

function App() {
  return (
    <EmployeeContextProvider>
      <TaskContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/tasks" element={<Tasks />} />
          </Routes>
        </Router>
      </TaskContextProvider>
    </EmployeeContextProvider>
  );
}

export default App;
