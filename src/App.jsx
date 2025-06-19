import { Box } from "@mui/material";
import Months from "./components/Months";
import { useEffect, useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("calendarTasks");
    return saved ? JSON.parse(saved) : {};
  });
  const [newTask, setNewTask] = useState("");

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("calendarTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Box>
        <Months
          tasks={tasks}
          newTask={newTask}
          setTasks={setTasks}
          setNewTask={setNewTask}
        />
      </Box>
    </>
  );
};

export default App;
