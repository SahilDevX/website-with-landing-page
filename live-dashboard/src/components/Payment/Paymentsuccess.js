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
        const canvas = await html2canvas(element, {
            scale: 2, // Increase scale for better quality
        });
        const imgData = canvas.toDataURL("image/png"); // Convert to image
        const pdf = new jsPDF("p", "mm", "a4"); // Create PDF instance

        // Calculate dimensions
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        // Add image to PDF
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

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
                                AECS B Block, Wellington Paradise, Singasandra,
                                <br />
                                Bengaluru, Karnataka 560068
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
                                    <td>1</td>
                                    <td>{recordData.SelectedOption}</td>
                                    <td>1</td>
                                    <td>Rs {itemamount}</td>
                                    <td>Rs {gst}</td>
                                    <td>Rs {amount}.00</td>
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
