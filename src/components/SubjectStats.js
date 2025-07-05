// src/components/SubjectStats.js
import React from 'react';
import ProgressChart from './ProgressChart';
import './SubjectStats.css';

const SubjectStats = ({ name, progress, hours }) => {
  return (
    <div className="subject-stat">
      <h4>{name}</h4>
      <div className="stat-details">
        <ProgressChart progress={progress} />
        <div className="stat-numbers">
          <span>{progress}%</span>
          <span>{hours} hrs</span>
        </div>
      </div>
    </div>
  );
};

export default SubjectStats;