import React from 'react'
import "./Digital.css"
import {NavLink, Outlet} from "react-router-dom"
function Digital() {
  return (
    <>
        <div className="digital-con">
            <h1>DIGITAL MARKETING</h1>
            <div className="digital-1">
              <p>Elevate your brand with our comprehensive digital marketing agency, dedicated to crafting immersive and valuable digital experiences that resonate with your customers. At the intersection of marketing and technology, we specialize in delivering results that go beyond expectations.</p>
              <p>Boasting over a decade of expertise across diverse digital marketing channels, we offer a holistic approach to online marketing. From dynamic marketers to adept analysts and a robust development team, Seqto is equipped to seamlessly execute end-to-end digital marketing strategies tailored to your unique needs.</p>
              <p>Our team of certified marketers is unwaveringly committed to excellence, ensuring that our clients receive nothing but the best. Leveraging cutting-edge technologies, proven methodologies, and analytics-driven insights, we have the proficiency to attract prospects and generate leads, regardless of your business domain.</p>
              <p>Partner with Seqto to transform your digital presence and embark on a journey of sustained success in the ever-evolving digital landscape.</p>
            </div>
            <div className="digital-2">
              <h2>DRIVING BUSINESS GROWTH THROUGH MARKETING TECH SERVICES</h2>
              <p>Embrace the future of marketing, where data and technology converge to propel your business forward. Our dedicated team is committed to empowering you with cutting-edge marketing technologies, enabling data-driven decision-making for enhanced products, services, and personalized online experiences tailored to your customers and prospects. From executing impactful ad campaigns to optimizing conversions, visualizing data, and orchestrating marketing automation, we possess the expertise to meet all your marketing requirements.</p>
            </div>
            <div className="digital-3">
              <div className="digi31 shadow">
                <h3>POWER OF MARKETING AUTOMATION</h3>
                <p>Transform your marketing landscape with a robust marketing automation solution that streamlines your activities. Our solution enables you to deliver personalized, multichannel campaigns seamlessly across the entire customer journey, ensuring a cohesive and engaging brand experience.</p>
              </div>
              <div className="digi32 shadow">
                <h3>VISUALIZE SUCCESS WITH DATA</h3>
                <p>Is your data revealing its full potential? Our advanced visualization techniques empower you to decipher vast amounts of data, providing valuable insights to recalibrate your business strategy. Uncover hidden patterns, trends, and opportunities to stay ahead in the competitive market landscape.</p>
              </div>
            </div>
            <div className="digital-4">
              <h2>Our Digital Marketing Services</h2>
              <div className="digital4-list">
                <div className="digil1">
                  <NavLink to="Seo">
                  <div className="digi">
                  <h5>Search Engine Optimization</h5>
                </div>
                  </NavLink>
                <NavLink to="Pay">
                <div className="digi">
                  <h5>Pay-Per-Click Advertising</h5>
                </div>
                </NavLink>
                <NavLink to="Social">
                <div className="digi">
                  <h5>Social Media Marketing</h5>
                </div>
                </NavLink>
                </div>
                <div className="digil2">
                  <NavLink to="Analytics">
                  <div className="digi">
                  <h5>Analytics</h5>
                </div>
                  </NavLink>
                <NavLink to="Content">
                <div className="digi">
                  <h5>Content Marketing</h5>
                </div>
                </NavLink>
                <NavLink to="Email">
                <div className="digi">
                  <h5>Email Marketing</h5>
                </div>
                </NavLink>
                </div>
              </div>
            </div>
            <div className="digital-5">
              <Outlet/>
            </div>
        </div>
    </>
  )
}

export default Digital
