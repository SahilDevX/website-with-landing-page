import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


export default function Payment() {

    const paymentData = JSON.parse(localStorage.getItem('paymentData'));
    console.log(paymentData);

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        selectedOption: '',
        amount: 0,
    });

    const options = [
        { label: 'Resume Review', amount: 499 },
        { label: 'Career Counselling', amount: 999 },
        { label: 'Career Counselling + Resume Review', amount: 1399 },
    ];

    useEffect(() => {
        if (paymentData.amount !== null) {
            const defaultOption = options.find(option => option.amount === paymentData.amount);
            if (defaultOption) {
                setFormData(prev => ({
                    ...prev,
                    selectedOption: defaultOption.label,
                    amount: defaultOption.amount,
                }));
            }
        }
    }, [paymentData.amount]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleOptionChange = (e) => {
        const selectedOption = options.find(option => option.label === e.target.value);
        setFormData(prev => ({
            ...prev,
            selectedOption: selectedOption ? selectedOption.label : '',
            amount: selectedOption ? selectedOption.amount : 0,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, phoneNumber, email, amount, selectedOption } = formData;
        if (!name || !phoneNumber || !email || !selectedOption || amount <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Details',
                text: 'Please fill in all the required fields!',
            });
            return;
        }
        const data = {
            name,
            phoneNumber,
            email,
            amount,
            selectedOption,
            MID: 'MID' + Date.now(),
            transactionId: 'T' + Date.now(),
        };

        try {
            Swal.fire({
                title: 'Processing Payment',
                text: 'Please wait while we process your payment...',
                icon: 'info',
                allowOutsideClick: false,
                showConfirmButton: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });
            const response = await axios.post('http://localhost:8000/order', data);

            Swal.close(); // Close the alert once processing is done

            window.location.href = response.data.url;

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Payment Failed',
                text: 'An error occurred while processing your payment. Please try again.',
            });
            console.error('Payment Error:', error);
        }
    };

    return (
        <div className="payment-container">
            <h2>Enter Your Details to Proceed with Payment</h2>
            <form className="payment-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your phone number"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="options">Select an Option:</label>
                    <select
                        id="options"
                        name="selectedOption"
                        value={formData.selectedOption}
                        onChange={handleOptionChange}
                        required
                    >
                        <option value="">--Select an Option--</option>
                        {options.map((option, index) => (
                            <option key={index} value={option.label}>
                                {option.label} (₹{option.amount})
                            </option>
                        ))}
                    </select>
                </div>

                <button className="submit-button" type="submit">Pay Now</button>
            </form>
        </div>
    );
}