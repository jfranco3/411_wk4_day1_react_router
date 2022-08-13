import React from "react";
import cars from "../cars.json";
// Import {useParams} from "react-router-dom" here //
import { useParams } from "react-router-dom";
// import Container, Paper, Chip from MUI//
import { Container, Paper, Chip } from "@mui/material";

const Car = (props) => {
  const id = useParams().id;
  const car = cars.find((car, index) => cars.id === Number(id));

  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
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
      </Paper>
    </Container>
  );
};
export default Car;
