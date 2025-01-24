import React, { useState } from 'react';
import './Email.css';
import axios from 'axios';

const Email = () => {
  const [emailData, setEmailData] = useState({
    recipientEmail: '',
    subject: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email submission started");

    try {
      const response = await axios.post('http://localhost:3001/email', emailData);
      setResponseMessage(response.data.message);
      console.log("Response received:", response);
      
      
      setEmailData({
        recipientEmail: '',  
        subject: '',
        message: '',
      });

      alert("Email sent successfully!");
    } catch (error) {
      setResponseMessage('Error: Unable to send email');
      console.error(error);
    }
  };

  return (
    <div className="email-container">
      <h2>Send Email</h2>
      <form className="email-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="recipientEmail">Recipient Email:</label>
          <input
            type="email"
            id="recipientEmail"
            name="recipientEmail"
            placeholder="Enter Recipient Email..."
            value={emailData.recipientEmail || ''}  
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter Subject..."
            value={emailData.subject || ''}  
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Message..."
            value={emailData.message || ''}  
            onChange={handleChange}
            required
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send Email</button>
      </form>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
};

export default Email;
