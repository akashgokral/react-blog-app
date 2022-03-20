import React, { useState, useEffect } from 'react'
import "../Blog/styles/blog.css"
import rythm from "../Blog/rythm.svg"
import share from "../Blog/share.svg"
import Facedata from './Facedata'
import fb from "../Blog/fb.png"
import insta from "../Blog/insta.png"
import wa from "../Blog/wa.png"
import twitter from "../Blog/twitter.png"
import { useParams, Link } from 'react-router-dom'
import { bollywood, technology, hollywood, fitness, food, safety } from '../Home/Api';




const Blog = () => {
    const { id, cat } = useParams();
    const [newData, setnewData] = useState([])


    const check = () => {

        if (cat === 'Covid-19') {
            const newd = safety.filter((item) => {
                return (
                    item.id == id
                )
            }
            )
            setnewData(newd);
        }


        if (cat === 'bollywood') {
            const newd = bollywood.filter((item) => {
                return (
                    item.id == id

                )
            }
            )

            setnewData(newd);
        }
        if (cat === 'technology') {
            const newd = technology.filter((item) => {
                return (
                    item.id == id
                )
            }
            )
            setnewData(newd);
        }
        if (cat === 'hollywood') {
            const newd = hollywood.filter((item) => {
                return (
                    item.id == id
                )
            }
            )
            setnewData(newd);
        }
        if (cat === 'fitness') {
            const newd = fitness.filter((item) => {
                return (
                    item.id == id
                )
            }
            )
            setnewData(newd);
        } if (cat === 'food') {
            const newd = food.filter((item) => {
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
    }, [])

    return (
        <>
            <div className='header_2'>
                <Link to="/"> <div><span>The </span><h1>Siren</h1></div></Link>
                <button>Get Started</button>
            </div>
            <div className='blog_icons'>
                <div className='rythm'><img src={rythm} alt="abc"></img> <span>9.3 k</span></div>
                <div className='share'><img src={share} alt="abc"></img><span> Share this article</span></div>
            </div>
            <div className='blog_right'>
                {<div className='blog_right_heading'>{newData.length ? newData[0].title : 'loading'}</div>}
                <div className='face_data_div'>
                    <Facedata name={"Dmitry Nozhenko"} date="Jan 28, 2019 · 10 min read" />
                    <div className='social_icons'>
                        <img src={fb} alt="abc"></img>
                        <img src={insta} alt="abc"></img>
                        <img src={wa} alt="abc"></img>
                        <img src={twitter} alt="abc"></img>
                    </div>
                </div>
                <div className='react_img'>
                    <img src={newData.length ? newData[0].imgurl : 'loading'} alt="abc" ></img>
                </div>
                <div className='react_content'>
                    <div className="react_content_1"><p>{newData.length ? newData[0].blog_content : 'loading'}</p>
                    </div>

                </div>
                <div className='code_img'>
                    <img src={newData.length ? newData[0].imgurl2 : 'loading'} alt="abc"></img>
                </div>
                <div className='rythm_div'>
                    <div className='rythm'><img src={rythm} alt="abc"></img> <span>9.3 k claps</span></div>
                </div>
                <div className='face_data_parent'>
                    <Facedata name="Dmitry Nozhenko" date="Jan 28, 2019 · 10 min read" written="Written By" />
                </div>
            </div>
            {/* <div className='blog_bottom'>
                <div className="blog_bottom_heading"><p>More From The Siren</p></div>
                <div className='blog_bottom_div_parent'>
                    <Blog_bottom_div />
                    <Blog_bottom_div />
                    <Blog_bottom_div />
                </div>
            </div> */}









        </>
    )
}

export default Blog
