import React, { useState } from "react";


import "./styles/Header.css";

const Header = () => {
 const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">MyPortfolio</div>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects" >Projects</a></li>
          <li><a href="/contact">Contact</a></li>
          
        </ul>
      </nav>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </header>
  );
};

export default Header;
