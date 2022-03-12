import React, { useState, useEffect } from 'react'
import "../Blog/styles/blog.css"
import rythm from "../Blog/rythm.svg"
import share from "../Blog/share.svg"
import Face_data from './Face_data'
import fb from "../Blog/fb.png"
import insta from "../Blog/insta.png"
import wa from "../Blog/wa.png"
import twitter from "../Blog/twitter.png"
import react from "../Blog/react.png"
import code from "./code.png"
import Blog_bottom_div from './Blog_bottom_div'
import { useParams, Link } from 'react-router-dom'
import { bollywood, technology } from '../Home/Api';




const Blog = () => {
    const { id, cat } = useParams();
    const [newData, setnewData] = useState([])
    // const filterData = () => {

    //     console.log(newd);
    // }

    const check = () => {

        if (cat == 'bollywood') {
            const newd = bollywood.filter((item) => {
                return (
                    item.id == id
                )
            }
            )
            setnewData(newd);
        }
        if (cat == 'technology') {
            const newd = technology.filter((item) => {
                return (
                    item.id == id
                )
            }
            )
            setnewData(newd);
        }

    }



    useEffect(() => {
        check();
    })

    return (
        <>
            <div className='header_2'>
                <Link to="/"> <div><span>The </span><h1>Siren</h1></div></Link>
                <button>Get Started</button>
            </div>
            <div className='blog_icons'>
                <div className='rythm'><img src={rythm}></img> <span>9.3 k</span></div>
                <div className='share'><img src={share}></img><span> Share this article</span></div>
            </div>
            <div className='blog_right'>
                {<div className='blog_right_heading'>{newData.length ? newData[0].title : 'loading'}</div>}
                <div className='face_data_div'>
                    <Face_data name={"Dmitry Nozhenko"} date="Jan 28, 2019 · 10 min read" />
                    <div className='social_icons'>
                        <img src={fb}></img>
                        <img src={insta}></img>
                        <img src={wa}></img>
                        <img src={twitter}></img>
                    </div>
                </div>
                <div className='react_img'>
                    <img src={react}></img>
                </div>
                <div className='react_content'>
                    <div className="react_content_1"><p>Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.</p>
                    </div>
                    <div className="react_content_2">
                        <p>Let’s talk about them</p></div>
                </div>
                <div className='code_img'>
                    <img src={code}></img>
                </div>
                <div className='rythm_div'>
                    <div className='rythm'><img src={rythm}></img> <span>9.3 k claps</span></div>
                </div>
                <div className='face_data_parent'>
                    <Face_data name="Dmitry Nozhenko" date="Jan 28, 2019 · 10 min read" written="Written By" />
                </div>
            </div>
            <div className='blog_bottom'>
                <div className="blog_bottom_heading"><p>More From The Siren</p></div>
                <div className='blog_bottom_div_parent'>
                    <Blog_bottom_div />
                    <Blog_bottom_div />
                    <Blog_bottom_div />
                </div>
            </div>









        </>
    )
}

export default Blog