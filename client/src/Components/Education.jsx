
import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="section-heading">My Education</h2>
      <div className="education-cards">
        <div className="education-card">
          <h3 className="degree-title">Bachelor of Technology (BTech)</h3>
          <p className="degree-details">Computer Science Engineering</p>
          <p className="university-name">GMR Institute of Technology, Rajam , Andhra Pradesh</p>
          <p className="education-duration">2020 - 2024</p>
          <p className="education-description">
            Completed my undergraduate degree in Computer Science Engineering, with <b>8.12 CGPA</b> and focus on web development, machine learning, and programming languages.
            I gained hands-on experience in building applications and understanding computer science fundamentals.
          </p>
          <a href="/provision degree.pdf" download>
            <button className="download-btn">Download Certificate</button>
          </a>
        </div>
        <div className="education-card">
          <h3 className="degree-title">Intermediate</h3>
          <p className="degree-details">Science (Mathematics)</p>
          <p className="university-name">Sri Chaitanya Junior College, Jangareddygudem, Andhra Pradesh</p>
          <p className="education-duration">2018 - 2020</p>
          <p className="education-description">
            Completed my Intermediate studies in Science with Mathematics as the major subject with <b>9.5 CGPA</b>. Developed a strong foundation in mathematics, physics, and chemistry.
          </p>
          <a href="/intermediate.pdf" download>
            <button className="download-btn">Download Certificate</button>
          </a>
        </div>
        <div className="education-card">
          <h3 className="degree-title">Schooling</h3>
          <p className="degree-details">State Board</p>
          <p className="university-name">Z P P High School(Boys), Jangareddygudem, Andhra Pradesh</p>
          <p className="education-duration">2017 - 2018</p>
          <p className="education-description">
            Completed my Schooling in ZPP Highschool with <b>9.0 Grade Points</b>.This academic performance reflects my dedication and strong foundation in core subjects during my formative years.
          </p>
          <a href="/school.pdf" download>
            <button className="download-btn">Download Certificate</button>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Education;
