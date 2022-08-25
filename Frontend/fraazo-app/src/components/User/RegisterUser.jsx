import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";

const RegisterUser = ({ setUserId, setAlreadyExists }) => {
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);

  const { createUser } = useContext(UserContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    let x = createUser(formData);
    if (x) {
      setLoading(false);
      setUserId(localStorage.getItem("userId"));
      setAlreadyExists({
        yes: false,
        no: false,
      });
    }
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
            {loading ? (
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
            ) : (
              <input type="submit" value="Submit" />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterUser;
