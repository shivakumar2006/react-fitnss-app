import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [BodyPart, setBodyPart] = useState("all");
  const [exercises, setExcercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExcercises={setExcercises}
        BodyPart={BodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExcercises={setExcercises}
        BodyPart={BodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Home;
