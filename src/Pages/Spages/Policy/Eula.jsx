import React from 'react'
import { useState,useEffect } from 'react';
function Eula() {
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
        <h1>Eula Policy</h1>
        <p>seqtto is committed to protecting your privacy. This policy applies to information collected by us on our website. We do not rent, sell, or share personal information about you with other people. You can visit our website without telling us who you are and without revealing any information about yourself. There are times, however, when we may request certain information from you. We use this information to get valuable feedback from your experience using our website / products. You are at liberty to respond to or ignore these requests.</p>
        <div className="terms-con">
            <div className="titles-term">
                <div className="title-list">
                    <a href="#seq1"className={activeLink === 'seq1' ? 'active' : ''}onClick={() => handleNavLinkClick('seq1')}>Information We Collect</a>
                    <a href="#seq2"className={activeLink === 'seq2' ? 'active' : ''}onClick={() => handleNavLinkClick('seq2')}>How We Use the Information</a>    
                    <a href="#seq3"className={activeLink === 'seq3' ? 'active' : ''}onClick={() => handleNavLinkClick('seq3')}>Data Protection and Information Sharing</a>    
                    <a href="#seq4"className={activeLink === 'seq4' ? 'active' : ''}onClick={() => handleNavLinkClick('seq4')}>Withdrawal and Right to Opt Out</a>    
                    <a href="#seq5"className={activeLink === 'seq5' ? 'active' : ''}onClick={() => handleNavLinkClick('seq5')}>Protection of Minor’s Identity</a>    
                    <a href="#seq6"className={activeLink === 'seq6' ? 'active' : ''}onClick={() => handleNavLinkClick('seq6')}>Links to Third-Party Sites</a>    
                    <a href="#seq7"className={activeLink === 'seq7' ? 'active' : ''}onClick={() => handleNavLinkClick('seq7')}>Cookies and Other Tracking Technologies</a>    
                    <a href="#seq8"className={activeLink === 'seq8' ? 'active' : ''}onClick={() => handleNavLinkClick('seq8')}>Managing Cookies</a>    
                    <a href="#seq9"className={activeLink === 'seq9' ? 'active' : ''}onClick={() => handleNavLinkClick('seq9')}>Your Consent</a>    
                </div>
            </div>
            <div className="terms-details">
                <div className="section" id="seq1" >
                    <h3>Information We Collect</h3>
                    <p>When you fill out a form on our site, you may be asked to enter your personal information (name, company name, email address, phone number). Please note that you have the option to visit our site anonymously.</p>
                    <p>There are three different ways in which visitor / user data is collected on our website:</p>
                    <div className="seq1-l">
                      <p>Information shared by users for submitting a business inquiry through the Inquiry Submission form.</p>
                      <p>Information shared by users for applying for a job opening through the Resume Submission form.</p>
                      <p>Information shared by users for registering for seqtto Business Referral Program.</p>
                      <p>Information collected via cookies for the analysis of website usage.</p>
                    </div>
                    <p>We also collect certain information such as domain, IP address, type of operating system, and / or browser from website visitors as part of analysis of the usage of this site. This information is collected automatically. By accessing our site without turning off cookies, users grant unconditional consent to allow seqtto to collect this information.</p>
                </div>
                <div className="section" id="seq2" >
                    <h3>How We Use the Information</h3>
                    <p>seqtto shall process personal information collected through forms to communicate with prospective customers and respond to their inquiries by informing them of our services and products that could help their business.</p>
                    <p>Any personal data submitted on our website is considered classified and only available to authorized personnel who are required to keep the information confidential. Business inquiry details are handled by our internal business development team and used solely for the purpose for which the inquiry was made.</p>
                    <p>Information submitted by candidates while applying for jobs through our website will remain confidential. It may be used by our internal recruiters for the purpose of current and future openings with us.</p>
                    <p>Information collected automatically is used to help us serve you better. This data enables us to understand who visits our site, how often they visit, and what parts of the site they visit most often. We use this information to improve our web-based offerings and also to protect our site from hacking attempts.</p>
                </div>
                <div className="section" id="seq3" >
                    <h3>Data Protection and Information Sharing</h3>
                    <p>We may share your personal information within seqtto to respond to your business inquiry. We may also share your personal information with authorized third-party agents, who are required to keep the personal information confidential.</p>
                    <p>To ensure the safety of your personal information, we use secure servers and transmit data over Secure Socket Layer (SSL). Your data is stored in cloud servers of third-party providers that we engage. Restrictions on physical access to the data is managed by our cloud vendors.</p>
                    <p>If any of the servers are located in a country outside the EU region, your personal information may be transferred to countries outside the EU. When personal information is transferred to countries outside of the EU by our hosting providers, we take steps to ensure appropriate measures are in place to protect that information in accordance with applicable data protection rules.</p>
                    <p>By providing your personal information on this site, you are agreeing to this transfer. While we strive to keep your information safe, we cannot guarantee the security of information you choose to share with us and you do so at your own risk.</p>
                </div>
                <div className="section" id="seq4">
                    <h3>Withdrawal and Right to Opt Out</h3>
                    <p>You have the right to withdraw your consent at any time. You can also ask for details of personal information we hold about you, get it corrected if inaccurate, and have it erased in certain circumstances. Please email us at info@seqtto.com. However, if a request for deletion conflicts with our record keeping policies, then the right to erasure does not override this.</p>
                </div>
                <div className="section" id="seq5">
                    <h3>Protection of Minor’s Identity</h3>
                    <p>We are committed to protect the privacy of children under the age of 18. Our website is directed to people who are at least 18 years old and we do not solicit personal information from anyone under the age of 18.</p>
                </div>
                <div className="section" id="seq6">
                    <h3>Links to Third-Party Sites</h3>
                    <p>This site may contain links to other sites. seqtto is not responsible for the privacy practices or the content of those websites.</p>
                </div>
                <div className="section" id="seq7">
                    <h3>Cookies and Other Tracking Technologies</h3>
                    <p>Pages on this site use "cookies", which are small files that the site places on your computer or mobile devices to make your experience more efficient. These files are used for customization the next time you visit us. Cookies help us maintain the performance of the website and allow us to remember your preferences and make improvements based on visitor statistics.</p>
                    <p>Some of the cookies and tags are put there by third-party services whose software we have added to the site, and these can also impact your experience of other websites you may visit after leaving ours. Such cookies do not store any personally identifiable information but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.</p>
                    <p>We also share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.</p>
                </div>
                <div className="section" id="seq8">
                    <h3>Managing Cookies</h3>
                    <p>Virtually all modern browsers allow you to see what cookies you have got, and to delete them individually or delete all of them. By not accepting cookies, some pages may not fully function and you may not be able to access certain information on this site.</p>
                    <p>Google Analytics provides a browser plugin to prevent their analytics cookies being placed, or you can use your browser settings to disallow analytics cookies.</p>
                </div>
                <div className="section" id="seq9">
                    <h3>Your Consent</h3>
                    <p>If you continue to use this site without taking action to prevent the storage of information, you are effectively agreeing to our Privacy and Cookies Policy. Your consent applies to the following domains and its subdomains:</p>
                    <p>If you continue to use this site without taking action to prevent the storage of information, you are effectively agreeing to our Privacy and Cookies Policy. Your consent applies to the following domains and its subdomains:</p>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Eula
