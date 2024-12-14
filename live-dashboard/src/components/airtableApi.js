// airtableApi.js
import axios from 'axios';
import bcrypt from 'bcryptjs';
import CryptoJS from 'crypto-js';
const secretKey = 'Xj94Mf@23!dF*kLq3$LpB7wQ8rYz&Ui0S%TvN!eRdPz@Bx5V'; // Strong secret key

const API_KEY = 'patyW6p4oW3xwI4hT.25f6bc9dbe036119b4706ae8988dce3521d10fa312f10b1130c006e2f7fbf855';
const BASE_ID = 'tblXSt2kdjz78wgwZ';

const baseURL = `https://api.airtable.com/v0/appa1ksThU33xb3oj/Registration_and_Login_for_Recruiters`;
const headers = {
  'Authorization': `Bearer ${API_KEY}`,
  'Content-Type': 'application/json'
};

// Function to fetch user by email
export const fetchUserByEmail = async (email) => {
  try {
    const response = await axios.get(`${baseURL}`, {
      params: {
        filterByFormula: `{Email} = '${email}'`,
        maxRecords: 1
      },
      headers: headers
    });
    // console.log('Response:', response.data); // Log response for debugging
    const user = response.data.records[0]?.fields;
    return user;
  } catch (error) {
    console.error('Error fetching user data:', error); // Log error for debugging
    throw error;
  }
};



// Function to create a new user
export const createUser = async ({ email, password, fullName }) => {
  try {
    //  // Hash the password before storing it
    //  const saltRounds = 10;
    //  const hashedPassword = await bcrypt.hash(password, saltRounds);

 // Encrypt the password
 const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    const response = await axios.post(
      `${baseURL}`,
      {
        fields: {
          email: email,
          Password: encryptedPassword,
          username: fullName, // Assuming 'Fullname' is the correct field name in Airtable
          name: fullName
        }
      },
      { headers }
    );
    console.log('Response:', response.data); // Log response for debugging
    return response.data; // Return the created user data
  } catch (error) {
    console.error('Error creating user:', error); // Log error for debugging
    throw error;
  }
};

export const checkEmailInAuth = async (email) => {
  const baseurl = `https://api.airtable.com/v0/appa1ksThU33xb3oj/Registration_and_Login_for_Recruiters`;
  const config = {
    headers: {
      Authorization: `Bearer ${API_KEY}`
    }
  };
  
  try {
    const response = await axios.get(baseurl, config);
    const records = response.data.records;

    // Check if any record in the table has a matching email
    const emailauthExists = records.some(record => record.fields.email === email);
    console.log('emailauthExists:', emailauthExists);
    return emailauthExists;
  } catch (error) {
    console.error('Error checking email in additional table:', error);
    return false; // Return false in case of error
  }
};


export const checkEmailInAdditionalTable = async (email) => {
  const url = `https://api.airtable.com/v0/appa1ksThU33xb3oj/Registration_and_Login_for_Vendor_and_Recruiters`;
  const config = {
    headers: {
      Authorization: `Bearer ${API_KEY}`
    }
  };
  
  try {
    const response = await axios.get(url, config);
    const records = response.data.records;

    // Check if any record in the table has a matching email
    const emailExists = records.some(record => record.fields.email === email);
    console.log('emailExists:', emailExists);
    
    return emailExists;
  } catch (error) {
    console.error('Error checking email in additional table:', error);
    return false; // Return false in case of error
  }
};

export default checkEmailInAdditionalTable;