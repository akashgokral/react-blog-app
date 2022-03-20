import React from 'react';
import Latest from '../Home/Single Components/Latest';
import Bollywoodrightimgdiv from './Bollywoodrightimgdiv';
import "../Home/styles/bollywood.css"
import Advertisment from '../Home/Waves/Advertisment';
import { bollywood, bollywoodright, bolly } from '../Home/Api';
import Bollywoodrightdiv from './Bollywoodrightdiv';
import Waves from '../Home/Waves/Waves'



const Bollywood = () => {



    return <>


        <div className='bollywood' >

            <div className='bollywood_1'>
                <Latest heading="Bollywood" />
                {
                    bollywood.map(bollywood => {
                        return (
                            <Waves key={bollywood.id} title={bollywood.title} imgurl={bollywood.imgurl} content={bollywood.content} fontsize="18" marginTop='10' category="Bollywood_Blog/ Click to Read More" id={bollywood.id} cat={bollywood.cat} />
                        )

                    })
                }

            </div>
            <div className='bollywood_2'>
                <Latest heading="Top Posts" />

                <Bollywoodrightimgdiv title={bolly[0].title} imgurl={bolly[0].imgurl} category="Bollywood_Blogger" date="JAN 18 2022" />



                {
                    bollywoodright.map(bollywoodright => {
                        return (
                            <Bollywoodrightdiv key={bollywoodright.id} imgurl={bollywoodright.imgurl} title={bollywoodright.title} category="Bollywood_Blogger" date="FEB 18 2022" />
                        )
                    })
                }


                <Advertisment />


            </div>




        </div>


    </>;
};

export default Bollywood;
