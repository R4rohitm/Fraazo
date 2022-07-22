import React, { useState } from 'react'
import Button from './Button'
import styles from "./Menu.module.css"

const ProductItem = (props) => {
  const [quantity,setQuantity] = useState(0)
  const [buttonAppear,setButtonAppear] = useState(true)

  const moveDataToCart = ()=>{
    console.log(props,"quantity",quantity)
    setQuantity(1)
    setButtonAppear(!buttonAppear)
  }
  const QuantityDecrement = (value)=>{
    if(quantity===1){
      setButtonAppear(!buttonAppear)
    }else{
    setQuantity(quantity-1)
    }
  }
  return (
    <div className={styles.product_each_items}>
        <img style={{width:"100"}} src={props.image} alt="product_image" />
        <div>{props.name}</div>
        <div className={styles.product_each_items_priceButton}>
            <div>
                <div style={{fontSize:"13px",color:"lightslategray",marginTop:"5px"}}>{props.qty}</div>
                <div style={{fontWeight:"500"}}>₹ {props.price}</div>
            </div>
            <div>
                {buttonAppear ? 
                (<Button moveDataToCart={moveDataToCart}/>)
                :(<>
                <button className={styles.cartminusbutton} onClick={()=>QuantityDecrement()}>-</button>
                <span>{quantity}</span>
                <button className={styles.cartplusbutton} onClick={()=>setQuantity(quantity+1)}>+</button>
                </>)}
            </div>
        </div>
    </div>
  )
}

export default ProductItem