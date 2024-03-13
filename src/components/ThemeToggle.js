import React, { useState } from 'react';
import { CiDark, CiLight } from "react-icons/ci";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="theme-setting">
      <p className="setting-label">Application Theme</p>
      <button className="theme-button" onClick={toggleTheme}>
        {isDarkMode ? <CiLight className="theme-icon"/> : <CiDark className="theme-icon" />} 
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;
