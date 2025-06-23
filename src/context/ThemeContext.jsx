import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [primaryColor, setPrimaryColor] = useState('blue');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const changePrimaryColor = (color) => {
    setPrimaryColor(color);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, primaryColor, changePrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);