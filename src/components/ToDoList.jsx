import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  TextField,
  List,
  ListItem,
  Typography,
  IconButton,
} from "@mui/material";

const ToDoList = ({
  tasks,
  newTask,
  setTasks,
  setNewTask,
  selectedDay,
  monthIndex,
  year,
}) => {
  const dateKey = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(
    selectedDay
  ).padStart(2, "0")}`;

  const dayTasks = tasks[dateKey] || [];

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === "") return;
    const updated = {
      ...tasks,
      [dateKey]: [...dayTasks, newTask],
    };
    setTasks(updated);
    setNewTask("");
  };

  const deleteTask = (index) => {
    const updated = {
      ...tasks,
      [dateKey]: dayTasks.filter((_, i) => i !== index),
    };
    setTasks(updated);
  };

  return (
    <Box textAlign="center">
      <Typography variant="h5" gutterBottom>
        Tasks for {dateKey}
      </Typography>

      <Box display="flex" justifyContent="center" gap={2} mb={2}>
        <TextField
          variant="outlined"
          placeholder="Enter task"
          value={newTask}
          onChange={handleInputChange}
        />
        <Button variant="contained" onClick={addTask}>
          Add
        </Button>
      </Box>

      <List>
        {dayTasks.map((task, i) => (
          <ListItem
            key={i}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid #ccc",
              borderRadius: 1,
              mb: 1,
            }}
          >
            <Typography>{task}</Typography>
            <IconButton onClick={() => deleteTask(i)} color="error">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ToDoList;
