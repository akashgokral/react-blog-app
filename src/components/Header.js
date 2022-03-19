import React from 'react';
import '../components/Home/styles/header.css'
import Nav from './Nav';
import { FaTh } from "react-icons/fa";

const Header = () => {


  return <div>
    <div className='header_1'>
      <div className='header'>
        <span>The</span><h1> Siren </h1>
      </div>

      <div className='icon' ><FaTh /> </div>
    </div>
    <Nav />


  </div>;
};

export default Header;







