import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Checkbox, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DailyPlanner = () => {
  const [tasks, setTasks] = useState([
    { id: 1, subject: 'Algorithms', topic: 'Dynamic Programming', time: 90, completed: false }
  ]);
  const [newTask, setNewTask] = useState({ subject: '', topic: '', time: 60 });

  const handleAddTask = () => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
    setNewTask({ subject: '', topic: '', time: 60 });
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>Today's Study Plan</Typography>

      <Box display="flex" gap={1} mb={2}>
        <TextField
          label="Subject"
          size="small"
          value={newTask.subject}
          onChange={(e) => setNewTask({ ...newTask, subject: e.target.value })}
        />
        <TextField
          label="Topic"
          size="small"
          value={newTask.topic}
          onChange={(e) => setNewTask({ ...newTask, topic: e.target.value })}
        />
        <TextField
          label="Minutes"
          type="number"
          size="small"
          sx={{ width: 100 }}
          value={newTask.time}
          onChange={(e) => setNewTask({ ...newTask, time: parseInt(e.target.value) || 0 })}
        />
        <Button variant="contained" onClick={handleAddTask}>Add</Button>
      </Box>

      <List>
        {tasks.map(task => (
          <ListItem
            key={task.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => deleteTask(task.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <Checkbox
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <ListItemText
              primary={`${task.subject}: ${task.topic}`}
              secondary={`${task.time} minutes`}
              sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DailyPlanner;

