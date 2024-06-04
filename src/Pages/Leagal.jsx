import React, { useEffect, useState } from 'react';
import "./About.css"
function Leagal() {
    const [activeLink, setActiveLink] = useState('seq1');

    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll('.section');
        let scrollPosition = window.scrollY;
  
        sections.forEach(sec => {
          const top = sec.offsetTop -150;
          const height = sec.offsetHeight;
          const id = sec.getAttribute('id');
  
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLink(id);
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleNavLinkClick = id => {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <>
    <div className="lea-con">
        <h1>Privacy and Policy</h1>
        <p>Seqtto Software Solutions Pvt Ltd ("Seqto," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy describes how Seqtto collects, uses, and shares personal information when you use our website (the "Site") or our services (collectively, the "Services"). By using our Services, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.</p>
        <div className="terms-con">
            <div className="titles-term">
                <div className="title-list">
                    <a href="#seq1"className={activeLink === 'seq1' ? 'active' : ''}onClick={() => handleNavLinkClick('seq1')}>Information We Collect</a>
                    <a href="#seq2"className={activeLink === 'seq2' ? 'active' : ''}onClick={() => handleNavLinkClick('seq2')}>How We Use the Information</a>    
                    <a href="#seq3"className={activeLink === 'seq3' ? 'active' : ''}onClick={() => handleNavLinkClick('seq3')}>Sharing of Your Information</a>    
                    <a href="#seq4"className={activeLink === 'seq4' ? 'active' : ''}onClick={() => handleNavLinkClick('seq4')}>Your Choices</a>    
                    <a href="#seq5"className={activeLink === 'seq5' ? 'active' : ''}onClick={() => handleNavLinkClick('seq5')}>Security</a>    
                    <a href="#seq6"className={activeLink === 'seq6' ? 'active' : ''}onClick={() => handleNavLinkClick('seq6')}>Changes to this Privacy Policy</a>    
                    <a href="#seq7"className={activeLink === 'seq7' ? 'active' : ''}onClick={() => handleNavLinkClick('seq7')}>Contact Us</a>    
                </div>
            </div>
            <div className="terms-details">
                <div className="section" id="seq1" >
                    <h3>Information We Collect</h3>
                    <p>We collect information you provide directly to us when you use our Services. The types of personal information we collect may include:</p>
                    <div className="seq1-l">
                      <p>Contact information, such as your name, email address, postal address, and phone number.</p>
                      <p>Account information, such as your username and password.</p>
                      <p>Payment information, such as credit card details.</p>
                      <p>Any other information you choose to provide, such as feedback, survey responses, or preferences.</p>
                    </div>
                    <p>We may also automatically collect certain information when you use our Services, such as your IP address, device information, browser type, operating system, and usage data.</p>
                </div>
                <div className="section" id="seq2" >
                    <h3>How We Use the Information</h3>
                    <p>We may use the information we collect for various purposes, including to:</p>
                    <div className="seq1-l">
                      <p>Provide, maintain, and improve our Services.</p>
                      <p>Communicate with you about our Services, including updates and promotions.</p>
                      <p>Process transactions and fulfill your requests.</p>
                      <p>Personalize your experience and provide content tailored to your interests.</p>
                      <p>Monitor and analyze trends, usage, and activities in connection with our Services.</p>
                      <p>Detect, investigate, and prevent fraudulent or illegal activities.</p>
                      <p>Comply with legal obligations.</p>
                    </div>
                </div>
                <div className="section" id="seq3" >
                    <h3>Sharing of Your Information</h3>
                    <p>We may share your personal information with third parties in the following circumstances</p>
                    <div className="seq1-l">
                      <p>With service providers who perform services on our behalf, such as payment processing, data analysis, and customer service.</p>
                      <p>With business partners or affiliates for marketing or promotional purposes.</p>
                      <p>In response to legal requests or to comply with applicable laws and regulations.</p>
                      <p>In connection with a merger, acquisition, or sale of assets.</p>
                    </div>
                </div>
                <div className="section" id="seq4">
                    <h3>Your Choices</h3>
                    <p>You can choose not to provide certain information, but that may limit your ability to use certain features of our Services. You can also opt-out of receiving promotional communications from us by following the instructions in those communications.</p>
                </div>
                <div className="section" id="seq5">
                    <h3>Security</h3>
                    <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>
                </div>
                <div className="section" id="seq6">
                    <h3>Changes to this Privacy Policy</h3>
                    <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a revised version on our Site prior to the change becoming effective.</p>
                </div>
                <div className="section" id="seq7">
                    <h3>Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, please contact us at legal@seqtto.com.</p>
                </div>
               
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Leagal
