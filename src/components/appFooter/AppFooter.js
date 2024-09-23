// App Footer - Chai -  24 

import React from 'react';
import myImage from '../../assests/logo.png'
import "./AppFooter.css"


const AppFooter = () => {
  return (
    <div className='appfooter'>
      <div>
        <img src={myImage} alt='log' height={150} width={150} style={{ marginTop: 10, marginLeft: 10 }}
        />
        <p className='image-txt1'>Swift Cart:Where Flavour Meets Delight. Every Bite Is a</p>
        <p className='image-txt1'>Journey Of Pure Enjoyment!</p>

        <p className='image-txt2'>Copyright - 2024. Website Made By Greet Labs Pvt Ltd. All Rights Reserved </p>
      </div>


      <div>
        {/* About US */}
        <h1 className='about'>About Us</h1>
        <br />
        <p className='about1'>Our Stores</p>
        <br />
        <p className='about2'>Terms & Conditions</p>
        <br />
        <p className='about3'>Privacy Policy</p>
      </div>

      <div>
        {/* Contact  US */}
        <h1 className='contact'>Contact Us</h1>
        <p className='number'>+91-9123456789</p>
        {/* Email  US */}
        <h1 className='email'>Email</h1>
        <p className='email-txt'>greetlabspvtltd@gmail.com</p>
      </div>

      <div>
        {/* News Letter US */}
        <h1 className='newsletter'>Newsletter</h1>
        <input className='input-Box' type="text" placeholder='Enter email for latest news'/>
        <br />
        <button className='btn'>Send</button>
      </div>

    </div>
  )
}

export default AppFooter
