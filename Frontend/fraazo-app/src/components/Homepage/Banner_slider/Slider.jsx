import "./Slider.css";
import START1 from "../../Images/img_20.webp";
import START2 from "../../Images/img_21.webp";
import START3 from "../../Images/img_22.webp";
import START4 from "../../Images/img_24.webp";
import START5 from "../../Images/img_25.webp";
import START6 from "../../Images/img_26.webp";
import START7 from "../../Images/img_27.webp";
import START8 from "../../Images/img_28.webp";
import START9 from "../../Images/img_29.webp";
import START10 from "../../Images/img_30.webp";
import React from "react";
const images = [
  START1,
  START2,
  START3,
  START4,
  START5,
  START6,
  START7,
  START8,
  START9,
  START10,
];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }}>
            <img
              src={images[index]}
              style={{ width: "100%", height: "350px" }}
              alt=""
            />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
