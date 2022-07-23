import React, { useState, useContext } from "react";
import EnterEmail from "./Welcome/EnterEmail";
import EnterOTP from "./Welcome/EnterOTP";
import { UserContext } from "../../context/UserContext";

const Welcome = ({ setLoginComponent, handleLoginComponent }) => {
  const [otpComponent, setOtpComponent] = useState(false);
  const [email, setEmail] = useState({});
  const [loader, setLoader] = useState(false);
  const [ae, setAe] = useState({ yes: false, no: true });
  const [otpResponse, setOtpResponse] = useState({ bool: false, data: "" });

  const { setAlreadyExists } = useContext(UserContext);

  const sendOTP = async (email) => {
    console.log(email);
    setLoader(true);
    try {
      let response = await fetch(`http://localhost:8080/auth/OTP`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(email),
      });

      let data = await response.json();
      console.log(data.alreadyExists);
      if (data.alreadyExists === true) {
        setAe({ yes: true, no: false });
      } else {
        setAe({ yes: false, no: true });
      }

      setOtpComponent(true);
    } catch (e) {
      console.log("e");
    }
    setLoader(false);
  };

  const verifyOTP = async (otp, email) => {
    console.log(otp, email);
    setLoader(true);
    try {
      let response = await fetch(`http://localhost:8080/auth/verifyOTP`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          otp,
          email: email.email,
        }),
      });

      let data = await response.json();
      console.log(data);

      if (data.msg === "Verified") {
        setAlreadyExists(ae);
      }
      setLoginComponent({
        login: false,
        welcome: false,
      });
      setOtpResponse({ bool: true, data: data.msg });
    } catch (e) {
      console.log(e);
    }
    setLoader(false);
  };

  return (
    <div>
      <div>
        <div class="w-[370px] flex flex-row-reverse">
          <svg
            onClick={() => handleLoginComponent()}
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 cursor-pointer"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </div>
        <div class="w-full h-7 tracking-wide flex items-center text-[20px] font-semibold">
          Welcome to Fraazo!
        </div>
        <div class="w-full h-9 flex items-center text-[16px] font-semibold">
          Sign In to track your Order and More.
        </div>
      </div>
      <div class="w-full">
        {otpComponent ? (
          <EnterOTP
            loader={loader}
            email={email}
            sendOTP={sendOTP}
            setOtpComponent={setOtpComponent}
            verifyOTP={verifyOTP}
            otpResponse={otpResponse}
          />
        ) : (
          <EnterEmail
            loader={loader}
            email={email}
            sendOTP={sendOTP}
            setEmail={setEmail}
          />
        )}
      </div>
    </div>
  );
};

export default Welcome;
