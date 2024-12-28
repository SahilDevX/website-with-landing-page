import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import Logo from '../img/Logo-white.png';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
                    text: 'Generating invoice...',
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

    const amount = recordData?.Amount || 0; // Safely access Amount or default to 0
    const gst = (amount * 0.18).toFixed(2); // Calculate 18% of the amount
    const itemamount = (amount - gst).toFixed(2);

    if (loading) return null; // Return null here as SweetAlert will handle the loading state
    if (error) return <p>Error: {error}</p>;

    
    const handleDownload = async () => {
        const element = document.querySelector(".invoice"); // Select the invoice element
    
        // Render the element to a canvas
        const canvas = await html2canvas(element, {
            scale: 2, // Increase scale for better quality
            useCORS: true, // Handle cross-origin images if any
        });
    
        const imgData = canvas.toDataURL("image/png"); // Convert to image
        const contentWidth = canvas.width; // Content width in pixels
        const contentHeight = canvas.height; // Content height in pixels
    
        // Define A4 dimensions in points (jsPDF uses points: 1 inch = 72 points)
        const pdfWidth = 210; // A4 width in mm
        const pdfHeight = 297; // A4 height in mm
        const pdfAspectRatio = pdfHeight / pdfWidth;
    
        // Calculate the scaling to fit the entire content on one page
        const contentAspectRatio = contentHeight / contentWidth;
        let scaledWidth = pdfWidth;
        let scaledHeight = pdfHeight;
    
        if (contentAspectRatio > pdfAspectRatio) {
            // Content is taller than PDF page aspect ratio, scale by height
            scaledHeight = pdfHeight;
            scaledWidth = pdfHeight / contentAspectRatio;
        } else {
            // Content is wider than PDF page aspect ratio, scale by width
            scaledWidth = pdfWidth;
            scaledHeight = pdfWidth * contentAspectRatio;
        }
    
        const pdf = new jsPDF("p", "mm", "a4"); // Create an A4 PDF
    
        // Add the scaled content as an image to the PDF, aligned to the top
        pdf.addImage(imgData, "PNG", (pdfWidth - scaledWidth) / 2, 0, scaledWidth, scaledHeight);
    
        // Save the PDF
        pdf.save("invoice.pdf");
    };
    
    
    
    
    
    

    return (
        <>
            {loading ? null : error ? (
                <p>Error: {error}</p>
            ) : recordData ? (
                <>
                <div className="invoice">
                    {/* Invoice Header */}
                    <div className="invoice-header">
                        <div>
                            <img src={Logo} alt="Talescope" />
                            <h1>Invoice</h1>
                        </div>
                        <div>
                            <h1>Talescope Consulting Private Limited</h1>
                            <p className="invoice-address">
                                4 Br Enclave Apartments, Singasandra, Bangalore South, 
                                <br />
                                Bangalore-560068, Karnataka
                            </p>
                        </div>
                    </div>

                    {/* Invoice Info */}
                    <div className="invoice-info">
                        <table>
                            <tr>
                                <td>
                                    <strong>BILL TO:</strong>
                                    <br />
                                    {recordData.Name}
                                    <br />
                                    {recordData.Email}
                                    <br />
                                    {recordData.PhoneNumber}
                                </td>
                                <td>
                                    <strong>INVOICE #:</strong> {recordData.OrderId}
                                    <br />
                                    <strong>DATE:</strong> {recordData.Date}
                                    <br />
                                </td>
                            </tr>
                        </table>
                    </div>

                    {/* Invoice Items */}
                    <div className="invoice-items">
                        <table>
                            <thead>
                                <tr>
                                    <th>ITEMS</th>
                                    <th>DESCRIPTION</th>
                                    <th>QUANTITY</th>
                                    <th>PRICE</th>
                                    <th>TAX(18%)</th>
                                    <th>AMOUNT</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
    <td data-label="ITEMS">1</td>
    <td data-label="DESCRIPTION">{recordData.SelectedOption}</td>
    <td data-label="QUANTITY">1</td>
    <td data-label="PRICE">Rs {itemamount}</td>
    <td data-label="TAX(18%)">Rs {gst}</td>
    <td data-label="AMOUNT">Rs {amount}.00</td>
  </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Total */}
                    <div className="total">TOTAL: Rs {amount}.00</div>

                  
                </div>
                {/* Buttons */}
                <div className='container display-flex-download'>
                <div className="display-flex-download">
                <button className="download-button" onClick={handleDownload}>
                    Download Invoice
                </button>
                <button className="goback-button" onClick={handleRedirect}>
                    Go Back to Home
                </button>
            </div>
            </div>
            </>
            ) : (
                <p>Payment details not found.</p>
            )}
        </>
    );
}
