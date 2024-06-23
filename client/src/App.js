import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import ViewTask from './components/ViewTask';
import EditTask from './components/EditTask';
import DeleteTask from './components/DeleteTask';
import Footer from './components/Footer'; // Import the Footer component

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>PedalStart - Task Management Application</h1>
        <Routes>
          <Route exact path="/" element={<TaskList />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/view/:id" element={<ViewTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
          <Route path="/delete/:id" element={<DeleteTask />} />
        </Routes>
        <Footer /> {/* Add the Footer component */}
      </div>
    </Router>
  );
};

export default App;
