import './header.css'
import Image from './assets/comp.jpg'
import { useState } from 'react';

function Header() {
  
  return (
    <>
      <header className="container">
        <div className='logo'>
          <img src={Image} alt="" />
        </div>
        <div className="list">
          <ul>
            <li className='marked listing'>Home</li>
            <li className='listing'> Contact</li>
            <li className='listing'>About</li>
            <li className='listing'>Services</li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header;
