import React, { useState, useEffect } from "react";

const EnterOtp = ({
  loader,
  email,
  sendOTP,
  setOtpComponent,
  verifyOTP,
  otpResponse,
}) => {
  const [otp, setOtp] = useState("");
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
    setOtp(event.target.value.slice(0, limit));
  };

  return (
    <div class="mt-7 flex flex-col gap-2 text-[#999999] text-[14px]">
      <div class="flex items-center gap-1">
        <button onClick={() => setOtpComponent(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 mr-3"
            viewBox="0 0 448 512"
          >
            <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
          </svg>
        </button>
        {otpResponse.bool ? (
          <div class="text-[red]">{otpResponse.data}</div>
        ) : (
          <div>Enter 6-Digit OTP</div>
        )}
      </div>
      <input
        type="number"
        onChange={handleNumChange}
        value={otp}
        class="outline-none h-8 border-b border-[#4FBB90] text-black text-[18px] tracking-[30px] font-semibold"
      />
      <div>OTP has been sent to {email.email}</div>
      <div class="flex justify-between items-center">
        <div>Haven't received your OTP yet?</div>
        <div
          onClick={() => {
            setTimer(15);
            setResend(false);
          }}
          class="cursor-pointer text-black font-semibold"
        >
          {resend ? (
            <>
              <div onClick={() => sendOTP(email)}>Resend</div>
            </>
          ) : (
            <>Wait 00:{timer} </>
          )}
        </div>
      </div>
      <div class="w-full mt-8 h-12 flex justify-center items-center">
        <button
          onClick={() => verifyOTP(otp, email)}
          class="h-full px-11 disabled rounded-full bg-[#43C6AC] text-white font-bold text-[15px] cursor-pointer"
        >
          {!loader ? (
            <div>Continue</div>
          ) : (
            <svg
              aria-hidden="true"
              class="mr-2 w-8 h-8 text-gray-200 animate-spin bg-[#43C6AC] fill-blue-600"
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
          )}
        </button>
      </div>
    </div>
  );
};

export default EnterOtp;
