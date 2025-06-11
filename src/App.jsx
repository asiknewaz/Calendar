import { Box } from "@mui/material";
import Months from "./components/Months";
import ToDoList from "./components/ToDoList";
import { useState } from "react";
import Test from "./components/Test";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  return (
    <>
      <Box>
        <Months
          tasks={tasks} // Pass tasks
          newTask={newTask} // Pass newTask
          setTasks={setTasks}
          setNewTask={setNewTask}
        />
      </Box>
      
      
    </>
  );
};

export default App;
