import React from 'react'
import image from "../Assets/2150709796-removebg-preview.png"
import "./Hero.css"
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <>
      <div className="hero">
        <div className='h-left'>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
        <div className="h-right">
            <h3>UNLOCKING DIGITAL EXCELLENCE</h3>
            <h1>Your Partner in Digital Solutions</h1>
            <div className="type">
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Innovation Mobile App Solution',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Transformative UX/UI Design',
        1000,
        'Experience Seemless Web Dev',
        1000
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero
