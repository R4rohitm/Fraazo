<<<<<<< HEAD
import React from "react";
import styles from "./BannerCarousel.module.css";
import img4 from "../../Images/img10.png";
=======
import React from 'react'
import styles from './BannerCarousel.module.css'

>>>>>>> 891550875935c9204a9528053b02be1faf106856
import img1 from "../../Images/img7.png";
import img3 from "../../Images/img9.png";
import img2 from "../../Images/img8.png";
import Slideshow from "./Slider";

function BannerCarousel() {
  return (
    <div>
<<<<<<< HEAD
      <div className={styles.slider}>
        <div className={styles.left_slider}>
          <Slideshow />
=======
      
        <div className={styles.slider}>
      <div className={styles.left_slider}>
        <Slideshow />
      </div>
      <div className={styles.right_slider}>
        <div className={styles.right_slider-1}>
          <img src={img1} alt="slider" className={styles.leftimg} />
>>>>>>> 891550875935c9204a9528053b02be1faf106856
        </div>
        <div className={styles.right_slider}>
          <div className={styles.right_slider - 1}>
            <img src={img1} alt="slider" className={styles.leftimg} />
          </div>
          <div className={styles.right_slider_2}>
            <img src={img2} alt="slider" className={styles.leftimg} />
          </div>
          <div className={styles.right_slider_3}>
            <img src={img3} alt="slider" className={styles.leftimg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCarousel;
