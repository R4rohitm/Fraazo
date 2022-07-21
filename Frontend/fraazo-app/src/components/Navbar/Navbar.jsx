import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Location from "./Location";

const Navbar = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("Home");
  const [geoComponent, setGeocomponent] = useState(false);

  return (
    <nav>
      <ul class="w-full h-[88px] text-[#999999] font-Quicksand border container px-11 flex flex-wrap justify-between items-center mx-auto ">
        <li
          class="cursor-pointer hover:text-[#000000]"
          onClick={() => navigate("/")}
        >
          <img
            src="https://webasset.fraazo.com/production/b70a67f4e825e3d388ac4466952c20a8.svg"
            class=" h-12 sm:h-12"
            alt="Logo"
          />
        </li>
        <li class="hover:text-[#000000]">
          <button
            onClick={() => setGeocomponent(true)}
            class="flex gap-1 text-sm items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 fill-[#999999] hover:fill-black"
              viewBox="0 0 384 512"
            >
              <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
            </svg>
            <p>{location}</p>
          </button>
        </li>
        <li class="border w-2/4 h-12 rounded-full px-7 flex items-center justify-between gap-2 hover:text-[#000000] hover:fill-[#4FBB90]">
          <input
            type="text"
            class="outline-none text-sm w-full h-full "
            placeholder="Find fresh vegetables, fruits and dairy..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 fill-[#999999] hover:fill-[#4FBB90] "
            viewBox="0 0 512 512"
          >
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
          </svg>
        </li>
        <li class="hover:text-[#000000]">
          <button class="flex gap-1 text-sm items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 fill-[#999999] hover:fill-black "
              viewBox="0 0 576 512"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            <p>Cart</p>
          </button>
        </li>
        <li class="hover:text-[#000000]">
          <button class="flex gap-1 text-sm items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 fill-[#999999] hover:fill-black "
              viewBox="0 0 512 512"
            >
              <path d="M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z" />
            </svg>
            <p>Credit</p>
          </button>
        </li>
        <li class="hover:text-[#000000]">
          <button class="flex gap-1 text-sm items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 fill-[#999999] hover:fill-black"
              viewBox="0 0 448 512"
            >
              <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
            </svg>
            <p>Login</p>
          </button>
        </li>
      </ul>
      {geoComponent ? (
        <div style={{ transition: "0.2s ease-out" }}>
          <Location
            setLocation={setLocation}
            setGeocomponent={setGeocomponent}
          />
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
