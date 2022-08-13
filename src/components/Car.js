import React from "react";
import cars from "../cars.json";
// Import {useParams} from "react-router-dom" here //
import { useParams } from "react-router-dom";
// import MUI components here //
// Container, Paper, Chip //
import Chip from "@mui/material/Chip";

const Car = (props) => {
  const id = useParams().id;
  const car = cars.find((car, index) => {});

  return (
    <div>
      <h1>{cars.Name}</h1>

      <Chip label="id: " color="primary" />
      <Chip label="Name: " color="primary" />
      <Chip label="Miles_per_Gallon: " color="primary" />
      <Chip label="Cylinders: " color="primary" />
      <Chip label="Displacement: " color="primary" />
      <Chip label="Horsepower: " color="primary" />
      <Chip label="Weight_in_lbs: " color="primary" />
      <Chip label="Acceleration: " color="primary" />
      <Chip label="Year: " color="primary" />
      <Chip label="Origin: " color="primary" />
    </div>
  );
};
export default Car;
