import React from 'react';
import '../components/Home/styles/header.css'

import { FaTh } from "react-icons/fa";
import { useState } from "react";
import Mobilenavigation from './Mobilenavigation';
import Navigation from './Navigation';

const Header = () => {

  const [open, setopen] = useState(false);



  return <div>
    <div className='header_1'>
      <div className='header'>
        <span>The</span><h1> Siren </h1>
      </div>

      <div className='icon' ><FaTh className='hamburger' onClick={() => {
        setopen(!open)
      }} /> </div>
    </div>
    <Navigation />
    {open && <Mobilenavigation />}
    {/* <Nav /> */}


  </div>;
};

export default Header;







