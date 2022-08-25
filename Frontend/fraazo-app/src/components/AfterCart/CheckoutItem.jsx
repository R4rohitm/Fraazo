import React, { useState } from "react";
import styles from "./AfterCart.module.css";
import Button from "../Navbar/Button";
const CheckoutItem = (props) => {
  // const [loading, setLoading] = useState(false);
  return (
    <>
      <div className={styles.checkoutitem_container}>
        <div>
          <img src={props.image} alt="cartitemimage" />
        </div>
        <div>
          <div>{props.name}</div>
          <div>{props.qty}</div>
        </div>
        <div>
          <Button id={props._id} q={props.quantity} />
        </div>
        <div>
          <p>₹ {props.price}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CheckoutItem;
