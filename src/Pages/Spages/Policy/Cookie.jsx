import React from 'react'
import { useState,useEffect } from 'react';
function Cookie() {
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
      <h1>Cookie Policy</h1>
      <p>This Cookies Policy describes how Seqtto Software Solutions Pvt Ltd ("Seqtto," "we," "us," or "our") uses cookies and similar technologies on our website ("Site"). By accessing or using our Site, you consent to the use of cookies and similar technologies as described in this policy.</p>
      <div className="terms-con">
          <div className="titles-term">
              <div className="title-list">
                  <a href="#seq1"className={activeLink === 'seq1' ? 'active' : ''}onClick={() => handleNavLinkClick('seq1')}>What are Cookies?</a>
                  <a href="#seq2"className={activeLink === 'seq2' ? 'active' : ''}onClick={() => handleNavLinkClick('seq2')}>Types of Cookies We Use</a>    
                  <a href="#seq3"className={activeLink === 'seq3' ? 'active' : ''}onClick={() => handleNavLinkClick('seq3')}>Third-Party Cookies</a>    
                  <a href="#seq4"className={activeLink === 'seq4' ? 'active' : ''}onClick={() => handleNavLinkClick('seq4')}>Managing Cookies</a>    
                  <a href="#seq5"className={activeLink === 'seq5' ? 'active' : ''}onClick={() => handleNavLinkClick('seq5')}>Contact Us</a>    
              </div>
          </div>
          <div className="terms-details">
              <div className="section" id="seq1" >
                  <h3>What are Cookies?</h3>
                  <p>Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.</p>
              </div>
              <div className="section" id="seq2" >
                  <h3>Types of Cookies We Use</h3>
                  <p><span>Essential Cookies: </span>These cookies are necessary for the functioning of our Site. They enable you to navigate our Site and use its features. Without these cookies, certain functionalities may not be available.</p>
                  <p><span>Analytical/Performance Cookies: </span>These cookies allow us to recognize and count the number of visitors to our Site and see how visitors move around when they are using it. This helps us improve the way our Site works, for example, by ensuring that users find what they are looking for easily.</p>
                  <p><span>Functionality Cookies: </span>These cookies are used to recognize you when you return to our Site. They enable us to personalize our content for you, greet you by name, and remember your preferences (such as language or region).</p>
                  <p><span>Targeting/Advertising Cookies: </span>These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement, as well as to measure the effectiveness of advertising campaigns.</p>
              </div>
              <div className="section" id="seq3" >
                  <h3>Third-Party Cookies</h3>
                  <p>We may also allow third parties to place cookies on your device through our Site to provide us with analytics, advertising, and other services. These third parties may collect information about your online activities over time and across different websites.</p>
              </div>
              <div className="section" id="seq4">
                  <h3>Managing Cookies</h3>
                  <p>You can control and manage cookies in various ways. Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. You can usually find these settings in the options or preferences menu of your browser.</p>
              </div>
              <div className="section" id="seq5">
                    <h3>Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, please contact us at legal@seqtto.com.</p>
              </div>
              
          </div>
      </div>
  </div>
  
  </>
)
}

export default Cookie
