import React, { useState, useEffect } from 'react';
import profileimg from "./img/userimg.jpg";
import {  fetchMyJobListings } from './airtablejobsApi'; // Import the fetchJobListings function


// Import Axios or any other HTTP client library you prefer
// import axios from 'axios';

// // Function to send data to Airtable
// const addToMyJobs = (data) => {

// // Update the endpoint URL to include the view as a query parameter
//   const airtableAPIEndpoint = "https://api.airtable.com/v0/appa1ksThU33xb3oj/Added_jobs?view=Grid%20view";

//   const API_KEY = 'patyW6p4oW3xwI4hT.e0f7785377ba9705f4419cd5906a0f8a684fb9f2ea2db363c6670b95694d293d';

//   // Make an HTTP POST request to the Airtable API endpoint with the data
//   axios.post(airtableAPIEndpoint, data, {
//     headers: {
//       Authorization: `Bearer ${API_KEY}`
//     }
//   })
  
//     .then(response => {
//       // Handle successful response, if needed
//       console.log('Data added to Airtable:', response.data);
//     })
//     .catch(error => {
//       // Handle error, if needed
//       console.error('Error adding data to Airtable:', error,data);
//     });
// };


const ServiceCard = ({ Categories, subtitle, Experience, Musthave, CTC, Positions, onAddProfile, username}) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleAddProfile = () => {
    onAddProfile(Categories);
  };

  const storedEmail = localStorage.getItem('userEmail');

      

  return (
    <div className="card col-md-3-card my-left my-card">
      <div className="card-body  fld">
        <h4 className="card-title ">{Categories}</h4>
        <h6 className="card-text">{subtitle}</h6>
        <h5 className="card-text text-label mt-20">Experience: <span className="text-job">{Experience}</span> </h5>
        <h5 className="card-text text-label">Must have experience in: <span className="text-job">{Musthave}</span> </h5>
        <h5 className="card-text text-label">CTC Range: <span className="text-job">{CTC}</span> </h5>
        <div className='labels'>
          <h6 className="card-text label-border">Remote</h6>
          <h6 className="card-text label-border">Full time</h6>
          <h6 className="card-text label-border fld">Full time</h6>
        </div>
        <hr className='line' />
        <div className='labels'>
          <button onClick={toggleDescription} className="card-text label-border hoverrr fld bg-white">
            {showDescription ? "Hide Description" : "Job Description"}
          </button>
          <button onClick={handleAddProfile} className="card-text label-border hoverrr fld bg-orange">Add to My Jobs</button>
        </div>
        {showDescription && (
          <JobDescription
            Categories={Categories}
            subtitle={subtitle}
            Experience={Experience}
            Musthave={Musthave}
            CTC={CTC}
            Positions={Positions}
            setShowDescription={setShowDescription}
            onAddProfile={onAddProfile}
          />
        )}
      </div>
    </div>
  );
};



