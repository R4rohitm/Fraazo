import React, { createContext, useState } from "react";

const CartContext = createContext();
const userId = JSON.parse(localStorage.getItem("userId"));

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState();

  const cartItems = async () => {
    try {
      let response = await fetch(`http://localhost:8080/cart/user/${userId}`);
      let data = await response.json();
      setCartData(data);
    } catch (e) {
      console.log(e);
    }
  };

  const value = { cartItems, cartData };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
