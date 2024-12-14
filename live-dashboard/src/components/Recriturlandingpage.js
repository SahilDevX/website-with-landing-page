import React from 'react'
import Bimg from './img/landing-img.png'
import B1img from './img/Top-User--Streamline-Djakarta.png'
import { Link } from 'react-router-dom'
import FaqItem from './FaqItem';
import Fotter from './Fotter';


export default function Recriturlandingpage() {
  const faqs = [
    {
      question: "1. Why should you join Talescope's Recruiter Community?",
      answer: " - We bring you a plethora of requirements across skill-sets, industries, and clients that will enhance your earning potential",
    },
    {
      question: "2. How will I get updated on my candidate's progress?",
      answer: " - We will provide you with a dashboard that will help you check real-time updates on the candidates you have shortlisted for our roles",
    },
    {
      question: "3. Will you provide any sourcing support?",
      answer: " - Currently, all of Talescope's Recruiters manage the end-to-end sourcing. You will be assigned a Community Manager who will support you with the entire process and with recruitement strategies",
    },
    {
      question: "4. How much can I earn through Talescope?",
      answer: " - You get a chance to earn 3% of the candidate's CTC for every job you close",
    },
  ];
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
              <div className="heading_container animated slideInLeft " >
                <h1 className="text-dark fp bc" >Take You Recruitment<br/> Game To The Next Level</h1>
                <h2 className='text-center fp text-blue text-sub' >Earn while you get a chance to work on a plethora of requirements across skill-sets and industries</h2>
              </div>
              <Link to="/RecApplication" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft fp hov" id="fs" data-wow-delay="0.5s">Apply Now <i className="bi bi-arrow-right" ></i></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about_section pd_lr bll">
      <div className="container-fluid pad100 bg-white ">
        <div className="row mt_100">
          <div className="col-md-6 pdright">
            <div className="detail-box cn texr">
              <div className="heading_container animated slideInLeft " >
                <h1 className="text-dark fp bc hff" >Take You Recruitment<br/> Game To The Next Level</h1>
                <h2 className='text-center fp hfd text-blue' >Earn while you get a chance to work on a plethora of requirements across skill-sets and industries</h2>
              </div>
              <Link to="/RecApplication" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft fp hov" id="fs" data-wow-delay="0.5s">Apply Now <i className="bi bi-arrow-right" ></i></Link>
            </div>
          </div>
          <div className="col-md-6 pdleft">
            <div className="img-box animated slideInRight">
            <img src={Bimg} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="service_section layout_padding  mt-20">
      <div className="container">
        <div className="heading_container heading_center">
          <h1 className="text-center my-top p40 fp bcg">WHY CHOOSE US?</h1>
        </div>
      </div>
      <div className="container py-5 hero-header bmy0 blll" >
            <div className="col-12 ">
                <h3 className="headertext text-blue fp">Working Flexibility :</h3>
                <h5  className="desctext text-blue fp">- Work on your schedule and from anywhere in the world</h5>
                <h3 className="headertext text-blue fp">Diverse Opprtunities :</h3>
                <h5  className="desctext text-blue fp">- Access to recruit for various roles and industries</h5>
                <h3 className="headertext text-blue fp">Competitive Compensation :</h3>
                <h5  className="desctext text-blue fp">- Earn Commission based on your performance and dedication</h5>
                <h3 className="headertext text-blue fp">Professional Growth :</h3>
                <h5  className="desctext text-blue fp">- Enhance your skills and network in the recruitment landscape</h5>
            </div>
    </div>
      <div className="container bll">
        <div className="row">
          <div className="col-md-12 ">
            <div className=" bg-white mt-20">
            <h3 className="headertxt hdt fp"><i class="bi bi-circle-fill pd-right mrker-size"></i>Working Flexibility : <span className='text-size ddt'>Work on your schedule and from anywhere in the world</span></h3>
            <h3 className="headertxt hdt fp"><i class="bi bi-circle-fill pd-right mrker-size" ></i>Diverse Opprtunities : <span className='text-size ddt'>Access to recruit for various roles and industries</span></h3>
            <h3 className="headertxt hdt fp"><i class="bi bi-circle-fill pd-right mrker-size" ></i>Competitive Compensation : <span className='text-size ddt'>Earn Commission based on your performance and dedication</span></h3>
            <h3 className="headertxt hdt fp"><i class="bi bi-circle-fill pd-right mrker-size" ></i>Professional Growth : <span className='text-size ddt'>Enhance your skills and network in the recruitment landscape</span></h3>  
            </div>
          </div>
          </div>
        </div>
    </section>
    <section className="about_section pd_lr bg-blu">
      <div className="container-fluid   ">
        <div className="row mt_100 pd-td">
          <div className="col-md-5 pdleft bg-blu">
            <div className="img-box animated  ld-img">
              <img src={B1img} alt=""/>
            </div>
          </div>
          <div className="col-md-7 pdright bg-blu pd-top tx-cent">
            <div className='container aln-txt'>
            <h1 className=" mb-4 animated  fp txtsize " ><span className='recspan'>We</span> are with you at every step!</h1>
            <h3 className="headerttext  fp">Transparent Pricing - <span className='text-size headertext '>Earn 3% of the candidate's CTC for every job you close</span></h3>
            <h3 className="headerttext  fp">Real-time Updates - <span className='text-size headertext'>Check the status of your candidates real-time on your dashboard</span></h3>
            <h3 className="headerttext  fp">Community Manager - <span className='text-size headertext'>Dedicated point of contact to guide you though every stage of the process</span></h3>
            </div>
            </div>
        </div>
      </div>
    </section>
    <section className="service_section layout_padding bl bg-bc">
        <div className="container ">
            <div className="row">
                <div className="col-lg-12 mylf">
                    <div className="card hoverr brd">
                        <div className="card-body dfi ">
                            <div className="col-md-6 col-lg-6 text-center img-size">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Paginate-Filter-1--Streamline-Ultimate.svg"><desc>Paginate Filter 1 Streamline Icon: https://streamlinehq.com</desc><path fill="#ff914d" d="M3.5 4.5h-2a1 1 0 0 0 -1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1 -1v-2" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M3.5 4.5h-2a1 1 0 0 0 -1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1 -1v-2" stroke-width="1"></path><path fill="#fafafa" d="M23.5 1.5a1 1 0 0 0 -1 -1h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1 -1v-18Z" stroke-width="1"></path><path fill="#fafafa" d="M3.8 20.208 23.208 0.8A1 1 0 0 0 22.5 0.5h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 0.3 0.708Z" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M23.5 1.5a1 1 0 0 0 -1 -1h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1 -1v-18Z" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M10.997 14.5h5" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M13.5 14.5V7a0.5 0.5 0 0 0 -0.812 -0.391L11 7.959" stroke-width="1"></path></svg>
                            </div>
                            <h3 className="fw-medium mb-2 pd fld  bc text-center p35 p24" >1. Choose Jobs</h3>
                            <h5 className="lh-base mb-0 fld text-center pdt20 p20" >Choose the jobs you wish to work on from hundreds of jobs</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 mylf">
                    <div className="card hoverr brd">
                        <div className="card-body dfi">
                            <div className="col-md-6 col-lg-6 text-center img-size">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Paginate-Filter-2--Streamline-Ultimate.svg"><desc>Paginate Filter 2 Streamline Icon: https://streamlinehq.com</desc><path fill="#ff914d" d="M3.5 4.5h-2a1 1 0 0 0 -1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1 -1v-2" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M3.5 4.5h-2a1 1 0 0 0 -1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1 -1v-2" stroke-width="1"></path><path fill="#fafafa" d="M23.5 1.5a1 1 0 0 0 -1 -1h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1 -1v-18Z" stroke-width="1"></path><path fill="#fafafa" d="M3.8 20.208 23.208 0.8A1 1 0 0 0 22.5 0.5h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 0.3 0.708Z" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M23.5 1.5a1 1 0 0 0 -1 -1h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1 -1v-18Z" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M16.5 14.5H11l3.5 -3.089c0.987 -0.87 1.741 -1.479 1.45 -2.911A2.5 2.5 0 0 0 11 9" stroke-width="1"></path></svg>
                            </div>
                            <h3 className=" fw-medium mb-2 pd fld  bc text-center p35 p24">2. Source Talent </h3>
                            <h5 className="lh-base mb-0 fld text-center pdt20 p20" >Identify the top talent and share their profiles on your dashboard</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 mylf">
                    <div className="card hoverr brd">
                        <div className="card-body dfi">
                            <div className="col-md-6 col-lg-6 text-center img-size">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Paginate-Filter-3--Streamline-Ultimate.svg"><desc>Paginate Filter 3 Streamline Icon: https://streamlinehq.com</desc><path fill="#ff914d" d="M3.5 4.5h-2a1 1 0 0 0 -1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1 -1v-2" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M3.5 4.5h-2a1 1 0 0 0 -1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1 -1v-2" stroke-width="1"></path><path fill="#fafafa" d="M23.5 1.5a1 1 0 0 0 -1 -1h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1 -1v-18Z" stroke-width="1"></path><path fill="#fafafa" d="M3.8 20.208 23.208 0.8A1 1 0 0 0 22.5 0.5h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 0.3 0.708Z" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M23.5 1.5a1 1 0 0 0 -1 -1h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1 -1v-18Z" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M10.5 6.5h3a2 2 0 0 1 0 4 2 2 0 0 1 0 4h-3" stroke-width="1"></path></svg>
                            </div>
                            <h3 className=" fw-medium mb-2 pd fld  bc text-center p35 p24">3. Talescope Screening</h3>
                            <h5 className="lh-base mb-0 fld text-center pdt20 p20" >We evalute the candidate's profile further for job relevance </h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 mylf">
                    <div className="card hoverr brd">
                        <div className="card-body dfi" >
                            <div className="col-md-6 col-lg-6 text-center img-size">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Paginate-Filter-4--Streamline-Ultimate.svg"><desc>Paginate Filter 4 Streamline Icon: https://streamlinehq.com</desc><path fill="#ff914d" d="M3.5 4.5h-2a1 1 0 0 0 -1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1 -1v-2" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M3.5 4.5h-2a1 1 0 0 0 -1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1 -1v-2" stroke-width="1"></path><path fill="#fafafa" d="M23.5 1.5a1 1 0 0 0 -1 -1h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1 -1v-18Z" stroke-width="1"></path><path fill="#fafafa" d="M3.8 20.208 23.208 0.8A1 1 0 0 0 22.5 0.5h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 0.3 0.708Z" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M23.5 1.5a1 1 0 0 0 -1 -1h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1 -1v-18Z" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M15.5 14.5v-8a5 5 0 0 0 -5 5v1h5" stroke-width="1"></path></svg>
                            </div>
                            <h3 className=" fw-medium mb-2 pd fld  bc text-center p35 p24">4. Client Screening </h3>
                            <h5 className="lh-base mb-0 fld text-center pdt20 p20" >We manage follow-ups, schedule interviews and deliver live client screening updates</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='detail-box cn texr p-4'>
              <Link to="/RecApplication" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated  fld hov justify-content-center" id="bc" data-wow-delay="0.5s">Apply Now</Link>
            </div>
        </div>
    </section>
   <section className="service_section layout_padding  bg-bc blc">
        <div className="container mt-6">
                <div className="row">
                    <div className="col-lg-3 mylf ">
                        <div className="card hoverr brd">
                            <div className="card-body dfi ld-img-ruby  ht-cont">
                                <div className="col-md-6 col-lg-6 text-center ">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Paginate-Filter-1--Streamline-Ultimate.svg"><desc>Paginate Filter 1 Streamline Icon: https://streamlinehq.com</desc><path fill="#ff914d" d="M3.5 4.5h-2a1 1 0 0 0 -1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1 -1v-2" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M3.5 4.5h-2a1 1 0 0 0 -1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1 -1v-2" stroke-width="1"></path><path fill="#fafafa" d="M23.5 1.5a1 1 0 0 0 -1 -1h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1 -1v-18Z" stroke-width="1"></path><path fill="#fafafa" d="M3.8 20.208 23.208 0.8A1 1 0 0 0 22.5 0.5h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 0.3 0.708Z" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M23.5 1.5a1 1 0 0 0 -1 -1h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1 -1v-18Z" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M10.997 14.5h5" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M13.5 14.5V7a0.5 0.5 0 0 0 -0.812 -0.391L11 7.959" stroke-width="1"></path></svg>
                                </div>
                                <h3 className="fw-medium mb-2 pd fld  bc text-center p35 p24" >1. Choose Jobs</h3>
                                <h5 className="lh-base mb-0 fld text-center pdt20 p20" >Choose the jobs you wish to work on from hundreds of jobs</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mylf">
                        <div className="card hoverr brd">
                            <div className="card-body dfi ld-img-ruby ht-cont">
                                <div className="col-md-6 col-lg-6 text-center ">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Paginate-Filter-2--Streamline-Ultimate.svg"><desc>Paginate Filter 2 Streamline Icon: https://streamlinehq.com</desc><path fill="#ff914d" d="M3.5 4.5h-2a1 1 0 0 0 -1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1 -1v-2" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M3.5 4.5h-2a1 1 0 0 0 -1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1 -1v-2" stroke-width="1"></path><path fill="#fafafa" d="M23.5 1.5a1 1 0 0 0 -1 -1h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1 -1v-18Z" stroke-width="1"></path><path fill="#fafafa" d="M3.8 20.208 23.208 0.8A1 1 0 0 0 22.5 0.5h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 0.3 0.708Z" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M23.5 1.5a1 1 0 0 0 -1 -1h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1 -1v-18Z" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M16.5 14.5H11l3.5 -3.089c0.987 -0.87 1.741 -1.479 1.45 -2.911A2.5 2.5 0 0 0 11 9" stroke-width="1"></path></svg>
                                </div>
                                <h3 className=" fw-medium mb-2 pd fld  bc text-center p35 p24">2. Source Talent </h3>
                                <h5 className="lh-base mb-0 fld text-center pdt20 p20" >Identify the top talent and share their profiles on your dashboard</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mylf">
                        <div className="card hoverr brd">
                            <div className="card-body dfi ld-img-ruby ht-cont">
                                <div className="col-md-6 col-lg-6 text-center ">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Paginate-Filter-3--Streamline-Ultimate.svg"><desc>Paginate Filter 3 Streamline Icon: https://streamlinehq.com</desc><path fill="#ff914d" d="M3.5 4.5h-2a1 1 0 0 0 -1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1 -1v-2" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M3.5 4.5h-2a1 1 0 0 0 -1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1 -1v-2" stroke-width="1"></path><path fill="#fafafa" d="M23.5 1.5a1 1 0 0 0 -1 -1h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1 -1v-18Z" stroke-width="1"></path><path fill="#fafafa" d="M3.8 20.208 23.208 0.8A1 1 0 0 0 22.5 0.5h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 0.3 0.708Z" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M23.5 1.5a1 1 0 0 0 -1 -1h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1 -1v-18Z" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M10.5 6.5h3a2 2 0 0 1 0 4 2 2 0 0 1 0 4h-3" stroke-width="1"></path></svg>
                                </div>
                                <h3 className=" fw-medium mb-2 pd fld  bc text-center p35 p24">3. Talescope Screening</h3>
                                <h5 className="lh-base mb-0 fld text-center pdt20 p20" >We evalute the candidate's profile further for job relevance </h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mylf">
                        <div className="card hoverr brd">
                            <div className="card-body  ld-img-ruby ht-cont">
                                <div className="col-md-6 col-lg-6 text-center ">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Paginate-Filter-4--Streamline-Ultimate.svg"><desc>Paginate Filter 4 Streamline Icon: https://streamlinehq.com</desc><path fill="#ff914d" d="M3.5 4.5h-2a1 1 0 0 0 -1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1 -1v-2" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M3.5 4.5h-2a1 1 0 0 0 -1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1 -1v-2" stroke-width="1"></path><path fill="#fafafa" d="M23.5 1.5a1 1 0 0 0 -1 -1h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1 -1v-18Z" stroke-width="1"></path><path fill="#fafafa" d="M3.8 20.208 23.208 0.8A1 1 0 0 0 22.5 0.5h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 0.3 0.708Z" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M23.5 1.5a1 1 0 0 0 -1 -1h-18a1 1 0 0 0 -1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1 -1v-18Z" stroke-width="1"></path><path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M15.5 14.5v-8a5 5 0 0 0 -5 5v1h5" stroke-width="1"></path></svg>
                                </div>
                                <h3 className=" fw-medium mb-2 pd fld  bc text-center p35 p24">4. Client Screening </h3>
                                <h5 className="lh-base mb-0 fld text-center pdt20 p20" >We manage follow-ups, schedule interviews and deliver live client screening updates</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='detail-box cn texr p-4'>
                  <Link to="/RecApplication" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated  fld hov justify-content-center" id="bc" data-wow-delay="0.5s">Apply Now</Link>
                </div>
            </div>
    </section>
    <section className="about_section pd_lr bg-blu pd-td">
      <div className="container-fluid   ">
        <div className="row ">
        <div className="container py-5 px-lg-5 bg-blu">
            <div className="wow " >
                <h2 className="text-center mb-5 fld">Frequently Asked Questions</h2>
            </div>
            <div className="row g-5 align-items-center  ">
                <div className="col-lg-12 wow " id="tx" >
                {faqs.map((faq, index) => (
                  <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
                </div>
            </div>
        </div>
        </div>
      </div>
    </section>
    <Fotter/>
    </>
  )
}

