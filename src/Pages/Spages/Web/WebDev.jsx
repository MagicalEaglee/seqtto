import React, { useState } from 'react'
import "./WebDev.css"
import { NavLink, Outlet } from 'react-router-dom'
function WebDev() {
    const[webopen,setWeb]=useState(false)
  return (
    <>
        <div className="header-web">
            <h1>Web Development</h1>
        </div>
        <div className="about-web">
            <p>An application is always built to the functional specifications and features identified for the end product. To work as visualized, the app also needs to satisfy non-functional requirements of availability, scalability, and performance. The choice of technology stack and architectural style are crucial in this context.</p>
            <p>While options are many on the server-side, selection is often made weighing the pros and cons of different technologies, cloud platforms, data stores and considering the numerous trade-offs. It takes an experienced team with broad scope of exposure to facilitate appropriate decisions and build the technical solution.</p>
        </div>
        <div className="web-options">
            <div className="list-web">
                <NavLink to="JavaD" className="web-a">
                <div className="web-l shadow" onClick={()=>setWeb(true)} >
                    <h2><i class="fa-brands fa-java"></i></h2>
                    <h5>Java</h5>
                </div>
                </NavLink>
                <NavLink to="ReactJs" className="web-a">
                <div className="web-l shadow" onClick={()=>setWeb(true)}>
                    <h2><i class="fa-brands fa-react"></i></h2>
                    <h5>React</h5>
                </div>
                </NavLink>
               <NavLink to="NodeJs" className="web-a">
               <div className="web-l shadow" onClick={()=>setWeb(true)}>
                    <h2><i class="fa-brands fa-node-js"></i></h2>
                    <h5>Node Js</h5>
                </div>
               </NavLink>
                <NavLink to="PythonWeb" className="web-a">
                <div className="web-l shadow" onClick={()=>setWeb(true)}>
                    <h2><i class="fa-brands fa-python"></i></h2>
                    <h5>Python</h5>
                </div>
                </NavLink>
            </div>
        </div>
        {
            webopen ? 
            <div className="Web-out">
            <Outlet/>
        </div>
            :
            <div className='ccus'>
                <div className="cus-con">
                    <h1>Custom Web <span>Applications</span></h1>
                    <p>Be it powerful mobile app backends, data analytics application with intuitive web dashboards, or complex ERP implementation, we have teams equipped to handle each. Once you entrust us with the job, we take on everything from choosing the technology stack, designing the architecture, and developing the screens to building the features and deploying a robust solution, keeping you in the loop always.</p>
                </div>
            </div>
        }
    </>
  )
}

export default WebDev
