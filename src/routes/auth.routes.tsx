import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Welcome } from "../pages/Welcome";
import { Exercise1 } from "../pages/Exercises/Exercise1";
import { Exercise2 } from "../pages/Exercises/Exercise2";
import { Exercise3 } from "../pages/Exercises/Exercise3";
import { Exercise4 } from "../pages/Exercises/Exercise4";

export default function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/ex1" element={<Exercise1 />} />
        <Route path="/ex2" element={<Exercise2 />} />
        <Route path="/ex3" element={<Exercise3 />} />
        <Route path="/ex4" element={<Exercise4 />} />
      </Routes>
    </BrowserRouter>
  );
}
