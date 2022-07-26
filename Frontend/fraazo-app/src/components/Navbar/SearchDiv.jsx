import React from "react";
import Button2 from "./Button2";

const SearchDiv = ({ searchData }) => {
  console.log(searchData);
  return (
    <div>
      {!!searchData &&
        searchData.map((e) => {
          return (
            <div class="h-28 border w-full font-Quicksand flex justify-between items-center gap-3 px-3 cursor-pointer overflow-y-scroll no-scrollbar">
              <div class="w-1/5 flex items-center justify-center">
                <img
                  class="h-[86px] bg-[whitesmoke]"
                  src={e.image}
                  alt={e.name}
                />
              </div>
              <div class="w-1/5 text-[15px]">
                <p>{e.name}</p>
              </div>
              <div class="w-1/6 text-[15px] pl-5 font-bold">
                <p>₹{e.price}</p>
              </div>
              <div class="w-1/6 text-[14px] text-[#676762] pl-1">
                <p>{e.qty}</p>
              </div>
              <div class="w-1/5">
                <Button2 data={e} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SearchDiv;
