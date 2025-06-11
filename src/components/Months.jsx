import {
  Box,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Month from "./Month";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SearchIcon from "@mui/icons-material/Search";


const Months = ({ tasks, newTask, setTasks, setNewTask }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [search, setSearch] = useState("");
  //  const year = today.getFullYear();
  const prevYear = () => {
    setYear(year - 1);
  };
  const nextYear = () => {
    setYear(year + 1);
  };

  const handleChange = () => {
    const numericYear = parseInt(search);
    if (!isNaN(numericYear)) {
      setYear(numericYear);
      setSearch("");
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <KeyboardArrowLeftIcon
            onClick={prevYear}
            sx={{ cursor: "pointer" }}
          />
          {/* <Typography variant="h4">Calendar : {year}</Typography> */}
          <Typography
            variant="h4"
            style={{ display: "flex", alignItems: "center" }}
          >
            Calendar : {year}
            <TextField
              id="outlined-basic"
              label="input year"
              variant="outlined"
              value={search}
              size="small"
              sx={{ ml: "5px" }}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleChange()}
            />
          </Typography>
          <SearchIcon style={{ cursor: "pointer" }} onClick={handleChange} />

          <KeyboardArrowRightIcon
            onClick={nextYear}
            sx={{ cursor: "pointer" }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 4,
          mt: 4,
        }}
      >
        {months.map((month, index) => (
          <Month
            key={index}
            month={month}
            monthIndex={index}
            year={year}
            today={today}
            weekdays={weekdays}
            
            tasks={tasks}         
            newTask={newTask}
            setTasks={setTasks}
            setNewTask={setNewTask}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Months;
