// airtablejobsApi.js

import axios from 'axios';
import Swal from 'sweetalert2';

const API_KEY = 'patyW6p4oW3xwI4hT.25f6bc9dbe036119b4706ae8988dce3521d10fa312f10b1130c006e2f7fbf855';
const BASE_ID = 'appa1ksThU33xb3oj';
const TABLE_NAME = 'api';


const AIRTABLE_ENDPOINT = "https://api.airtable.com/v0/appa1ksThU33xb3oj/Job_Listing?view=Grid%20view" ;


// Function to fetch job listings
export const fetchJobListings = async () => {
  try {
    // Show loading indicator
    const loadingAlert = Swal.fire({
      title: 'Fetching job listings',
      text: 'Please wait...',
      allowOutsideClick: false,
      showCancelButton: false,
      showConfirmButton: false,
      showCloseButton: false,
      allowEscapeKey: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });

    // Define the filter formula to only fetch records where the 'Status' column is 'Active'
    const filterFormula = `AND({Status} = 'Active')`;

    const response = await axios.get(AIRTABLE_ENDPOINT, {
      params: {
        filterByFormula: filterFormula
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    // Close loading indicator
    loadingAlert.close();

    const jobListings = response.data.records;
    
    // Show message if no jobs are found
    if (jobListings.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'No jobs found',
        text: 'There are currently no active job listings available.',
      });
    }

    return jobListings; // Return the fetched records
  } catch (error) {
    // Close loading indicator in case of error
    Swal.close();
    console.error('Error fetching job listings from Airtable:', error);
    return []; // Return empty array in case of error
  }
};




const storedEmail = localStorage.getItem('userEmail');
export const fetchMyJobListings = async () => {
   // Define the filter formula to only fetch records where the 'email' column matches the specified email
   const filterFormula = `AND(SEARCH("${storedEmail}", {addeduser}) > 0, OR({Status_from_status} = 'Active', {Status_from_status} = BLANK()))`;

   // Replace 'email_column_name' with the actual column name in Airtable\
    console.log(storedEmail)
  try {
        // Show loading indicator
        const loadingAlert = Swal.fire({
          title: 'Fetching job listings',
          text: 'Please wait...',
          allowOutsideClick: false,
          showCancelButton: false,
          showConfirmButton: false,
          showCloseButton: false,
          allowEscapeKey: false,
          willOpen: () => {
            Swal.showLoading();
          }
        });
    const response = await axios.get("https://api.airtable.com/v0/appa1ksThU33xb3oj/Added_jobs", {
      params: {
        filterByFormula: filterFormula
      },  
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

        // Close loading indicator
        loadingAlert.close();
      const myjobs= response.data.records;
        // Show message if no jobs are found
    if (myjobs.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'No jobs found',
        text: 'Please add jobs.',
      });
    }

    return response.data.records; // Return the fetched records
  } catch (error) {
    console.error('Error fetching job listings from Airtable:', error);
    return []; // Return empty array in case of error
  }
};


export const fetchMyCandidatesList = async () => {
  const filterFormula = `SEARCH("${storedEmail}", {recEmail}) > 0`;
  try {
    // Show loading indicator
    const loadingAlert = Swal.fire({
      title: 'Fetching Candidates listings',
      text: 'Please wait...',
      allowOutsideClick: false,
      showCancelButton: false,
      showConfirmButton: false,
      showCloseButton: false,
      allowEscapeKey: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });
    const response = await axios.get("https://api.airtable.com/v0/appa1ksThU33xb3oj/Candidate_Profile", {
      params: {
        filterByFormula: filterFormula
      }, 
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    loadingAlert.close();

    // Map the fetched records to the expected format
    const formattedCandidates = response.data.records.map((record, index) => ({
      id: index + 1, // Assign the index + 1 as the id
      name: record.fields.Name, // Adjust this based on your data structure
      location: record.fields.Location, // Adjust this based on your data structure
      job: record.fields.category, // Adjust this based on your data structure
      experience: record.fields.Experience, // Adjust this based on your data structure
      remark: record.fields.Remarks, // Adjust this based on your data structure
      expectedCTC: record.fields.expectedCTC, // Adjust this based on your data structure
      status: record.fields.status,

      Email: record.fields.Email, // Adjust this based on your data structure
      Mobile_Number: record.fields.Mobile_Number, // Adjust this based on your data structure
      date_of_birth: record.fields.date_of_birth, // Adjust this based on your data structure
      gender: record.fields.gender, // Adjust this based on your data structure
      alternate_mobile_number: record.fields.alternate_mobile_number, // Adjust this based on your data structure
      created_at: record.fields.created_at, // Adjust this based on your data structure
      updated_at: record.fields.updated_at, // Adjust this based on your data structure

      recEmail: record.fields.recEmail, // Adjust this based on your data structure
      currentCTC: record.fields.currentCTC, // Adjust this based on your data structure
      noticePeriod: record.fields.noticePeriod, // Adjust this based on your data structure
      Experience: record.fields.Experience, // Adjust this based on your data structure
      Remarks: record.fields.Remarks, // Adjust this based on your data structure
    }));
    if (formattedCandidates.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'No Candidates found',
        text: 'There are currently no Candidates linked to your profile.',
      });
    }
    return formattedCandidates;
  } catch (error) {
    console.error('Error fetching candidate list:', error);
    return []; // Return empty array in case of error
  }
};
