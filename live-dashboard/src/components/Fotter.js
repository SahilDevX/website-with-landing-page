import React from 'react'
import { Link,   } from 'react-router-dom'

export default function Fotter() {

  // Function to redirect to Privacy Policy page
  const redirectToPage = () => {
    window.open('/privacy-policy.html', '_blank');
  };

  // Function to redirect to Terms & Conditions page
  const redirectToTermsPage = () => {
    window.open('/terms-&-condition.html', '_blank');
  };
  return (
    <>
    <section className="info_section layout_padding35" id="cppp">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="info_contact">
            <h3 className="white fld pt26">
              Connect with us
            </h3>
            <form className="row g-3" action="https://hook.eu2.make.com/3ah254475ilvur9lhx2gdu0shey5hurr" method="post">
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label white fld">First name</label>
                <input type="text" name="firstname" className="form-control bordercolor tsp h35 " id="inputEmail4" required/>
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label white fld">Last name</label>
                <input type="text" name="lastname" className="form-control bordercolor tsp h35" id="inputPassword4"required/>
              </div>
              <div className="col-6">
                <label for="inputAddress" className="form-label white fld">Email</label>
                <input type="email" name="email" className="form-control bordercolor tsp h35" id="inputAddress" placeholder=""required/>
              </div>
              <div className="col-6">
                <label for="inputAddress2" className="form-label white fld">Phone</label>
                <input type="text" name="Phone" className="form-control bordercolor tsp h35" id="inputAddress2" placeholder=""required/>
              </div>
              <div className="col-12">
                <label for="inputAddress2" className="form-label white fld">Message</label>
                <input type="text" name="message" className="form-control bordercolor tsp h35" id="inputAddress2" placeholder=""required/>
              </div>
              <div className="col-12 ">
                <button type="submit" className="btn btnmy fld bbc ">Submit  <i className="bi bi-arrow-right" ></i></button>
              </div>
            </form>
          </div>
          
        </div>
        <div className="col-md-4 df bll" id="df">
          <div className="info_link_box white fld ">
            <h3 className="pt26">
              Address
            </h3>
            <div className="info_links mt-25">
              <p className=" white cf22" href="">
                <i className="bi bi-geo-alt p3"></i>
                Bangalore,India
              </p>
              <p className=" white cf22" href="">
                <i className="bi bi-telephone p3"></i>
                +91 81238 91091
              </p>
              
              <p className=" white cf22" href="">
                <i className="bi bi-envelope p3"></i>
                asif@talescope.io
              </p>
              <a className=" white cf22" href="https://www.linkedin.com/company/talescopeai/mycompany/">
                <i className="fa fa-linkedin p3  " aria-hidden="true"></i>
                Linkedin
              </a>
             
            </div>
          </div>
          
        </div>
        <div className="col-md-4 pleft bll" id="pleft">
          <div className="info_link_box white fld ">
            <h3 className="pt26">
              Company
            </h3>
            <div className="info_links mt-25">
              <Link className="white cf22" to="/about">
                About us
              </Link>
              <Link className="white cf22" to="/forclient">
                For Clients
              </Link>
              <Link className="white cf22" to="/recriturlandingpage">
                For Recruiter
              </Link>
              <a className="white cf22" href="https://www.careers-page.com/talescope-consulting-private-limited">
                For Talent
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="containerr dsf blll">
        <div className=" col-md-6 info_link_box white fld dsfr">
          <h3 className="pt26 ">
            Address
          </h3>
          <div className="info_links mt-25 ">
            <p className=" white pf13 dsfrr" href="">
              <i className="bi bi-geo-alt p3"></i>
              Bangalore,India
            </p>
            <p className=" white pf13 dsfrr" href="">
              <i className="bi bi-telephone p3"></i>
              +91 81238 91091
            </p>
            <p className=" white pf13 dsfrr" href="">
              <i className="bi bi-geo-alt p3"></i>
              asif@talescope.io
            </p>
            <a className=" white pf13 dsfrr" href="https://www.linkedin.com/company/talescopeai/mycompany/">
              <i className="fa fa-linkedin  mt--1 pdcf" aria-hidden="true"></i>
              Linkedin
            </a>
           
          </div>
        </div>
        <div className=" col-md-6 info_link_box white fld ">
          <h3 className="pt26 ">
            Company
          </h3>
          <div className="info_links mt-25">
            <Link className="white pf13" to="/about">
              About us
            </Link>
            <Link className="white pf13" to="/forclient">
              For Clients
            </Link>
            <Link className="white pf13" to="/forrecritur">
              For Recruiter
            </Link>
            <a className="white pf13" href="https://www.careers-page.com/talescope-consulting-private-limited">
              For Talent
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container px-lg-5 border-above">
                <div className="copyright">
                    <div className="row  display-flex">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 address height">
                             <a className=" address montserrat copyright" href="#">&copy;Talescope Consulting Private Limited, All Right Reserved. </a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu display-flex-terms">
                                <a className=" address montserrat no-cursor" onClick={redirectToPage} >Privacy Policy</a>
                                <a className="address montserrat no-cursor" onClick={redirectToTermsPage}>Terms & Condition</a>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
  </section>
  </>
  )
}
