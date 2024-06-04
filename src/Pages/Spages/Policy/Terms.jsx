import React from 'react'
import { useState,useEffect } from 'react';

function Terms() {
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
        <h1>Terms and Conditions</h1>
        <p>These Terms and Conditions ("Terms") govern your access to and use of the services provided by Seqtto Software Solutions Pvt Ltd ("Seqtto"), including but not limited to the Seqtto software solutions, websites, applications, and any related services (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree to these Terms, please refrain from accessing or using the Services.</p>
        <div className="terms-con">
            <div className="titles-term">
                <div className="title-list">
                    <a href="#seq1"className={activeLink === 'seq1' ? 'active' : ''}onClick={() => handleNavLinkClick('seq1')}>Use of Services</a>
                    <a href="#seq2"className={activeLink === 'seq2' ? 'active' : ''}onClick={() => handleNavLinkClick('seq2')}>Intellectual Property</a>    
                    <a href="#seq3"className={activeLink === 'seq3' ? 'active' : ''}onClick={() => handleNavLinkClick('seq3')}>Privacy</a>    
                    <a href="#seq4"className={activeLink === 'seq4' ? 'active' : ''}onClick={() => handleNavLinkClick('seq4')}>Disclaimer of Warranties</a>    
                    <a href="#seq5"className={activeLink === 'seq5' ? 'active' : ''}onClick={() => handleNavLinkClick('seq5')}>Limitation of Liability</a>    
                    <a href="#seq6"className={activeLink === 'seq6' ? 'active' : ''}onClick={() => handleNavLinkClick('seq6')}>Governing Law and Dispute Resolution</a>    
                    <a href="#seq7"className={activeLink === 'seq7' ? 'active' : ''}onClick={() => handleNavLinkClick('seq7')}>Modification and Termination</a>    
                    <a href="#seq8"className={activeLink === 'seq8' ? 'active' : ''}onClick={() => handleNavLinkClick('seq8')}>Contact Us</a>    
                </div>
            </div>
            <div className="terms-details">
                <div className="section" id="seq1" >
                    <h3>Use of Services</h3>
                    <div className="seq1-l">
                      <p><span>Eligibility: </span>You must be at least 18 years old to access or use the Services. By accessing or using the Services, you represent and warrant that you are at least 18 years old.</p>
                      <p><span>Account: </span>Some features of the Services may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                      <p><span>Use Restrictions: </span>You agree to use the Services only for lawful purposes and in accordance with these Terms. You may not use the Services in any manner that could damage, disable, overburden, or impair the Services, or interfere with any other party's use and enjoyment of the Services.</p>
                    </div>
                </div>
                <div className="section" id="seq2" >
                    <h3>Intellectual Property</h3>
                    <p><span>Ownership: </span>All rights, title, and interest in and to the Services, including any intellectual property rights, are owned by Seqtto or its licensors. You acknowledge and agree that you do not acquire any ownership rights in the Services by accessing or using them.</p>
                    <p><span>Trademarks: </span>"Seqto" and the Seqto logo are trademarks owned by Seqtto Software Solutions Pvt Ltd. You may not use these trademarks without the prior written consent of Seqtto.</p>
                    <p><span>License: </span>Subject to your compliance with these Terms, Seqtto grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your personal or internal business purposes.</p>
                </div>
                <div className="section" id="seq3" >
                    <h3>Privacy</h3>
                    <p><span>Privacy Policy: </span>Your use of the Services is subject to Seqto's Privacy Policy, available at [link to privacy policy]. By accessing or using the Services, you consent to the collection, use, and sharing of your information as described in the Privacy Policy.</p>
                    <p><span>Data Security: </span>Seqto implements reasonable measures to protect the security of your information. However, no data transmission over the internet or method of electronic storage is completely secure. You acknowledge and accept the risks of transmitting information through the Services.</p>
                </div>
                <div className="section" id="seq4">
                    <h3>Disclaimer of Warranties</h3>
                    <p><span>No Warranties: </span>THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. SEQTT0 DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
                    <p><span>No Guarantee: </span>Seqto does not guarantee the accuracy, completeness, or reliability of the Services or any content available through the Services. You acknowledge and agree that your use of the Services is at your own risk.</p>
                </div>
                <div className="section" id="seq5">
                    <h3>Limitation of Liability</h3>
                    <p><span>Exclusion of Liability: </span>IN NO EVENT SHALL SEQTT0 OR ITS LICENSORS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOST PROFITS, LOSS OF DATA, OR INTERRUPTION OF BUSINESS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                    <p><span>Maximum Liability: </span>IN NO EVENT SHALL SEQTT0'S TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR YOUR USE OF THE SERVICES EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING OR USING THE SERVICES DURING THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO LIABILITY.</p>
                </div>
                <div className="section" id="seq6">
                    <h3>Governing Law and Dispute Resolution</h3>
                    <p><span>Governing Law: </span>These Terms and your use of the Services shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.</p>
                    <p><span>Dispute Resolution: </span>Any dispute arising out of or in connection with these Terms or your use of the Services shall be resolved exclusively by arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat of arbitration shall be Hyderabad, Telangana, India, and the language of arbitration shall be English.</p>
                </div>
                <div className="section" id="seq7">
                    <h3>Modification and Termination</h3>
                    <p><span>Modification: </span>Seqto reserves the right to modify or revise these Terms at any time by posting the updated Terms on its website or through other reasonable means. Your continued use of the Services after the effective date of any such changes constitutes your acceptance of the revised Terms.</p>
                    <p><span>Termination: </span>Seqtto may terminate or suspend your access to the Services at any time, with or without cause, and without prior notice or liability.</p>
                </div>
                <div className="section" id="seq8">
                    <h3>Contact Us</h3>
                    <p>If you have any questions or concerns about these Terms or the Services, please contact us at legal@seqtto.com or at the following address:</p>
                    <p>Seqtto Software Solutions Pvt Ltd
H.No 4-5, Bommalaramaram,
Bhongiri, 508126
India
</p>
                    <p>Last Updated:05-May-2024</p>
                    <p>By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.</p>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Terms
