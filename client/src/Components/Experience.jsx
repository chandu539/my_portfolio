
import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="section-heading">My Experience</h2>
      <div className="experience-cards">
        <div className="experience-card">
          <h3 className="job-title">Intern - Networking & Computer Hardware</h3>
          <p className="company-name">CTTC Bhubaneswar</p>
          <p className="job-duration">June 2023 - September 2023</p>
          <p className="job-description">
            Completed an internship at CTTC Bhubaneswar, a training center where I gained hands-on experience in networking and computer hardware. 
            This included learning about network configurations, troubleshooting, and understanding computer hardware components.
          </p>
          <button className="more-info-btn">More Info</button>
        </div>
        <div className="experience-card">
          <h3 className="job-title">Web Developer Intern</h3>
          <p className="company-name">Numetry Technology</p>
          <p className="job-duration">December 2024 - Present</p>
          <p className="job-description">
            Currently learning full-stack technologies and working on web applications using the MEAN stack, including React, Node.js, and MongoDB.
          </p>
          <button className="more-info-btn">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
