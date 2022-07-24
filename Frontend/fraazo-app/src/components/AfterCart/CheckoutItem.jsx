import React from 'react'
import styles from "./AfterCart.module.css"
import CheckoutButton from './CheckoutButton'

const CheckoutItem = (props) => {
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
            <CheckoutButton/>
        </div>
        <div>
            <p>₹ {props.price}</p>
        </div>
    </div>
        <hr/>
    </>
  )
}

export default CheckoutItem