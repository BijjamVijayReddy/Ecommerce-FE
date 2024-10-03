import React from "react";
import './Slider.css';
import SSlider from "react-slick";
import img26 from '../../assests/Img26.webp'
import img24 from '../../assests/Img24.webp'
import img12 from '../../assests/img12.jpeg'
import img13 from '../../assests/Img13.jpg'
import img25 from '../../assests/Img25.webp'
import img16 from '../../assests/img16.jpg'
import img15 from '../../assests/img15.jpg'
import img18 from '../../assests/img18.jpg'
import img17 from '../../assests/img17.jpg'


const user_img = [
  { userImg: img26, text: "Active Wear" },
  { userImg: img24, text: "Active Wear" },
  { userImg: img12, text: "Active Wear" },
  { userImg: img13, text: "Active Wear" },
  { userImg: img25, text: "Active Wear" },
  { userImg: img16, text: "Active Wear" },
  { userImg: img15, text: "Active Wear" },
  { userImg: img18, text: "Active Wear" },
  { userImg: img17, text: "Active Wear" },
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
            <img className='photos' src={item.userImg} alt={`userImg-${index}`} />
            <h2 className="active_wear">{item.text}</h2>
          </div>
        ))}
      </SSlider>
    </div>
  );
};

export default Slider;

