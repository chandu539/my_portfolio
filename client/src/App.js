import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import Navbar from './Components/Navbar';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Home from './Components/Home'; 

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
         
          <Route path='/' element={<Home/>}/>
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

       
        {/* <Element name="home">
          <Home />
        </Element>*/}
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="education">
          <Education />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </BrowserRouter>
  );
}

export default App;
