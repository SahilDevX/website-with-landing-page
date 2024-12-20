import React from 'react'
import axios from 'axios';

export default function Payment() {
    let data = {
        name: "Sahil",
        amount:1,
        number: '9999999999',
        MID: 'MID' + Date.now(),
        transactionId: 'T' + Date.now()
        }
    
        const HandleClick = async () =>{
            try {
                const response = await axios.post('http://localhost:8000/order', data)
                console.log(response.data)
                window.location.href = response.data.url
            } catch (error) {
                console.log(error)
            }
        }
    return (
        <>
            <button onClick={HandleClick}>Pay Now</button>
        </>
    )
    }
