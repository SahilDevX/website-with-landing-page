import React, { useState, useEffect } from 'react';
import profileimg from "./img/personimg.jpg"
import { Link, useNavigate } from 'react-router-dom';
import Jobopenings from './Jobopenings';
import Dashboard from './Dashboard';
import Recruiters from './Recruiters';
import Candidates from './Candidates';

const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null); // State to track active menu item
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to track whether sidebar is open or closed
  const navigate = useNavigate();

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  useEffect(() => {
    // Set default active menu item to 'Dashboard' when component mounts
    setActiveMenuItem('Dashboard');
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Perform logout actions here, e.g., clearing user session
    // Then redirect the user to the login page
    navigate('/Adminlogin');
  };

  return (
    <>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar">
          <button className="navbar-toggler bg-orange p-1 margin-left" onClick={toggleSidebar}>
            {isSidebarOpen ? <i class="bi bi-chevron-left"></i> : <i class="bi bi-chevron-right"></i>}
          </button>
          <div className="profile">
            <img src={profileimg} alt="Profile" className="profile-photo" />
            <h3 className="profile-name">Admin</h3>
          </div>
          <ul className="sidebar-menu fld">
            <li className={activeMenuItem === 'Dashboard' ? 'active' : ''}>
              <button onClick={() => handleMenuItemClick('Dashboard')} className={activeMenuItem === 'Dashboard' ? 'active-button' : ''}>Dashboard</button>
            </li>
            <li className={activeMenuItem === 'Openings' ? 'active' : ''}>
              <button onClick={() => handleMenuItemClick('Openings')} className={activeMenuItem === 'Openings' ? 'active-button' : ''}>Job Openings</button>
            </li>
            <li className={activeMenuItem === 'Candidates' ? 'active' : ''}>
              <button onClick={() => handleMenuItemClick('Candidates')} className={activeMenuItem === 'Candidates' ? 'active-button' : ''}>Candidates</button>
            </li>
            <li className={activeMenuItem === 'Recruiters' ? 'active' : ''}>
              <button onClick={() => handleMenuItemClick('Recruiters')} className={activeMenuItem === 'Recruiters' ? 'active-button' : ''}>Recruiters</button>
            </li>
            <li>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </li>
            {/* Add more menu items as needed */}
          </ul>
          
        </div>
      )}
      {/* Button to toggle sidebar */}
      <button className="navbar-toggler bg-orange p-1 margin-left" onClick={toggleSidebar}>
        {isSidebarOpen ? <i class="bi bi-chevron-left"></i> : <i class="bi bi-chevron-right"></i>}
      </button>

      {/* Render content based on active menu item */}
      <div className={` ${isSidebarOpen ? 'container-with-sidebar' : ''}`}>
        {activeMenuItem === 'Dashboard' && <Dashboard navigate={navigate} />}
        {activeMenuItem === 'Openings' && <Jobopenings />}
        {activeMenuItem === 'Candidates' && <Candidates />}
        {activeMenuItem === 'Recruiters' && <Recruiters />}
      </div>
    </>
  );
};

export default Sidebar;
