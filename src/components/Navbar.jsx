import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinkStyle = "relative py-1 text-gray-300 hover:text-blue-400 font-medium transition-all duration-300 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300";

  return (
    <nav className="flex items-center justify-between px-6 md:px-8 py-5 bg-gray-900/90 backdrop-blur sticky top-0 z-50 border-b border-gray-800 shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-400 tracking-wide cursor-pointer">
        Dharmik<span className="text-white">.dev</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-sm items-center">
        <li><a href="#about" className={navLinkStyle}>About</a></li>
        <li><a href="#skills" className={navLinkStyle}>Skills</a></li>
        <li><a href="#experience" className={navLinkStyle}>Experience</a></li>
        <li><a href="#projects" className={navLinkStyle}>Projects</a></li>
        <li><a href="#certificates" className={navLinkStyle}>Certificates</a></li>
        <li><a href="#resume" className={navLinkStyle}>Resume</a></li>
        <li><a href="#contact" className={navLinkStyle}>Contact</a></li>
      </ul>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-white focus:outline-none p-2 transition-transform active:scale-95"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // Close (X) Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger (3 Lines) Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-2xl py-6 px-6 md:hidden transition-all animate-fadeIn">
          <ul className="flex flex-col space-y-4 text-gray-300 font-medium text-center">
            <li><a href="#about" onClick={handleLinkClick} className="block hover:text-blue-400 hover:scale-105 transition py-1">About</a></li>
            <li><a href="#skills" onClick={handleLinkClick} className="block hover:text-blue-400 hover:scale-105 transition py-1">Skills</a></li>
            <li><a href="#experience" onClick={handleLinkClick} className="block hover:text-blue-400 transition py-1">Experience</a></li>
            <li><a href="#projects" onClick={handleLinkClick} className="block hover:text-blue-400 transition py-1">Projects</a></li>
            <li><a href="#certificates" onClick={handleLinkClick} className="block hover:text-blue-400 transition py-1">Certificates</a></li>
            <li><a href="#resume" onClick={handleLinkClick} className="block hover:text-blue-400 transition py-1">Resume</a></li>
            <li><a href="#contact" onClick={handleLinkClick} className="block hover:text-blue-400 transition py-1">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}