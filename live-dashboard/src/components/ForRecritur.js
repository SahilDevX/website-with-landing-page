import React from 'react'
import Cimg from './img/requu.jpg'



export default function ForRecritur() {
  return (
   <>
    <section className="about_section layout_padding-top pdt0 layout_padding-bottom ">
            <div className="container ">
            <div className="row  ">
                <div className="col-md-5 layout_padding_0 ">
                    <div className="img-box pdt90">
                    <img src={Cimg} alt=""/>
                    </div>
                </div>
                <div className="col-md-7 bgao ht290">
                <div className="detail-box cn layout_padding_a ">
                    <h1 className="fld p40 p25 text-center ">Freelancer Recruiter for <br/> Talescope</h1>
                </div>
                </div>
            </div>
            </div>
    </section>
    <div className="container py-5 hero-header bmy0" >
            <div className="col-12 ">
                <h3 className="headertext fld">We're looking for Freelance Recruiters to work with us and help us build exceptional talent networks!</h3>
                <h5  className="desctext fld">As a Freelance Recruiter with Talescope, you'll play a pivotal role in identifying top-tier candidates across various industries. Your expertise in sourcing, screening, and engaging with potential candidates will be crucial in ensuring our clients have access to the best talent.</h5>
                <h3 className="headertext fld">Requirements:</h3>
                <h5 className="desctext fld">- Minimum of 3 years in recruitment or talent acquisition.</h5>
                <h5 className="desctext fld"> - Strong communication and interpersonal skills.</h5>
                <h5 className="desctext fld">- Familiarity with Applicant Tracking Systems (ATS) is a plus.</h5>
                <h3 className="headertext fld">Why Join Us as a Freelance Recruiter?</h3>
                <h5 className="desctext fld">- Professional Growth: Enhance your skills and network in the recruitment landscape</h5>
                <h5 className="desctext fld">- Competitive Compensation: Earn commission based on your performance and dedication</h5>
                <h5 className="desctext fld">- Diverse Opportunities: Access to recruit for various roles and industries</h5>
                <h5 className="desctext fld">- Flexibility: Work on your schedule and from anywhere in the world</h5>
                <h3 className="headertext fld">Responsibilities:</h3>
                <h5 className="desctext fld">- Maintain candidate databases and ensure a seamless recruitment process</h5>
                <h5 className="desctext fld">- Screen resumes and conduct initial interviews to assess candidate fit.</h5>
                <h5 className="desctext fld">- Source candidates through various channels (e.g., LinkedIn, job boards, networking).</h5>
                <h5 className="desctext fld">- Collaborate with hiring managers to understand job requirements.</h5>
            </div>
    </div>
    <section className="about_section layout_padding-bottom">
        <div className="container w1000">
        <h2 className="text-black fld p-t">Apply as Recruiter</h2>
            <form className="row cba" action="https://hook.eu2.make.com/9tv5pisnmoiipgq5u6p2qojwb8qrimzx" method="post">
                <div className="col-md-6 fd">
                    <label for="Name" className="form-label secondary fl">Full Name</label>
                    <input type="text" name="name" className="form-control tsp fb" id="Name" required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="number" className="form-label secondary fl">Contact Number</label>
                    <input type="number" name="Phone" className="form-control tsp fb" id="number"required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="inputEmail4" className="form-label secondary fl">Email Address</label>
                    <input type="email" name="email" className="form-control tsp fb" id="inputEmail4" required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="LinkedIn Profile" className="form-label secondary fl">LinkedIn Profile</label>
                    <input type="text" name="LinkedInProfile" className="form-control tsp fb" id="LinkedInProfile" required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="TotalRecruitment" className="form-label secondary fl">Total Recruitment Experience</label>
                    <input type="number" name="TotalRecruitment" className="form-control tsp fb" id="TotalRecruitment"required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="Resume" className="form-label secondary fl">Resume</label>
                    <input type="file" name="Resume" className="form-control tsp res fb" id="Resume" required/>
                </div>
                <div className="col-md-12 fd">
                    <label for="tools" className="form-label secondary fl">Which recruitment tools and platforms are you proficient in using?</label>
                    <input type="text" name="tools" className="form-control tsp fb" id="tools"required/>
                </div>
                <div className="col-md-12 fd">
                    <label for="Bandwidth" className="form-label secondary fl">Available Bandwidth/week?</label>
                    <select className="form-control tsp fb" name="Bandwidth" id="Bandwidth">
                        <option selected>Choose...</option>
                        <option value="0-10 hours">0-10 hours</option>
                        <option value="10-20 hours">10-20 hours</option>
                        <option value="20-30 hours">20-30 hours</option>
                        <option value="30+ hours">30+ hours</option>
                    </select>
                </div>
                <div className="col-md-6 fd">
                    <label for="Expertise" className="form-label secondary fl">Industry Expertise</label>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="Expertise" value="IT/ITES" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            IT/ITES
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="Expertise" value="Fin Tech" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Fin Tech
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="Expertise" value="Ed Tech" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Ed Tech
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="Expertise" value="Automotive" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Automotive
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="Expertise" value="Ecommerce" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Ecommerce
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="Expertise" value="AI/ML loT" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            AI/ML loT
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="Expertise" value="FMCG" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            FMCG
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="Expertise" value="FMCD" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            FMCD
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="Expertise" value="Real State" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Real State
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="Expertise" value="Retail" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Retail
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="Expertise" value="Logistics" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Logistics
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="Expertise" value="MedTech" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            MedTech
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="Expertise" value="Others" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Others
                        </label>
                    </div>
                </div>
                <div className="col-md-6 fd">
                    <label for="Expertise" className="form-label secondary fl">Skill Set Expertise</label>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="SkillSet" value="Web and Mobile App Development" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Web and Mobile App Development
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="SkillSet" value="Analytics and Data Science" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Analytics and Data Science
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="SkillSet" value="Design" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Design
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="SkillSet" value="Marketing" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Marketing
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="SkillSet" value="B2B Sales" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            B2B Sales

                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="SkillSet" value="B2C Sales" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            B2C Sales
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="SkillSet" value="Operations" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                            Operations
                        </label>
                    </div>
                    <div className="form-check p4">
                        <input className="form-check-input" type="checkbox" name="SkillSet" value="Others" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Others
                        </label>
                    </div>
                </div>
                <div className="col-12 p-4 text-center fd pb200 ">
                    <button type="submit" className="btn wsubmit fb fl ">Submit  <img src="images/next (1).png" alt=""/></button>
                </div>
            </form>
        </div>
    </section>
    </>
  )
}
