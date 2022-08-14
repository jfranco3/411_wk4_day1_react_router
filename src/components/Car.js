import React from "react";
import cars from "../cars.json";
// Import {useParams} from "react-router-dom" here //
import { useParams } from "react-router-dom";
// import Container, Paper, Chip from MUI//
import { Container, Paper, Chip } from "@mui/material";

const Car = () => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === Number(id));

  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <div>
          <h2>{car.Name.toUpperCase()}</h2>
          <Chip label={`id: ${car.id}`} color="primary" />
          <Chip label={`Name: ${car.Name}`} color="primary" />
          <Chip
            label={`Miles_per_Gallon: ${car.Miles_per_Gallon}`}
            color="primary"
          />
          <Chip label={`Cylinders: ${car.Cylinders}`} color="primary" />
          <Chip label={`Displacement: ${car.Displacement}`} color="primary" />
          <Chip label={`Horsepower: ${car.Horsepower}`} color="primary" />
          <Chip label={`Weight_in_lbs: ${car.Weight_in_lbs}`} color="primary" />
          <Chip label={`Acceleration: ${car.Acceleration}`} color="primary" />
          <Chip label={`Year: ${car.Year}`} color="primary" />
          <Chip label={`Origin: ${car.Origin}`} color="primary" />
        </div>
      </Paper>
    </Container>
  );
};
export default Car;
