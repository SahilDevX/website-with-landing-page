import React, { useState } from 'react';
import logo from './img/Talescope-O-B.png'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('cppp');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    closeNavbar();
  };
  const handleRedirect = () => {
    // Open the HTML page in a new tab
    window.open('/mentorship', '_blank');
  };

  return (
    <>
    <header className="header_section">
    <div className="containerrr bg-white p-0">
      <div className="containerrr position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-light px-4 pdlr-10 py-3 py-lg-0" id="nc">
              <Link to="/" className="navbar-brand m-0">
              <img className='Logo' src={logo} alt=""/>
              </Link>
              <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarCollapse">
                <div className="navbar-nav mx-auto py-0">
                  <Link to="/forclient" className="nav-item nav-link fld" onClick={closeNavbar}>For Clients</Link>
                  <Link to="/recriturlandingpage" className="nav-item nav-link fld" onClick={closeNavbar}>For Recruiters</Link>
                  <Link className="nav-item nav-link fld" onClick={handleRedirect}>Mentorship</Link>
                  <Link to="/about" className="nav-item nav-link fld" onClick={closeNavbar}>About Us</Link>
                  <Link to="/" className="nav-item nav-link bl btn fld" id="co" onClick={closeNavbar}>Contact Us</Link>
                  {/* <Link to="/Login" className="nav-item nav-link bl btn fld" id="co" onClick={closeNavbar}>Login</Link> */}
                </div>
                <Link  className="btn back-to-down rounded-pill py-2 px-4 ms-3 d-none d-lg-block fld hov" id="fs" onClick={scrollToContact}>Contact Us</Link>
                {/* <Link to="/Login" className="btn back-to-down rounded-pill py-2 px-4 ms-3 d-none d-lg-block fld hov" id="fs" onClick={closeNavbar}>Login</Link> */}
              </div>
          </nav>
      </div>
    </div>
  </header>
  <a href="#" className="btn btn-lg btn-lg-square back-to-top hov" id="fs"><i className="bi bi-arrow-up" ></i></a>
  </>

  )
}



