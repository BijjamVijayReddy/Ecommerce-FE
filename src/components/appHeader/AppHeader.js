
import './AppHeader.css';
import logo from "../../assests/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import sessionService from '../../services/sessionServices';
import { useSelector } from 'react-redux';

const AppHeader = () => {
  const cartLenght = useSelector((state) => state.totalQuantity);
  console.log(JSON.stringify(cartLenght));
  
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);

  };
  const handleLogoutClick = () => {
    setShowProfileDropdown(false);
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    sessionService.clearToken();
    setShowLogoutModal(false);
    navigate('/login');
  };
  const handleCloseModal = () => {
    setShowLogoutModal(false);
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
            <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? " text-[brown] font-bold" : ""}>Home</NavLink></li>
            <li><NavLink to="/categories" className={({ isActive }) => isActive ? " text-[brown] font-bold" : ""}>Categories</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? " text-[brown] font-bold" : "")}>About Us</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? " text-[brown] font-bold" : ""}>Contact Us</NavLink></li>
          </ul>
        </nav>

        <div className="cart-login">
          < div className="shopping-cart-icon">
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <span className="cart-count">{cartLenght}</span>
          </div>
          <div className="profile-icon" onClick={toggleProfileDropdown}>
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
          </div>
          {showProfileDropdown && (
            <div className="profile-dropdown">
              <ul>
                <li onClick={() => navigate('/Profile')}>MyProfile</li>
                <li onClick={() => navigate('/Payment History')}>Payment History</li>
                <li onClick={() => navigate('/settings')}>Settings</li>
                <li className="browne" onClick={handleLogoutClick} style={{ color: 'white' }}>Logout</li>
              </ul>
            </div>
          )}
        </div>


        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
      </div>
      <Modal
        show={showLogoutModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
      />
    </header>
  );
};

export default AppHeader;
