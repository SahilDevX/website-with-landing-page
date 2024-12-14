import React from 'react'
import f1img from './img/Vetted_Projects-removebg-preview.png'
import f2img from './img/Secure-pay_Guarantee-removebg-preview.png'
import f3img from './img/Verified_Clientele-removebg-preview.png'
import f4img from './img/Top-tier_Talent-removebg-preview.png'
import f5img from './img/Personalised_Matching-removebg-preview.png'
import f6img from './img/Pay_when_you_hire-removebg-preview.png'


export default function For() {
  return (
    <section className="service_section layout_padding">
        <div className="container">
            <div className="heading_container heading_center padd">
                <h2 className="fld">
                For Talent
                </h2>
            </div>
        </div>
        <div className="container ">
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="box ">
                        <div className="img-box">
                        <   img src={f1img} alt=""/>
                        </div>
                        <div className="detail-box ">
                            <h4 className="fld">
                                Vetted Projects
                            </h4>
                            <p className="fld">
                                Find incredible oppotunities for your skill-sets
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="box ">
                        <div className="img-box">
                            <img src={f2img} alt=""/>
                        </div>
                        <div className="detail-box">
                            <h4 className="fld">
                                Secure-Pay Guarantee
                            </h4>
                            <p className="fld">
                                Timely payments based on mutually-agreed terms
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 ">
                    <div className="box ">
                        <div className="img-box">
                            <img src={f3img} alt=""/>
                        </div>
                        <div className="detail-box">
                            <h4 className="fld">
                                Verified Clientele
                            </h4>
                            <p className="fld">
                                Engage with a range of clients on diverse opportunities
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container padd">
                    <div className="heading_container heading_center">
                        <h2 className="fld">
                        For Clients
                        </h2>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="box ">
                        <div className="img-box">
                            <img src={f4img} alt=""/>
                        </div>
                        <div className="detail-box">
                            <h4 className="fld">
                                Top-tier Talent
                            </h4>
                            <p className="fld">
                                Elevate your projects with professionals that redefine quality
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="box ">
                        <div className="img-box">
                            <img src={f5img} alt=""/>
                        </div>
                        <div className="detail-box">
                            <h4 className="fld">
                                Personalised Matching
                            </h4>
                            <p className="fld">
                                Talent Pool that fits your any specific requirements
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="box ">
                        <div className="img-box bg-grey">
                            <img src={f6img} alt=""/>
                        </div>
                        <div className="detail-box">
                            <h4  className="fld">
                                Pay when you hire
                            </h4>
                            <p className="fld">
                                Only pay once you have shortlisted Talent you wish to work with
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
