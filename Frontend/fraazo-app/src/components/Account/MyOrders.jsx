import React from "react";

const MyOrders = () => {
  return (
    <div class="w-full h-full px-5 py-5 flex justify-start ">
      <div class="h-14 w-[16%] text-[28px] text-semibold flex justify-start items-start">
        Your Orders
      </div>
      <div class="w-[84%] flex flex-col justify-center items-center gap-6">
        <img
          src="https://webasset.fraazo.com/production/cb9d34118d160ee0b3217476755c968a.svg"
          alt="MyOrders"
        />
        <p class="text-[16px] font-semibold">No Orders Found!</p>
        <p class="text-[14px] font-semibold">Let’s Add Some Items!</p>
        <div class="w-64 h-14 px-5 flex justify-center items-center text-white font-semibold  bg-[#4FBB90] rounded-2xl">
          START SHOPPING
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
