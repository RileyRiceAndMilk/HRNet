import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Employee from './pages/Employee';
import React from 'react';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Employee" element={<Employee />} />
      </Routes>
    </Router>
  );
}

export default App;
