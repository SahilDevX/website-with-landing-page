import React from 'react';

export default function Paymentfailure() {

  const handleGoHome = () => {
    // Open the HTML page in a new tab
    window.open('/mentorship.html');
  };

  return (
    <div className="payment-failure-container">
      <div className="content-container">
        <h2 className="text-danger">Payment Failed!</h2>
        <p className="failure-message">Unfortunately, your payment could not be processed. Please try again later.</p>
        <button className="btn-home" onClick={handleGoHome}>
          Go Back to Home
        </button>
      </div>
    </div>
  );
}
