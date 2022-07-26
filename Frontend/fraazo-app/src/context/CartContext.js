import React, { createContext, useState } from "react";

const CartContext = createContext();
const userId = localStorage.getItem("userId");

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState();
  const [cartTotal, setCartTotal] = useState();

  const cartItems = async () => {
    try {
      let response = await fetch(
        `https://fraazonem201.herokuapp.com/cart/user/${userId}`
      );
      let data = await response.json();
      console.log(data);
      setCartData(data);
    } catch (e) {
      console.log(e);
    }
  };

  const createCart = async (data) => {
    console.log(data);
    try {
      let response = await fetch(`https://fraazonem201.herokuapp.com/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      let data2 = await response;
      console.log(data2);
    } catch (e) {
      console.log(e);
    }
  };

  const value = {
    cartItems,
    createCart,
    cartData,
    cartTotal,
    setCartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
