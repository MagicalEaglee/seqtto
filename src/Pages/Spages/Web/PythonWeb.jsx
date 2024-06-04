import React from 'react'
import {NavLink} from "react-router-dom"
function PythonWeb() {
  return (
    <>
        <div className="py-con">
            <h1>Python <span>Development</span></h1>
            <div className="py1">
                <p>With rapid development and prototyping techniques, Python lets you build and integrate multiple systems efficiently. Be it for complex websites or web services acting as the backend for iOS and Android apps, we often use Python because the bundled Django admin provides a powerful tool for data manipulation.</p>
            </div>
            <div className="py-cen">
                <div className="py-left">
                    <h3>Solutions We've Built</h3>
                    <div className="py-point">
                        <p>Visitor tracking and website statistics</p>
                        <p>Content management systems</p>
                        <p>Salesforce automation</p>
                        <p>Business intelligence software</p>
                        <p>Credit card processing</p>
                        <p>Field order tracking</p>
                        <p>Product catalogs</p>
                        <p>Backend administration panels</p>
                        <p>Integrated search, polls, and surveys</p>
                        <p>Social networking portals</p>
                    </div>
                </div>
                <div className="py-right">
                    <div className="py-ll">
                        <h3>Django Framework</h3>
                        <p>Django is a Python web framework that provides a strong foundation to develop apps with minimal coding. It aims to automate as many processes as possible and comes bundled with a number of applications including a flexible commenting system and tools for generating RSS feeds, Google sitemaps and such. Designed to handle rapid development, Django lets you build complex, database-driven websites real quick.</p>
                    </div>
                    <div className="py-ll">
                        <h3>Why Choose Django</h3>
                        <div className="pyl-point">
                            <p>Reusable and pluggable components</p>
                            <p>Rapid application development</p>
                            <p>Adherence to DRY (Don’t Rewrite Yourself) principle</p>
                            <p>Ease of maintenance</p>
                        </div>
                    </div>
                </div>
            </div>
            <button><NavLink to="../../Services/PythonDevelopment">Explore <i class="fa-solid fa-arrow-right"></i></NavLink></button>
        </div>
    </>
  )
}

export default PythonWeb
