import React from 'react'
import { useState } from 'react';
import { FaEnvelope, FaEnvelopeOpen, FaEnvelopeOpenText, FaFacebook, FaInstagram, FaMapMarked, FaMapMarkedAlt, FaMapMarker, FaPhone, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
export default function Footer() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  const products = [
    { id: 1, name: 'HOME ELEVATOR', url: '/Homeelevator' },
    { id: 2, name: 'HYDRAULIC ELEVATOR', url: '/Hydraulicelevator' },
    { id: 3, name: 'CAPSULE ELEVATOR', url: '/Capsuleelevator' },
    { id: 4, name: 'COMMERCIAL ELEVATOR', url: '/Commercialelevator' },
    { id: 5, name: 'HOSPITAL ELEVATOR', url: '/Hospitalelevator' },
    { id: 6, name: 'GOODS ELEVATOR', url: '/Goodselevator' }
  ];

  return (
    <div>
    
<footer>
  <div class="footer-container">
    <div class="footer-section">
      <div class="footer-logo">
      <img src="images/ZADEC_4.png" alt="Logo" style={{maxWidth: '100px'}}/>

      </div>
      <p className='logo-under'>MAKING YOUR MOVEMENT STYLISH</p>
    </div>
    <div className="footer-section">
      <h3>Products</h3>
      <ul>
        {products.map((product, index) => (
          <li key={product.id}>
            <a 
              href={product.url} 
              className={activeItem === index ? 'active' : ''}
              onClick={() => handleItemClick(index)}
            >
              {product.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div class="footer-section">
      <h3>Contact Us</h3>
        <p><FaMapMarked/>&nbsp; 10-302,IshwarEstate, Gota, Ahmedabad, Gujarat-382481</p>
        <p><FaEnvelope/> &nbsp;<a href='mailTo:zadecelevator@gmail.com'>zadecelevator@gmail.com</a> </p>
        <p><FaPhone/>   &nbsp;  <a href="tel:+91 7096963666">7096963666</a></p>
    </div>
    <div class="footer-section">
      <h3>Stay Connected</h3>
      <p></p>
      <div class="social-media">
        <a href="#"><FaFacebook/></a>
        <a href="#"><FaInstagram/></a>
        <a href="#"><FaYoutube/></a>
      </div>
      {/* <button class="stay-connected">Subscribe</button> */}
    </div>
  </div>
  <div class="copyright">
  <hr class="centered-hr"/>
    <p>&copy; 2024 Zadec Elevator All Rights Reserved.</p>
    
</div>
</footer>

    </div>
  )
}
