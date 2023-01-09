import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Welcome } from "../pages/Welcome";

export default function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/" element={<Welcome/>} />
      </Routes>
    </BrowserRouter>
  );
}
