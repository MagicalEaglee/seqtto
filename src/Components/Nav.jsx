import React from 'react'
import { NavLink,Link, Outlet, useLocation } from 'react-router-dom'
import logo from "../Assets/LOGO_1_SAMPLE.png"
import "./Nav.css"
function Nav() {

    const location=useLocation();
    let current='';

    const crumbs=location.pathname.split('/')
    .filter((crumb)=>crumb!='')
    .map((crumb)=>{
        current+=`/${crumb}`

        return(
            <div className='crumbs' key={crumb}>
                <NavLink to={current}>{crumb}</NavLink>
            </div>
        )
    })
  return (
    <>
    <div className="head">
    <div className="nav">
        <div className="nlogo">
            <NavLink to="/"><img src={logo} alt="" /></NavLink>
        </div>
        <div className="nlast">
            <div className="nl">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="About">About</NavLink></li>
            <li className='dropdown'><NavLink to="Services">Services</NavLink>
                <div className='dropdown-content'>
                   <div className='dp shadow'>
                   <div>
                        <li><NavLink to="Services/WebDevelopment">Web Development</NavLink></li>
                        <li><NavLink to="Services/PhpDevelopment">PHP Development</NavLink></li>
                        <li><NavLink to="Services/PythonDevelopment">Python Development</NavLink></li>
                        <li><NavLink to="Services/JavaDevelopment">Java App Development</NavLink></li>
                        <li><NavLink to="Services/NodeDevelopment">Node Js Development</NavLink></li>
                        <li><NavLink to="Services/DotnetDevelopment">Dot NET Development</NavLink></li>
                        <li><NavLink to="Services/FraudInvestigation">Fraud Investigation and Compliances</NavLink></li>
                        <li><NavLink to="Services/Staffing">Staffing</NavLink></li>
                    </div>
                    <div>
                        <li><NavLink to="Services/MobileDevelopment">Mobile Development</NavLink></li>
                        <li><NavLink to="Services/DigitalMarketing">Digital Marketing</NavLink></li>
                        <li><NavLink to="Services/CyberSecurity">Cyber Security</NavLink></li>
                        <li><NavLink to="Services/Dev">Devops</NavLink></li>
                        <li><NavLink to="Services/T">Testing</NavLink></li>
                        <li><NavLink to="Services/Bpo">Backend process optimization</NavLink></li>
                        
                    </div>
                   </div>
                </div>
            </li>
            </div>
            <li><NavLink to="Contact"><button>Contact</button></NavLink></li>
        </div>
        <div className='mobile'>
                <input type="checkbox" id='soo' />
                <label htmlFor="soo"><h1><i class="fa-solid fa-bars-staggered"></i></h1></label>
                <div className="side">
                   <div className="close">
                   <label className='x' htmlFor="soo"><h1 className='x'><i class="fa-solid fa-xmark"></i></h1></label>
                   </div>
                   <div className="all">
                   <li><NavLink to="/">Home</NavLink></li>
                   <li><NavLink to="About">About</NavLink></li>
                   <li className='dropdown'><NavLink to="Services" data-bs-toggle="collapse" data-bs-target="#amm">Services</NavLink>
                     <div className='collapse'id='amm'>
                     <div className='acha'>
                     <div>
                        <li><Link to="Services/WebDevelopment">Web Development</Link></li>
                        <li><NavLink to="Services/PhpDevelopment">PHP Development</NavLink></li>
                        <li><NavLink to="Services/PythonDevelopment">Python Development</NavLink></li>
                        <li><NavLink to="Services/JavaDevelopment">Java App Development</NavLink></li>
                        <li><NavLink to="Services/NodeDevelopment">Node Js Development</NavLink></li>
                        <li><NavLink to="Services/DotnetDevelopment">Dot NET Development</NavLink></li>
                        <li><NavLink to="Services/FraudInvestigation">Fraud Investigation and Compliances</NavLink></li>
                        <li><NavLink to="Services/Bpo">Backend process optimization</NavLink></li>
                     </div>
                      <div>
                        <li><NavLink to="Services/MobileDevelopment">Mobile Development</NavLink></li>
                        <li><NavLink to="Services/DigitalMarketing">Digital Marketing</NavLink></li>
                        <li><NavLink to="Services/CyberSecurity">Cyber Security</NavLink></li>
                        <li><NavLink to="Services/Dev">Devops</NavLink></li>
                        <li><NavLink to="Services/T">Testing</NavLink></li>
                        <li><NavLink to="Services/T">Staffing</NavLink></li>
                     </div>
                     </div>
                        </div>
                    </li>
                    <li><NavLink to="Contact">Contact</NavLink></li>
                   </div>
                </div>
            </div>
        <div className="mobile2">
            <li>
                <NavLink to="/">
                <h2><i class="fa-solid fa-house"></i></h2>
                <h5>Home</h5>
                </NavLink>
            </li>
            <li>
                <NavLink to="/About">
                <h2><i class="fa-solid fa-circle-exclamation"></i></h2>
                <h5>About</h5>
                </NavLink>
            </li>
            <li>
                <NavLink to="/Services">
                <h2><i class="fa-solid fa-gear"></i></h2>
                <h5>Services</h5>
                </NavLink>
            </li>
            <li>
                <NavLink to="Contact">
                <h2><i class="fa-solid fa-envelope"></i></h2>
                <h5>Contact</h5>
                </NavLink>
            </li>
        </div>
    </div>
    {/* <div className="bread">
        {crumbs}
    </div> */}
    </div>
    </>
  )
}

export default Nav
