import React from 'react';
import '../components/Home/styles/nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return <>
    <nav>
      <ul>
        <li><Link to="/" className='links'>Home</Link></li>
        <li><Link to="bollywood" className='links'>Bollywood</Link></li>
        <li><Link to="technology" className='links'> Technology</Link> </li>
        <li><Link to="hollywood" className='links'>Hollywood</Link></li>
        <li><Link to="fitness" className='links'>Fitness</Link></li>
        <li><Link to="food" className='links'>Food</Link></li>

      </ul>


    </nav >




  </>;
};

export default Nav;
