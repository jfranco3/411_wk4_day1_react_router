import React from "react";
import cars from "../cars.json";
// Import {useParams} from "react-router-dom" here //
import { useParams } from "react-router-dom";
// import MUI components here //
// Container, Paper, Chip //
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Car = (props) => {
  const { id } = useParams();

  return (
    <div>
      <h1>Now showing car {id}</h1>
      {/* {cars.map((car, id) => ( */}

      <strong>{cars.Name}</strong>
      <Stack spacing={1} alignItems="center">
        <Stack direction="column" spacing={1}>
          <Chip label="id: " color="primary" />
          <Chip label="Miles_per_Gallon: " color="primary" />
          <Chip label="Cylinders: " color="primary" />
          <Chip label="Displacement: " color="primary" />
          <Chip label="Horsepower: " color="primary" />
          <Chip label="Weight_in_lbs: " color="primary" />
          <Chip label="Acceleration: " color="primary" />
          <Chip label="Year: " color="primary" />
          <Chip label="Origin: " color="primary" />
        </Stack>
      </Stack>
    </div>
  );
};
export default Car;
