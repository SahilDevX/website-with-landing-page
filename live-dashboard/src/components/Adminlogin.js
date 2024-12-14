// AdminLogin.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import logo from './img/Logo.png';

const AdminLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace this with your actual login logic
    if (email === 'admin@example.com' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      setError('Invalid email or password');
    }
  };

  // Redirect to admin dashboard if user is logged in
  if (isLoggedIn) {
    return <Navigate to="/admin/dashboard" />;
  }

  return (
    <>
      <section className='ftco-section layout_padding layout_paddingg bc'>
        <div className='containe mt_100'>
          <div className="heading_container heading_center padd">
            <img src={logo} className='justifi-content-center adminimg' alt="" />
          </div>
          <h1>Admin Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" id="email" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" id="password" name="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            <p style={{ color: 'red' }}>{error}</p>
            <input type="submit" value="Get started" />
          </form>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
