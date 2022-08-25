import React, { useState, useEffect } from "react";
import styles from "./carasol.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDiv from "./ProductDiv";

const userId = localStorage.getItem("userId");

function Fruits() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(
          "https://fraazonem201.herokuapp.com/items/fruits"
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

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        id={styles.nextArrow}
        className={className}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        id={styles.prevArrow}
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots:false,
    speed:1000,
    slidesToShow:5,
    slidesToScroll:5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          centerMode: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
          centerMode: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: false,
        },
      },
    ],
  }

  return (
    <div className={styles.bestDeals_main}>
      <div className={styles.bestDeals_main2}>
        <h1 className={styles.bestDeals}>FRUITS</h1>
        <p>(View All)</p>
      </div>

      <hr className={styles.bestDeals_main3} />
      <Slider {...settings}>
        {todos.map((data) => (
          <div key={data._id} className={styles.product_each_items}>
            <ProductDiv data={data} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Fruits;
