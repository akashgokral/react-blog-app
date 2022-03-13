import React from 'react';
import Waves from './Waves';
import Latest from '../Single Components/Latest';
import "../styles/wavesparent.css"
import Advertisment from './Advertisment';
import { safety } from '../Api';
import { Link } from 'react-router-dom';

const Wavesparent = () => {
  return <>
    <Latest heading="Latest Articles" />
    <div className='wavemain'>
      <div className='wavesleft'>
        {
          safety.map(safetyblog => {
            return (
              < Waves imgurl={safetyblog.imgurl} content={safetyblog.content} title={safetyblog.title} category="Safety_blog" date="Aug 28 2017" id={safetyblog.id} cat={safetyblog.cat} />
            )
          })

        }
      </div>
      <Advertisment />
    </div>
  </>;
};

export default Wavesparent;
