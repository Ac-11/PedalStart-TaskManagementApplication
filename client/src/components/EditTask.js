import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://18.205.252.53:5000/api/tasks/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setDueDate(response.data.dueDate);
      } catch (err) {
        setError('Failed to fetch task');
      }
    };

    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await axios.put(`http://18.205.252.53:5000/api/tasks/${id}`, { title, description, dueDate });
      alert('Task updated successfully');
      navigate('/');
    } catch (err) {
      setError('Failed to update task');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Edit Task</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
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