const JobDescription = ({ Categories, subtitle, Experience, Musthave, CTC, setShowDescription, Postions, onAddProfile }) => {
   // Function to close candidate details modal
   const onClose = () => {
    setShowDescription(false); // Close the job description modal
  };

    // Function to handle adding profile
    const handleAddProfile = () => {
      onClose(); // Close the job description modal
      onAddProfile(Categories); // Pass the category when adding profile
    };


  return (
    <>

    <div className="modal-overlay " onClick={onClose}></div>
      <div className="modal-containerw full-screen fld">
        <div className='row job-dec width-100'>
          <div className='col-12 pd-30'>
            <span className="close-button" onClick={onClose}>Close</span>
            <h4 className="job-dec-title ">{Categories}</h4>
            <h6  className="job-dec-text">{subtitle}</h6>
            <button onClick={handleAddProfile} className="card-text label-border hoverrr fld ">Submit Candidate</button>
          </div>
            <div className='col-2 '>
              <h5 className="card-text text-job mt-20">Experience <br/> <span className="text-label">{Experience}</span> </h5>
            </div>
            <div className='col-2 '>
            <h5 className="card-text text-job mt-20">No Of Postions <br/> <span className="text-label">{Postions}</span> </h5>
            </div>
            <div className='col-2 '>
            <h5 className="card-text text-job mt-20">Location <br/> <span className="text-label">{subtitle}</span> </h5>
            </div>
            <div className='col-2 '>
            <h5 className="card-text text-job mt-20">Client <br/> <span className="text-label">{Experience}</span> </h5>
            </div>
            <div className='col-2 '>
            <h5 className="card-text text-job mt-20">CTC Range <br/> <span className="text-label">{Experience}</span> </h5>
            </div>
            <div className='col-2 '>
            <h5 className="card-text text-job mt-20">Must Have Experince In <br/> <span className="text-label">{Experience}</span> </h5>
            </div>
            <div className='col-12 pd-30'>
              <h5 className="card-text text-job mt-20">About the job  <span className="text-label">{Categories}</span> </h5>
            </div>
            <div className='col-12 pd-30'>
              <h5 className="card-text text-job mt-20">Please note: This is a six months Contract-to-hire role.</h5>
            </div>
            <div className='col-12 pd-30'>
              <h5 className="card-text text-job mt-20">What lands you in this role:</h5>
              <lu>
                <li>Implementation of low-latency, high-availability, and high-performance Rest API using Java</li>
                <li>Write reusable, testable, and efficient code</li>
                <li>Document technical design for new projects and enhancements to existing solutions</li>
                <li>Diagnose problems with existing application code and develop technical solutions that resolve the problems</li>
                <li>Design, develop, test, and document scalable, high-quality business applications</li>
                <li>Good understanding and experience in Microservice architecture, Java, Spring boot, Rest API, RDBMS, and Kafka</li>

              </lu>
            </div>
            <div className='col-12 pd-30'>
              <h5 className="card-text text-job mt-20">Responsibilities:</h5>
              <lu>
                <li>Maintain effective relationships and rapport with your team and cross functional team members.</li>
                <li>Collaborate with other cross-platform team members to build effective integrations.</li>
                <li>Ability to visualize End to End flows.</li>
                <li>  Makes personal initiative, conscientiousness, and complete follow-through on areas of responsibility.</li>
                <li>Should have good learning ability.</li>
                <li>Participate in design sessions and code reviews.</li>
                <li>Improve code coverage and code quality metrics.</li>
                <li>Leading a midsized team</li>
                <li>Write reusable, testable, and efficient code</li>
                <li>Document technical design for new projects and enhancements to existing solutions</li>
                <li>Diagnose problems with existing application code and develop technical solutions that resolve the problems</li>
                <li>Design, develop, test, and document scalable, high-quality business applications</li>
                <li>Good understanding and experience in Microservice architecture, Java, Spring boot, Rest API, RDBMS, and Kafka</li>
              </lu>
            </div>
            <div className='col-12 pd-30'>
              <h5 className="card-text text-job mt-20">Role: <span className="text-label">{Categories}</span><span className="text-label">{Experience}</span> Industry Type: <span className="text-label">{Experience}</span>  Department:<span className="text-label">{Experience}</span>         Employment Type:<span className="text-label">{Experience}</span> Category: <span className="text-label">{Experience}</span></h5>
            </div>
            <div className='col-12 pd-30'>
            <h5 className="card-text text-job mt-20">Location  <span className="text-label">{subtitle}</span> </h5>
            </div>
            <div className='col-12 text-center pd-30'>
            <button onClick={handleAddProfile} className="card-text label-border hoverrr fld ">Submit Candidate </button>
            </div>
        </div>
      </div>
      </>
  );
};

const ProfileForm = ({ goBack, initialCategory }) => {
  const [category, setCategory] = useState(initialCategory); // Set initial category
  
  // Function to handle going back
  const handleGoBack = () => {
    goBack();
  };
  
  return (
    <section className="about_section layout_padding-bottom">
        <button type="button" onClick={handleGoBack}><i class="bi bi-arrow-left"></i></button>

        <div className="container w1000">
        <h2 className="text-black fld p-t">Add Candidate For {initialCategory}</h2>
            <form className="row cba" action="https://hook.eu2.make.com/9tv5pisnmoiipgq5u6p2qojwb8qrimzx" method="post">
                <div className="col-md-6 fd">
                    <label for="Name" className="form-label secondary fl">Candidate Name </label>
                    <input type="text" name="name" className="form-control tsp fb" id="Name" required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="number" className="form-label secondary fl">Candidate Contact No</label>
                    <input type="number" name="Phone" className="form-control tsp fb" id="number" required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="inputEmail4" className="form-label secondary fl"> Candidate Email id</label>
                    <input type="email" name="email" className="form-control tsp fb" id="inputEmail4" required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="Name" className="form-label secondary fl">Apply For</label>
                    <input type="text" name="name" className="form-control tsp fb" id="Name" value={initialCategory} placeholder={initialCategory} required/>
                </div>

                <div className="col-md-6 fd">
                    <label for="LinkedIn Profile" className="form-label secondary fl">Current CTC</label>
                    <input type="text" name="LinkedInProfile" className="form-control tsp fb" id="LinkedInProfile" required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="TotalRecruitment" className="form-label secondary fl">Expected CTC</label>
                    <input type="number" name="TotalRecruitment" className="form-control tsp fb" id="TotalRecruitment" required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="LinkedIn Profile" className="form-label secondary fl">Current Location</label>
                    <input type="text" name="LinkedInProfile" className="form-control tsp fb" id="LinkedInProfile" required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="TotalRecruitment" className="form-label secondary fl">Notice Period</label>
                    <input type="number" name="TotalRecruitment" className="form-control tsp fb" id="TotalRecruitment" required/>
                </div>
                <div className="col-md-6 fd">
                    <label for="Resume" className="form-label secondary fl">Candidate Resume</label>
                    <input type="file" name="Resume" className="form-control tsp res fb" id="Resume" required/>
                </div>
                <div className="col-12 p-4 text-center fd pb200 ">
                    <button type="submit" className="btn wsubmit fb ">Submit Candidate <img src="images/next (1).png" alt=""/></button>
                </div>
                <div className="col-md-6 fd">
                    <label for="inputEmail4" className="form-label secondary fl"> Recuriter Email id</label>
                    <input type="email" name="email" className="form-control tsp fb" id="inputEmail4" value={initialCategory} placeholder={initialCategory} required/>
                </div>
            </form>
        </div>
    </section>
  );
};

