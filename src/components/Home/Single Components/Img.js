import React from 'react';
import '../styles/img.css'
import Date from "./Date"
import img1 from "../../../Images/img1.jpg"


const Img = () => {
  return <>
    <div className='img-container'>
      <div className='left-img-div'>
        <img src={img1} alt="abc"></img>

      </div>

      <div className='right-img-div'>
        <div className='top-img-div'></div>
        <div className='bottom-img-div'></div>
      </div>
    </div>
  </>;
};


export default Img;




