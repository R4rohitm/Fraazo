import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";

const RegisterUser = () => {
  const [formData, setFormData] = useState();

  const { createUser, setAlreadyExists } = useContext(UserContext);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    createUser(formData);
    setAlreadyExists({
      yes: false,
      no: false,
    });
  };

  const handleX = () => {
    setAlreadyExists({
      yes: false,
      no: false,
    });
  };

  return (
    <div>
      <div class="h-24">
        <div class="w-[590px] flex flex-row-reverse">
          <svg
            onClick={() => handleX()}
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 cursor-pointer"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </div>
        <div class="w-full h-7 tracking-wide flex items-center text-[20px] font-semibold">
          Hello New Customer
        </div>
        <div class="w-full h-9 flex items-center text-[16px] font-semibold">
          Register now for Unbelievable Discounts.
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        class="w-full h-[380px] flex flex-col gap-6 text-[15px] mt-5 font-semibold text-[#999999] "
      >
        <div class="flex flex-col gap-10">
          <div class="flex justify-between items-center">
            <input
              class="w-[40%] h-[35px] border-b border-[#999999] focus:outline-none focus:text-black"
              type="text"
              placeholder="First Name"
              name="firstname"
              onChange={handleChange}
            />
            <input
              class="w-[40%] h-[35px] border-b border-[#999999] focus:outline-none"
              type="text"
              placeholder="Last Name"
              name="lastname"
              onChange={handleChange}
            />
          </div>
          <div class="flex justify-between items-center">
            <input
              class="w-[40%] h-[35px] border-b border-[#999999] focus:outline-none"
              type="email"
              placeholder="Email Id"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div class="flex justify-between items-center">
            <input
              class="w-[40%] h-[35px] border-b border-[#999999] focus:outline-none"
              type="number"
              placeholder="Mobile Number"
              name="mobile"
              onChange={handleChange}
            />
          </div>
          <div class="flex justify-start items-center font-normal gap-5">
            <p>Title :</p>
            <div class="flex justify-start items-center text-[16px] text-[#4FBB90] gap-3">
              <input
                class="w-4 h-4 border-[#4FBB90] text-[#4FBB90] bg-gray-100 focus:ring-[#4FBB90]"
                type="radio"
                name="title"
                value={"Mr."}
                onChange={handleChange}
              />
              <p>Mr.</p>
            </div>
            <div class="flex justify-start items-center text-[16px] text-[#4FBB90] gap-3">
              <input
                class="w-4 h-4 border-[#4FBB90] text-[#4FBB90] bg-gray-100 focus:ring-[#4FBB90]"
                type="radio"
                name="title"
                value={"Mrs."}
                onChange={handleChange}
              />
              <p>Mrs.</p>
            </div>
            <div class="flex justify-start items-center text-[16px] text-[#4FBB90] gap-3">
              <input
                class="w-4 h-4 border-[#4FBB90] text-[#4FBB90] bg-gray-100 focus:ring-[#4FBB90]"
                type="radio"
                name="title"
                value="Miss"
                onChange={handleChange}
              />
              <p>Miss</p>
            </div>
          </div>
        </div>
        <div class="w-full h-12 mt-10 flex justify-center items-center">
          <div class="w-40 text-white font-bold flex justify-center items-center h-full px-6 rounded-full bg-[#43C6AC]">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterUser;
