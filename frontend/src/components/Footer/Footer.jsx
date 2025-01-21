import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed to newsletter!');
    // Add logic for handling newsletter subscription (e.g., API call)
  };

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        {/* Left Section: Mission Statement */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="Neex Nday Jor Logo" />
          <p>
            Proudly supporting Senegalese farmers and sharing the rich, vibrant flavors of 
            Senegalese cuisine with the world. Neex Nday Jor is your connection to authentic 
            dishes made with love and tradition.
          </p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.instagram_icon} alt="Instagram" />
            </a>
            <a href="https://wa.me/9292271511" target="_blank" rel="noopener noreferrer">
              <img src={assets.whatsapp_icon} alt="WhatsApp" />
            </a>
            <a href="https://chat.whatsapp.com/yourchannelid" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="linkdin" />
            </a>
          </div>
        </div>

        {/* Center Section: Quick Links */}
        <div className="footer-content-center">
          <h2>QUICK LINKS</h2>
          <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#order">Order Now</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </div>

        {/* Right Section: Contact & Newsletter */}
        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>📞 929-227-1511</li>
            <li>📧 info@neexndayjor.org</li>
            <li>📍 Bronx, New York</li>
          </ul>
          <h3>Subscribe for Updates</h3>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 © Neex Nday Jor - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
