import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./AfterCart.module.css"
import CheckoutItem from './CheckoutItem'

const Checkout = () => {
    const [product,setProduct] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
       const getData = async ()=>{
        let res = await fetch("http://localhost:8080/items/")
        let data = await res.json()
        //console.log(data)
        setProduct(data)
       }
       getData()
    },[])

    let cutpeeledsprouts = product.filter((el)=>{
        return el.category==="vegetables" && el.subcategory==="cuts"         
    })
    let price = cutpeeledsprouts.reduce((acc,el)=>{
      return acc+parseInt(el.price)
    },0)
    //console.log(price,cutpeeledsprouts)
    let total = price-25;

  return (
    <div className={styles.checkout_container}>
        <div className={styles.checkout_left_container}>
        <p>Cart items : {cutpeeledsprouts.length}</p>
          {cutpeeledsprouts.map((el)=>(
            <CheckoutItem key={el._id} {...el}/>
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
           <div onClick={()=>navigate("/address")} className={styles.button_to_address}>
            <p>Total ₹ {total}</p>
            <p>SELECT ADDRESS</p>
            </div>
        </div>
    </div>
  )
}

export default Checkout