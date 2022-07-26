import React from "react";
import styles from "./Menu.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Button = ({ moveDataToCart }) => {
  return (
    <div>
      <button
        onClick={() => moveDataToCart()}
        className={styles.addToCartbutton}
      >
        <AiOutlineShoppingCart className={styles.addToCartIcon} />
        ADD
      </button>
    </div>
  );
};

export default Button;
