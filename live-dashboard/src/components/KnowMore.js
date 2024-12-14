import React from 'react'
import Knowimg from './img/computer-removebg-preview.png'

export default function KnowMore() {
  return (
    <>
    <section className="about_section layout_padding-bottom blll">
        <div className="container ">
            <div className="row ">
            <div className="col-md-12 ">
                <div className="img-box  ">
                <img src={Knowimg} alt=""/>
                </div>
            </div>
            <div className="col-md-12 bg-greyy radius-style ht mylff ">
                <div className="detail-box text-center">
                <div className="heading_container">
                    <h2 className="fld p28 mt-100 " >
                    Talescope helps you unburden your tasks through streamlined Talent Solutions tailored to your specific needs.
                    </h2>
                </div>
                <a className="fld hov" href="about.html" id="fs">
                Know More
                </a>
                </div>
            </div>
            </div>
        </div>
    </section>

    <section className="about_section pd_lr bll">
        <div className="container-xxl ">
        <div className="row ">
            <div className="col-md-5 ">
            <div className="img-box  ">
                <img src={Knowimg} alt=""/>
            </div>
            </div>
            <div className="col-md-7 bg-greyy radius-style ht pdlf ">
            <div className="detail-box ">
                <div className="heading_container">
                    <h2 className="fld p28 mt-100 " >
                        Talescope helps you unburden your tasks through streamlined Talent Solutions tailored to your specific needs.
                    </h2>
                </div>
            <a className="fld hov" href="about.html" id="fs">
                Know More
                </a>
            </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}
