import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    const fetchTask = async () => {
      const response = await axios.get(`http://localhost:5000/api/tasks/${id}`);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setDueDate(new Date(response.data.dueDate).toISOString().split('T')[0]);
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = { title, description, dueDate };
    await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask);
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Due Date</label>
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;
