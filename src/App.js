import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Box width="400" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
