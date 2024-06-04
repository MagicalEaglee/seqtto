import React from 'react'
import "./WebDev.css"
import javaI from "../../../Assets/images/PagesImg/java-web-development-services-500x500-removebg-preview.png"
import {NavLink} from "react-router-dom"
const JavaWeb = () => {
  return (
    <>
        <div className="java-con">
            <h1>Java Web Application <span>Development</span></h1>
            <div className="java-cen">
                <div className="java1">
                    <p>JavaTM is a general purpose object-oriented language. Java code compiles into an intermediate byte code that runs on a Java Virtual Machine (JVM). The JVMs are available for a variety of hardwares from PCs to servers to mainframes. This makes Java code portable across platforms. </p>
                    <p>Java Enterprise Edition has always been an industry preferred development platform for building enterprise applications. The simplest Java web apps are created using JSP, JSTL, servlets, JDBC and Java Beans. More complex enterprise apps need fault tolerance, infrastructure for distributed components and transaction support, which are provided by application servers. Open source application servers such as JBoss have gained widespread acceptance. Application servers provide support for EJB (Enterprise Java Beans, which are distributed components), message queuing, transactions and creation of web service endpoints. Complex EJB spec and implementations have come to be replaced with lighter weight non-EJB frameworks like Struts and Spring. </p>
                </div>
                <h1>Explore the World of <span>Java</span></h1>
                <div className="java-ex">
                    <div className="ex-left">
                        <p>Enterprise Java has evolved through the community process and has successfully satisfied millions of application users globally. The Java Center of Excellence at QBurst proactively stays updated on the latest happenings in Java. The CoE has been established to provide customers business benefits by working on</p>
                        <div className="ex-points">
                            <p>Innovation and research</p>
                            <p>Latest Java trends and frameworks</p>
                            <p>Understanding enterprise challenges</p>
                            <p>Automated software processes, unit testing, automated builds, continuous integration</p>
                            <p>Performance engineering to provide scalable solutions</p>
                        </div>
                    </div>
                    <div className="ex-right">
                        <div className="jImage">
                            <img src={javaI} alt="" />
                        </div>
                    </div>
                </div>
                <button><NavLink to="../../Services/JavaDevelopment">Explore <i class="fa-solid fa-arrow-right"></i></NavLink></button>
            </div>
        </div>
    </>
  )
}

export default JavaWeb
