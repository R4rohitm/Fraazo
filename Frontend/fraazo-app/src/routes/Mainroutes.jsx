import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/user/Login";
import Register from "../components/user/Register";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
