import React, { useState } from 'react'
import styles from "./AfterCart.module.css"

const CheckoutButton = () => {
    const [quantity,setQuantity] = useState(1)

    const QuantityDecrement = (value)=>{
        if(quantity===1){
          alert("item remove")
        }else{
        setQuantity(quantity-1)
        }
      }
  return (
    <div>
        <button className={styles.checkoutminusbutton} onClick={()=>QuantityDecrement()}>-</button>
        <span className={styles.checkoutquantity}>{quantity}</span>
        <button className={styles.checkoutplusbutton} onClick={()=>setQuantity(quantity+1)}>+</button>
    </div>
  )
}

export default CheckoutButton