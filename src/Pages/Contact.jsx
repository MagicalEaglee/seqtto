
import "./Contact.css"
import cImage from "../Assets/images/PagesImg/flat-design-illustration-customer-support_23-2148887720-removebg-preview.png"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const[contactVal,setContact]=useState({name:'',email:'',message:''})
  const form = useRef();

  const handleCon=(e)=>{
    const{name,value}=e.target
    setContact({...contactVal,[name]:value})
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_aqhp0gt', 'template_chn7yfk', form.current, {
        publicKey: 'jN1L1d-2M3yrvxfDX',
      })
      .then(
        () => {
          alert('Your Response Submitted Sucessfully!');
          
          setContact({name:'',email:'',message:''})
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
    <div className="contact">
        <div className="cont-con shadow">
          <div className="cont-left">
            <h2 >Get In Touch</h2>
            <p>We are here for you! How can we help?</p>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" value={contactVal.name} onChange={handleCon} placeholder='Enter your name' name="name" required/>
              <input type="email" value={contactVal.email} onChange={handleCon} placeholder='Enter your email address'  name="email" required/>
              <textarea required value={contactVal.message} onChange={handleCon} placeholder='Go ahead,We are listening...' id="" cols="30" rows="5"  name="message"></textarea>
              <button type='submit'>Submit</button>
            </form>
          </div>
          <div className="cont-right">
            <div className="cont-image">
              <img src={cImage} alt="" />
            </div>
            <div className="cont-details">
              <div className="cont1">
                
                <div className="ad1">
                <p className='cont-icon'><i class="fa-solid fa-location-dot"></i>H.No 4-5, Bommalaramaram, yadadri, Telangana, 508126</p>
                <p className='cont-icon'><i class="fa-solid fa-phone"></i>7670998219</p>
                <p className='cont-icon'><i class="fa-solid fa-envelope"></i>contact@seqtto.com</p>
                </div>
                <div className="ad1">
                <p className='cont-icon'> <i class="fa-solid fa-location-dot"></i> Flat 3 Archways,Ladmill street Sheffield S1 4SG  </p>
                <p className='cont-icon'><i class="fa-solid fa-phone"></i>+44 7308452185</p>
                <p className='cont-icon'><i class="fa-solid fa-envelope"></i>contact@seqtto.com</p>
                </div>
                <div className="ad1">
                <p className='cont-icon'><i class="fa-solid fa-location-dot"></i>D.No: 13/404/10/5, Bugga Extension, Opp Abhayshktram, Near Rajarajeshwari Temple Renigunta</p>
                <p className='cont-icon'><i class="fa-solid fa-phone"></i>8309260568</p>
                <p className='cont-icon'><i class="fa-solid fa-envelope"></i>contact@seqtto.com</p>
                </div>
              </div>
              {/* <div className="cont1">
                
                <p>7670998219</p>
              </div>
              <div className="cont1">
                
                <p>contact@seqtto.com</p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="cont-links">
          <li><a href="http://www.facebook.com/seqtto"><i class="fa-brands fa-facebook-f"></i></a></li>
          <li><a href="https://www.linkedin.com/company/seqtto"><i class="fa-brands fa-linkedin-in"></i></a></li>
          <li><a href="https://www.instagram.com/seqtto/"><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href="https://api.whatsapp.com/send?phone=7670998219"><i class="fa-brands fa-whatsapp"></i></a></li>
          <li><a href="https://www.instagram.com/seqtto/"><i class="fa-brands fa-twitter"></i></a></li>
        </div>
    </div>
    <div className="contact-sm">
        <h1>Contact Us</h1>
        <form className="forms-con" ref={form} onSubmit={sendEmail}>
          <input type="text" value={contactVal.name} onChange={handleCon} className="form-control" placeholder='Name' name="name" required/>
          <input type="email" value={contactVal.email} onChange={handleCon} className="form-control" placeholder="Email" name="email" required />
          <textarea  value={contactVal.message} onChange={handleCon} placeholder='Go ahead,We are listening...' id="" cols="25" rows="10" name="message"></textarea>
          <button type='submit'>Submit</button>
        </form>
        <div className="cont-details">
        <div className="cont1">
                
                <div className="ad1">
                <p className='cont-icon'><i class="fa-solid fa-location-dot"></i>H.No 4-5, Bommalaramaram, yadadri, Telangana, 508126</p>
                <p className='cont-icon'><i class="fa-solid fa-phone"></i>7670998219</p>
                <p className='cont-icon'><i class="fa-solid fa-envelope"></i>contact@seqtto.com</p>
                </div>
                <div className="ad1">
                <p className='cont-icon'> <i class="fa-solid fa-location-dot"></i> Flat 3 Archways,Ladmill street Sheffield S1 4SG  </p>
                <p className='cont-icon'><i class="fa-solid fa-phone"></i>+44 7308452185</p>
                <p className='cont-icon'><i class="fa-solid fa-envelope"></i>contact@seqtto.com</p>
                </div>
                <div className="ad1">
                <p className='cont-icon'><i class="fa-solid fa-location-dot"></i>D.No: 13/404/10/5, Bugga Extension, Opp Abhayshktram, Near Rajarajeshwari Temple Renigunta</p>
                <p className='cont-icon'><i class="fa-solid fa-phone"></i>8309260568</p>
                <p className='cont-icon'><i class="fa-solid fa-envelope"></i>contact@seqtto.com</p>
                </div>
              </div>
            </div>
            <div className="cont-links">
          <li><a href="http://www.facebook.com/seqtto"><i class="fa-brands fa-facebook-f"></i></a></li>
          <li><a href="https://www.linkedin.com/company/seqtto"><i class="fa-brands fa-linkedin-in"></i></a></li>
          <li><a href="https://www.instagram.com/seqtto/"><i class="fa-brands fa-instagram"></i></a></li>
          <li><a href="https://api.whatsapp.com/send?phone=7670998219"><i class="fa-brands fa-whatsapp"></i></a></li>
          <li><a href="https://www.instagram.com/seqtto/"><i class="fa-brands fa-twitter"></i></a></li>
        </div>
    </div>
    </>
  )
}

export default Contact
