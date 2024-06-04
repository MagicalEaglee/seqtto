import React from 'react'
import "./WebDev.css"
import { NavLink } from 'react-router-dom'
function ReactWeb() {
  return (
    <>
        <div className="node-con">
            <h1>React Js <span>Development</span></h1>
            <div className="node-cen">
                <div className="node1">
                    <p>We love stunningly responsive apps and React might just be the tool to build them. Let’s react to the changes in frontend engineering.</p>
                </div>
                <div className="nodec1">
                    <div className="nodec1-left">
                        <h3>Faster, Better Applications</h3>
                        <p>In applications such as dashboards displaying dynamic content, the virtual DOM concept of React makes data rendering much more efficient. When the underlying data changes, React manages UI updates by refreshing only those parts with changes. This is a huge performance booster.</p>
                    </div>
                    <div className="nodec1-right">
                        <h3>Truly Native Experience</h3>
                        <p>At the sweet intersection of native app experience and ease of web development lie hybrid mobile applications built using React. Unlike other hybrid app platforms, React Native uses reusable components that render as native platform widgets. The components compile directly to native allowing a web-style approach to create faster native mobile applications.</p>
                    </div>
                </div>
                <div className="nodec1">
                    <div className="nodec1-left">
                        <h3>Render Anywhere</h3>
                        <p>React helps to retain the responsiveness of client-side rendering without compromising the performance and reliability of a server-side application. We can build apps that load faster and support more devices delivering better experience for both users and web crawlers.</p>
                    </div>
                    <div className="nodec2-right">
                        <h3>Use React.js for</h3>
                        <div className="node-point">
                            <p>Dynamic user interfaces</p>
                            <p>Crawlable single-page applications</p>
                            <p>Isomorphic JavaScript applications</p>
                            <p>Reusable JS components</p>
                        </div>
                    </div>
                </div>
            </div>
            <button><NavLink to="../../Services/NodeDevelopment">Explore <i class="fa-solid fa-arrow-right"></i></NavLink></button>
        </div>
    </>
  )
}

export default ReactWeb
