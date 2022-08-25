import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AfterCart.module.css";
import CheckoutItem from "./CheckoutItem";
import { CartContext } from "../../context/CartContext";

const userId = localStorage.getItem("userId");

const Checkout = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const { setCartTotal } = useContext(CartContext);

  useEffect(() => {
    const getCart = async () => {
      try {
        let response = await fetch(
          `https://fraazonem201.herokuapp.com/cart/user/${userId}`
        );
        let data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (e) {
        console.log(e);
      }
    };
    getCart();
  }, []);

  let price = product.reduce((acc, el) => {
    return acc + parseInt(el.price);
  }, 0);

  let total = price - 25;
  setCartTotal(total);

  return (
    <div className={styles.checkout_container}>
      <div className={styles.checkout_left_container}>
        <p>Cart items : {product.length}</p>
        {product.map((el) => (
          <CheckoutItem key={el._id} {...el} />
        ))}
      </div>
      <div className={styles.checkout_right_container}>
        <h2>Bill Details</h2>
        <div className={styles.checkout_paymentDetails}>
          <p>Total Items Price</p>
          <p>₹ {price}</p>
        </div>
        <div className={styles.checkout_paymentDetails}>
          <p>Product Discount</p>
          <p>-₹ 25</p>
        </div>
        <div className={styles.checkout_paymentDetails}>
          <p>Total to Pay</p>
          <p>₹ {total}</p>
        </div>
        <div
          class="cursor-point"
          onClick={() => navigate("/payment")}
          className={styles.button_to_address}
        >
          <p>Total ₹ {total}</p>
          <p>PROCEED TO PAY</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
