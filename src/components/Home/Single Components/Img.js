import React from 'react';
import '../styles/img.css'
import Date from "./Date"
import img1 from "../../../Images/img1.jpg"


const Img = () => {
  return <>
    <div className='img-container'>
      <div className='left-img-div'>
        <img src={img1}></img>
        <div className='parent'> <h1>Title of vertical gallery</h1>
          <div className='child'><Date title="Travel" content="Aug 21 2017" /></div></div>
      </div>

      <div className='right-img-div'>
        <div className='top-img-div'></div>
        <div className='bottom-img-div'></div>
      </div>
    </div>
  </>;
};


export default Img;




