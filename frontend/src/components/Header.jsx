import React, { useState } from "react";
import "./Header.css"; // We'll create this CSS file

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === "EN" ? "TA" : "EN");

  return (
    <header className={darkMode ? "header dark" : "header"}>
      <div className="logo-section">
        <img src="/vite.svg" alt="Logo" className="logo" />
        <h1>MyApp</h1>
      </div>

      <nav className="menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="actions">
        <button>{/* Toggle login/logout text dynamically */}Login</button>
        <button onClick={toggleLanguage}>{language}</button>
        <button onClick={toggleDarkMode}>{darkMode ? "Light" : "Dark"}</button>
      </div>
    </header>
  );
}

export default Header;
