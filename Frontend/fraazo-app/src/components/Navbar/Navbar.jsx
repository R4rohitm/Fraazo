import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDebouncedCallback } from "@react-hookz/web";
import Location from "./Location";
import SearchDiv from "./SearchDiv";

const Navbar = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("Home");
  const [searchQuery, setSearchQuery] = useState("");
  const [geoComponent, setGeocomponent] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [searchDivState, setSearchDivState] = useState(false);
  const inputRef = useRef(null);

  const onButtonClick = () => {
    inputRef.current.value = "";
  };

  const searchDiv = () => {
    if (searchQuery.length >= 1) {
      setSearchDivState(true);
    }
  };

  useEffect(() => {
    const searchProducts = async () => {
      if (searchQuery) {
        try {
          let response = await fetch(
            `http://localhost:8080/items/search?q=${searchQuery}`
          );
          let data = await response.json();
          console.log(data);
          setSearchData(data);
        } catch (e) {
          console.log(e);
        }
      }
    };

    searchProducts();
  }, [searchQuery]);

  const onChangedDebounce = useDebouncedCallback(
    (e) => setSearchQuery(e.target.value),
    [],
    500,
    0
  );

  return (
    <nav>
      <div>
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
          <li class="group">
            <button
              onClick={() => setGeocomponent(true)}
              class="flex gap-1 text-sm items-center group-hover:text-[#000000]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 fill-[#999999] group-hover:fill-black"
                viewBox="0 0 384 512"
              >
                <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
              </svg>
              <p>{location}</p>
            </button>
          </li>
          <li class="border w-2/4 h-12 rounded-full px-7 flex items-center justify-between gap-2 hover:text-[#000000]">
            <input
              onChange={(e) => {
                searchDiv();
                onChangedDebounce(e);
              }}
              ref={inputRef}
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
          <li class="group">
            <button class="flex gap-1 text-sm items-cente group-hover:text-[#000000] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 fill-[#999999] group-hover:fill-black "
                viewBox="0 0 576 512"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>
              <p>Cart</p>
            </button>
          </li>
          <li class="group">
            <button class="flex gap-1 text-sm items-center group-hover:text-[#000000]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 fill-[#999999] group-hover:fill-black "
                viewBox="0 0 512 512"
              >
                <path d="M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z" />
              </svg>
              <p>Credit</p>
            </button>
          </li>
          <li class="group">
            <button class="flex gap-1 text-sm items-center group-hover:text-[#000000]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 fill-[#999999] group-hover:fill-black"
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
      </div>
      <ul class="w-full h-[42px] text-[#999999] text-[14px] font-Quicksand border container px-11 flex flex-wrap justify-center gap-14 items-center mx-auto ">
        <div class="group">
          <div class="flex justify-center items-center gap-3">
            <Link class="group-hover:text-[#4FBB90]" to="fruits">
              Fruits
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 fill-[#999999] group-hover:fill-[#4FBB90] group-hover:transition-transform  ease-in-out duration-700 group-hover:-rotate-180"
              viewBox="0 0 384 512"
            >
              <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
            </svg>
          </div>
          <div class="hidden absolute bg-white top-28 pt-8 -ml-5 w-36 flex-col shadow-sm pl-3 z-40 text-black hover:inline-block  group-hover:inline-block ">
            <li class="h-10 w-full flex justify-start items-start">
              <Link class="hover:text-[#4FBB90]" to="fruits/exotic_fruits">
                Exotic Fruits
              </Link>
            </li>
            <li class="h-10 w-full flex justify-start items-start">
              <Link class="hover:text-[#4FBB90]" to="fruits/fresh_fruits">
                Fresh Fruits
              </Link>
            </li>
            <li class="h-10 w-full flex justify-start items-start">
              <Link class="hover:text-[#4FBB90]" to="fruits/fruit_combos">
                Fruit Combos
              </Link>
            </li>
            <li class="h-10 w-full flex justify-start items-start">
              <Link class="hover:text-[#4FBB90]" to="fruits/mangoes">
                Mangoes
              </Link>
            </li>
          </div>
        </div>
        <div class="group">
          <div class="flex justify-center items-center gap-3">
            <Link class="group-hover:text-[#4FBB90]" to="vegetables">
              Vegetables
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 fill-[#999999] group-hover:fill-[#4FBB90] group-hover:transition-transform ease-in-out duration-700 group-hover:-rotate-180"
              viewBox="0 0 384 512"
            >
              <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
            </svg>
          </div>
          <div class="hidden absolute bg-white top-28 pt-8 -ml-10 w-52 flex-col shadow-sm pl-3 z-40 text-black hover:inline-block  group-hover:inline-block ">
            <li class="h-10 w-full flex justify-start items-start">
              <Link class="hover:text-[#4FBB90]" to="vegetables/daily_veggies">
                Daily Veggies
              </Link>
            </li>
            <li class="h-10 w-full flex justify-start items-start">
              <Link class="hover:text-[#4FBB90]" to="vegetables/herbs_leafies">
                Herbs & Leafies
              </Link>
            </li>
            <li class="h-10 w-full flex justify-start items-start">
              <Link
                class="hover:text-[#4FBB90]"
                to="vegetables/exotic_vegetables"
              >
                Exotic Vegetables
              </Link>
            </li>
            <li class="h-10 w-full flex justify-start items-start">
              <Link
                class="hover:text-[#4FBB90]"
                to="vegetables/cuts_peeled_sprouts"
              >
                Cuts,Peeled & Sprouts
              </Link>
            </li>
            <li class="h-10 w-full flex justify-start items-start">
              <Link
                class="hover:text-[#4FBB90]"
                to="vegetables/vegetable_combos"
              >
                Vegetable Combos
              </Link>
            </li>
          </div>
        </div>
      </ul>
      {searchDivState ? (
        <div class="absolute bg-white w-[720px] h-96 z-40 border top-[60px] left-[25.5%] ml-[3px] flex flex-col gap-3 pt-2 overflow-y-scroll no-scrollbar">
          <div class="cursor-pointer pr-5 flex flex-row-reverse">
            <svg
              onClick={() => {
                setSearchDivState(false);
                onButtonClick();
                setSearchQuery("");
              }}
              xmlns="http://www.w3.org/2000/svg"
              class="h-4  fill-[#4FBB90]"
              viewBox="0 0 512 512"
            >
              <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z" />
            </svg>
          </div>
          <SearchDiv searchData={searchData} />
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
