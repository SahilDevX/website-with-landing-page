import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import profileimg from "./img/userimg.jpg";
import {  fetchJobListings } from './airtablejobsApi'; // Import the fetchJobListings function
import { addToMyJobs,checkDataExists } from './AddjobApi'; // Import the addToMyJobs function
import Swal from 'sweetalert2';
import { fetchUserByEmail } from './airtableApi';

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



const ServiceCard = ({ Categories, subtitle, Experience,  Musthave, CTC, Positions, onAddProfile, Work_Type, Engagement_Type, Company_Name, Contact_Person_Name, Email, Phone, max_exp_req, No_of_vacancies, expected_notice_period, Description, Budget_per_annum, Job_id, }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleAddProfile = () => {
    onAddProfile(Positions);
  };

  const storedEmail = localStorage.getItem('userEmail');

      
  const handleAddJob = () => {
      // Show processing message
  const processingAlert = Swal.fire({
    title: 'Adding',
    text: 'Please wait....',
    allowOutsideClick: false,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: false,
    allowEscapeKey: false,
    willOpen: () => {
      Swal.showLoading();
    }
  });
    const data = {
      Categories,
      subtitle,
      Experience,
      Musthave,
      CTC,
      Positions,
      Work_Type,
      Engagement_Type,
      Company_Name,
      Contact_Person_Name,
      Email,
      Phone,
      max_exp_req,
      Budget_per_annum,

      No_of_vacancies,
      expected_notice_period,
      Description,
      Job_id,
      storedEmail
      // Add any additional fields you need to send to Airtable
    };
    addToMyJobs(data,Job_id,storedEmail);
        // Close the processing message
  };
 
  return (
    <div className="card col-md-3-card my-left my-card">
      <div className="card-body  fld">
        <h4 className="card-title ">{Positions}</h4>
        <h6 className="card-text">{subtitle}</h6>
        <h5 className="card-text text-label mt-20">Experience: <span className="text-job">{Experience} Years</span> </h5>
        <h5 className="card-text text-label ">Category: <span className="text-job">{Categories} </span> </h5>
        <h5 className="card-text text-label">Experienced in: <span className="text-job">{Musthave}</span> </h5>
        <h5 className="card-text text-label">CTC Range: <span className="text-job">{CTC}</span> </h5>
        <div className='labels'>
          <h6 className="card-text label-border">{Work_Type}</h6>
          <h6 className="card-text label-border">{Engagement_Type}</h6>
        </div>
        <hr className='line' />
        <div className='labels'>
          <button onClick={toggleDescription} className="card-text label-border hoverrr fld my-bt bg-white">
            {showDescription ? "Hide Description" : "Job Description"}
          </button>
          <button onClick={handleAddProfile} className="card-text label-border hoverrr fld bg-orange my-bt">Add Candidate</button>
        </div>
        {showDescription && (
          <JobDescription
            Categories={Categories}
            subtitle={subtitle}
            Experience={Experience}
            Musthave={Musthave}
            CTC={CTC}
            Positions={Positions}
            Work_Type={Work_Type}
            Engagement_Type={Engagement_Type}
            Company_Name={Company_Name}
            Contact_Person_Name={Contact_Person_Name}
            Email={Email}
            Phone={Phone}
            max_exp_req={max_exp_req}
            Budget_per_annum={Budget_per_annum}
            No_of_vacancies={No_of_vacancies}
            expected_notice_period={expected_notice_period}
            Description={Description}
            Job_id={Job_id}
            setShowDescription={setShowDescription}
            onAddProfile={onAddProfile}
          />
        )}
      </div>
    </div>
  );
};



