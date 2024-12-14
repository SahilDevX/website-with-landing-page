import React, { useState } from 'react';
import { forgotyourpassword } from './ForgotApi'; // Import the forgotyourpassword function

export default function ForgotPass() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Store email in local storage
      localStorage.setItem('forgotPasswordEmail', email);

      // Call the forgotyourpassword function to fetch password data
      const passwordData = await forgotyourpassword();

      
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMessage('Error fetching data. Please try again.');
    }
  };

  return (
    <>
      <section className="service_section layout_padding layout_paddingg ">
        <div className="container-sm mt_100">
          <div className="row row1">
            <div className="col-md-12 clmp">
              <div className="login-container forgot_container">
                <h1 className="mt text-center fm">Forgot Password</h1>
                <form className="forgot" onSubmit={handleSubmit}>
                  <label htmlFor="email">Enter your email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input type="submit" value="Submit" />
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
