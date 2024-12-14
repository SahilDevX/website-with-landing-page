import React, { useState } from 'react';
import { Navigate,Link } from 'react-router-dom';
import { fetchUserByEmail } from './airtableApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import logo from './img/Logo.png'
import bcrypt from 'bcryptjs';
import CryptoJS from 'crypto-js';
import axios from 'axios';

import checkEmailInAdditionalTable from './airtableApi'
import checkEmailInAuth from './airtableApi'

const secretKey = 'Xj94Mf@23!dF*kLq3$LpB7wQ8rYz&Ui0S%TvN!eRdPz@Bx5V'; // Strong secret key


const decryptPassword = (encryptedPassword) => {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showAdditionalForm, setShowAdditionalForm] = useState(false);
  const API_KEY = 'patyW6p4oW3xwI4hT.25f6bc9dbe036119b4706ae8988dce3521d10fa312f10b1130c006e2f7fbf855';

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
          text: 'Details submitted successfully!',
        }).then(() => {
          // Redirect to the login page
          window.location.href = '/login';  // Change this to your login page URL
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

  
   // Function to handle form submission
  //  const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const processingAlert = Swal.fire({
  //     title: 'Logging...',
  //     text: 'Please wait logging in your account.',
  //     allowOutsideClick: false,
  //     showCancelButton: false,
  //     showConfirmButton: false,
  //     showCloseButton: false,
  //     allowEscapeKey: false,
  //     willOpen: () => {
  //       Swal.showLoading();
  //     }
  //   });


    
  //   try {
  //     const emailauthExists = await checkEmailInAuth(email);
  //     if (emailauthExists) {

  //      // Check if email exists in additional table
  //      const emailExists = await checkEmailInAdditionalTable(email);
  //         if (emailExists) {
  //                 // Call fetchUserByEmail function to authenticate user
  //              const user = await fetchUserByEmail(email);
  //               const storedEncryptedPassword = user.Password;
  //               const decryptedPassword = decryptPassword(storedEncryptedPassword);
  //               if (decryptedPassword === password) {
  //                 setIsLoggedIn(true);
  //                 console.log('Logged in user email:', email);
  //                 // Assuming you have stored the user's email in local storage with a key 'userEmail'
  //                 localStorage.setItem('userEmail', email);
  //                 sessionStorage.setItem('hasReloaded', 'false');
  //               } else {
  //                 Swal.close();
  //                 setError('Invalid email or password');
  //               }

  //         }else{
  //           Swal.close();
  //           setShowAdditionalForm(true);
  //           return;
  //         }
  //       }else{
  //       window.location.href = '/Signup';

  //       }

        // console.log(email);
        // window.location.href = '/Signup';
        // console.log(email);



      //  // Check if email exists in additional table
      //  const emailExists = await checkEmailInAdditionalTable(email);
      
      //  if (!emailExists) {
      //    Swal.close();
      //    setShowAdditionalForm(true);
      //    return;
      //  }
      // Call fetchUserByEmail function to authenticate user
      // const user = await fetchUserByEmail(email);
      // const storedEncryptedPassword = user.Password;

    // Decrypt the stored password
    // const decryptedPassword = decryptPassword(storedEncryptedPassword);

    // Compare the decrypted password with the entered password
    // if (decryptedPassword === password) {
    //   setIsLoggedIn(true);
    //   console.log('Logged in user email:', email);
    //   // Assuming you have stored the user's email in local storage with a key 'userEmail'
    //   localStorage.setItem('userEmail', email);
    //   sessionStorage.setItem('hasReloaded', 'false');
    // } else {
    //   Swal.close();
    //   setError('Invalid email or password');
    // }
  // } catch (error) {
  //   Swal.close();
  //   console.error('Error logging in:', error);
  //   setError('An error occurred. Please try again later.');
  // }
  // };

  // // Redirect to dashboard if user is logged in
  // if (isLoggedIn) {
  //   const processingAlert = Swal.close()

  //   return <Navigate to="/recdashboard" state={{ email: email }} />;
  // }
  const checkEmailInAuthh = async (email) => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    Swal.fire({
      title: 'Logging...',
      text: 'Please wait logging in your account.',
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
      const emailauthExists = await checkEmailInAuthh(email);

      if (!emailauthExists) {
        Swal.close(); // Close the loading spinner
        Swal.fire({
          icon: 'error',
          title: 'User does not exist.',
          text: 'Please signup.',
        }).then(() => {
          window.location.href = '#/Login';
        });
        return; // Ensure no further code execution
      }

      const emailExists = await checkEmailInAdditionalTable(email);

    
      const user = await fetchUserByEmail(email);
      const storedEncryptedPassword = user.Password;
      const decryptedPassword = decryptPassword(storedEncryptedPassword);

      if (decryptedPassword === password) {
        Swal.close();
        setIsLoggedIn(true);
        localStorage.setItem('userEmail', email);
        sessionStorage.setItem('hasReloaded', 'false');
      } else {
        Swal.close();
        setError('Invalid email or password');
      }
    } catch (error) {
      Swal.close();
      console.error('Error logging in:', error);
      setError('An error occurred. Please try again later.');
    }
  };
  
  // Redirect to dashboard if user is logged in
  if (isLoggedIn) {
    Swal.close();
    return <Navigate to="/recdashboard" state={{ email: email }} />;
  }
  

  return (
    <>
   {error && <div style={{ color: 'red' }}>{error}</div>}
   
    <section className="service_section layout_padding layout_paddingg bll  ">
      <div className="container-sm mt_100">
        <div className="row row1">
          <div className="col-md-6 clmp ">
            <div className="login-container ">
                <h1 className='mt fm'>Welcome Back!</h1>
                <h6 className='mb fm'><strong>Login to your account</strong></h6>
                <div className="grid text-center ">
                    {/* <div className="g-col-6 my-4"><img className='logo' src={logo} alt="" /></div> */}
                </div>
                <form className="text-center fp" onSubmit={handleSubmit} method="post">
                    <div className="col-12">
                      <label htmlFor="email" className='login-label'>Email</label>
                        <input type="email" name="email" className="form-control bordercolor tsp h35" id="username"  value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="col-12 passw">
                      <label htmlFor="password" className='login-label'>Password</label>
                        <input type={showPassword ? 'text' : 'password'} name="Password" className="form-control bordercolor tsp h35" id="Password"  value={password} onChange={(e) => setPassword(e.target.value)}  required /> 
                        <FontAwesomeIcon
                          className="icon"
                          id='eye'
                          icon={showPassword ? faEye : faEyeSlash}
                          onClick={togglePasswordVisibility}
                        />
                    </div>
                    
                    <p style={{ color: 'red' }}>{error}</p>
                    <Link to="/forgotpass" className="g-col-6  link-primary fld">forgot password?</Link>
                    <div className="col-12 ">
                        <button type="submit" className="btn login fld ">Login <i className="bi bi-arrow-right" ></i></button>
                    </div>
                </form>
            </div>
          </div>
          <div className="col-md-6 clmp">
          <div className="login-container-right text-center ">
                <h2 className='mtt text-white fld '>New Here? Apply Now!</h2>
                <h2 className='my-4 text-white fld' >Apply as a Recruiter</h2>
                <Link to="/RecApplication" type="button" className="btn signup my-4 fld">Apply Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="service_section layout_padding layout_paddingg blll  ">
      <div className="container-sm mt_100">
        <div className="row row1">
          <div className="col-md-6 clmp ">
            <div className="login-container ">
            <h1 className='mt fm'>Welcome Back!</h1>
                <h6 className='mb fm'><strong>Login to your account</strong></h6>
                <div className="grid text-center ">
                    {/* <div className="g-col-6 my-4"><img className='logo' src={logo} alt="" /></div> */}
                </div>
                <form className="text-center fp" onSubmit={handleSubmit} method="post">
                    <div className="col-12">
                      <label htmlFor="email" className='login-label'>Email</label>
                        <input type="email" name="email" className="form-control bordercolor tsp h35" id="username"  value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="col-12 passw">
                      <label htmlFor="password" className='login-label'>Password</label>
                        <input type={showPassword ? 'text' : 'password'} name="Password" className="form-control bordercolor tsp h35" id="Password"  value={password} onChange={(e) => setPassword(e.target.value)}  required /> 
                        <FontAwesomeIcon
                          className="icon"
                          id='eye'
                          icon={showPassword ? faEye : faEyeSlash}
                          onClick={togglePasswordVisibility}
                        />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <Link to="/forgotpass" className="g-col-6  link-primary fld">forgot password?</Link>
                    <div className="col-12 ">
                        <button type="submit" className="btn login fld ">Login <i className="bi bi-arrow-right" ></i></button>
                    </div>
                </form>
                <div className="login-container-right text-center ">
                  <h2 className='mgt text-white fld '>New Here? Apply Now!</h2>
                  <h2 className='my-4 text-white fld' >Apply as a Recruiter</h2>
                  <Link to="/RecApplication" type="button" className="btn signup my-4 fld">Apply Now</Link>
                </div>
            </div>
          </div>
          <div className="col-md-6 clmp">
          
          </div>
        </div>
      </div>
    </section>

    </>
  );
};




// // LoginPage.js
// import React from 'react';
// import GoogleLoginComponent from './GoogleLoginComponent';

// const LoginPage = () => {
//   const handleSuccess = (response) => {
//     // Handle successful Google Sign-In here
//     console.log('Login successful:', response);
//   };

//   const handleFailure = (error) => {
//     // Handle Google Sign-In failure here
//     console.error('Login failed:', error);
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <GoogleLoginComponent onSuccess={handleSuccess} onFailure={handleFailure} />
//     </div>
//   );
// };

// export default LoginPage;
