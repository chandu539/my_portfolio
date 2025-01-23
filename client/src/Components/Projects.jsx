import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="section-heading">My Projects</h2>
      <div className="projects-cards">
        <div className="project-card">
          <img
            src="fake_news.jpg"
            alt="Fake News Detection"
            className="project-image"
          />
          <h3 className="project-title">Fake News Detection</h3>
          <p className="project-description">
            Developed a hybrid deep learning model to classify fake news with techniques like CNN, RNN, and Bidirectional LSTM. Achieved significant accuracy across varied datasets.
          </p>
          <button className="more-info-btn">More Info</button>
        </div>
        <div className="project-card">
          <img
            src="contrail_image.png"
            alt="Contrail Detection"
            className="project-image"
          />
          <h3 className="project-title">Contrail Detection Using Satellite Images</h3>
          <p className="project-description">
            Built a method using satellite images and weather data to validate airplane contrail prediction models with advanced tools like CNN, PSPNet, UNet, and Deeplab v3.
          </p>
          <button className="more-info-btn">More Info</button>
        </div>
        <div className="project-card">
          <img
            src="cooking_project.png"
            alt="The Recipe Repository"
            className="project-image"
          />
          <h3 className="project-title">The Recipe Repository</h3>
          <p className="project-description">
            Designed a dynamic, responsive website showcasing recipes with search functionality, intuitive navigation, and detailed cooking instructions for multiple categories.
          </p>
          <button className="more-info-btn">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
