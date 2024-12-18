import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element, scroller } from 'react-scroll'; // Import scroller from react-scroll

import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import RecentProjects from './Pages/RecentProjects';
import Achievements from './Pages/Achievements';
import Approach from './Pages/Approach';
import Contact from './Pages/Contact';

import { FloatingNav } from "./Components/ui/FloatingNavbar";

function App() {
  const navItems = [
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Experience", link: "workExperience" },
    { name: "RecentProjects", link: "projects" },
    { name: "Approach", link: "" },
    { name: "Contact", link: "contact" },
  ];

  const handleNavClick = (link) => {
    // Use react-scroll to scroll to the section
    scroller.scrollTo(link, {
      duration: 1200,          // Increase the duration for a slower scroll
      delay: 0,
      smooth: "easeInOutCubic",  // Use a smoother easing function
    });
  };

  return (
    <Router>
      <FloatingNav 
        navItems={navItems} 
        onNavClick={handleNavClick} // Pass the handler to FloatingNav
      />
      <Home />
      
        <Element name="about">
          <About />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="workExperience">
          <Experience />
        </Element>
        <Element name="projects">
          <RecentProjects />
        </Element>
        <Element name="achievements">
          <Achievements />
        </Element>
        <Element name="approach">
          <Approach />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      
    </Router>
  );
}

export default App;
