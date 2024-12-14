import React from 'react'
import Cimg from './img/clii.jpg'

export default function forclient() {
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
                <h1 className="fld p40 p25 text-center ">Post Your Requirements.</h1>
                <h5 className="text-center jf fs22 fld">
                    We want to hear from you</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_section layout_padding-bottom">
        <div className="container w1000">
          <h2 className="text-black fld p-t">Contact Us</h2>
            <form className="row" action="https://hook.eu2.make.com/8iuno11dpm0pm21e7gxyyn1huj8fgnva" method="post">
                <div className="col-md-6 fd">
                    <label for="CompanyName" className="form-label secondary fl">Company Name</label>
                    <input type="text" name="cname" className="form-control tsp fb" id="CompanyName" required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="ContactPersonName" className="form-label secondary fl">Contact Person Name</label>
                    <input type="text" name="pname" className="form-control tsp fb" id="ContactPersonName"required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="inputEmail4" className="form-label secondary fl">Email</label>
                    <input type="email" name="email" className="form-control tsp fb" id="inputEmail4" required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="number" className="form-label secondary fl">Phone</label>
                    <input type="number" name="Phone" className="form-control tsp fb" id="number"required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="RoleName" className="form-label secondary fl">Role Name</label>
                    <input type="text" name="rname" className="form-control tsp fb" id="RoleName" required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="Worktype" className="form-label fl">Work type</label>
                    <select className="form-control tsp fb" name="Worktype" id="Worktype">
                        <option selected>Choose...</option>
                        <option value="Remote">Remote</option>
                        <option value="On-Site">On-Site</option>
                    </select>
                  </div>
                <div className="col-md-6 fd">
                    <label for="Engagementtype" className="form-label secondary fl">Engagement type</label>
                    <select className="form-control tsp fb" name="Engagementtype" id="Engagementtype">
                        <option selected>Choose...</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Freelancer">Freelancer</option>
                    </select>
                </div>
                <div className="col-md-6 fd">
                    <label for="SkillsetRequired" className="form-label secondary fl">Skillset Required</label>
                    <input type="text" className="form-control tsp fb" name="Skillset" id="SkillsetRequired"required placeholder="(Seperated By comma)"/>
                </div>
                <div className="col-md-6 fd">
                    <label for="MinimumExperience" className="form-label secondary fl">Minimum Experience</label>
                    <input type="number" className="form-control tsp fb" name="MinExp" id="MinimumExperience" required placeholder="(Years)"/>
                </div>
                <div className="col-md-6 fd">
                    <label for="MaximumExperience" className="form-label secondary fl">Maximum Experience</label>
                    <input type="number" className="form-control tsp fb" name="MaxExp" id="MaximumExperience"required placeholder="(Years)"/>
                </div>
                <div className="col-md-6 fd">
                    <label for="Budget" className="form-label secondary fl">Budget Per Annum</label>
                    <input type="number" className="form-control tsp fb" name="Budget" id="Budget" required placeholder="(LPA)"/>
                </div>
                <div className="col-md-6 fd">
                    <label for="WorkLocation" className="form-label secondary fl">Work Location</label>
                    <input type="text" className="form-control tsp fb" name="Location" id="WorkLocation"required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="Category" className="form-label secondary fl">Category</label>
                    <select className="form-control tsp fb" name="Categories" id="Category">
                        <option selected>Choose...</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Technology">Technology</option>
                        <option value="Design">Design</option>
                    </select>
                </div>
                <div className="col-md-6 fd">
                    <label for="Vacanies" className="form-label secondary fl">No of Vacanies</label>
                    <input type="number" className="form-control tsp fb" name="Vacanies" id="Vacanies"required/>
                </div>
                <div className="col-md-12 fd">
                    <label for="join" className="form-label secondary fl">How Soon You Want Employees to join</label>
                    <select className="form-control tsp fb" name="Join" id="join">
                        <option selected>Choose...</option>
                        <option value="Immediate">Immediate</option>
                        <option value="Within 1 Month">Within 1 Month</option>
                        <option value="within 2 Month">within 2 Month</option>
                        <option value="2+ Month">2+ Month</option>
                    </select>
                </div>
                <div className="col-md-12 fd">
                    <label for="textarea" className="form-label secondary fl">Description</label>
                    <input type="text" className="form-control tsp roww fb" name="Description"  id="textarea"required/>
                </div>
                <div className="col-12 p-4 text-center fd pb200 ">
                    <button type="submit" className="btn wsubmit fb fld  ">Submit  <img src="images/next (1).png" alt=""/></button>
                  </div>
            </form>
          </div>
      </section>
    </>

    )
}
