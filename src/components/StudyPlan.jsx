// src/components/StudyPlan.js
import React, { useState } from 'react';
import './StudyPlan.css';

const StudyPlan = () => {
  const [planItems, setPlanItems] = useState([
    { id: 1, subject: 'Algorithms', topic: 'Dynamic Programming', minutes: 90, completed: false }
  ]);
  
  const [newItem, setNewItem] = useState({
    subject: '',
    topic: '',
    minutes: 60
  });

  const handleAddItem = () => {
    if (newItem.subject.trim() && newItem.topic.trim()) {
      const newPlanItem = {
        id: Date.now(),
        subject: newItem.subject,
        topic: newItem.topic,
        minutes: newItem.minutes,
        completed: false
      };
      
      setPlanItems([...planItems, newPlanItem]);
      setNewItem({ subject: '', topic: '', minutes: 60 });
    }
  };

  const toggleCompletion = (id) => {
    setPlanItems(planItems.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div className="study-plan">
      <h3>Today's Study Plan</h3>
      
      <div className="add-plan-form">
        <input
          type="text"
          placeholder="Subject"
          value={newItem.subject}
          onChange={(e) => setNewItem({...newItem, subject: e.target.value})}
        />
        <input
          type="text"
          placeholder="Topic"
          value={newItem.topic}
          onChange={(e) => setNewItem({...newItem, topic: e.target.value})}
        />
        <input
          type="number"
          value={newItem.minutes}
          onChange={(e) => setNewItem({...newItem, minutes: e.target.value})}
          min="1"
        />
        <button onClick={handleAddItem}>ADD</button>
      </div>
      
      <div className="plan-items">
        {planItems.map(item => (
          <div 
            key={item.id} 
            className={`plan-item ${item.completed ? 'completed' : ''}`}
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleCompletion(item.id)}
            />
            <div className="item-details">
              <span className="subject">{item.subject}</span>
              <span className="topic">{item.topic}</span>
            </div>
            <div className="time">{item.minutes} minutes</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyPlan;