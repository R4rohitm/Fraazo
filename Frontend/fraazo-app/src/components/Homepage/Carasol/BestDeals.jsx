import React, { useState, useEffect } from "react";
import styles from "./carasol.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BestDeals() {
  const [todos, setTodos] = useState([]);
  useEffect((props) => {
    const getData = async () => {
      let res = await fetch("http://localhost:8080/items/vegetables");
      let data = await res.json();
      setTodos(data);
    };
    getData();
  }, []);
  return (
    <div className={styles.bestDeals_main}>
      <div className={styles.bestDeals_main2}>
        <h1 className={styles.bestDeals}>BEST DEALS</h1>
        <p>(View All)</p>
      </div>

      <hr className={styles.bestDeals_main3} />
      <Slider
        dots={false}
        slidesToShow={5}
        slidesToScroll={5}
        autoPlay={true}
        autoPlaySpeed={500}
      >
        {todos.map((data) => (
          <div key={data._id} className={styles.product_each_items}>
            <img
              style={{ width: "100", backgroundColor: "#f9f9f9" }}
              src={data.image}
              alt="product_image"
            />
            <div>{data.name}</div>
            <div className={styles.product_each_items_priceButton}>
              <div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "lightslategray",
                    marginTop: "5px",
                  }}
                >
                  {data.qty}
                </div>
                <div style={{ fontWeight: "500" }}>₹ {data.price}</div>
              </div>
              <div className={styles.product_each_items_priceButton1}>
                {/* <button ><span className={styles.addToCartIcon}><AiOutlineShoppingCart/></span>ADD</button> */}
                <div>
                  <AiOutlineShoppingCart />
                </div>
                <div>
                  <button>ADD</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BestDeals;
