import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === "dark");

  const toggleTheme = () => {
    const updatedTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", updatedTheme);
  };
  const themeInfo = { isDarkMode, toggleTheme };
  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
