import axios from 'axios';
import Swal from 'sweetalert2';
const API_KEY = 'patyW6p4oW3xwI4hT.25f6bc9dbe036119b4706ae8988dce3521d10fa312f10b1130c006e2f7fbf855';

export const addToMyJobs = async (data,Job_id, storedEmail) => {
  const checkDataExists = async (Job_id, storedEmail) => {
    try {
      // Perform a query to check if data exists
      const response = await axios.get(`https://api.airtable.com/v0/appa1ksThU33xb3oj/Added_jobs?view=Grid%20view`, {
        params: {
          filterByFormula: `AND(Job_id = '${Job_id}', addeduser = '${storedEmail}')`, // Adjust conditions for both fields
          maxRecords: 1 // Set maxRecords to 1 to limit the response to one record
        },
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      });
  
      // If records are returned, data exists in the table
      return response.data.records.length > 0;
    } catch (error) {
      // Handle error
      console.error('Error checking data existence in Airtable:', error);
      return false; // Return false in case of error
    }
  };
  
  // Usage
  const field1Data = Job_id; // Modify this with the data for field 1
  const field2Data = storedEmail; // Modify this with the data for field 2
  checkDataExists(field1Data, field2Data)
    .then((exists) => {
      if (exists) {
        console.log('Data exists in the table');
        Swal.fire({
          icon: 'error',
          title: 'Exists',
          text: 'Job already exists!',
        });

      } else {
        console.log('Data does not exist in the table');
        add(data);

      }
    });
  
};

export const add =async (data) => {
  const webhookURL = 'https://hook.eu2.make.com/vw4bgj9uotnaz5ov6ewlwpqlj3kdcdso'; // Replace with your Airtable webhook URL

  axios.post(webhookURL, data)
    .then(response => {
      // Handle successful response
      console.log('Data sent to Airtable:', response.data);
      // Show success sweet alert
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Job added successfully!',
      });
    })
    .catch(error => {
      // Handle error
      console.error('Error sending data to Airtable:', error);
      // Show error sweet alert
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to add Job.',
      });
    });
};

export const addcandidate = (formDataToSend) => {
  const webhookURL = 'https://hook.eu2.make.com/3ukuf63elngmofoygbwvb17r673xelwy'; // Replace with your Airtable webhook URL

  axios.post(webhookURL, formDataToSend)
    .then(response => {
      // Handle successful response
      console.log('Data sent to Airtable:', response.data);
      // Show success sweet alert
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Job added successfully!',
      });
    })
    .catch(error => {
      // Handle error
      console.error('Error sending data to Airtable:', error);
      // Show error sweet alert
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to add Job.',
      });
    });
};
