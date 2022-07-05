import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../contexts/taskContext';
import EditTask from '../components/editTask';
import NewTask from '../components/newTask';

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
  } = useContext(TaskContext);
  const [edit, setEdit] = useState(false);

  const checkToken = async () => { if (await handleTasks()) navigate('/'); };

  useEffect(() => { checkToken(); }, []);

  const handleEdit = (task) => {
    setDescription(task.description);
    setStatus(task.status);
    setId(task.id);
    setEdit(true);
  };

  return (
    <section>
      <h1>Tasks</h1>
      <section>
        {edit ? <EditTask /> : <NewTask />}
        {employee.tasks
          ? employee.tasks.map((task) => (
            <div key={task.id}>
              <span>{task.description}</span>
              <span>{task.status}</span>
              <button type="button" onClick={() => handleEdit(task)}>Edit</button>
              <button type="button" onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          ))
          : null}
      </section>
      {fail.message ? <p>{fail.message}</p> : null}
    </section>
  );
}

export default Tasks;
