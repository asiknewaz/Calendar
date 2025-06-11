import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import ToDoList from "./ToDoList";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const Month = ({
  month,
  monthIndex,
  year,
  today,
  weekdays,
  tasks,
  newTask,
  setTasks,
  setNewTask,
}) => {
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const totalDays = new Date(year, monthIndex + 1, 0).getDate();

  const isToday = (day) =>
    year === today.getFullYear() &&
    monthIndex === today.getMonth() &&
    day === today.getDate();

  const getDateKey = (day) =>
    `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(
      2,
      "0"
    )}`;

  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleOpen = (day) => {
    setSelectedDay(day);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Box border={1} borderRadius={2} p={2}>
        <Typography variant="h5" align="center">
          {month}
        </Typography>

        {/* Weekdays */}
        <Box sx={{ display: "flex" }}>
          {weekdays.map((day) => (
            <Box
              key={day}
              sx={{
                width: "14.28%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                fontWeight: "bold",
                border: "1px solid #ccc",
                height: "40px",
              }}
            >
              {day}
            </Box>
          ))}
        </Box>

        {/* Days */}
        <Box display="flex" flexWrap="wrap">
          {/* Empty boxes before 1st */}
          {Array.from({ length: firstDay }).map((_, i) => (
            <Box
              key={`empty-${i}`}
              width="14.28%"
              height="30px"
              border="1px solid #ccc"
              boxSizing="border-box"
            />
          ))}

          {/* Day boxes */}
          {Array.from({ length: totalDays }).map((_, i) => {
            const day = i + 1;
            const dateKey = getDateKey(day);
            const hasTasks = tasks[dateKey] && tasks[dateKey].length > 0;

            return (
              <Box
                key={day}
                width="14.28%"
                height="30px"
                textAlign="center"
                lineHeight="30px"
                border="1px solid #ccc"
                boxSizing="border-box"
                bgcolor={isToday(day) ? "lightblue" : "transparent"}
                sx={{
                  position: "relative",
                  "&:hover": {
                    backgroundColor: "#bbbbbb",
                  },
                }}
              >
                <Button
                  onClick={() => handleOpen(day)}
                  sx={{
                    height: "100%",
                    width: "100%",
                    minWidth: 0,
                    padding: 0,
                    borderRadius: 0,
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {day}
                  {hasTasks && (
                    <AssignmentTurnedInIcon
                      fontSize="small"
                      color="success"
                      sx={{
                        position: "absolute",
                        top: 2,
                        right: 2,
                        fontSize: "12px"
                      }}
                    />
                  )}
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* To-Do Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          {selectedDay && (
            <ToDoList
              tasks={tasks}
              newTask={newTask}
              setTasks={setTasks}
              setNewTask={setNewTask}
              selectedDay={selectedDay}
              monthIndex={monthIndex}
              year={year}
            />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Month;
