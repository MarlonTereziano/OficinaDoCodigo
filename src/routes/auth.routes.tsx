import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Welcome } from "../pages/Welcome";
import { Exercise1 } from "../pages/Exercises/Exercise1";
import { Exercise2 } from "../pages/Exercises/Exercise2";

export default function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/" element={<Welcome/>} />
        <Route path="/ex1" element={<Exercise1/>} />
        <Route path="/ex2" element={<Exercise2/>} />
      </Routes>
    </BrowserRouter>
  );
}
