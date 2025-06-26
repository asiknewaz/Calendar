import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const AllTasksPage = ({ tasks }) => {
  const [searchTerm, setSearchTerm] = useState("");

  
  const allTasks = Object.entries(tasks).flatMap(([date, taskList]) =>
    taskList.map((task) => ({ date, task }))
  );


  const filteredTasks = allTasks.filter(({ task }) =>
    task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        All Tasks
      </Typography>

      <TextField
        fullWidth
        label="Search tasks..."
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 3 }}
      />

      <List>
        {filteredTasks.length === 0 ? (
          <Typography>No tasks found.</Typography>
        ) : (
          filteredTasks.map(({ date, task }, index) => (
            <ListItem
              key={index}
              sx={{
                border: "1px solid #ccc",
                borderRadius: 1,
                mb: 1,
                padding: 2,
              }}
            >
              <ListItemText primary={task} secondary={`Date: ${date}`} />
            </ListItem>
          ))
        )}
      </List>
    </Container>
  );
};

export default AllTasksPage;
