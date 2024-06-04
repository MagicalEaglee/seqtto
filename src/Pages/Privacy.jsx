import React, { useEffect, useState } from 'react';
import "./About.css"
function Privacy() {
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let scrollPosition = window.scrollY;

      sections.forEach(sec => {
        const top = sec.offsetTop +150;
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
    
    <div className="nav2" style={{position:"sticky", top:"180px"}}>
      <div className="nav-list">
        <a
          href="#Home"
          className={activeLink === 'Home' ? 'active' : ''}
          onClick={() => handleNavLinkClick('Home')}
        >
          Home
        </a>
        <a
          href="#About"
          className={activeLink === 'About' ? 'active' : ''}
          onClick={() => handleNavLinkClick('About')}
        >
          About
        </a>
        <a
          href="#Services"
          className={activeLink === 'Services' ? 'active' : ''}
          onClick={() => handleNavLinkClick('Services')}
        >
          Services
        </a>
        <a
          href="#Projects"
          className={activeLink === 'Projects' ? 'active' : ''}
          onClick={() => handleNavLinkClick('Projects')}
        >
          Projects
        </a>
        <a
          href="#Contact"
          className={activeLink === 'Contact' ? 'active' : ''}
          onClick={() => handleNavLinkClick('Contact')}
        >
          Contact
        </a>
        <button>
          <a href="../Shaik Resume.pdf">Download Cv</a>
        </button>
      </div>
      </div>
      <section id="Home" className="t" style={{ height: '100vh' ,backgroundColor:"red" }}>
        Home
      </section>
      <section id="About" className="t" style={{ height: '100vh' }}>
        About
      </section>
      <section id="Services" className="t" style={{ height: '100vh' }}>
        Services
      </section>
      <section id="Projects" className="t" style={{ height: '100vh' }}>
        Projects
      </section>
      <section id="Contact" className="t" style={{ height: '100vh' }}>
        Contact
      </section>
    
    </>
  );
}

export default Privacy;
