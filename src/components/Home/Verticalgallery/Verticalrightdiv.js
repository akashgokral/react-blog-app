import React from 'react';
import '../styles/verticalrightdiv.css'
import Date from '../Single Components/Date';


const Verticalrightdiv = ({ imgurl }) => {
  return <>

    <div className='vertical_right_div'>
      <div className='vertical_right_div_img'><img src={imgurl} alt="abc"></img></div>
      <div><h2>Catch waves with adventure guide</h2>
        <Date title="Waves" content="Dec 29 2017" /></div>
    </div>


  </>;
};

export default Verticalrightdiv;
