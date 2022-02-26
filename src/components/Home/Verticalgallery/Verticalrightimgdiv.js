import React from 'react';
import '../styles/verticalrightimgdiv.css';
import img11 from '../../../Images/img11.jpg'
import Date from '../Single Components/Date';

const Verticalrightimgdiv = () => {
    return <>
        <div className='Verticalrightimgdiv'>
            <div className='vertical_right_img'><img src={img11}></img></div>
            <h1>Catch waves with an adventure guide</h1>
            <Date title="Waves" content="Dec 29 2017" />
        </div>

    </>;
};

export default Verticalrightimgdiv;
