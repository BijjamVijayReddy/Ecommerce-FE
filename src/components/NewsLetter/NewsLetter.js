import React, { useState } from 'react';
import './Newsletter.css';

const NewsLetter = () => {
  const [email, setEmailr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmailr('');
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-box">
        <div className="newsletter-icon">
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>
</div>
        <h2 className='text_news'>Subscribe To Our Newsletter</h2>
        <p className='para_news'>And receive a ₹200 coupon for your first order when you checkout!</p>
        <form onSubmit={handleSubmit}>
          <input className='email_news'
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmailr(e.target.value)}
            required
          />
          <button className="submit_news">Send</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
