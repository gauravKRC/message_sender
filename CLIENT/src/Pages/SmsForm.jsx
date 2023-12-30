import React, { useState } from 'react';
import axios from 'axios';

const SmsForm = () => {
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();
   
    const handleSend = async () => {
        
        try {
         await axios.post('http://localhost:3000/sms', {
                phone: phone,
                message: message,
            });
            alert('Message sent');
        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (
        <div>
            <h2>Send SMS</h2>
            <label>
                Mobile No:
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </label>
            <br></br>
            <br></br>
            <label>
                Message:
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </label>
            <br></br>
            <br></br>
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default SmsForm;


