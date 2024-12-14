import React from 'react'
import c1img from './img/Tech-removebg-preview.png'
import c2img from './img/Marketing-removebg-preview.png'
import c3img from './img/Design-removebg-preview.png'
import c4img from './img/L_D-removebg-preview.png'



export default function Cate() {
  return (
   <>
   <section className="service_section layout_padding blll">
        <div className="container">
            <div className="heading_container heading_center">
                <h2 className="fld">
                Categories
                </h2>
            </div>
        </div>
        <div className="container mt-6">
            <div className="row">
                <div className="col-lg-12 mylf">
                    <div className="card hover sdw">
                        <div className="card-body dfi ">
                            <div className="col-md-6 col-lg-6 text-center">
                                <img src={c1img} id="imsize" alt=""/>
                            </div>
                            <h3 className="fw-medium mb-2 pd fld p40 bc text-center p35 p28" >Technology</h3>
                            <h5 className="lh-base mb-0 fld text-center pdt20" ><br/>Web Development<br/>
                                <br/>Data Science & Analytics<br/>
                                <br/>Mobile App Development</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 mylf">
                    <div className="card hover sdw">
                        <div className="card-body dfi">
                            <div className="col-md-6 col-lg-6 text-center ">
                                <img src={c2img} id="imsize1" alt=""/>
                            </div>
                            <h3 className=" fw-medium mb-2 pd fld p40 bc text-center p35 p28">Marketing</h3>
                            <h5 className="lh-base mb-0 fld text-center pdt20">
                            <br/>SEO<br/>
                            <br/>Marketing Strategy <br/>
                            <br/>Performance Marketing</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 mylf">
                    <div className="card hover sdw">
                        <div className="card-body dfi">
                            <div className="col-md-6 col-lg-6 text-center">
                                <img src={c3img} id="imsize1" alt=""/>
                            </div>
                            <h3 className=" fw-medium mb-2 pd fld p40 bc text-center p35 p28">Design</h3>
                            <h5 className="lh-base mb-0 fld text-center pdt20">
                            <br/>Web Design<br/>
                            <br/>Presentation Design<br/>
                            <br/>Logo Design & Branding</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 mylf">
                    <div className="card hover sdw">
                        <div className="card-body dfi" >
                            <div className="col-md-6 col-lg-6 text-center">
                                <img src={c4img} id="imsize1" alt=""/>
                            </div>
                            <h3 className=" fw-medium mb-2 pd fld p40 bc text-center p35 p28" >L&D</h3>
                            <h5 className="lh-base mb-0 fld text-center pdt20"><br/>Content Creation<br/>
                            <br/>Presentation Design<br/>
                            <br/>Instructional Design</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   <section className="service_section layout_padding bll">
        <div className="containerrrr  my-5">
            <div className="heading_container heading_center">
                <h2 className="fld">
                Categories
                </h2>
            </div>
        </div>
        <div className="container mt-6">
                <div className="row">
                    <div className="col-lg-3 mylf">
                        <div className="card hover sdw">
                            <div className="card-body dfi ">
                                <div className="col-md-6 col-lg-6 text-center">
                                    <img src={c1img} id="imsize" alt=""/>
                                </div>
                                <h3 className="fw-medium mb-2 pd fld p40 bc text-center p35 p28" >Technology</h3>
                                <h5 className="lh-base mb-0 fld text-center pdt20" ><br/>Web Development<br/>
                                    <br/>Data Science & Analytics<br/>
                                    <br/>Mobile App Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mylf">
                        <div className="card hover sdw">
                            <div className="card-body dfi">
                                <div className="col-md-6 col-lg-6 text-center ">
                                    <img src={c2img} id="imsize1" alt=""/>
                                </div>
                                <h3 className=" fw-medium mb-2 pd fld p40 bc text-center p35 p28">Marketing</h3>
                                <h5 className="lh-base mb-0 fld text-center pdt20">
                                <br/>SEO<br/>
                                <br/>Marketing Strategy <br/>
                                <br/>Performance Marketing</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mylf">
                        <div className="card hover sdw">
                            <div className="card-body dfi">
                                <div className="col-md-6 col-lg-6 text-center">
                                    <img src={c3img} id="imsize1" alt=""/>
                                </div>
                                <h3 className=" fw-medium mb-2 pd fld p40 bc text-center p35 p28">Design</h3>
                                <h5 className="lh-base mb-0 fld text-center pdt20">
                                <br/>Web Design<br/>
                                <br/>Presentation Design<br/>
                                <br/>Logo Design & Branding</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mylf">
                        <div className="card hover sdw">
                            <div className="card-body dfi" >
                                <div className="col-md-6 col-lg-6 text-center">
                                    <img src={c4img} id="imsize1" alt=""/>
                                </div>
                                <h3 className=" fw-medium mb-2 pd fld p40 bc text-center p35 p28" >L&D</h3>
                                <h5 className="lh-base mb-0 fld text-center pdt20"><br/>Content Creation<br/>
                                <br/>Presentation Design<br/>
                                <br/>Instructional Design</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>

   </>
  )
}
