import BaseLayout from "@/components/BaseLayout";
import { useState } from 'react';
import { CiDark, CiLight } from "react-icons/ci";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <BaseLayout pageTitle="APPLICATION SETTINGS">
      <div className="settings-container">
        <div className="theme-setting">
          <h3 className="setting-label">Application Theme</h3>
          <button className="theme-button" onClick={toggleTheme}>
            {isDarkMode ? <CiLight className="theme-icon"/> : <CiDark className="theme-icon" />} 
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Settings;