const SearchBar = ({ jobListings, onSearch, onSelectCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value, selectedCategory);
  };

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    onSearch(event.target.value, selectedValue);
    onSelectCategory(selectedValue); // Add this line to handle category selection
  };

  const filteredJobs = jobListings.filter(job => {
    const categories = job.Categories || ''; // Ensure categories is a string
    const matchesSearchTerm = searchTerm === '' || categories.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSelectedCategory = selectedCategory === '' || categories.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearchTerm && matchesSelectedCategory;
  });
  

  const jobsCount = filteredJobs.length;

  return (
    <>
    <div className='row my-row'>
      <div className='card searchbar'>
        <h3>Search Jobs</h3>
        <form className="search-bar">
          <input className='search-bar'
            type="text"
            placeholder="Search jobs by category..."
            value={searchTerm}
            onChange={handleChange}
            />
        </form>
        <h4 className='card border-color text-center'>{jobsCount} Jobs Found</h4>
        
      </div>
      <div className='card profile-right'>
        <img src={profileimg} alt="Profile" className="profile-photo" />
        <h3 className="profile-right-name">John Doe</h3>
      </div>
      <select className='filter-candi filter-job' id="category-filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="Technology">Technology</option>
          <option value="IT">IT</option>
          <option value="Management">Management</option>
          <option value="Design">Design</option>
        </select>
    </div>
    </>
  );
};

const Services = () => {
  const [jobListings, setJobListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [initialCategory, setInitialCategory] = useState('');

  useEffect(() => {
    fetchMyJobListings()
      .then(records => {
        const listings = records.map(record => ({
          Categories: typeof record.fields.Categories === 'string' ? record.fields.Categories : '',
          subtitle: record.fields.subtitle || '',
          Experience: record.fields.Experience || '',
          Musthave: record.fields.Musthave || '',
          CTC: record.fields.CTC || '',
          Positions: record.Positions || '',
        }));
        setJobListings(listings);
      })
      .catch(error => console.error('Error fetching job listings:', error));
  }, []);

  const filterServices = (term, category) => {
    const searchTermLowerCase = typeof term === 'string' ? term.toLowerCase() : '';
    setSearchTerm(searchTermLowerCase);
  
    const selectedCategoryLowerCase = typeof category === 'string' ? category.toLowerCase() : '';
    setSelectedCategory(selectedCategoryLowerCase);
  };
  
  
  const handleAddProfile = (category) => {
    setShowForm(true);
    setInitialCategory(category);
  };

  return (
    <div>
      <SearchBar jobListings={jobListings} onSearch={filterServices} />
      {showForm ? (
        <ProfileForm goBack={() => setShowForm(false)} initialCategory={initialCategory} />
      ) : (
        <div className='row my-row'>
          {jobListings
            .filter(job => {
              const categories = job.Categories || '';
              return (
                (searchTerm === '' || categories.toLowerCase().includes(searchTerm.toLowerCase())) &&
                (searchTerm === '' || selectedCategory === '' || categories === selectedCategory)
              );
            })
            .map((job, index) => (
              <ServiceCard
                key={index}
                Categories={job.Categories}
                subtitle={job.subtitle}
                Experience={job.Experience}
                Musthave={job.Musthave}
                CTC={job.CTC}
                Positions={job.Positions}
                onAddProfile={handleAddProfile}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Services;
