import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './index.css';

const ViewTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await axios.get(`http://18.205.252.53:5000/api/tasks/${id}`);
      setTask(response.data);
    };
    fetchTask();
  }, [id]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">View Task</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.description}</p>
          <p className="card-text"><small className="text-muted">Due Date: {new Date(task.dueDate).toLocaleDateString()}</small></p>
        </div>
      </div>
    </div>
  );
};

export default ViewTask;
