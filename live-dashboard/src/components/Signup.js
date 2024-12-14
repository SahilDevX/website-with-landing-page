import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from './airtableApi'; // Import the createUser function
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { fetchUserByEmail } from './airtableApi';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import logo from './img/Logo.png'


export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(true);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [formData, setFormData] = useState({
    Fullname: '',
    email: '',
    Password: ''
  });
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    // If password is valid, submit the form
    if (validPassword) {
      console.log('Form submitted successfully!');
      // Add your form submission logic here
    } else {
      console.log('Password is not valid. Form not submitted.');
    }

      // Show processing message
  const processingAlert = Swal.fire({
    title: 'Registering...',
    text: 'Please wait while we register your account.',
    allowOutsideClick: false,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: false,
    allowEscapeKey: false,
    willOpen: () => {
      Swal.showLoading();
    }
  });

    event.preventDefault();
    
  try {
    // Check if the email already exists in the Airtable
    const existingUser = await fetchUserByEmail(formData.email);

    // If user already exists, display error message
    if (existingUser) {
      Swal.fire({
        icon: 'error',
        title: 'Email already exists',
        text: 'This email is already registered. Please use a different email address.',
      });
      return;
    }

    // If email doesn't exist, proceed with user creation
    await createUser({
      email: formData.email,
      password: formData.Password,
      fullName: formData.Fullname
    });

    // Display success message
    Swal.fire({
      icon: 'success',
      title: 'Registration successful!',
      text: 'You have successfully registered.',
    }).then(() => {
      // Redirect to the login page
      window.location.href = '#/login';  // Change this to your login page URL
    });

    // Clear form data after successful submission
    setFormData({
      Fullname: '',
      email: '',
      Password: ''
    });

  } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  const handleChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Regular expression to check if password contains at least one uppercase letter, one special character, and one digit
    const passwordRegex = /^(?=.*[A-Z])(?=.*[\x20-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])(?=.*[0-9]).{8,}$/;


    // Update validPassword state based on whether the password meets the criteria
    setValidPassword(passwordRegex.test(newPassword));

    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



  return (
    <>

    <>
         <section className="service_section layout_padding layout_paddingg bll ">
         <div className="container-sm mt_100">
           <div className="row row1">
               <div className="col-md-6 clmp">
                   <div className="login-container-right text-center ">
                       <h2 className='mtt text-white fld'>Already Have an Account?</h2>
                       <h2 className='my-4 text-white fld' >Login and discover the oppurtunities</h2>
                       <Link to="/login" type="button" className="btn signup my-4 fld">Login</Link>
                   </div>
               </div>
             <div className="col-md-6 clmp ">
               <div className="login-container ">
                   <h1 className='mt text-center fm'>Create Account</h1>
                   {/* <div className="grid text-center ">
                      <div className="g-col-6 my-4"><img className='logo' src={logo} alt="" /></div>
                   </div> */}
                   <form className="text-center fp " onSubmit={handleSubmit} method="post">
                       <div className="col-12">
                            <label htmlFor="email" className='login-label'>Full Name</label>
                           <input type="text" name="Fullname" className="form-control bordercolor tsp h35" id="fullname" required onChange={handleChange} value={formData.Fullname} />
                       </div>
                       <div className="col-12">
                            <label htmlFor="email" className='login-label'>Email</label>
                           <input type="email" name="email" className="form-control bordercolor tsp h35" id="username" required onChange={handleChange} value={formData.email} />
                       </div>
                       <div className="col-12 passw">
                           <label htmlFor="email" className='login-label'>Password</label>
                           <input type={showPassword ? 'text' : 'password'}  name="Password" className="form-control bordercolor tsp h35" id="Password" required onChange={handleChange} value={formData.Password} />
                           <FontAwesomeIcon
                             className="icon"
                             id='eye'
                             icon={showPassword ? faEye : faEyeSlash}
                             onClick={togglePasswordVisibility}
                           />
                       </div>
                       <div className='container p4'>
                         {!validPassword && (
                           <p>Password must contain at least one uppercase letter, one special character, and one digit.</p>
                         )}
                       </div>
                       <div className="col-12 ">
                           <button type="submit" className="btn login fld "disabled={!validPassword}>Sign Up <i className="bi bi-arrow-right" ></i></button>
                       </div>
                   </form>
                   <div className="container mt-20">
                      <h6 className='text-center fld'>Already have an account?  <Link to="/login" className='login-link'>Login here</Link></h6>
                   </div>
               </div>
             </div>
           </div>
         </div>
       </section>
       <section className="service_section layout_padding layout_paddingg blll ">
       <div className="container-sm mt_100">
         <div className="row row1">
           <div className="col-md-6 clmp ">
             <div className="login-container lgc ">
                 <h1 className=' text-center fm'>Create Account</h1>
                 <form className="text-center fp" onSubmit={handleSubmit} method="post">
                 <div className="col-12">
                            <label htmlFor="email" className='login-label'>Full Name</label>
                           <input type="text" name="Fullname" className="form-control bordercolor tsp h35" id="fullname" required onChange={handleChange} value={formData.Fullname} />
                       </div>
                       <div className="col-12">
                            <label htmlFor="email" className='login-label'>Email</label>
                           <input type="email" name="email" className="form-control bordercolor tsp h35" id="username" required onChange={handleChange} value={formData.email} />
                       </div>
                       <div className="col-12 passw">
                           <label htmlFor="email" className='login-label'>Password</label>
                           <input type={showPassword ? 'text' : 'password'}  name="Password" className="form-control bordercolor tsp h35" id="Password" required onChange={handleChange} value={formData.Password} />
                           <FontAwesomeIcon
                             className="icon"
                             id='eye'
                             icon={showPassword ? faEye : faEyeSlash}
                             onClick={togglePasswordVisibility}
                           />
                       </div>
                     <div className='container p4'>
                       {!validPassword && (
                         <p>Password must contain at least one uppercase letter, one special character, and one digit.</p>
                       )}
                     </div>
                     <div className="col-12 ">
                       <button type="submit" className="btn login fld "disabled={!validPassword}>Sign Up <i className="bi bi-arrow-right" ></i></button>
                     </div>
                 </form>
                 <div className="login-container-right text-center ">
                     <h2 className='mgt text-white fld'>Already Have an Account?</h2>
                     <h2 className='my-4 text-white fld' >Login and discover the oppurtunities</h2>
                     <Link to="/login" type="button" className="btn signup my-4 fm">Login</Link>
                 </div>
             </div>
           </div>
         </div>
       </div>
     </section>
     </>

     

    {/* <section className="service_section layout_padding layout_paddingg bll ">
      <div className="container-sm mt_100">
        <div className="row row1">
            <div className="col-md-6 clmp">
                <div className="login-container-right text-center ">
                    <h2 className='mtt text-white fm'>Already Have an Account?</h2>
                    <h2 className='my-4 text-white fm' >Login and discover the oppurtunities</h2>
                    <Link to="/login" type="button" className="btn signup my-4 fm">Login</Link>
                </div>
            </div>
          <div className="col-md-6 clmp ">
            <div className="login-container ">
                <h1 className='mt text-center fm'>Create Account</h1>
                <div className="grid text-center ">
                    <div className="g-col-6 my-4"> <GoogleLogin
                    onSuccess={credentialResponse => {
                      const credentialresponsedecoded = jwtDecode(credentialResponse.credential)
                      console.log(credentialresponsedecoded);
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  /></div>
                    <div className="g-col-6 my-4"><i className="bi bi-google p-4"></i><i className="bi bi-facebook"></i></div>
                    <h4 className="g-col-6 fm">or register here</h4>
                </div>
                <form className="text-center " onSubmit={handleSubmit} method="post">
                    <div className="col-12">
                        <input type="text" name="Fullname" className="form-control bordercolor tsp h35" id="fullname" placeholder="Full Name"required onChange={handleChange} value={formData.Fullname} />
                    </div>
                    <div className="col-12">
                        <input type="email" name="email" className="form-control bordercolor tsp h35" id="username" placeholder="Email"required onChange={handleChange} value={formData.email} />
                    </div>
                    <div className="col-12 passw">
                        <input type={showPassword ? 'text' : 'password'}  name="Password" className="form-control bordercolor tsp h35" id="Password" placeholder="Password"required onChange={handleChange} value={formData.Password} />
                        <FontAwesomeIcon
                          className="icon"
                          id='eye'
                          icon={showPassword ? faEye : faEyeSlash}
                          onClick={togglePasswordVisibility}
                        />
                    </div>
                    <div className='container p4'>
                      {!validPassword && (
                        <p>Password must contain at least one uppercase letter, one special character, and one digit.</p>
                      )}
                    </div>
                    <div className="col-12 ">
                        <button type="submit" className="btn login fm "disabled={!validPassword}>Sign Up <i className="bi bi-arrow-right" ></i></button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="service_section layout_padding layout_paddingg blll ">
      <div className="container-sm mt_100">
        <div className="row row1">
          <div className="col-md-6 clmp ">
            <div className="login-container lgc ">
                <h1 className=' text-center fm'>Create Account</h1>
                <div className="grid text-center ">
                    <div className="g-col-6 my-4"><i className="bi bi-google p-4"></i><i className="bi bi-facebook"></i></div>
                    <h4 className="g-col-6 fm">or register here</h4>
                </div>
                <form className="text-center " onSubmit={handleSubmit} method="post">
                    <div className="col-12">
                        <input type="text" name="Fullname" className="form-control bordercolor tsp h35" id="fullname" placeholder="Full Name"required onChange={handleChange} value={formData.Fullname} />
                    </div>
                    <div className="col-12">
                        <input type="email" name="email" className="form-control bordercolor tsp h35" id="username" placeholder="Email"required onChange={handleChange} value={formData.email} />
                    </div>
                    <div className="col-12 passw">
                        <input type={showPassword ? 'text' : 'password'}  name="Password" className="form-control bordercolor tsp h35" id="Password" placeholder="Password"required onChange={handleChange} value={formData.Password} />
                        <FontAwesomeIcon
                          className="icon"
                          id='eye'
                          icon={showPassword ? faEye : faEyeSlash}
                          onClick={togglePasswordVisibility}
                        />
                    </div>
                    <div className='container p4'>
                      {!validPassword && (
                        <p>Password must contain at least one uppercase letter, one special character, and one digit.</p>
                      )}
                    </div>
                    <div className="col-12 ">
                      <button type="submit" className="btn login fm "disabled={!validPassword}>Sign Up <i className="bi bi-arrow-right" ></i></button>
                    </div>
                </form>
                <div className="login-container-right text-center ">
                    <h2 className='mgt text-white fm'>Already Have an Account?</h2>
                    <h2 className='my-4 text-white fm' >Login and discover the oppurtunities</h2>
                    <Link to="/login" type="button" className="btn signup my-4 fm">Login</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    </>
  )
}
