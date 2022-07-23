import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const HelpAndSupport = () => {
  return (
    <div>
      <div class="h-14 text-[28px] flex justify-start items-start font-semibold">
        Help & Support
      </div>
      <div class=" h-full grid grid-cols-3 gap-10">
        <div class="h-[180px] w-[320px] bg-white shadow-md  flex flex-col justify-center items-center mb-5 cursor-pointer text-[20px] hover:shadow-xl hover:z-50 ">
          <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/packages/lf20_rcuthdnb.json"
            style={{ height: "135px", width: "135px" }}
          ></Player>
          <p>Chat With Us</p>
        </div>
        <div class="h-[180px] w-[320px] bg-white shadow-md  flex flex-col justify-center items-center mb-5 cursor-pointer text-[20px] hover:shadow-xl hover:z-50 ">
          <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/private_files/lf30_3lflolyo.json"
            style={{ height: "135px", width: "135px" }}
          ></Player>
          <p>Call Us</p>
        </div>
        <div class="h-[180px] w-[320px] bg-white shadow-md  flex flex-col justify-center items-center mb-5 cursor-pointer text-[20px] hover:shadow-xl hover:z-50 ">
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_cgcqmuxx.json"
            style={{ height: "135px", width: "135px" }}
          ></Player>
          <p>FAQ's</p>
        </div>
        <div class="h-[180px] w-[320px] bg-white shadow-md  flex flex-col justify-center items-center mb-5 cursor-pointer text-[20px] hover:shadow-xl hover:z-50 ">
          <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/packages/lf20_msdmfngy.json"
            style={{ height: "135px", width: "135px" }}
          ></Player>
          <p>Privacy Policy</p>
        </div>
        <div class="h-[180px] w-[320px] bg-white shadow-md  flex flex-col justify-center items-center mb-5 cursor-pointer text-[20px] hover:shadow-xl hover:z-50 ">
          <Player
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_cmxmy8p4.json"
            style={{ height: "135px", width: "135px" }}
          ></Player>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
