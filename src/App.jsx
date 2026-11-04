import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Certificates from "./components/Certificates";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Certificates/>
      <Contact />
      <ScrollToTop/>
    </div>
  );
}

export default App;