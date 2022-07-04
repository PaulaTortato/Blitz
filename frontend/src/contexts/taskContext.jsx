import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { EmployeeContext } from './employeeContext';

export const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const { token } = useContext(EmployeeContext);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pendente');
  const [id, setId] = useState('');
  const [fail, setFail] = useState({});
  const [employee, setEmployee] = useState({});
  // Referêcia para validateSatus: https://stackoverflow.com/questions/57934670/getting-axios-response-if-node-server-sends-status-400
  const config = {
    headers: { Authorization: token },
    validateStatus: (httpStatus) => httpStatus < 500,
  };

  const handleTasks = async () => {
    const { data } = await axios.get('http://www.localhost:3001/tasks', config);
    if (data.message) return true;
    setEmployee(data);
    return false;
  };

  const handleNewTask = async () => {
    const { data } = await axios.post(
      'http://www.localhost:3001/tasks',
      { description, status, id },
      config,
    );
    if (data.message) {
      setFail(data);
    } else {
      setDescription('');
      setStatus('pendente');
      handleTasks();
      setFail({});
    }
  };

  const handleEdit = async () => {
    const { data } = await axios.put(
      'http://www.localhost:3001/tasks',
      { description, status, id },
      config,
    );
    if (data.message) {
      setFail(data);
    } else {
      setDescription('');
      setStatus('pendente');
      setId('');
      handleTasks();
      setFail({});
    }
  };

  const handleDelete = async (taskId) => {
    const { data } = await axios.delete(
      `http://www.localhost:3001/tasks/${taskId}`,
      config,
    );
    setFail(data);
    setId('');
    handleTasks();
  };

  return (
    <TaskContext.Provider value={{
      description,
      setDescription,
      status,
      setStatus,
      handleNewTask,
      fail,
      handleEdit,
      setId,
      handleTasks,
      employee,
      handleDelete,
    }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;

TaskContextProvider.propTypes = {
  children: PropTypes.obj,
}.isRequired;
