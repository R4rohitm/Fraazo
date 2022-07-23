import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Menu from "../components/Product/Menu";
import RegisterUser from "../components/User/RegisterUser";
import Account from "../components/Account/Account";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path="/register" element={<RegisterUser />}></Route>
        <Route path="/product" element={<Menu />}></Route>
        <Route path="/account" element={<Account />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
