import React, { useState, useEffect } from "react";
import styles from "./carasol.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDiv from "./ProductDiv";
const userId = localStorage.getItem("userId");

function BestDeals() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(
          "https://fraazonem201.herokuapp.com/items/vegetables"
        );
        let data = await res.json();
        setTodos(
          data.map((e) => {
            return { ...e, userId, quantity: 1 };
          })
        );
      } catch (e) {
        console.log(e);
      }
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
            <ProductDiv data={data} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BestDeals;
