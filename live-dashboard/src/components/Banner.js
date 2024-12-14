import React from 'react'
import Bimg from './img/Job hunt-cuate4.png'
import { Link } from 'react-router-dom'


export default function Form() {
  return (
    <>
    <section className="about_section layout_padding-bottom blll">
      <div className="container pad ">
        <div className="row">
          <div className="col-md-6 ">
            <div className="img-box animated slideInRight pdt90">
              <img src={Bimg} alt=""/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box cn">
              <div className="heading_container" >
                <h1 className="text-dark fld hff" >Where Skills Meet Opportunities</h1>
              </div>
              <Link to="/forclient" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft fld hov" id="fs" data-wow-delay="0.5s">Find Talent  <i className="bi bi-arrow-right" ></i></Link>
              <a href="https://www.careers-page.com/talescope-consulting-private-limited" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft fld" id="fss" data-wow-delay="0.5s">Find Work</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about_section pd_lr bll">
      <div className="container-xxxl pad100 bg-white">
        <div className="row">
          <div className="col-md-5 pdright">
            <div className="detail-box cn texr">
              <div className="heading_container animated slideInLeft " >
                <h1 className="text-dark fld hf " >Where Skills Meet Opportunities</h1>
              </div>
              <Link to="/forclient" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft fld hov" id="fs" data-wow-delay="0.5s">Find Talent  <i className="bi bi-arrow-right" ></i></Link>
              <a href="https://www.careers-page.com/talescope-consulting-private-limited" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft fld" id="fss" data-wow-delay="0.5s">Find Work</a>
            </div>
          </div>
          <div className="col-md-7 pdleft">
            <div className="img-box animated slideInRight">
            <img src={Bimg} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
