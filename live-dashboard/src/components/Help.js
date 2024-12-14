import React, { useState, useEffect } from 'react';
import './HelpForm.css';
import { fetchUserByEmail } from './airtableApi';
import { useLocation } from 'react-router-dom';

const HelpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const email = location.state?.email;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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

  return (
    <section className="help-section">
      <div className="container-help">
        <h2>Help & Support</h2>
        <form className="help-form" action="https://api.web3forms.com/submit" method="POST">
          <div className="form-group">
          <input type="hidden" name="access_key" value="015e1d10-abe6-46f9-b10f-a5dc868f7b07"/>
            <label htmlFor="name">Name</label>
            <input className='text-help'
              type="text"
              name="name"
              id="name"
              value={userData?.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={userData?.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input className='text-help'
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default HelpForm;
