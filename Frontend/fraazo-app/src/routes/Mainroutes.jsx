import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "../components/Product/Menu";
import Login from "../components/user/Login";
import Register from "../components/user/Register";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product" element={< Menu/>}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
