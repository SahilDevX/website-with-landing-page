import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  return (props) => {
    const userEmail = localStorage.getItem('userEmail');

    if (!userEmail) {
      // Redirect to login if user is not authenticated
      return <Navigate to="/login" />;
    }

    // Render the protected component if user is authenticated
    return <Component {...props} />;
  };
};

export default withAuth;
