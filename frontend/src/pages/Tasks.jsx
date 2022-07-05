import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../contexts/taskContext';
import EditTask from '../components/editTask';
import NewTask from '../components/newTask';
import '../css/pages/Tasks.css';

function Tasks() {
  const navigate = useNavigate();
  const {
    setDescription,
    setStatus,
    fail,
    setId,
    employee,
    handleTasks,
    handleDelete,
    edit,
    setEdit,
  } = useContext(TaskContext);
  const [sorted, setSorted] = useState([]);
  const [statusOrder, setStatusOrder] = useState('pendente');

  const checkToken = async () => { if (await handleTasks()) navigate('/'); };

  useEffect(() => { checkToken(); }, []);

  const handleEdit = (task) => {
    setDescription(task.description);
    setStatus(task.status);
    setId(task.id);
    setEdit(true);
  };

  const handleAlpha = () => {
    const sortedArr = [...employee];
    sortedArr.sort((a, b) => {
      if (a.description > b.description) return 1;
      return -1;
    });
    setSorted(sortedArr);
  };

  const handleDate = () => {
    const sortedArr = [...employee];
    sortedArr.sort((a, b) => {
      if (a.createdAt > b.createdAt) return 1;
      return -1;
    });
    setSorted(sortedArr);
  };

  const handleStatus = ({ target }) => {
    setStatusOrder(target.value);
    const sortedArr = [...employee];
    sortedArr.sort((a) => {
      if (a.status === target.value) return -1;
      return 1;
    });
    setSorted(sortedArr);
  };

  return (
    <section>
      <h1>Tasks</h1>
      <section>
        {edit ? <EditTask /> : <NewTask />}
        <section className="order">
          <h3>Filtrar</h3>
          <fieldset id="order-radio">
            <label htmlFor="alpha-order">
              Ordem alfabética
              <input id="alpha-order" type="radio" onClick={handleAlpha} name="order-radio" />
            </label>
            <label htmlFor="date-order">
              Ordem de criação
              <input id="date-order" type="radio" onClick={handleDate} name="order-radio" />
            </label>
          </fieldset>
          <label htmlFor="status-order">
            Por status
            <select
              id="status-input"
              value={statusOrder}
              onChange={handleStatus}
            >
              <option>pendente</option>
              <option>em andamento</option>
              <option>pronto</option>
            </select>
          </label>
        </section>
        {sorted.length > 0 ? sorted.map((task) => (
          <div key={task.id} className="tasks">
            <span>{task.description}</span>
            <span>{task.status}</span>
            <span>{task.createdAt}</span>
            <button type="button" onClick={() => handleEdit(task)}>Edit</button>
            <button type="button" onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        )) : employee.map((task) => (
          <div key={task.id} className="tasks">
            <span>{task.description}</span>
            <span>{task.status}</span>
            <span>{task.createdAt}</span>
            <button type="button" onClick={() => handleEdit(task)}>Edit</button>
            <button type="button" onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))}
      </section>
      {fail.message ? <p>{fail.message}</p> : null}
    </section>
  );
}

export default Tasks;
