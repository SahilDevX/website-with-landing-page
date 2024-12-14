import React from 'react'
import w1img from './img/Time_Saving-removebg-preview.png'
import w2img from './img/Cost_Effective-removebg-preview.png'
import w3img from './img/Flexible-removebg.png'
import w4img from './img/Highly_Scalable-removebg-preview.png'


export default function AboutWhy() {
  return (
    <section className="service_section layout_padding  mt-20">
      <div className="container">
        <div className="heading_container heading_center">
          <h1 className="text-center p-4 p40 fld bc">WHY CHOOSE US?</h1>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-md-6 col-lg-6 ">
            <div className="box bg-white mt-20">
              <div className="bg-white" id="cata">
                <img src={w1img} id="imps" alt=""/>
                <h3 className="text-black mb-4 animated slideInDown fld" >Time-saving</h3>
                <h5 className="fld" id="dc">Save time by managing job listings, reviewing resumes, conducting interviews, and checking references.</h5>
              </div>
              <div className="row"id="hd">
                <div className="col-md-6 col-lg-6 bg-white">
                  <img src={w1img} id="imps" alt=""/>
                </div>
                <div className="col-md-6 col-lg-6 pd"  >
                  <h3 className="text-black mb-4 animated slideInDown fld" >Time-saving</h3>
                  <h5 className="fld" id="dc">Save time by managing job listings, reviewing resumes, conducting interviews, and checking references.</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="box bg-white mt-20">
              <div className="bg-white" id="cata">
                <img src={w2img} id="imps" alt=""/>
                <h3 className="text-black mb-4 animated slideInDown fld" >Cost-effective</h3>
                <h5 className="fld" id="dc">Hire top-quality talent within your budget.</h5>
              </div>
              
              <div className="row"id="hd">
                <div className="col-md-6 col-lg-6 bg-white">
                  <img src={w2img} id="imps" alt=""/>
                </div>
                <div className="col-md-6 col-lg-6 paddd">
                  <h3 className="text-black mb-4 animated slideInDown fld" >Cost-effective</h3>
                  <h5 className="fld" id="dc">Hire top-quality talent within your budget.</h5>
              </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="box bg-white mt-20">
              <div className="bg-white" id="cata">
                <img src={w3img} id="imps" alt=""/>
                <h3 className="text-black mb-4 animated slideInDown fld" >Flexible</h3>
                <h5 className="fld" id="dc">Flexible staffing solutions (temporary, contract, or permanent) to suit industry demand fluctuations.</h5>
              </div>
              
              <div className="row"id="hd">
                <div className="col-md-6 col-lg-6 bg-white">
                  <img src={w3img} id="imps" alt=""/>
                </div>
                <div className="col-md-6 col-lg-6 paddd">
                  <h3 className="text-black mb-4 animated slideInDown fld" >Flexible</h3>
                  <h5 className="fld" id="dc">Flexible staffing solutions (temporary, contract, or permanent) to suit industry demand fluctuations.</h5>
              </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 ">
            <div className="box bg-white mt-20">
              <div className="bg-white" id="cata">
                <img src={w4img} id="imps" alt=""/>
                <h3 className="text-black mb-4 animated slideInDown fld" >Highly Scalable</h3>
                <h5 className="fld" id="dc">Hire the best Talent, even during high demand with expertise in 50+ skill sets.</h5>
              </div>
              <div className="row"id="hd">
                <div className="col-md-6 col-lg-6 bg-white">
                  <img src={w4img} id="imps" alt=""/>
                </div>
                <div className="col-md-6 col-lg-6 bg-white paddd">
                  <h3 className="text-black mb-4 animated slideInDown fld" >Highly Scalable</h3>
                  <h5 className="fld" id="dc">Hire the best Talent, even during high demand with expertise in 50+ skill sets.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
