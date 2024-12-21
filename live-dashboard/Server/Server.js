const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');

const app = express();
// Create an in-memory cache for storing record IDs temporarily
const cache = new Map();

// Serve React static files
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());
app.use(cors());

const MERCHANT_KEY = "96434309-7796-489d-8924-ab56988a6076";
const MERCHANT_ID = "PGTESTPAYUAT86";

const MERCHANT_BASE_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";
const MERCHANT_STATUS_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status";

const redirectUrl = "http://localhost:8000/status";

const successUrl = "http://localhost:3000/#/paymentsuccess";
const failureUrl = "http://localhost:3000/#/paymentfailure";

// Airtable API Configuration
const AIRTABLE_BASE_ID = "appxz6ED4aUNV6X0j";
const AIRTABLE_API_KEY = "patyW6p4oW3xwI4hT.25f6bc9dbe036119b4706ae8988dce3521d10fa312f10b1130c006e2f7fbf855";
const AIRTABLE_TABLE_NAME = "Payment%20details";

// Function to send data to Airtable
async function sendDataToAirtable(data) {
    try {
        const response = await axios.post(
            `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
            { fields: data },
            {
                headers: {
                    Authorization: `Bearer ${AIRTABLE_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("Record created in Airtable with ID:", response.data.id);
        return response.data.id;
    } catch (error) {
        console.error("Error sending data to Airtable:", error.message);
        throw error;
    }
}


// Function to send data to Airtable
async function updateDataToAirtable(data, recordId) {
    try {
        const response = await axios.patch(
            `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}/${recordId}`,
            { fields: data },
            {
                headers: {
                    Authorization: `Bearer ${AIRTABLE_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("Record updated in Airtable with ID:", response.data.id);
        return response.data.id;
    } catch (error) {
        console.error("Error updating data:", error.message);
        throw error;
    }
}

app.post('/order', async (req, res) => {
    const { name, phoneNumber, email, amount, selectedOption } = req.body;
    const orderId = uuidv4();

    // Data for Airtable
    const airtableData = {
        Name: name,
        PhoneNumber: phoneNumber,
        Email: email,
        Amount: amount,
        SelectedOption: selectedOption,
        OrderId: orderId,
    };

    try {
        // Save data to Airtable
        const recordId = await sendDataToAirtable(airtableData);

        // Store the recordId and orderId in the cache
        cache.set(orderId, recordId);

        // Prepare payment payload
        const paymentPayload = {
            merchantId: MERCHANT_ID,
            merchantUserId: name,
            mobileNumber: phoneNumber,
            amount: amount * 100,
            merchantTransactionId: orderId,
            redirectUrl: `${redirectUrl}/?id=${orderId}`, // Pass orderId to the status route
            redirectMode: 'POST',
            paymentInstrument: {
                type: 'PAY_PAGE',
            },
        };

        const payload = Buffer.from(JSON.stringify(paymentPayload)).toString('base64');
        const keyIndex = 1;
        const string = payload + '/pg/v1/pay' + MERCHANT_KEY;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;

        const options = {
            method: 'POST',
            url: MERCHANT_BASE_URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum,
            },
            data: {
                request: payload,
            },
        };

        // Send payment request
        const response = await axios.request(options);
        console.log("Payment URL:", response.data.data.instrumentResponse.redirectInfo.url);

        res.status(200).json({
            msg: "OK",
            url: response.data.data.instrumentResponse.redirectInfo.url,
            recordId: recordId,
        });
    } catch (error) {
        console.error("Error in order creation:", error.message);
        res.status(500).json({ error: 'Failed to create order or initiate payment' });
    }
});

app.post('/status', async (req, res) => {
    const merchantTransactionId = req.query.id;

    // Retrieve the recordId from the cache using the orderId
    const recordId = cache.get(merchantTransactionId);

    if (!recordId) {
        console.error("Invalid or expired orderId");
        return res.status(400).json({ error: "Invalid or expired order ID" });
    }

    const SuccessData = {
        PaymentStatus: "Successfull",
    };
    const FailuerData = {
        PaymentStatus: "Failed",
    };
    const keyIndex = 1;
    const string = `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}` + MERCHANT_KEY;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + '###' + keyIndex;

    const options = {
        method: 'GET',
        url: `${MERCHANT_STATUS_URL}/${MERCHANT_ID}/${merchantTransactionId}`,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checksum,
            'X-MERCHANT-ID': MERCHANT_ID,
        },
    };

    try {
        const response = await axios.request(options);
        if (response.data.success === true) {
            console.log("Payment success for order:", merchantTransactionId);
            console.log("Associated recordId in Airtable:", recordId);

            // Update Airtable
            await updateDataToAirtable(SuccessData, recordId);


            return res.redirect(`${successUrl}?recordId=${recordId}`);

        } else {
            console.log("Payment failure for order:", merchantTransactionId);
            console.log("Associated recordId in Airtable:", recordId);

            // Update Airtable
            await updateDataToAirtable(FailuerData, recordId);

            return res.redirect(failureUrl);
        }
    } catch (error) {
        console.error("Error checking payment status:", error.message);
        res.status(500).json({ error: 'Failed to check payment status' });
    }
});



app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
