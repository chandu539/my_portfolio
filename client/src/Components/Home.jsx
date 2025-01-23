import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container"
    style={{ backgroundImage: 'url("bg_image.jpg")'}}
    >
      <div className="home-content">
        <div className="profile-section">
          <div className="text-section">
            <h1 className="name">Chintha Chandu</h1>
            <h2 className="designation">Software Developer</h2>
            <a href="Contact" className="contact-btn">Contact Me</a>
          </div>
        </div>

        <div className="bio-box">
          <h2 className="bio-heading">About Me</h2>
          <p className="bio">
            I am a passionate Software Developer with a strong foundation in web
            development and full-stack technologies. I hold a B.Tech in Computer
            Science, graduating in 2024, and have honed my skills in programming
            languages like C, C++, Java, and Python.
            <br />
            My expertise lies in developing dynamic and user-friendly applications
            using modern frameworks such as React.js and the MERN stack. Currently
            working as a Software Developer at Numetry Technology, I focus on
            creating innovative solutions, with hands-on experience in projects
            like a cooking recipe website and an OTP-based phone authentication
            app.
            <br />
            With a deep interest in learning and applying new technologies, I am
            also exploring backend technologies like Firebase and MongoDB.
          </p>
        </div>

        <div className="button-section">
          <a href="/resume.pdf" download>
            <button className="download-btn">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
