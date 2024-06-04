import React from 'react'
import not from "../Assets/1714914772867-removebg-preview.png"
import "./About.css"
function NotFound() {
  return (
    <div>
      <div className="not-con">
        <div className="img-not">
            <img src={not} alt="" />
          <div className="details-notf">
          <h1>AWWW... DON'T CRY.</h1>
         <div className="ppor">
         <p>It's just a 404 Error! <span>What you're looking for many have been misplaced in Long Term Memory.</span></p>
         </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default NotFound
