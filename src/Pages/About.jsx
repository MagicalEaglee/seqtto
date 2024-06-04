import React from 'react'
import wats from "../Assets/140_whatsapp-removebg-preview.png"
import "./About.css"
function About() {
  return (
    <>
     <div className="about-con">
      <div className="hero-con-about">
        <h1>About Us</h1>
        <p>Welcome to seqtto software Solutions <span>- Innovating Tomorrow, today!</span></p>
      </div>
      <div className="about-1">
        <p>At seqtto Software solutions, we don't just develop software; we craft digital solutions that redefine possibilities. Founded on a commitment to innovation and a passion for technology, we stand as a beacon of excellence in the ever-evolving landscape of the digital world.</p>
      </div>
      <div className="about-2">
        <h2>Who We <span>Are</span></h2>
        <p>We are not just a software company; we are architects of transformation. With a team of visionary minds and tech enthusiasts, we embark on a journey to revolutionize the way businesses operate, empowering them to thrive in the digital age.</p>
      </div>
      <div className="about-3">
        <h2>Our <span>Mission</span></h2>
        <p>Our mission is to empower businesses with cutting-edge software solutions that drive growth, enhance efficiency, and elevate user experiences. We believe in the power of technology to shape the future and aim to be at the forefront of that change.</p>
      </div>
      <div className="about-4">
        <h2>Why we <span>choose us </span></h2>
        <div className="choose">
          <div className="choo-con">
            <h3>Innovation at the Core</h3>
            <p>We thrive on innovation. Our team is at the forefront of technological advancements, ensuring that our clients stay ahead of the curve and ahead of the competition.</p>
          </div>
          <div className="choo-con">
            <h3>Customer-Centric Approach</h3>
            <p>Your success is our success. We prioritize understanding your business needs to deliver solutions that not only meet but exceed your expectations. Our commitment to customer satisfaction sets us apart.</p>
          </div>
          <div className="choo-con">
            <h3>Proven Track Record</h3>
            <p>With a successful track record spanning diverse industry, we have earned the trust of our clients through consistent delivery of high-quality, reliable software solutions.</p>
          </div>
          <div className="choo-con">
            <h3>Future-Ready Solutions</h3>
            <p>In a rapidly evolving tech landscape, we future proof your business. Our solutions are designed to adapt and scale, ensuring that you stay agile and ready for whatever comes next.</p>
          </div>
        </div>
      </div>
      <div className="ao5">
      <div className="about-5">
        <h2>Discover the Exciting <span>Possibilities with seqtto</span></h2>
        <p>Unlock a gratifying and enriching career with seqtto. Embark on a journey of exploration, experimentation, and continuous learning.</p>
        <p>Seize the chance to collaborate with cutting-edge tech tools and platforms in your professional endeavors.</p>
        <p>Experience a harmonious work-life balance, allowing you to effectively handle both official commitments and familial responsibilities.</p>
        <p>Enjoy regular salary enhancements based on performance, emphasizing merit over seniority.</p>
        <p>Benefit from seqtto's employee-centric policies and comprehensive benefit schemes designed to enhance your overall well-being.</p>
      </div>
      </div>
      <div className="about-6">
          <h5>WORLDWIDE EXPERIENCE</h5>
          <h2>We Always Try To Understand User Expectations</h2>
          <div className="ab6">
            <div className="ab6-s">
              <h1>10+</h1>
              <p>Clients</p>
            </div>
            <div className="ab6-s">
              <h1>100%</h1>
              <p>Positive Feedback</p>
            </div>
            <div className="ab6-s">
              <h1>10+</h1>
              <p>Partners</p>
            </div>
            <div className="ab6-s">
              <h1>100%</h1>
              <p>BrandGrowth</p>
            </div>
          </div>
          
          <div className="about-7">
        <div className="ab7">
          <a href="http://www.facebook.com/seqtto"><img src="https://static-cdn.qburst.com/5-4-9/images/responsive/company/career/facebook.svg" alt="" /></a>
        </div>
        <div className="ab7">
          <a href="https://www.linkedin.com/company/seqtto"><img src="https://static-cdn.qburst.com/5-4-9/images/responsive/company/career/linkedin.svg" alt="" /></a>
        </div>
        <div className="ab7">
          <a href="https://www.instagram.com/seqtto/"><img src="https://static-cdn.qburst.com/5-4-9/images/responsive/company/career/instagram.svg" alt="" /></a>
        </div>
        <div className="ab7">
          <a href=""><img src="https://static-cdn.qburst.com/5-4-9/images/responsive/company/career/twitter.png" alt="" /></a>
        </div>
        <div className="ab7">
          <a href="https://api.whatsapp.com/send?phone=7670998219"><img src={wats} alt="" /></a>
        </div>
      </div>
      </div>
      
     </div>
    </>
  )
}

export default About
