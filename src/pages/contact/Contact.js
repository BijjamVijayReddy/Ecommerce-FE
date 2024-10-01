
import React, { useState } from "react";
import AppHeader from '../../components/appHeader/AppHeader';
import AppFooter from '../../components/appFooter/AppFooter';
import "./Contact.css";
const locationSvg = (<svg xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4" >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
 </svg>)

 const emailsvg =(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>)

const phsvg=(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>)

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let validationErrors = {};

    
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Enter a valid email address";
    }

   
    if (!formData.subject.trim()) {
      validationErrors.subject = "Subject is required";
    }

    
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data Submitted: ", formData);
      
    }
  };

  return (
    <div>
      <AppHeader />
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>SwiftCart offers a seamless online shopping experience, providing fast and reliable delivery with a wide range of products.</p>
          <div className="contact-details">
            <p><span className="iconsvg">{locationSvg}</span>12 Avenue, Bangalore, NY 10160</p>
            <p><span className="iconsvg">{emailsvg}</span>greetlabs@gmail.com</p>
            <p><span className="iconsvg">{phsvg}</span>+91-9123456789</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Your Name :<span className="star">*</span></label>
            <input
              type="text"
              name="name"
              className="input-box"
              value={formData.name}
              placeholder="JohnDoe"
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email :<span className="star">*</span></label>
            <input
              type="email"
              name="email"
              className="input-box"
              value={formData.email}
              onChange={handleChange}
              placeholder="John.Doe@company.com"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="subject">Subject :<span className="star">*</span></label>
            <input
              type="text"
              name="subject"
              className="input-box"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject...."
            />
            {errors.subject && <p className="error">{errors.subject}</p>}
          </div>
          <div>
            <label htmlFor="message">Your Message :<span className="star">*</span></label>
            <textarea
              name="message"
              className="input-box"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message...."
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button className="submit">Send Message</button>
        </form>
      </div>
      <AppFooter />
    </div>
  );
};

export default ContactForm;
