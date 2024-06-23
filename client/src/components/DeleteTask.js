import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './deltask.css'; // Import the CSS file

const DeleteTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      navigate('/');
    } catch (error) {
      console.error("There was an error deleting the task!", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Delete Task</h1>
      <p>Are you sure you want to delete this task?</p>
      <button onClick={handleDelete} className="btn btn-danger custom-margin">Yes</button>
      <button onClick={() => navigate('/')} className="btn btn-secondary custom-margin">No</button>
    </div>
  );
};

export default DeleteTask;
