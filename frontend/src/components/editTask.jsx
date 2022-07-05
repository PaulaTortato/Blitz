import React, { useContext } from 'react';
import { TaskContext } from '../contexts/taskContext';

function EditTask() {
  const {
    description,
    status,
    setDescription,
    setStatus,
    handleEdit,
  } = useContext(TaskContext);

  return (
    <div className="input-div">
      <label htmlFor="description-input">
        Description
        <input
          id="description-input"
          type="textarea"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
      </label>
      <label htmlFor="status-input">
        Status
        <select
          id="status-input"
          value={status}
          onChange={({ target }) => setStatus(target.value)}
        >
          <option>pendente</option>
          <option>em andamento</option>
          <option>pronto</option>
        </select>
      </label>
      <button type="button" onClick={handleEdit} className="button">Edit task</button>
    </div>
  );
}

export default EditTask;
