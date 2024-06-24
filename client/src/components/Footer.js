// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file for the footer
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">Made by Abhisth_Chatterji@UPES</p>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/abhisth/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Ac-11" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
