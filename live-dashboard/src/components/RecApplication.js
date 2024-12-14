import React from 'react'
import Swal from 'sweetalert2';
export default function RecApplication() {

    const handleFormSubmit = async (event) => {
        event.preventDefault();
      
        // Show processing message
        const processingAlert = Swal.fire({
          title: 'Processing...',
          text: 'Please wait while we submit the details.',
          allowOutsideClick: false,
          showCancelButton: false,
          showConfirmButton: false,
          showCloseButton: false,
          allowEscapeKey: false,
          willOpen: () => {
            Swal.showLoading();
          }
        });
      
        try {
          const formData = new FormData(event.target);
          
          // Convert FormData to an object
          const data = {};
          formData.forEach((value, key) => {
            if (data[key]) {
              // If the key already exists, convert it to an array and add the new value
              if (Array.isArray(data[key])) {
                data[key].push(value);
              } else {
                data[key] = [data[key], value];
              }
            } else {
              data[key] = value;
            }
          });
      
          // Convert data object to JSON string
          const jsonString = JSON.stringify(data);
      
          // Send the data as a JSON string
          const response = await fetch("https://hook.eu2.make.com/yweqbbsok1pkhuf3eklfl1vpkh2zwiqe", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: jsonString
          });
      
          // Close the processing message
          processingAlert.close();
      
          if (response.ok) {
            // If the request was successful, show success message
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Application submitted successfully!',
            }).then(() => {
              // Redirect to the login page
              window.location.href = "#/recriturlandingpage";  // Change this to your login page URL
            });
          } else {
            // If the request failed, show error message
            throw new Error('Failed to submit details');
          }
        } catch (error) {
          // If an error occurs, close the processing message and show error message
          console.error('Error submitting details:', error);
          processingAlert.close();
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Failed to submit details. Please try again later.',
          });
        }
      };

  return (
    <>
    <section className="about_section layout_padding-bottom layout_padding-top">
           <div className="container w1000">
           <h2 className="text-black fld p-t">Apply as a Recruiter</h2>
               <form className="row cba fp" onSubmit={handleFormSubmit} method="post">
                  <div  className="col-md-6 fd">
                    <label for="Name"  className="form-label secondary fl">Full Name</label>
                    <input type="text" name="name"  className="form-control tsp fb" id="Name" required/>
                  </div>
                  <div  className="col-md-6 fd">
                    <label for="number"  className="form-label secondary fl">Contact Number</label>
                    <input type="number" name="Phone"  className="form-control tsp fb" id="number"required/>
                  </div>
                  <div  className="col-md-6 fd">
                    <label for="inputEmail4"  className="form-label secondary fl">Email Address</label>
                    <input type="email" name="email"  className="form-control tsp fb" id="inputEmail4" required/>
                  </div>
                  <div  className="col-md-6 fd">
                    <label for="LinkedIn Profile"  className="form-label secondary fl">LinkedIn Profile (Link)</label>
                    <input type="text" name="LinkedInProfile"  className="form-control tsp fb" id="LinkedInProfile" required/>
                  </div>
                  <div  className="col-md-6 fd">
                    <label for="TotalRecruitment"  className="form-label secondary fl">Total Recruitment Experience (Years)</label>
                    <input type="number" name="TotalRecruitment"  className="form-control tsp fb" id="TotalRecruitment"required/>
                  </div>
                  {/* <div  className="col-md-6 fd">
                    <label for="Resume"  className="form-label secondary fl">Gender</label>
                    <select  className="form-control tsp fb" name="Gender" id="Bandwidth">
                        <option selected>Choose...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                  </div>
                  <div  className="col-md-6 fd">
                    <label for="Role"  className="form-label secondary fl">Last Role</label>
                    <input type="text" name="Role"  className="form-control tsp fb" id="Role" required/>
                  </div>
                  <div className="col-md-6 fd">
                    <label for="number" className="form-label secondary fl">Date of Birth</label>
                    <input type="date" name="DOB" className="form-control tsp fb" id="number" required />
                </div> */}
                  <div  className="col-md-6 fd">
                    <label for="tools"  className="form-label secondary fl">Which recruitment tools and platforms are you proficient in using?</label>
                    <input type="text" name="tools"  className="form-control tsp fb" id="tools"required/>
                  </div>
                  {/* <div  className="col-md-6 fd">
                    <label for="Bandwidth"  className="form-label secondary fl">Available Bandwidth/week?</label>
                    <select  className="form-control tsp fb" name="Bandwidth" id="Bandwidth">
                        <option selected>Choose...</option>
                        <option value="0-10 Hours/Week">0-10 Hours/Week</option>
                        <option value="10-20 Hours/Week">10-20 Hours/Week</option>
                        <option value="20-30 Hours/Week">20-30 Hours/Week</option>
                        <option value="30+ Hours/Week">30+ Hours/Week</option>
                    </select>
                  </div> */}
                  <div  className="col-md-6 fd">
                    <label for="Expertise"  className="form-label secondary fl">Industry Expertise</label>
                    <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="Expertise" value="IT/ITES" id="flexCheckDefault"/>
                        <label  className="form-check-label" for="flexCheckDefault">
                            IT/ITES
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="Expertise" value="Fin Tech" id="flexCheckChecked" />
                        <label  className="form-check-label" for="flexCheckChecked">
                            Fin Tech
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="Expertise" value="Ed Tech" id="flexCheckDefault"/>
                        <label  className="form-check-label" for="flexCheckDefault">
                            Ed Tech
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="Expertise" value="Automotive" id="flexCheckChecked" />
                        <label  className="form-check-label" for="flexCheckChecked">
                            Automotive
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="Expertise" value="Ecommerce" id="flexCheckDefault"/>
                        <label  className="form-check-label" for="flexCheckDefault">
                            Ecommerce
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="Expertise" value="AI/ML loT" id="flexCheckChecked" />
                        <label  className="form-check-label" for="flexCheckChecked">
                            AI/ML loT
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="Expertise" value="FMCG" id="flexCheckDefault"/>
                        <label  className="form-check-label" for="flexCheckDefault">
                            FMCG
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="Expertise" value="FMCD" id="flexCheckChecked" />
                        <label  className="form-check-label" for="flexCheckChecked">
                            FMCD
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="Expertise" value="Real State" id="flexCheckDefault"/>
                        <label  className="form-check-label" for="flexCheckDefault">
                            Real State
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="Expertise" value="Retail" id="flexCheckChecked" />
                        <label  className="form-check-label" for="flexCheckChecked">
                            Retail
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="Expertise" value="Logistics" id="flexCheckDefault"/>
                        <label  className="form-check-label" for="flexCheckDefault">
                            Logistics
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="Expertise" value="MedTech" id="flexCheckChecked" />
                        <label  className="form-check-label" for="flexCheckChecked">
                            MedTech
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="Expertise" value="Others" id="flexCheckDefault"/>
                        <label  className="form-check-label" for="flexCheckDefault">
                            Others
                        </label>
                      </div>
                  </div>
                  <div  className="col-md-6 fd">
                    <label for="Expertise"  className="form-label secondary fl">Skill Set Expertise</label>
                    <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="SkillSet" value="Web and Mobile App Development" id="flexCheckChecked"/>
                        <label  className="form-check-label" for="flexCheckDefault">
                            Web and Mobile App Development
                        </label>
                    </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="SkillSet" value="Analytics and Data Science" id="flexCheckChecked" />
                        <label  className="form-check-label" for="flexCheckChecked">
                            Analytics and Data Science
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="SkillSet" value="Design" id="flexCheckDefault"/>
                        <label  className="form-check-label" for="flexCheckDefault">
                            Design
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="SkillSet" value="Marketing" id="flexCheckChecked" />
                        <label  className="form-check-label" for="flexCheckChecked">
                            Marketing
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="SkillSet" value="B2B Sales" id="flexCheckDefault"/>
                        <label  className="form-check-label" for="flexCheckDefault">
                            B2B Sales

                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="SkillSet" value="B2C Sales" id="flexCheckChecked" />
                        <label  className="form-check-label" for="flexCheckChecked">
                            B2C Sales
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="SkillSet" value="Operations" id="flexCheckDefault"/>
                        <label  className="form-check-label" for="flexCheckDefault">
                            Operations
                        </label>
                      </div>
                      <div  className="form-check p4">
                        <input  className="form-check-input" type="checkbox" name="SkillSet" value="Others" id="flexCheckChecked" />
                        <label  className="form-check-label" for="flexCheckChecked">
                            Others
                        </label>
                      </div>
                  </div>
                   <div className="col-12 p-4 text-center fd pb200 ">
                       <button type="submit" className="btn wsubmit fld ">Submit <img src="images/next (1).png" alt=""/></button>
                   </div>
               </form>
           </div>
       </section>
    </>
  )
}
