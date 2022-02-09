import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => { 
  const [togleMenu, setTogleMenu] = useState(false)
  return(
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='app logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#pages">Pages</a></li>
        <li className='p__opensans'><a href="#contact">Contact us</a></li>
        <li className='p__opensans'><a href="#blog">Blog</a></li>
        <li className='p__opensans'><a href="#landing">Landing</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Log In / Register</a>
        <span />
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu className='humberger-menu' color='#fff' fontSize={27} onClick={() => {setTogleMenu(true)}} />
          {togleMenu && (     
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu color='#fff' fontSize={27} className='overlay__close' onClick={() => {setTogleMenu(false)}} />
          <ul className='app__navbar-smallscreen-links'>
            <li className='p__opensans'><a href="#home">Home</a></li>
            <li className='p__opensans'><a href="#pages">Pages</a></li>
            <li className='p__opensans'><a href="#contact">Contact us</a></li>
            <li className='p__opensans'><a href="#blog">Blog</a></li>
            <li className='p__opensans'><a href="#landing">Landing</a></li>
        </ul>
        </div>
          )}
      </div>
    </nav>
)};

export default Navbar;
