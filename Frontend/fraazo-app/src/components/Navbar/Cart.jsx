import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const userId = localStorage.getItem("userId");
const Cart = ({ setCartComponent }) => {
  const [cartData, setCartData] = useState();
  const [cartCount, setCartCount] = useState(0);
  const [loader, setLoader] = useState(true);
  const [loading, setLoading] = useState(false);
  const price = useRef(0);
  const navigate = useNavigate();

  const deleteItem = async (id) => {
    try {
      // eslint-disable-next-line
      let response = await fetch(
        `https://fraazonem201.herokuapp.com/cart/${id}`,
        {
          method: "DELETE",
        }
      );

      setLoading(!loading);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setLoader(true);
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
        price.current = data.reduce((acc, el) => {
          return acc + parseInt(el.price) * parseInt(el.quantity);
        }, 0);
        setCartData(data);
      } catch (e) {
        console.log(e);
      }
      setLoader(false);
    };

    getCount();
    getCart();
  }, [loading]);

  return (
    <div class="w-full fixed top-0 right-0 bottom-0 flex flex-row-reverse z-40 font-Quicksand">
      <div class=" w-[35%] h-full bg-white border flex flex-col py-6 text-[20px] font-semibold ">
        <div class="w-full h-10 px-5 flex justify-between">
          <p>
            My Cart {"("}
            {cartCount} Items{")"}
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
        {loader ? (
          <div class="h-full w-full flex justify-center items-center">
            <svg
              aria-hidden="true"
              class="mr-2 w-12 h-12 text-gray-200 animate-spin fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        ) : !cartData || cartData.length === 0 ? (
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
          <div class="px-6 h-screen flex flex-col justify-between ">
            <div class="h-[85%] overflow-y-scroll no-scrollbar">
              {cartData.map((e) => {
                return (
                  <div
                    class="w-full border-b h-[120px] flex justify-between gap-4 items-start  px-4 py-2 font-Quicksand font-semibold"
                    key={e._id}
                  >
                    <div class="h-full w-[70%] flex justify-start items-start gap-7">
                      <img
                        class="h-[100px] border my-auto z-30 bg-white rounded-md"
                        src={e.image}
                        alt="img"
                      />
                      <div class="h-full py-2 flex flex-col justify-between items-start text-[13px]">
                        <p class="text-sm font-normal">{e.name}</p>
                        <p class="text-sm  font-extralight">{e.qty}</p>
                        <p class="text-md font-medium">₹{e.price}</p>
                      </div>
                    </div>
                    <div class="w-[22%] h-full flex flex-col justify-between items-end">
                      <div
                        onClick={() => deleteItem(e._id)}
                        class="cursor-pointer py-4 text-[11px] font-light underline underline-offset-2"
                      >
                        Remove
                      </div>
                      <Button
                        loading={loading}
                        setLoading={setLoading}
                        id={e._id}
                        q={e.quantity}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <div class="w-full h-16 border-t-2 flex justify-between items-center px-2 tracking-wider">
                <div class="text-sm">
                  <p>{cartData.length} Items</p>
                  <p class="text-[#FE6D0F] flex items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="fill-[#FE6D0F] mt-[2px] h-3"
                      viewBox="0 0 320 512"
                    >
                      <path d="M.0022 64C.0022 46.33 14.33 32 32 32H288C305.7 32 320 46.33 320 64C320 81.67 305.7 96 288 96H231.8C241.4 110.4 248.5 126.6 252.4 144H288C305.7 144 320 158.3 320 176C320 193.7 305.7 208 288 208H252.4C239.2 266.3 190.5 311.2 130.3 318.9L274.6 421.1C288.1 432.2 292.3 452.2 282 466.6C271.8 480.1 251.8 484.3 237.4 474L13.4 314C2.083 305.1-2.716 291.5 1.529 278.2C5.774 264.1 18.09 256 32 256H112C144.8 256 173 236.3 185.3 208H32C14.33 208 .0022 193.7 .0022 176C.0022 158.3 14.33 144 32 144H185.3C173 115.7 144.8 96 112 96H32C14.33 96 .0022 81.67 .0022 64V64z" />
                    </svg>
                    {price.current}
                  </p>
                </div>
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
          </div>
        )}
      </div>
      <div onClick={() => setCartComponent(false)} class="w-[65%]"></div>
    </div>
  );
};

export default Cart;
