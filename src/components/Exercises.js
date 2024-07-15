import React from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ excercises, SetExercises, bodyPart }) => {
  return (
    <Box id="excercises" sx={{ mt: { lg: "110px" }, mt: "50px", p: "20px" }}>
      <Typography variant="h3" mb="46px">
        Showing Reults
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {Exercises.map((exercise, index) => (
          <p>{exercise.name}</p>
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
