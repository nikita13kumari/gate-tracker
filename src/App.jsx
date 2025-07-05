// src/App.js
import React, { useState } from 'react';
import SubjectDashboard from './components/SubjectDashboard';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1>GATE Exam Tracker</h1>
      </header>
      <main>
        <SubjectDashboard />
      </main>
    </div>
  );
}

export default App;