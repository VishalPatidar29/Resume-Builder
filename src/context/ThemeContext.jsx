import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };


















const [selectBtn, setSelectBtn] = useState(true);







  return (
    <ThemeContext.Provider 
    value={{ 
      theme, 
      toggleTheme,
      selectBtn,
      setSelectBtn
    
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
