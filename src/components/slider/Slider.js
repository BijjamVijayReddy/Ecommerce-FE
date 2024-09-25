import React from "react";
import css from './Slider.css';
import SSlider from "react-slick";
import img26 from '../../assests/Img26.webp'
import img24 from '../../assests/Img24.webp'
import img12 from '../../assests/img12.jpeg'
import img13 from '../../assests/Img13.jpg'
import img25 from '../../assests/Img25.webp'
import img16 from '../../assests/img16.jpg'


// Custom Previous Arrow
const PrevArrow = ({ className, style, onClick }) => (
  <button
    className={`${className} prev-arrow`} // Add custom class for styling
    style={{ ...style, display: "block", position: "absolute", top: "50%", left: "20px", zIndex: 1 }} // Position inside slide
    onClick={onClick}
  >
    &#9664; {/* Unicode for left arrow */}
  </button>
);


// Custom Next Arrow
const NextArrow = ({ className, style, onClick }) => (
  <button
    className={`${className} next-arrow`} // Add custom class for styling
    style={{ ...style, display: "block", position: "absolute", top: "50%", right: "20px", zIndex: 1 }} // Position inside slide
    onClick={onClick}
  >
    &#9654; {/* Unicode for right arrow */}
  </button>
);
 

const user_img = [
  { userImg: img26, text: "Active Wear" },
  { userImg: img24, text: "Active Wear" },
  { userImg: img12, text: "Active Wear" },
  { userImg: img13, text: "Active Wear" },
  { userImg: img25, text: "Active Wear" },
  { userImg: img16, text: "Active Wear" },
];

const Slider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>
  };

  return (
    <div className='main-content'>
      <SSlider {...settings}>
        {user_img.map((item, index) => (
          <div key={index}>
            <img className='image' src={item.userImg} alt={`userImg-${index}`} />
            <h2>{item.text}</h2>
          </div>
        ))}
      </SSlider>
    </div>
  );
};

export default Slider;

