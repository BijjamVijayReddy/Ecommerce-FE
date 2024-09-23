
import './AppHeader.css';
import logo from "../../assests/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';



const AppHeader = () => {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);

  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <img className='logo2' src={logo} alt="Logo" />
        </div>

        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <nav className="nav">
          <ul>
            <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? " text-[brown] font-bold" : null}>Home</NavLink></li>
            <li><NavLink to="/categories" ClassName="active-link">Categories</NavLink></li>
            <li><NavLink to="/about" ClassName={({ isActive }) => (isActive ? " brown active-link" : "brown")}>About Us</NavLink></li>
            <li><NavLink to="/contact" ClassName="active-link">Contact Us</NavLink></li>
          </ul>
        </nav>

        <div className="cart-login">
          < div className="shopping-cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-count">0</span>
          </div>
          <div className="profile-icon" onClick={toggleProfileDropdown}>
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
          </div>
          {showProfileDropdown && (
            <div className="profile-dropdown">
              <ul>
                <li onClick={() => navigate('/MyProfile')}>MyProfile</li>
                <li onClick={() => navigate('/Payment History')}>Payment History</li>
                <li onClick={() => navigate('/settings')}>Settings</li>

                <li className="browne" onClick={() => navigate('/login')} style={{ color: 'white' }}>Login</li>
              </ul>
            </div>
          )}
          {/* <button className="login-button" onClick={() => navigate("/login")}>Login</button> */}
        </div>

        {/* Mobile Hamburger Icon */}
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
      </div>
    </header>
  );
};

export default AppHeader;
