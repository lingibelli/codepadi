import React, { useState } from "react";
import "./Header.css"; 
import { Link } from "react-router-dom";

function Header({language, onLanguageChange }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => onLanguageChange(language === "ENGLISH" ? "தமிழ்" : "ENGLISH");
  const languageButtonText = language === "ENGLISH" ? "தமிழ்" : "ENGLISH";

  return (
    <header className={darkMode ? "header dark" : "header"}>
      <div className="logo-section">
        <img src="../../codepadi-high-resolution-logo.png" alt="Logo" className="logo" />
        <h1>codepadi &gt;_</h1>
      </div>

      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="actions">
        <button>Login</button>
        <button onClick={toggleLanguage}>{languageButtonText}</button>
        <button onClick={toggleDarkMode}>{darkMode ? "Light" : "Dark"}</button>
      </div>
    </header>    
  );
}

export default Header;
