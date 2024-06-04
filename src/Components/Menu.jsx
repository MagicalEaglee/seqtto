import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Sliders.css"
import "./Responsive.css"
function Menu() {
  return (
    <>
    <marquee behavior="" direction="">WelCome to Seqtto Software Solutions!</marquee>
    <h2 className="servicesh2">Services</h2>
    <div className='Menu'>
        
        <div className="menuu">
            <h2>Web Development</h2>
            <p>Transform your digital presence with professional web development services that bring innovation and excellence to your online platform.</p>
            <button><NavLink to="/services/WebDevelopment">Learn More</NavLink></button>
        </div>
        <div className="menuu">
            <h2>Cyber Security</h2>
            <p>Guardians of the Digital Realm: Unleashing Unrivaled Cybersecurity Services for Unmatched Protection</p>
            <button><NavLink to="/services/CyberSecurity">Learn More</NavLink></button>
        </div>
        <div className="menuu">
            <h2>UI & UX Design</h2>
            <p>Crafting Seamless Digital Experiences: Elevate Your Brand with Expert UI/UX Services</p>
            <button><NavLink to="/services/WebDevelopment">Learn More</NavLink></button>
        </div>
        <div className="menuu">
            <h2>Mobile App Development</h2>
            <p>Accomplishing digital transformation through the creation of scalable, captivating, and feature-laden mobile applications.</p>
            <button><NavLink to="/services/MobileDevelopment">Learn More</NavLink></button>
        </div>
        <div className="menuu">
            <h2>Digital Marketing</h2>
            <p>Revolutionize Your Online Presence: Unleashing Top-Tier Digital Marketing Services for Unrivaled Growth!</p>
            <button><NavLink to="/services/DigitalMarketing">Learn More</NavLink></button>
        </div>
        <div className="menuu">
            <h2>Testing</h2>
            <p>Strategic Testing Solutions: Enriched End-to-End Testing solutions for complete Development process</p>
            <button><NavLink to="/services/T">Learn More</NavLink></button>
        </div>
        <div className="menuu">
            <h2>Backend process optimization</h2>
            <p>Strategic Testing Solutions: Enriched End-to-End Testing solutions for complete Development process</p>
            <button><NavLink to="Services/Bpo">Learn More</NavLink></button>
        </div>
        <div className="menuu">
            <h2>Fraud Investigation and Compliances</h2>
            <p>Strategic Testing Solutions: Enriched End-to-End Testing solutions for complete Development process</p>
            <button><NavLink to="Services/FraudInvestigation">Learn More</NavLink></button>
        </div>
        <div className="menuu">
            <h2>Staffing</h2>
            <p>Strategic Testing Solutions: Enriched End-to-End Testing solutions for complete Development process</p>
            <button><NavLink to="Services/Staffing">Learn More</NavLink></button>
        </div>
    </div>
    </>
  )
}

export default Menu
