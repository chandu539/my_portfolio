import React, { useState } from 'react';
import axios from "axios";
import './Contact.css';
import Email from './Email';


const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
    mobile: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submission started");
  
    try {
      const result = await axios.post("http://localhost:3001/contact", formValues);
      console.log("Response received:", result);
      setFormValues({
        name: "",
        email: "",
        message: "",
        mobile: "",
      });
      alert("Details submitted...!")
      if (result.status === 201) {
        console.log("Details sent successfully");
        setFormValues({
          name: "",
          email: "",
          message: "",
          mobile: "",
        });
      }
    } catch (err) {
      console.log("Error occurred:", err); 
      if (err.response && err.response.status === 400) {
        window.alert("Email already exists.");
      } else {
        console.log(err);
      }
    }
  };
  


  return (
    <div className="contact-container">
      <h2 className="section-heading">Contact Me</h2>
      <div className="contact-page">
      
        <div className="contact-details">
          <h3 className="contact-name">Chintha Chandu</h3>
          <ul className="details-list">
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:chchandu554@gmail.com">chchandu554@gmail.com</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+919948949806">+91 9948949806</a>
            </li>
            <li>
              <i className="fab fa-github"></i>
              <a href="https://github.com/chandu539" target="_blank" rel="noopener noreferrer">
                github.com/chandu539
              </a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Mallukunta, Eluru Dist, Andhra Pradesh
            </li>
          </ul>
          <div>
          <Email/>
          </div>
        </div>
        
        
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-field">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder='Enter Name...'
                onChange={handleChange}
                value={formValues.name}
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder='Enter Email...'
                onChange={handleChange}
                value={formValues.email}
              />
            </div>

            <div className="form-field">
              <label htmlFor="mobile">Your Mobile</label>
              <input
                id="mobile"
                name="mobile"
                type="text"
                placeholder='Enter Mobile...'
                onChange={handleChange}
                value={formValues.mobile}
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder='share your thoughts...'
                onChange={handleChange}
                value={formValues.message}
              />
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
