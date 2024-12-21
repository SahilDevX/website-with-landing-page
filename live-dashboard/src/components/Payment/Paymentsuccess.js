import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import Swal from 'sweetalert2'; // Import SweetAlert2


export default function PaymentSuccess() {
    const [recordData, setRecordData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const [searchParams] = useSearchParams();
    const recordId = searchParams.get('recordId');
    const handleRedirect = () => {
      // Open the HTML page in a new tab
      window.open('/mentorship.html');
    };
    useEffect(() => {
        const fetchRecordIdAndDetails = async () => {
            try {
              // Show loading alert
              Swal.fire({
                title: 'Loading...',
                text: 'Generating invoise...',
                showConfirmButton: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
                // Fetch record details from Airtable using the recordId
                const AIRTABLE_BASE_ID = "appxz6ED4aUNV6X0j";
                const AIRTABLE_API_KEY = "patyW6p4oW3xwI4hT.25f6bc9dbe036119b4706ae8988dce3521d10fa312f10b1130c006e2f7fbf855";
                const AIRTABLE_TABLE_NAME = "Payment%20details";

                const recordResponse = await axios.get(
                    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}/${recordId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
                        },
                    }
                );

                setRecordData(recordResponse.data.fields);
                setLoading(false);
                // Close loading alert
                Swal.close();
            } catch (err) {
                setError(err.message);
                setLoading(false);
                // Close loading alert and show error
                Swal.close();
                Swal.fire({
                    title: 'Error',
                    text: `Failed to fetch payment details. ${err.message}`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        };

        fetchRecordIdAndDetails();
    }, [recordId]);

    if (loading) return null; // Return null here as SweetAlert will handle the loading state
    if (error) return <p>Error: {error}</p>;

    const handleDownload = () => {
      const doc = new jsPDF();
  
      // Add title and company name
      doc.setFont('dejavusans', 'bold');
      doc.setFontSize(18);
      doc.text('Invoice', 105, 20, null, null, 'center');
      doc.setFontSize(12);
      doc.text('Talescope Consulting Private Limited', 105, 30, null, null, 'center');
      
      // Add some space
      doc.setFontSize(10);
      doc.text('------------------------------------------------------------------------------------------------------------------------------------------------------', 105, 35, null, null, 'center');
      
      // Order ID section
      doc.setFont('dejavusans', 'normal');
      doc.setFontSize(12);
      doc.text(`Order ID: ${recordData.OrderId}`, 20, 50);
      
      // Customer Information
      doc.text(`Name: ${recordData.Name}`, 20, 60);
      doc.text(`Email: ${recordData.Email}`, 20, 70);
      doc.text(`Payment For: ${recordData.SelectedOption}`, 20, 80);
      
      // Invoice Amount Section with ₹ symbol
      doc.setFont('dejavusans', 'normal');
      doc.setFontSize(14);
      doc.text(`Amount: ${recordData.Amount}/-`, 20, 100);
      
      // Add Footer Text
      doc.setFontSize(10);
      doc.text('Thank you for your purchase!', 20, 120);
  
      // Add date
      const currentDate = new Date().toLocaleDateString();
      doc.text(`Date: ${recordData.Date}`, 20, 130);
      
      // Draw a rectangle around the invoice
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.5);
      doc.rect(10, 10, 190, 140);
  
      // Save the generated invoice as a PDF file
      doc.save('invoice.pdf');
  };

    return (
        <div className="payment-success-container">
            <h2 className='color-green'>Payment Successful!</h2>

            {recordData ? (
                <div className="invoice-container">
                    <div className="invoice-header">
                        <h2>Talescope Consulting Private Limited</h2>
                        <h3>Invoice</h3>
                        <p><strong>Order ID:</strong> {recordData.OrderId}</p>
                    </div>

                    <div className="invoice-body">
                        <div className="invoice-item">
                            <p><strong>Name:</strong> {recordData.Name}</p>
                            <p><strong>Email:</strong> {recordData.Email}</p>
                            <p><strong>Payment For:</strong> {recordData.SelectedOption}</p>
                        </div>

                        <div className="invoice-amount">
                            <p><strong>Amount:</strong> ₹{recordData.Amount}</p>
                        </div>

                        <div className="invoice-footer">
                            <p>Thank you for your purchase!</p>
                        </div>
                    </div>
                    <div className='display-flex-download'>
                    <button className="download-button" onClick={handleDownload}>
                        Download Invoice
                    </button>
                      {/* Go back to home button */}
                      <button className="goback-button" onClick={handleRedirect}>
                        Go Back to Home
                    </button>
                    </div>
                </div>
            ) : (
                <p>Payment details not found.</p>
            )}
        </div>
    );
}
