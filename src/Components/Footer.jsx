import React from 'react'
import "./Footer.css"
import logo from "../Assets/LOGO_1_SAMPLE.png"
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <>
      <div className="f-main">
      <div className="footer">
        <div className="footer1">
          <div className="f-logo">
            <img src={logo} alt=""/>
          </div>
          <p>At Seqto Software solutions, we don’t just develop software; we craft digital solutions that redefine possibilities. Founded on a commitment to innovation and a passion for technology, we stand as a beacon of excellence in the ever-evolving landscape of the digital world.</p>
          <div className="f-links">
            <h4><a href="http://www.facebook.com/seqtto"><i class="fa-brands fa-facebook-f"></i></a></h4>
            <h4><a href="https://www.linkedin.com/company/seqtto"><i class="fa-brands fa-linkedin-in"></i></a></h4>
            <h4><a href="https://www.instagram.com/seqtto/"><i class="fa-brands fa-instagram"></i></a></h4>
            <h4><a href="https://api.whatsapp.com/send?phone=7670998219"><i class="fa-brands fa-whatsapp"></i></a></h4>
            <h4><a href="https://www.instagram.com/seqtto/"><i class="fa-brands fa-twitter"></i></a></h4>
          </div>
        </div>
        <div className="ff">
        <div className="footer2">
          <h3>Services</h3>
          <div>
              <li><NavLink to="/services/WebDevelopment">Web Development</NavLink></li>
              <li><NavLink to="/services/MobileDevelopment">Mobile Development</NavLink></li>
              <li><NavLink to="/services/WebDevelopment">UI & UX Design</NavLink></li>
              <li><NavLink to="/services/CyberSecurity">Cyber Security</NavLink></li>
              <li><NavLink to="/services/DigitalMarketing">Digital Marketing</NavLink></li>
              <li><NavLink to="/services/WebDevelopment">Staffing</NavLink></li>
          </div>
        </div>
        <div className="footer2">
          <h3>Products</h3>
          <div>
              <li>Dcoder</li>
              <li>Talento Link</li>
              <li>Seqtto</li>
          </div>
        </div>
        <div className="footer2">
          <h3>Quick Links</h3>
          <div>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/About">About</NavLink></li>
              <li><NavLink to="/Services">Services</NavLink></li>
              <li><NavLink to="/Contact">Contact</NavLink></li>
          </div>
        </div>
        <div className="footer2">
          <h3>References</h3>
          <div>
              <li><NavLink to="Terms&Conditions">Terms & Conditions</NavLink></li>
              <li><NavLink to="Privacy&Policy">Privacy & Policy</NavLink></li>
              <li><NavLink to="EulaPolicy">Eula Policy</NavLink></li>
              <li><NavLink to="CookiePolicy">Cookie Policy</NavLink></li>
          </div>
        </div>
        
        </div>
      </div>
      <div className="hr"></div>
      <div className="ri-f">
        <p>© seqtto 2023. All Rights Reserved.</p>
      </div>
      </div>
    </>
  )
}

export default Footer
