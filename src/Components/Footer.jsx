import React from "react";
import "./styles/Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">© 2025 Your Name. All Rights Reserved.</p>
        <ul className="social-links">
          <li>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 hover:text-gray-400" />
              
            </a>
             
          </li>
          <li>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
               <FaLinkedin className="w-6 h-6" />
              
              
            </a>
          </li>
          <li>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 text-blue-500"></FaTwitter>
            
            </a>
          </li>
          <li>
            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 text-blue-500 hover:text-blue-700"></FaFacebook>
            
            </a>
          </li>
        </ul>

        

      </div>
    </footer>
  );
};

export default Footer;


