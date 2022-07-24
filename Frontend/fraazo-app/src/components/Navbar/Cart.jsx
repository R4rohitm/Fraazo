import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const userId = localStorage.getItem("userId");
const Cart = ({ setCartComponent }) => {
  // const { cartData, cartItems } = useContext(CartContext);
  // console.log(cartData);
  const [cartData, setCartData] = useState();
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const getCount = async () => {
      try {
        let response = await fetch(
          `https://fraazonem201.herokuapp.com/cart/countItems/${userId}`
        );
        let data = await response.json();
        console.log(data);
        setCartCount(data);
      } catch (e) {
        console.log(e);
      }
    };

    const getCart = async () => {
      try {
        let response = await fetch(
          `https://fraazonem201.herokuapp.com/cart/user/${userId}`
        );
        let data = await response.json();
        console.log(data);
        setCartData(data);
      } catch (e) {
        console.log(e);
      }
    };
    getCount();
    getCart();
  }, []);
  return (
    <div class="w-full fixed top-0 right-0 bottom-0 flex flex-row-reverse z-40 font-Quicksand">
      <div class=" w-[33%] h-full bg-white border flex flex-col py-6 text-[20px] font-semibold ">
        <div class="w-full h-10 px-5 flex justify-between">
          <p>
            My Cart{"("} {cartCount} {")"}Items
          </p>
          <svg
            onClick={() => setCartComponent(false)}
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 cursor-pointer"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </div>
        {!cartData ? (
          <div class="h-full w-full flex flex-col justify-center items-center gap-5 font-Quicksand">
            <img
              class="h-52"
              src="https://webasset.fraazo.com/production/empty_cart.35cdf7d10a7af693e2ea.png"
              alt="null"
            />
            <div class=" text-[21px]">Whoops... Cart is empty</div>
            <div class="w-56 text-center text-[16px] text-[#999999]">
              Add some fruits, veggies and dairy products to your cart.
            </div>
            <div
              onClick={() => setCartComponent(false)}
              class="px-3 py-2 cursor-pointer flex justify-center item-center rounded-full bg-[#43C6AC] text-white font-semibold"
            >
              Let's Shop!
            </div>
          </div>
        ) : (
          <div class="px-6 overflow-y-auto">
            {cartData.map((e) => {
              return (
                <div
                  class="w-full h-[150px] flex justify-start items-center gap-7 py-3 font-Quicksand font-semibold"
                  key={e._id}
                >
                  <img
                    class="h-[100px] border z-30 bg-white rounded-md"
                    src={e.image}
                    alt="img"
                  />
                  <div class="h-full flex flex-col py-5 items-start justify-between text-[14px]">
                    <p>{e.name}</p>
                    <p>{e.qty}</p>
                    <p>₹{e.price}</p>
                  </div>
                  <div></div>
                </div>
              );
            })}
          </div>
        )}
        <div class="w-full h-7 flex flex-row-reverse items-center px-4">
          <div
            onClick={() => {
              setCartComponent(false);
              navigate("/checkout");
            }}
            class="w-[180px] cursor-pointer h-[40px] px-8 text-white flex justify-center items-center bg-[#4FBB90] rounded-xl"
          >
            Checkout
          </div>
        </div>
      </div>
      <div onClick={() => setCartComponent(false)} class="w-[67%]"></div>
    </div>
  );
};

export default Cart;
