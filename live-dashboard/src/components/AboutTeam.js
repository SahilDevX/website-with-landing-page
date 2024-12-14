import React from 'react'
import t1img from './img/asif1-removebg-preview.png'
import t2img from './img/ravi1-removebg-preview.png'


export default function AboutTeam() {
  return (
    <section className="service_section layout_padding" >
    <div className="container">
      <div className="heading_container heading_center">
        <h1 className="fld">
          MEET OUR TEAM
        </h1>
      </div>
    </div>
    <div className="container padd">
      <div className="row">
        <div className="col-md-6 col-lg-3" id="cent">
          <div className="img-box ">
            <img src={t1img} alt="" id="testi"/>
          </div>
        </div>
        <div className="col-md-6 col-lg-3"id="cent">
          <div className="heading_container p-t60">
            <h1 className="fld bc"id="cent">SIRWAL ASIF</h1>
            <h2 className="fld p20 jf " id="cent">
              CO-FOUNDER & CBO
            </h2>
            <a href="https://www.linkedin.com/in/sirwalasif/" className="bi bi-linkedin black"></a>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 "id="cent">
          <div className="img-box ">
            <img src={t2img} alt="" id="testi"/>
          </div>
        </div>
        <div className="col-md-6 col-lg-3"id="cent" >
          <div className="heading_container p-t60 ">
            <h1 className="fld bc "id="cent">RAVI TEJA</h1>
            <h2 className="fld p20 jf "id="cent" >
              CO-FOUNDER & COO
            </h2>
            <a href="https://www.linkedin.com/in/ravi-teja-palaparthi-206a61152/" className="bi bi-linkedin black"></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
