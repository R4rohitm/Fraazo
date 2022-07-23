import React from "react";

const WelcomeUser = () => {
  return (
    <div class="w-full h-full flex flex-col justify-around items-center ">
      <div class="w-full h-7 tracking-wide flex justify-center items-center text-[20px] font-semibold">
        Welcome to Fraazo!
      </div>
      <img
        class="h-44 -ml-7"
        src="https://webasset.fraazo.com/production/mobile_verified.9f28b4b95b80b73ab016.png"
        alt="welcome"
      />
      <div class="tracking-wide text-[14px]">Email Verified</div>
    </div>
  );
};

export default WelcomeUser;
