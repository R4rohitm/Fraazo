import React from "react";

const EnterEmail = () => {
  return (
    <div class="mt-7 flex flex-col gap-2 text-[#999999] text-[14px]">
      <div>Enter your Email Address</div>
      <input
        type="email"
        class="outline-none h-6 border-b border-[#4FBB90] text-black text-[16px] font-thin"
      />
      <div>We will send you an OTP on this email</div>
      <div class="w-full mt-8 h-12 flex justify-center items-center">
        <button class="h-full px-11 disabled rounded-full bg-[#43C6AC] text-white font-bold text-[15px] cursor-pointer">
          Get OTP
        </button>
      </div>
    </div>
  );
};

export default EnterEmail;
