import React from 'react'
import logo1 from "../Assets/google-1-1.svg"
import logo2 from "../Assets/aws-2.svg"
import logo3 from "../Assets/images.png"
import logo4 from "../Assets/microsoft-6.svg"
import logo5 from "../Assets/salesforce-2.svg"
import logo6 from "../Assets/se7en_tech_it_solutions_logo.jpg"
import logo7 from "../Assets/startup-india-hub-logo-vector.png"
import "./Sliders.css"
function Partners() {
  return (
    <>
        <div className="logos">
            <div className="logo-slide">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                {/* <img src={logo6} alt="" /> */}
                <img src={logo7} alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tech_Mahindra_New_Logo.svg/2560px-Tech_Mahindra_New_Logo.svg.png" alt="" />
            </div>
            <div className="logo-slide">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                {/* <img src={logo6} alt="" /> */}
                <img src={logo7} alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tech_Mahindra_New_Logo.svg/2560px-Tech_Mahindra_New_Logo.svg.png" alt="" />
            </div>
        </div>
    </>
  )
}

export default Partners
