import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box, Button, AppBar, Toolbar } from "@mui/material";
import Months from "./components/Months";
import AllTasksPage from "./components/AllTasksPage";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("calendarTasks");
    return saved ? JSON.parse(saved) : {};
  });

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("calendarTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/all-tasks">
            View All Tasks
          </Button>
        </Toolbar>
      </AppBar>

      <Box p={2}>
        <Routes>
          <Route
            path="/"
            element={
              <Months
                tasks={tasks}
                newTask={newTask}
                setTasks={setTasks}
                setNewTask={setNewTask}
              />
            }
          />
          <Route path="/all-tasks" element={<AllTasksPage tasks={tasks} />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
