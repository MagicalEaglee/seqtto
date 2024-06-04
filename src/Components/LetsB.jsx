import React from 'react'
import image from "../Assets/community-young-people-working-project-together-removebg-preview.png"
import {NavLink} from "react-router-dom"
import "./Sliders.css"
function LetsB() {
  return (
    <>
    <div className="lets">
        <div className="l-left">
            <div className='ii'>
                <img src={image} alt="" />
            </div>
            <div className="c"></div>
            <div className="cc"></div>
        </div>
        <div className="l-rig">
            <h2>Let's Build <span>together</span></h2>
            <p>Embark on a transformative journey with seqtto. Whether you need custom software development, AI integration, cloud solutions, or cybersecurity services, we have the expertise to elevate your business.</p>
            <p>Contact us today, and let's shape the future of your digital success</p>
            <button><NavLink to="About">About seqtto</NavLink></button>
        </div>
        <div className=" ss-t shadow">
       <h3>Stay in the loop with our newsletter!</h3>
        <p>" Join Our Newsletter for Exclusive Insights and Career Opportunities at Seqtto Your path to Guaranteed Career Success! "</p>
        <form action="">
            <input type="email" placeholder='Your Email' />
            <input type="email" placeholder='Your Email' className="form-control" />
            <button type="submit">SUBSCRIBE</button>
        </form>
     </div>
    </div>
    </>
  )
}

export default LetsB
