// src/components/SubjectDashboard.js
import React, { useState } from 'react';
import StudyPlan from './StudyPlan';
import ProgressChart from './ProgressChart';
import SubjectStats from './SubjectStats';
import './SubjectDashboard.css';

const SubjectDashboard = () => {
  const [subjects] = useState([
    { name: 'Algorithms', progress: 65, hours: 42 },
    { name: 'Data Structures', progress: 45, hours: 30 },
    { name: 'Operating Systems', progress: 30, hours: 22 },
    { name: 'Computer Networks', progress: 25, hours: 18 },
    { name: 'DBMS', progress: 40, hours: 28 },
  ]);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Subject Dashboard</h2>
      </div>
      
      <div className="dashboard-content">
        <div className="stats-section">
          <div className="progress-card">
            <h3>Overall Progress</h3>
            <ProgressChart progress={42} />
            <p>42% Completed</p>
          </div>
          
          <div className="time-card">
            <h3>Study Time</h3>
            <div className="time-metric">
              <span className="time-value">140</span>
              <span className="time-label">Hours</span>
            </div>
          </div>
        </div>
        
        <div className="subject-progress">
          <h3>Subject-wise Progress</h3>
          <div className="subject-list">
            {subjects.map((subject, index) => (
              <SubjectStats 
                key={index}
                name={subject.name}
                progress={subject.progress}
                hours={subject.hours}
              />
            ))}
          </div>
        </div>
        
        <StudyPlan />
      </div>
    </div>
  );
};

export default SubjectDashboard;