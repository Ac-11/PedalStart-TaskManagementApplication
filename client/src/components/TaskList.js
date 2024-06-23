import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './index.css'; // Import the CSS file

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Task List</h1>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task._id} className="list-group-item d-flex justify-content-between align-items-center">
            {task.title}
            <div>
              <Link to={`/view/${task._id}`} className="btn btn-info btn-sm custom-button mr-2 mb-1">View</Link>
              <Link to={`/edit/${task._id}`} className="btn btn-warning btn-sm custom-button mr-2 mb-1">Edit</Link>
              <Link to={`/delete/${task._id}`} className="btn btn-danger btn-sm custom-button mb-1">Delete</Link>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/add" className="btn btn-primary mt-4">Add New Task</Link>
    </div>
  );
};

export default TaskList;