const JobDescription = ({ Categories, subtitle, Experience, Description, Musthave, CTC, setShowDescription, onAddProfile, Company_Name, Positions,  No_of_vacancies, Budget_per_annum, Engagement_Type, }) => {
  // Function to close candidate details modal
  const onClose = () => {
   setShowDescription(false); // Close the job description modal
 };

   // Function to handle adding profile
   const handleAddProfile = () => {
     onClose(); // Close the job description modal
     onAddProfile(Positions); // Pass the category when adding profile
   };


 return (
   <>

<div className="overlay" onClick={onClose}></div>
<div className="container-jd full-screen flex-column">
  <div className='row job-description width-100'>
    <div className='col-md-12 col-lg-12 pd-30'>
      <span className="close-btn" onClick={onClose}>Close <i class="bi bi-x-octagon"></i></span>
      <h4 className="title job-dec-title">{Positions}</h4>
      <h6 className="subtitle job-dec-text">{subtitle}</h6>
      <button onClick={handleAddProfile} className="card-text btnbr hoverrr fld ">Submit Candidate</button>
    </div>
    <div className='col-md-12 col-lg-12'>
      <div className='row'>
        <div className='col-md-2 text-job pd-30'>
          <h5 className="detail mt-20">Experience <br/> <span className="value text-label">{Experience}</span> </h5>
        </div>
        <div className='col-md-2 text-job pd-30'>
          <h5 className="detail mt-20">No Of Postions <br/> <span className="value text-label">{No_of_vacancies}</span> </h5>
        </div>
        <div className='col-md-2 text-job pd-30'>
          <h5 className="detail mt-20">Location <br/> <span className="value text-label">{subtitle}</span> </h5>
        </div>
        <div className='col-md-2 text-job pd-30'>
          <h5 className="detail mt-20">Client <br/> <span className="value text-label">{Company_Name}</span> </h5>
        </div>
        <div className='col-md-2 text-job pd-30'>
          <h5 className="detail mt-20">CTC Range <br/> <span className="value text-label">{Budget_per_annum}</span> </h5>
        </div>
        <div className='col-md-2 text-job pd-30'>
          <h5 className="detail mt-20">Must Have Experience In <br/> <span className="value text-label">{Musthave}</span> </h5>
        </div>
      </div>
    </div>
    <div className='col-md-12 text-job pd-30'>
      <h5 className="detail mt-20">About the job  <span className="value text-label">{Positions}</span> </h5>
    </div>
    <div className="col-md-12 text-job pd-30">
      <div className="description" style={{ whiteSpace: 'pre-line' }}>
        {Description}
      </div>
    </div>
    <div className='col-md-12 text-job pd-30'>
      <h5 className="detail mt-20">Role: <span className="value text-label">{Positions}</span> Experience: <span className="value text-label">{Experience}</span> Industry Type: <span className="value text-label">{Categories}</span> Department: <span className="value text-label">{Categories}</span> Employment Type: <span className="value text-label">{Engagement_Type}</span> Category: <span className="value text-label">{Categories}</span></h5>
    </div>
    <div className='col-md-12 text-job pd-30'>
      <h5 className="detail mt-20">Location <span className="value" text-label>{subtitle}</span></h5>
    </div>
    <div className='col-md-12 text-job text-center pd-30'>
      <button onClick={handleAddProfile} className="card-text btnbr hoverrr fld ">Submit Candidate</button>
    </div>
  </div>
</div>

     </>
 );
};

const handleSubmit = async (event) => {
  event.preventDefault();

  // Show processing message
  const processingAlert = Swal.fire({
    title: 'Processing...',
    text: 'Please wait while we submit the candidate information.',
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
    const response = await fetch("https://hook.eu2.make.com/g67qyoj3lcxh38a30dnjc9exd8balh83", {
      method: "POST", 
      enctype: "multipart/form-data",
      body: formData
    });

    // Close the processing message
    processingAlert.close();

    if (response.ok) {
      // If the request was successful, show success message
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Candidate submitted successfully!',
      });

      // Clear the form
      event.target.reset();
    } else {
      // If the request failed, show error message
      throw new Error('Failed to submit candidate');
    }
  } catch (error) {
    // If an error occurs, close the processing message and show error message
    console.error('Error submitting candidate:', error);
    processingAlert.close();
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Failed to submit candidate. Please try again later.',
    });
  }
};


