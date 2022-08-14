import React from "react";
import { Routes, Route } from "react-router";
// Write component imports here //
import Home from "./components/Home";
import About from "./components/About";
import Car from "./components/Car";

// Start Router function here //
export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/car/:id" element={<Car />} />
      </Routes>
    </div>
  );
}
