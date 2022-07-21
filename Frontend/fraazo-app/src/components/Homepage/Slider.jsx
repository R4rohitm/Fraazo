import "./Slider.css"
import LOGO1 from "../Images/img20.webp"
import LOGO2 from "../Images/img21.webp"
import LOGO3 from "../Images/img22.webp"
import LOGO4 from "../Images/img23.webp"
import LOGO5 from "../Images/img24.webp"
import React from 'react'
const images = [
LOGO1, 
LOGO2, 
LOGO3,
LOGO4,
LOGO5
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
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          >
            <img src={images[index]} style={{width: '100%', height: '380px'}} alt=""/>
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
