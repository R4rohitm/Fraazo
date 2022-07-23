import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Menu from "../components/Product/Menu";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import Account from "../components/Account/Account";
import Checkout from "../components/AfterCart/Checkout";
import Homepage from "../components/Homepage/Homepage";
import Address from "../components/AfterCart/Address";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product" element={<Menu />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/home" element={<Homepage/>}></Route>
        <Route path="/address" element={<Address/>}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
