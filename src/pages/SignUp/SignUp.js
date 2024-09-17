import React, { useState } from 'react';
import './SignUp.css';
import logo from "../../assests/logo.png"

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    alternateNumber: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <img src={logo} alt="logo" className='logo' />
      <h1 className="signup-title">Sign up for Swift Cart today!</h1>
      <p className="signup-subtitle">Welcome! Please sign up to get started.</p>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="email">firstName</label>
          <input className='input'
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <label>lastname</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>phone number</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <label>Alternate number</label>
          <input
            type="tel"
            name="alternateNumber"
            placeholder="Alternate Number"
            value={formData.alternateNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>email</label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input type="checkbox" name="terms" required /> I agree with the terms and conditions
        </div>
        <button type="submit" className="signup-btn">Submit</button>
      </form>
      <p className="signup-footer">
        Already have an account? <a href="/login">Sign in now.</a>
      </p>
    </div>
  );
};

export default SignUp;

