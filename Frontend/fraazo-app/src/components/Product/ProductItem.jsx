import React, { useState, useContext } from "react";
import Button from "./Button";
import styles from "./Menu.module.css";
import { CartContext } from "../../context/CartContext";

const userId = localStorage.getItem("userId");

const ProductItem = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [buttonAppear, setButtonAppear] = useState(true);

  const data = {
    userId: userId,
    name: props.name,
    qty: props.qty,
    image: props.image,
    price: props.price,
    quantity: 1,
  };
  const { createCart } = useContext(CartContext);

  const moveDataToCart = () => {
    console.log(props, "quantity", quantity);
    setQuantity(1);
    setButtonAppear(!buttonAppear);
  };
  const QuantityDecrement = (value) => {
    if (quantity === 1) {
      setButtonAppear(!buttonAppear);
    } else {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className={styles.product_each_items}>
      <img style={{ width: "100" }} src={props.image} alt="product_image" />
      <div>{props.name}</div>
      <div className={styles.product_each_items_priceButton}>
        <div>
          <div
            style={{
              fontSize: "13px",
              color: "lightslategray",
              marginTop: "5px",
            }}
          >
            {props.qty}
          </div>
          <div style={{ fontWeight: "500" }}>₹ {props.price}</div>
        </div>
        <div>
          <div
            onClick={() => createCart(data)}
            class="group w-20 h-[32px] cursor-pointer rounded-3xl flex justify-center items-center gap-1 text-[13px] text-[#4FBB90] border border-[#4FBB90] hover:bg-[#4FBB90] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 fill-[#4FBB90] group-hover:fill-white"
              viewBox="0 0 576 512"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM272 180H316V224C316 235 324.1 244 336 244C347 244 356 235 356 224V180H400C411 180 420 171 420 160C420 148.1 411 140 400 140H356V96C356 84.95 347 76 336 76C324.1 76 316 84.95 316 96V140H272C260.1 140 252 148.1 252 160C252 171 260.1 180 272 180zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            <p>ADD</p>
          </div>
          {/* {buttonAppear ? (
            <Button moveDataToCart={moveDataToCart} />
          ) : (
            <>
              <button
                className={styles.cartminusbutton}
                onClick={() => QuantityDecrement()}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className={styles.cartplusbutton}
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