const ProfileForm = ({ goBack, initialCategory }) => {



  // Function to handle going back
  const handleGoBack = () => {
    goBack();
  };

  const storedEmail = localStorage.getItem('userEmail');

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
      const value = event.target.value;
      setQuery(value);

      if (value.length < 3) {
          setSuggestions([]);
          return;
      }

      // Log the query value to ensure it's being set correctly
      console.log(`Fetching data for query: ${value}`);

      fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=in&q=${encodeURIComponent(value)}`)
          .then(response => {
             
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
             
              setSuggestions(data);
          })
          .catch(error => {
              // Log any errors
              console.error('Error fetching data:', error);
          });
  };

  const handleSuggestionClick = (suggestion) => {
      setQuery(suggestion.display_name);
      setSuggestions([]);
  };
 // Clear suggestions when input loses focus
 const handleInputBlur = () => {
  setSuggestions([]);
};
return (
  <section className="about_section layout_padding-bottom">
      <button type="button" onClick={handleGoBack}><i class="bi bi-arrow-left"></i></button>

      <div className="container w1000">
      <h2 className="text-black fld p-t">Add Candidate For {initialCategory}</h2>
          <form className="row cba" onSubmit={handleSubmit} method="post">
              <div className="col-md-6 fd">
                  <label for="Name" className="form-label secondary fp">Apply For</label>
                  <input type="text" name="applyfor" className="form-control tsp fb" id="Name" value={initialCategory} placeholder={initialCategory} required/>
              </div>
              <div className="col-md-6 fd">
                  <label for="inputEmail4" className="form-label secondary fp"> Recuriter Email id</label>
                  <input type="email" name="recemail" className="form-control tsp fb" id="inputEmail4" value={storedEmail} placeholder={storedEmail} required/>
              </div>
              <div className="col-md-6 fd">
                  <label for="Name" className="form-label secondary fp">Candidate Name </label>
                  <input type="text" name="canname" className="form-control tsp fb" id="Name" required/>
              </div>
              {/* <div className="col-md-6 fd">
                  <label for="Name" className="form-label secondary fp">Candidate Name </label>
                  <input type="text" name="canname" className="form-control tsp fb" id="Name" required/>
              </div>
              <div className="col-md-6 fd">
                  <label for="number" className="form-label secondary fp">Candidate Contact No</label>
                  <input type="number" name="Phone" className="form-control tsp fb" id="number" required/>
              </div>
              <div className="col-md-6 fd">
                  <label for="number" className="form-label secondary fp">Alternate Contact No</label>
                  <input type="number" name="altPhone" className="form-control tsp fb" id="number" required/>
              </div>
              <div className="col-md-6 fd">
                  <label for="inputEmail4" className="form-label secondary fp"> Candidate Email id</label>
                  <input type="email" name="canemail" className="form-control tsp fb" id="inputEmail4" required/>
              </div>
              <div className="col-md-6 fd">
                  <label for="number" className="form-label secondary fp">Date of Birth</label>
                  <input type="date" name="DOB" className="form-control tsp fb" id="number" required/>
              </div>
              <div className="col-md-6 fd">
                    <label for="Name" className="form-label secondary fp">Gender</label>
                    <select  className="form-control tsp fb" name="Gender" id="Name">
                        <option selected>Choose...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="col-md-6 fd">
                  <label for="TotalRecruitment" className="form-label secondary fp">Experience (Years)</label>
                  <input type="number" name="Experience" className="form-control tsp fb" id="TotalRecruitment" required/>
              </div>
               */}

              <div className="col-md-6 fd">
                  <label for="LinkedIn Profile" className="form-label secondary fp">Current CTC(LPA)</label>
                  <input type="number" name="CurrentCTC" className="form-control tsp fb" id="LinkedInProfile" required/>
              </div>
              <div className="col-md-6 fd">
                  <label for="TotalRecruitment" className="form-label secondary fp">Expected CTC(LPA)</label>
                  <input type="number" name="ExpectedCTC" className="form-control tsp fb" id="TotalRecruitment" required/>
              </div>
              
              <div className="col-md-6 fd">
                  <label for="LinkedIn Profile" className="form-label secondary fp">Current Location</label>
                  <input type="text" name="CurrentLocation" className="form-control tsp fb" id="location" value={query}
                            onChange={handleInputChange} onBlur={handleInputBlur} required />
                    <ul style={styles.suggestions} className='col-md-12'>
                            {suggestions.map((suggestion, index) => (
                                <li key={index} style={styles.suggestion} onClick={() => handleSuggestionClick(suggestion)}>
                                    {suggestion.display_name}
                                </li>
                            ))}
                        </ul>
              </div>
              <div className="col-md-6 fd">
                  <label for="TotalRecruitment" className="form-label secondary fp">Notice Period (Days)</label>
                  <input type="number" name="NoticePeriod" className="form-control tsp fb" id="TotalRecruitment" required/>
              </div>
              <div className="col-md-6 fd">
                  <label for="Resume" className="form-label secondary fp">Candidate Resume</label>
                  <input type="file" name="CandidateResume" className="form-control tsp fb" id="Resume" required/>
              </div>
              
              <div className="col-12 p-4 text-center fd pb200 ">
                  <button type="submit" className="btn wsubmit fb fld">Submit Candidate <img src="images/next (1).png" alt=""/></button>
              </div>
          </form>
      </div>
  </section>
);
};

const styles = {
  suggestions: {
      border: '1px solid #ccc',
      maxHeight: '150px',
      overflowY: 'auto',
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      position: 'absolute',
      backgroundColor: 'white',
      width: '100%',
      zIndex: 1000, // Ensure the suggestions are displayed on top
  },
  suggestion: {
      padding: '8px',
      cursor: 'pointer',
  },
};


const SearchBar = ({ jobListings, onSearch, onSelectCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [userData, setUserData] = useState(null);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const email = location.state?.email;



  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        const user = await fetchUserByEmail(email);
        if (user) {
          // console.log('User data:', user);
          setUserData(user);
        } else {
          console.log('User data not found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false); // Set loading state to false when done
      }
    };

    fetchData();
  }, []);


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
    const positions = job.Positions || '';
    const matchesSearchTerm = searchTerm === '' || categories.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSelectedCategory = selectedCategory === '' || categories.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearchTermm = searchTerm === '' || positions.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSelectedCategoryy = selectedCategory === '' || positions.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearchTerm && matchesSelectedCategory || matchesSearchTermm && matchesSelectedCategoryy;
  });
  

  const jobsCount = filteredJobs.length;

  return (
    <>
    <div className='row my-row'>
      <div className='card searchbar fld'>
        <h3>Search Jobs</h3>
        <form className="search-bar">
          <input
            className='search-input' // Added a class for input styling
            type="text"
            placeholder="Search jobs by category..."
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
        <h4 className='job-count text-center'>{jobsCount} Jobs Found</h4> 
      </div>
      <div className='card profile-right'>
        <img src={profileimg} alt="Profile" className="profile-photo" />
        <h3 className="profile-right-name fld">{isLoading ? 'Loading...' : userData?.username}</h3>
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
    fetchJobListings()
      .then(records => {
        const listings = records.map(record => ({
          Categories: typeof record.fields.Category === 'string' ? record.fields.Category : '',
          subtitle: record.fields.Work_Location|| '',
          Experience: record.fields.min_exp_Req || '',
          Musthave: record.fields.Skillset_Required|| '',
          CTC: record.fields.Budget_per_annum|| '',
          Positions: record.fields.Role_Name || '',
          Company_Name: record.fields.Company_Name|| '',
          Contact_Person_Name: record.fields.Contact_Person_Name|| '',
          Email: record.fields.Email|| '',
          Phone: record.fields.Phone|| '',
          Work_Type: record.fields.Work_Type|| '',
          Engagement_Type: record.fields.Engagement_Type|| '',
          max_exp_req: record.fields.max_exp_req|| '',
          Budget_per_annum: record.fields.Budget_per_annum || '',
          No_of_vacancies: record.fields.No_of_vacancies|| '',
          expected_notice_period: record.fields.expected_notice_period|| '',
          Job_id: record.fields.Job_id|| '',
          Description: record.fields.Description|| '',
        }));
        setJobListings(listings);
      })
      .catch(error => console.error('Error fetching job listings:', error));
  }, []);
  
  const filterServices = (term, category) => {
    const searchTermLowerCase = typeof term === 'string' ? term.toLowerCase() : '';
    setSearchTerm(searchTermLowerCase);
    setSelectedCategory(category);
  };

  const handleAddProfile = (category) => {
    setShowForm(true);
    setInitialCategory(category);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <SearchBar jobListings={jobListings} onSearch={filterServices} onSelectCategory={handleSelectCategory} />
      {showForm ? (
        <ProfileForm goBack={() => setShowForm(false)} initialCategory={initialCategory} />
      ) : (
        <div className='row my-row-card'>
          {jobListings
            .filter(job => {
              const categories = job.Categories || '';
              const positions = job.Positions || '';
              return (
                ((searchTerm === '' || categories.toLowerCase().includes(searchTerm.toLowerCase())) &&
                (searchTerm === '' || selectedCategory === '' || categories === selectedCategory)) || 
                ((searchTerm === '' || positions.toLowerCase().includes(searchTerm.toLowerCase())) &&
                (searchTerm === '' || selectedCategory === '' || positions === selectedCategory)) 
                
              );
            }) == 0 ? ( <div className="no-jobs-card">
              <h2>No Jobs Found</h2>
              <p>We couldn't find any jobs matching your search .</p>
            </div> ) : (
              jobListings
            .filter(job => {
              const categories = job.Categories || '';
              const positions = job.Positions || '';
              return (
                ((searchTerm === '' || categories.toLowerCase().includes(searchTerm.toLowerCase())) &&
                (searchTerm === '' || selectedCategory === '' || categories === selectedCategory)) || 
                ((searchTerm === '' || positions.toLowerCase().includes(searchTerm.toLowerCase())) &&
                (searchTerm === '' || selectedCategory === '' || positions === selectedCategory)) 
                
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
                Work_Type={job.Work_Type}
                Engagement_Type={job.Engagement_Type}
                Company_Name={job.Company_Name}
                Contact_Person_Name={job.Contact_Person_Name}
                Email={job.Email}
                Phone={job.Phone}
                max_exp_req={job.max_exp_req}
                Budget_per_annum={job.Budget_per_annum}
                No_of_vacancies={job.No_of_vacancies}
                expected_notice_period={job.expected_notice_period}
                Job_id={job.Job_id}
                Description={job.Description}
                onAddProfile={handleAddProfile}
              />
            )))}
        </div>
      )}
    </div>
  );
};

export default Services;
