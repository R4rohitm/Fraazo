import React from 'react'
import styles from "./Menu.module.css"
import { AiOutlineShoppingCart } from 'react-icons/ai'

const ProductItem = (props) => {
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
                <button><span className={styles.addToCartIcon}><AiOutlineShoppingCart/></span>ADD</button>
            </div>
        </div>
    </div>
  )
}

export default ProductItem