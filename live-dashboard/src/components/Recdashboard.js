// Sidebar.js

import React, { useState, useEffect } from 'react';
import profileimg from "./img/userimg.jpg";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Jobopenings from './Jobopenings';
import Myjobs from './Myjobs';
import Candidates from './Candidates';
import Swal from 'sweetalert2';
import { fetchUserByEmail } from './airtableApi';
import dashicon from './img/app_1.png';
import logout from "./img/log-out.png";
import candidate from "./img/candidate.png";
import blankpage from './img/blank-page.png';
import help from './img/help.png';
import Help from './Help';

const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
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
  }, [email]);

  useEffect(() => {
    setActiveMenuItem('Openings');
    const hasReloaded = sessionStorage.getItem('hasReloaded');
    if (hasReloaded === 'false') {
      sessionStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    const processingAlert = Swal.fire({
      title: 'Logging Out',
      text: 'Please wait Logging Out...',
      allowOutsideClick: false,
      showCancelButton: false,
      showConfirmButton: false,
      showCloseButton: false,
      allowEscapeKey: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });
    setTimeout(() => {
      localStorage.removeItem('userEmail');
      processingAlert.close();
      navigate('/login');
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
        <button className="navbar-toggler bg-orange p-1 " onClick={toggleSidebar}>
          {isSidebarOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg> : <i className="bi bi-chevron-right"></i>}
        </button>
        <div className={`profile ${isSidebarOpen ? '' : 'collapsed'}`}>
          <img src={profileimg} alt="Profile" className="profile-photo" />
          {isSidebarOpen && <h3 className="profile-name fld">{isLoading ? 'Loading...' : userData?.username}</h3>}
        </div>
        <ul className="sidebar-menu fld">
          <li className={`${activeMenuItem === 'Openings' ? 'active' : ''} ${!isSidebarOpen ? 'collapsed' : ''}`}>
            <button onClick={() => setActiveMenuItem('Openings')} className={activeMenuItem === 'Openings' ? 'active-button' : ''}>
              <img src={dashicon} alt="" id='dashicon' className={!isSidebarOpen ? 'collapsed' : ''} />
              {isSidebarOpen && 'Job Openings'}
            </button>
          </li>
          {/* <li className={`${activeMenuItem === 'Jobs' ? 'active' : ''} ${!isSidebarOpen ? 'collapsed' : ''}`}>
            <button onClick={() => setActiveMenuItem('Jobs')} className={activeMenuItem === 'Jobs' ? 'active-button' : ''}>
              <img src={blankpage} alt="" id='dashicon' className={!isSidebarOpen ? 'collapsed' : ''} />
              {isSidebarOpen && 'My Jobs'}
            </button>
          </li> */}
          <li className={`${activeMenuItem === 'Candidates' ? 'active' : ''} ${!isSidebarOpen ? 'collapsed' : ''}`}>
            <button onClick={() => setActiveMenuItem('Candidates')} className={activeMenuItem === 'Candidates' ? 'active-button' : ''}>
              <img src={candidate} alt="" id='dashicon' className={!isSidebarOpen ? 'collapsed' : ''} />
              {isSidebarOpen && 'Candidates'}
            </button>
          </li>
          <li className={`${activeMenuItem === 'Help' ? 'active' : ''} ${!isSidebarOpen ? 'collapsed' : ''}`}>
            <button onClick={() => setActiveMenuItem('Help')} className={activeMenuItem === 'Help' ? 'active-button' : ''}>
              <img src={help} alt="" id='dashicon' className={!isSidebarOpen ? 'collapsed' : ''} />
              {isSidebarOpen && 'Help'}
            </button>
          </li>
          <li className={`${!isSidebarOpen ? 'collapsed' : ''}`}>
            <button className="logout-button" onClick={handleLogout}>
              <img src={logout} alt="" id='dashicon' className={!isSidebarOpen ? 'collapsed' : ''} />
              {isSidebarOpen && 'Logout'}
            </button>
          </li>
          
        </ul>
      </div>
      <div className={`${isSidebarOpen ? 'container-with-sidebar' : 'container-with-collapsed-sidebar'}`}>
        {activeMenuItem === 'Openings' && <Jobopenings state={{ email }} />}
        {activeMenuItem === 'Jobs' && <Myjobs />}
        {activeMenuItem === 'Candidates' && <Candidates />}
        {activeMenuItem === 'Help' && <Help />}

      </div>
    </>
  );
};

export default Sidebar;
