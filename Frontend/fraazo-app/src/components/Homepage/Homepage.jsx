import React from "react";
import BannerCarousel from "./Banner_slider/BannerCarousel";
import BestDeals from "./Carasol/BestDeals";
import Fruits from "./Carasol/Fruits";
import Vegetables from "./Carasol/Vegetables";

function Homepage() {
  return (
    <div>
      <BannerCarousel />
      <BestDeals />
      <Fruits />
      <Vegetables />
    </div>
  );
}

export default Homepage;
