import React from 'react'
import Bollywoodrightdiv from '../Bollywood/Bollywoodrightdiv'
import Bollywoodrightimgdiv from '../Bollywood/Bollywoodrightimgdiv'
import { food, fastfood, food_right } from '../Home/Api'
import Latest from '../Home/Single Components/Latest'
import Advertisment from '../Home/Waves/Advertisment'
import Waves from '../Home/Waves/Waves'
import "../Home/styles/food.css"
import { Link } from 'react-router-dom'

const Food = () => {
    return (
        <>
            <div className='Food'>
                <div className='food_1'>
                    <Latest heading='Food' />
                    {
                        food.map(food => {
                            return (
                                <Link to="/blog">   <Waves title={food.title} imgurl={food.imgurl} content={food.content} category="Click to Read More" /></Link>
                            )
                        })
                    }

                </div>
                <div className='food_2'>
                    <Latest heading="Top Posts" />
                    <Bollywoodrightimgdiv title={fastfood[0].title} imgurl={fastfood[0].imgurl} content={fastfood[0].content} category="Food_blog" date="Nov 21, 2021" />
                    {
                        food_right.map(food_right => {
                            return (
                                <Bollywoodrightdiv imgurl={food_right.imgurl} title={food_right.title} category="Food_blog" date="DEC 3, 2021" />
                            )
                        })
                    }
                    <Advertisment />
                </div>
            </div>

        </>
    )
}

export default Food