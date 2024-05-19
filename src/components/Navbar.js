import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
export default function Navbar() {
  
  
    const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) { // Adjust the scroll position where the navbar becomes sticky
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
  const [activeItem, setActiveItem] = useState('itemHome');
  

  const handleClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    
    
    <>
    <nav className={isSticky ? 'navbar sticky' : 'navbar'}>
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul id="menu-items" >
                  <li  className={activeItem === 'itemHome' ? 'active' : ''} onClick={() => handleClick('itemHome')}><a href="/">HOME</a></li>
                  <li  className={activeItem === 'itemProduct' ? 'active' : ''} onClick={() => handleClick('itemProduct')}><a href="/Product">PRODUCT</a></li>
                  <li  className={activeItem === 'itemAccessories' ? 'active' : ''} onClick={() => handleClick('itemAccessories')}><a href="/Accessories">ACCESSORIES</a></li>
                  <li  className={activeItem === 'itemContact' ? 'active' : ''} onClick={() => handleClick('itemContact')}><a href="/About">ABOUT US</a></li>
                  <li  className={activeItem === 'itemAbout' ? 'active' : ''} onClick={() => handleClick('itemAbout')}><a href="/Features">FEATURES</a></li>
                  <li  className={activeItem === 'itemContact' ? 'active' : ''} onClick={() => handleClick('itemContact')}><a href="/Contact">CONTACT US</a></li>

            </ul>
            
            <span className="logo"><img src='images/Zadec_1.png'/></span>
        </div>
    </nav>

 
    </>
  )
}
