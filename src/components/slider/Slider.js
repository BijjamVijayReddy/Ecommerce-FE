import React from "react";
import css from './Slider.css';
import SSlider from "react-slick";
import img26 from '../../assests/Img26.webp'
import img24 from '../../assests/Img24.webp'
import img12 from '../../assests/img12.jpeg'
import img13 from '../../assests/Img13.jpg'
 

const user_img = [
  { userImg: img26, text: "Active Wear" },
  { userImg: img24, text: "Active Wear" },
  { userImg: img12, text: "Active Wear" },
  { userImg: img13, text: "Active Wear" },
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

