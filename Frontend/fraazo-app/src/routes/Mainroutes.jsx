import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Menu from "../components/Product/Menu";
import RegisterUser from "../components/User/RegisterUser";
import Account from "../components/Account/Account";
import OrderSuccess from "../components/Payment/OrderSuccess";
import Checkout from "../components/AfterCart/Checkout";
import Address from "../components/AfterCart/Address";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path="/register" element={<RegisterUser />}></Route>
        <Route path="/product" element={<Menu />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/success" element={<OrderSuccess />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/address" element={<Address />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
