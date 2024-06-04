import React from 'react'
import "./WebDev.css"
import { NavLink } from 'react-router-dom'
function NodeWeb() {
  return (
    <>
        <div className="node-con">
            <h1>Node Js <span>Development</span></h1>
            <div className="node-cen">
                <div className="node1">
                    <p>Node.js is a developer platform built on Google’s V8 JavaScript engine. It aggregates the qualities of other server-side languages to produce an irresistible package that is also modular, accessible, and concise.</p>
                    <p>In the dynamic landscape of modern software development, the demand for real-time, high-performance applications is ever-growing. At seqtto, we specialize in harnessing the full potential of Node.js to propel your projects to new heights.</p>
                </div>
                <div className="nodec1">
                    <div className="nodec1-left">
                        <h3>Real-time, High Performance Apps</h3>
                        <p>Node.js is a good choice for applications that require real time communication between users, clients, and servers across the web. It can power the back-end of real-time collaboration software and easily scale up to support very large number of users.</p>
                    </div>
                    <div className="nodec1-right">
                        <h3>Non-blocking Input/Output</h3>
                        <p>Real-time communication requires fast, non-blocking input/output (I/O). In Node.js, the non-blocking I/O is based on an event loop and uses asynchronous callbacks for I/O. All I/O intensive tasks are passed to this event loop which efficiently manages asynchronous operations. This non-blocking programming model allows you to work with network traffic with a lower server footprint.</p>
                    </div>
                </div>
                <div className="nodec1">
                    <div className="nodec1-left">
                        <h3>Node.js Development at QBurst</h3>
                        <p>AppJS is a software development kit that we utilize to build cross-platform desktop applications using HTML, CSS, and JavaScript. With Node.js at its core, AppJS acts as a simple but powerful tool to build applications for Linux, Windows, and Mac. Mobile apps developed using Node include applications for social networking and sending greeting cards.</p>
                    </div>
                    <div className="nodec2-right">
                        <h3>Use Node.js for</h3>
                        <div className="node-point">
                            <p>Lightweight REST/JSON APIs</p>
                            <p>AJAX-heavy single page apps</p>
                            <p>Scalable network applications</p>
                            <p>Enterprise-connected backends to mobile applications</p>
                        </div>
                    </div>
                </div>
            </div>
            <button><NavLink to="../../Services/NodeDevelopment">Explore <i class="fa-solid fa-arrow-right"></i></NavLink></button>
        </div>
    </>
  )
}

export default NodeWeb
