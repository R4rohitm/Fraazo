import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Menu from "../components/Product/Menu";
import Account from "../components/Account/Account";
import OrderSuccess from "../components/Payment/OrderSuccess";
import Checkout from "../components/AfterCart/Checkout";
import Address from "../components/AfterCart/Address";
import HomePage from "../components/Homepage/Homepage";
import Payment from "../components/Payment/Payment";
import { Footer } from "../components/Footer/Footer";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Menu />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/success" element={<OrderSuccess />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/address" element={<Address />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default MainRoutes;
