import React, { useState } from 'react'
import {NavLink, Outlet} from "react-router-dom"
import "./HeroS.css"
function HeroS() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleList = () => {
        setIsExpanded(!isExpanded);
    };
  return (
    <>
    <div className="s-main">
    <div class="s-list">
                <h1>WHAT WE DO</h1>
                <div class="d-flex flex-column gap-4 s-l" >
                    <NavLink to="WebDEV">Web Developement</NavLink>
                    <NavLink to="Mobile">Mobile Development</NavLink>
                    <NavLink to="Java" >Java App Development</NavLink>
                    <NavLink to="Digital" >Digital Marketing</NavLink>
                    <NavLink  to="Cyber">Cyber Security</NavLink>
                    <NavLink to="DotNET" >Dot NET Development</NavLink>
                    <NavLink  to="Php">PHP Development</NavLink>
                    <NavLink  to="Python">Python Developement</NavLink>
                    <NavLink  to="Devops">Devops</NavLink>
                    <NavLink  to="testing">Testing</NavLink>
                </div>
            </div>
            <div className="s-list2">
            <h1>WHAT WE DO</h1>
            <div class=" s-l2" >
                    <NavLink to="WebDEV">Web Developement</NavLink>
                    <NavLink to="Mobile">Mobile Development</NavLink>
                    <NavLink to="Java" >Java App Development</NavLink>
                    <NavLink to="Digital" >Digital Marketing</NavLink>
                    <NavLink  to="Cyber">Cyber Security</NavLink>
                    <NavLink to="DotNET" >Dot NET Development</NavLink>
                    <NavLink  to="Php">PHP Development</NavLink>
                    <NavLink  to="Python">Python Developement</NavLink>
                    <NavLink  to="Devops">Devops</NavLink>
                    <NavLink  to="testing">Testing</NavLink>
                </div>
            
        </div>
        <div className="ss-rr">
        <div className="s-render">
            <Outlet/>
           
        </div>
        <div className="s-addi">
            <h2>Why <span>Seqtto</span></h2>
            <p>End-to-end software development</p>
            <p>Agile and iterative methodology</p>
            <p>Customer-centric and cost-effective</p>
            <p>Collaborative and transparent approach</p>
            <p>Quality-oriented with focus on user satisfaction</p>
            <p>Long-term client relationships</p>
            </div>
        </div>
        
    </div>
    
    </>
  )
}

export default HeroS
