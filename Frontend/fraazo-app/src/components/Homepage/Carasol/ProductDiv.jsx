import React, { useContext, useState } from "react";
import styles from "./carasol.module.css";
import { CartContext } from "../../../context/CartContext";

const userId = localStorage.getItem("userId");
const ProductDiv = ({ data }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { createCart } = useContext(CartContext);

  const checkLogin = () => {
    if (!userId) {
      return alert("Please Login");
    }
  };
  return (
    <>
      <img
        style={{ width: "100", backgroundColor: "#f9f9f9" }}
        src={data.image}
        alt="product_image"
      />
      <div>{data.name}</div>
      <div className={styles.product_each_items_priceButton}>
        <div>
          <div
            style={{
              fontSize: "13px",
              color: "lightslategray",
              marginTop: "5px",
            }}
          >
            {data.qty}
          </div>
          <div style={{ fontWeight: "500" }}>₹ {data.price}</div>
        </div>
        {addedToCart ? (
          <div
            disable
            class="group disabled:bg-opacity-40 hover:cursor-none w-20 h-[32px] cursor-pointer rounded-3xl flex justify-center items-center gap-1 text-[13px] text-[#4FBB90] border border-[#4FBB90] hover:bg-[#9de9cb] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 fill-[#4FBB90] rotate-[360deg] duration-500 group-hover:fill-white"
              viewBox="0 0 448 512"
            >
              <path d="M182.6 246.6C170.1 259.1 149.9 259.1 137.4 246.6L57.37 166.6C44.88 154.1 44.88 133.9 57.37 121.4C69.87 108.9 90.13 108.9 102.6 121.4L159.1 178.7L297.4 41.37C309.9 28.88 330.1 28.88 342.6 41.37C355.1 53.87 355.1 74.13 342.6 86.63L182.6 246.6zM182.6 470.6C170.1 483.1 149.9 483.1 137.4 470.6L9.372 342.6C-3.124 330.1-3.124 309.9 9.372 297.4C21.87 284.9 42.13 284.9 54.63 297.4L159.1 402.7L393.4 169.4C405.9 156.9 426.1 156.9 438.6 169.4C451.1 181.9 451.1 202.1 438.6 214.6L182.6 470.6z" />
            </svg>
            <p>Added</p>
          </div>
        ) : (
          <div
            onClick={() => {
              checkLogin();
              createCart(data);
              setAddedToCart(true);
            }}
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
        )}
      </div>
    </>
  );
};

export default ProductDiv;
