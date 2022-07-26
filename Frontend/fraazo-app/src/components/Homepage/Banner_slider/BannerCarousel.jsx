import React from "react";
import styles from "./BannerCarousel.module.css";

import img1 from "../../Images/img7.png";
import img3 from "../../Images/img9.png";
import img2 from "../../Images/img8.png";
import Slideshow from "./Slider";

function BannerCarousel() {
  return (
    <div>
      <div className={styles.slider}>
        <div className={styles.left_slider}>
          <Slideshow />
        </div>

        <div className={styles.right_slider}>
          <div className={styles.right_slider_1}>
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
