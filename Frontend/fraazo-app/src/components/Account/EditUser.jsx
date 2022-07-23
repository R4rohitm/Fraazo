import React from "react";

const EditUser = () => {
  return (
    <div class="w-[800px] h-[300px] border border-black py-4">
      <div class="flex px-4 justify-between items-center">
        <p>Profile</p>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 cursor-pointer"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </button>
      </div>
      <div>
        <form class="flex flex-col">
          <div class="flex w-full">
            <input class="border border-black" type="text" placeholder="Name" />
            <input type="text" placeholder="Surname" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
            <div>Email Verified!</div>
          </div>
          <div>
            <input type="number" placeholder="Number" />
            <div>
              <input type="radio" value="Mr." /> <p>Mr.</p>
              <input type="radio" value="Mrs." /> <p>Mrs.</p>
              <input type="radio" value="Miss." /> <p>Miss.</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
