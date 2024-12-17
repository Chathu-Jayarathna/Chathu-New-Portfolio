import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element, scroller } from 'react-scroll'; // Import scroller from react-scroll

import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import { TracingBeam } from "./Components/ui/tracing-beam";
import { FloatingNav } from "./Components/ui/floating-navbar";

function App() {
  const navItems = [
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" }, // Referencing sections by name
    { name: "Experience", link: "workExperience" },
    { name: "Projects", link: "projects" },
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
        onNavClick={handleNavClick} // Add handler to FloatingNav for click
      />
      <Home />
      <TracingBeam>
        {/* Wrap each section in an Element for react-scroll */}
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
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </TracingBeam>
      <Footer/>
    </Router>
  );
}

export default App;
