import React from 'react';
import basket from "../../assests/basket.svg";
import market from "../../assests/market.svg";
import min_basket from "../../assests/min_basket.svg"
import AppHeader from '../../components/appHeader/AppHeader';
import AppFooter from '../../components/appFooter/AppFooter';
import "./About.css"
import about from '../../assests/about-img.jpg'

const About = () => {
  return (
    <div className='main_about'>
      <AppHeader /> 
      <div className='first'>
        <div className='main_about01'>
          <h4 className='abc'>The Future of</h4>
          <h4 className='down-txt'>Grocery Delivery :</h4>
          <div className='first2'>
            <p className='txt_1'>By powering the future grocery with</p>
            <p className='txt_2'>our retail partners, we give everyone</p>
            <p className='txt_3'>access to the food they love and more</p>
            <p className='txt_4'>time to enjoy it together.</p>
          </div>
        </div>

        <div className='main_about02'>
        <img className='photo' src={about} alt="Grocery Delivery" />
        </div>
      </div>

      <div className='main-txt'>
        <p>Ready to get started?</p>
      </div>

      <div className='main_about1'>

        <div class="card">
          <img src={basket} alt='basket' className='logo_two' />
          <h3>Grow my business with</h3>
          <h6 className='text_5'>Swift Cart</h6>
          <p className='txt_size'>Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.</p>
          <a href="#" class="card-button">Swift Cart Platform</a>
        </div>

        <div class="card">
          <img src={market} alt='market' className='logo_two' />
          <h3>Advertise my brand on </h3>
          <h6 className='text_6'>Swift Cart</h6>
          <p className='txt_size'>Duis placerat, urna ut dictum lobortis, erat libero feugiat nulla, ullamcorper fermentum lectus dolor ut tortor.</p>
          <a href="#" class="card-button">Swift Cart ads</a>
        </div>

        <div class="card">
          <img src={min_basket} alt='basket' className='logo_two' />
          <h3>Learn more about</h3>
          <h6 className='text_7'>Swift Cart</h6>
          <p className='txt_size'>Vivamus non risus id sapien egestas tempus id sed lla mus justo metus, suscipit non hendrerit.</p>
          <a href="#" class="card-button">Learn More</a>
        </div>

      </div>

      <div className='help-center'>
        <small>For assistance using Swift Cart services , please visit our<span className='txt'> Help Center</span></small>
      </div>



      <div className='main_about2'>

        <h1 className='txt1' >Trusted by retailers.</h1>
        <h1 className='txt2'>Loved by customres.</h1>
        <p className='txt1' >We give everyone access to the food they</p>
        <p className='txt2'>love and more time to enjoy it together.</p>


        <div className='main_view'>

          <div className='views1'>
            500k
            <p className='txt20'>Shopers</p>
          </div>


          <div className='views2'>
            4,500+
            <p className='txt21'>Cites</p>
          </div>


          <div className='views3'>
            40k+
            <p className='txt22'>Stores</p>
          </div>


          <div className='views4'>
            650+
            <p className='txt23'>Retail Brands</p>
          </div>

        </div>
      </div>

      <AppFooter />


    </div>
  )
}

export default About