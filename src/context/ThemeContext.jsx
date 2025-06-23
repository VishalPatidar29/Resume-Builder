import React, { createContext, useState, useEffect, useRef } from "react";

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
  
  const componentRef = useRef();

  const initialData = {
      personalData: {
        profileImage: "/src/assets/theme-images/Profile-Dummy.png",
        name: "Your Name",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        profile: "Work Profile",
        address: "Address Line",
        phone: "Phone Number",
        email: "Email Address",
        skill: "Your, Skills, are, shown, here",
      },
      projectData: {
        projectTitles: { pTitle1: "Project Title 1" },
        projectDesc: { pDescription1: "Project Description 1" },
      },
      educationData: {
        educationTitles: { eTitle1: "Education Title 1" },
        educationDesc: { eDescription1: "Education Description 1" },
      },
      workData: {
        workTitles: { wTitle1: "Work Title 1" },
        workDesc: { wDescription1: "Work Description 1" },
      },
      awardData: {
        awards:
          "Certificate of Appreciation - 2019, Certificate of Appreciation - 2018",
      },
    };

  const [themeData, setThemeData] = useState(initialData);
  const [checkProj, setCheckProj] = useState(false);
  const [checkWork, setCheckWork] = useState(false);
  const [checkAward, setCheckAward] = useState(false)

  const [loading, setLoading] = useState(false);

  const [selectBtn, setSelectBtn] = useState(true);
  const [currentTheme, setCurrentTheme] = useState("Theme1")
  const [showComponent, setShowComponent] = useState(false)

  return (
    <ThemeContext.Provider 
    value={{ 
      theme, 
      toggleTheme,
      selectBtn,
      setSelectBtn,
      currentTheme,
      setCurrentTheme,
      showComponent,
      setShowComponent,
      loading,
      setLoading,
      componentRef,
      themeData,
      setThemeData,
      checkAward,
      setCheckAward,
      checkProj,
      setCheckProj,
      checkWork,
      setCheckWork,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
