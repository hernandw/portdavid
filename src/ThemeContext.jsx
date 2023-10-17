import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModePreferred =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedDarkModePreference = localStorage.getItem('darkMode');

    setDarkMode(
      savedDarkModePreference === 'true' ||
        (savedDarkModePreference === null && isDarkModePreferred)
    );
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  const themeClasses = darkMode ? 'bg-gray-800 ' : 'bg-white ';


  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={themeClasses}>{children}</div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};