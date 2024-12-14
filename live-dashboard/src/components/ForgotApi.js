
// airtablejobsApi.js

import axios from 'axios';
import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs';
import CryptoJS from 'crypto-js';

const secretKey = 'Xj94Mf@23!dF*kLq3$LpB7wQ8rYz&Ui0S%TvN!eRdPz@Bx5V'; // Strong secret key

const API_KEY = 'patyW6p4oW3xwI4hT.25f6bc9dbe036119b4706ae8988dce3521d10fa312f10b1130c006e2f7fbf855';
const BASE_ID = 'appa1ksThU33xb3oj';
const TABLE_NAME = 'api';

const decryptPassword = (encryptedPassword) => {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const forgotyourpassword = async () => {
  const processingAlert = Swal.fire({
    title: 'Sending email',
    text: 'Please wait... ',
    allowOutsideClick: false,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: false,
    allowEscapeKey: false,
    willOpen: () => {
      Swal.showLoading();
    }
  });
  const storedEmail = localStorage.getItem('forgotPasswordEmail');

  // Define the filter formula to only fetch records where the 'addeduser' column matches the stored email
  const filterFormula = `SEARCH("${storedEmail}", {email}) > 0`;

  try {
    const response = await axios.get("https://api.airtable.com/v0/appa1ksThU33xb3oj/Registration_and_Login_for_Recruiters", {
      params: {
        filterByFormula: filterFormula
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

     // Check if the response data length is zero
     if (response.data.records.length === 0) {
      // Show sweet alert if email does not exist
      Swal.fire({
        icon: 'error',
        title: 'Email not found',
        text: 'This email is not registered. Please use a different email address or sign up.',
      });
      return;
    }
 
    
     // Extract email and password column data from each record
     const username = response.data.records.map(record => record.fields.username);
     const emailColumnData = response.data.records.map(record => record.fields.email);
     const passwordColumnData = response.data.records.map(record => record.fields.Password);
   // Decrypt all passwords
   const decryptedPasswords = passwordColumnData.map(encryptedPassword => decryptPassword(encryptedPassword));
     
     console.log("emailColumnData", emailColumnData);
     console.log("passwordColumnData", decryptedPasswords);

 // Send the data to the webhook along with the stored email
 // Send the data to the webhook
 await axios.post(`https://hook.eu2.make.com/i1qbfe850fqzndv5n76hn7vgsz0wgtsq`, { username, emailColumnData, decryptedPasswords});

 Swal.fire({
  icon: 'success',
  title: 'Mail sent to your email id!',
  text: 'Mail sent successfully.',
}).then(() => {
  // Redirect to the login page
  window.location.href = '#/login';  // Change this to your login page URL
});
  } 
  catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Check email..',
      text: 'Check if your email is correct.',
    });
    console.error('Error fetching job listings from Airtable:', error);
    return []; // Return empty array in case of error
  }
};



