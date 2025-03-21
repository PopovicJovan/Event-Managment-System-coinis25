import { Routes, Route } from "react-router-dom";
import { Home } from "../views/Home";
import { Login } from "../views/Login";
import { Register } from "../views/Register";
import { Parties } from "../views/Parties";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/parties" element={<Parties />} />
    </Routes>
  );
};
