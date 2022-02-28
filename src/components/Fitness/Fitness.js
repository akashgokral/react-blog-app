import React from 'react'
import { fitness, fit, fit_right } from '../Home/Api'
import Latest from '../Home/Single Components/Latest'
import Waves from '../Home/Waves/Waves'
import "../Home/styles/fitness.css"
import Bollywoodrightimgdiv from '../Bollywood/Bollywoodrightimgdiv'
import Bollywoodrightdiv from '../Bollywood/Bollywoodrightdiv'
import Advertisment from '../Home/Waves/Advertisment'
import { Link } from 'react-router-dom'


const Fitness = () => {
    return (
        <>
            <div className='Fitness'>
                <div className='fitness_1'>
                    <Latest heading="Fitness" />
                    {
                        fitness.map(fitness => {
                            return (
                                <Link to="/blog">   <Waves title={fitness.title} imgurl={fitness.imgurl} content={fitness.content} category="Click to Read More" /></Link>
                            )
                        })
                    }
                </div>
                <div className='fitness_2'>
                    <Latest heading="Top Posts" />
                    <Bollywoodrightimgdiv title={fit[0].title} imgurl={fit[0].imgurl} category='Fitness_Blog' date='Aug 13 2021' />
                    {
                        fit_right.map(fit_right => {
                            return (
                                <Bollywoodrightdiv title={fit_right.title} imgurl={fit_right.imgurl} category="Fitness_Blog" date='Sept 9 2021' />
                            )
                        })
                    }
                    <Advertisment />
                </div>


            </div>


        </>
    )
}

export default Fitness