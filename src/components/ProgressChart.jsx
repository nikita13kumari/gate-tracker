// src/components/ProgressChart.js
import React from 'react';
import './ProgressChart.css';

const ProgressChart = ({ progress }) => {
  return (
    <div className="progress-chart">
      <div 
        className="progress-bar" 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressChart;