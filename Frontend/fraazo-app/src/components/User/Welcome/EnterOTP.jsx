import React, { useState, useEffect } from "react";

const EnterOtp = () => {
  const [num, setNum] = useState("");
  const [timer, setTimer] = useState(15);
  const [resend, setResend] = useState(false);

  const time = () => setTimer(timer - 1);

  useEffect(() => {
    if (timer <= 0) {
      setResend(true);
      return;
    }
    const id = setInterval(time, 1000);
    return () => clearInterval(id);
  }, [timer]);

  const handleNumChange = (event) => {
    const limit = 6;
    setNum(event.target.value.slice(0, limit));
  };

  return (
    <div class="mt-7 flex flex-col gap-2 text-[#999999] text-[14px]">
      <div>Enter 6-Digit OTP</div>
      <input
        type="number"
        onChange={handleNumChange}
        value={num}
        class="outline-none h-8 border-b border-[#4FBB90] text-black text-[18px] tracking-[30px] font-semibold"
      />
      <div>OTP has been sent to</div>
      <div class="flex justify-between items-center">
        <div>Haven't received your OTP yet?</div>
        <div
          onClick={() => {
            setTimer(15);
            setResend(false);
          }}
          class="cursor-pointer text-black font-semibold"
        >
          {resend ? <>Resend</> : <>Wait 00:{timer} </>}
        </div>
      </div>
      <div class="w-full mt-8 h-12 flex justify-center items-center">
        <button class="h-full px-11 disabled rounded-full bg-[#43C6AC] text-white font-bold text-[15px] cursor-pointer">
          Continue
        </button>
      </div>
    </div>
  );
};

export default EnterOtp;
