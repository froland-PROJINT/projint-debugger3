import './App.css';
import {useState} from 'react';

function App() {
  const [description, setDescription] = useState('');
  const [taskList, setTaskList] = useState([]);

  function handleChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {id: crypto.randomUUID(), description: description, done: false};
    console.debug("add task " + newTask.id);
    setTaskList([...taskList, newTask]);
    setDescription('');
  }

  function handleDelete(taskId) {
    console.debug("delete task " + taskId);
    const newTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(newTaskList);
  }

  function toggle(taskId) {
    console.debug("toggle task " + taskId);
    const newTaskList = taskList.map((task) => {
      if (task.id === task.id) {
        return {...task, done: !task.done};
      }
      return task;
    });
    setTaskList(newTaskList);
  }

  return (
      <>
        <h1>To Do</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Ajouter une tâche</legend>
            <label htmlFor="task">Description: </label>
            <input type="text" id="task" value={description} onChange={handleChange}/>
            <button type="submit">Ajouter</button>
          </fieldset>
        </form>
        <ul id="todo-list">
          {taskList.map((task) =>
              <li key={task.id}>
                <input type="checkbox" checked={task.done} onClick={() => toggle(task.id)} readOnly/>
                <span className="description">{task.description}</span>
                <a href="#" onClick={() => handleDelete(task.id)}>supprimer</a>
              </li>
          )}
        </ul>
      </>
  );
}

export default App;
