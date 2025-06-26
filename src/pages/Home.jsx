import React, { useContext } from 'react';
import Introduction from '../Components/Intro/Introduction';
import { ThemeContext } from '../context/ThemeContext';
import BuildArea from '../layouts/BuildArea';
import Theme1 from '../Theme/Theme1/Theme1';
import Theme2 from '../Theme/Theme2/Theme2';
import Theme3 from '../Theme/Theme3/Theme3';
import Theme4 from '../Theme/Theme4/Theme4';
import Theme5 from '../Theme/Theme5/Theme5';

function Home() {
 
const {showComponent, currentTheme, componentRef, themeData} = useContext(ThemeContext)
  return (
    <div>
     { !showComponent &&  <Introduction />}

     {showComponent && currentTheme ==="Theme1" && (
      <BuildArea  theme={<Theme1 componentRef={componentRef} themeData={themeData}  />}  />
     )}

     {showComponent && currentTheme ==="Theme2" && (
      <BuildArea  theme={<Theme2 componentRef={componentRef} themeData={themeData}  />}  />
     )}

     {showComponent && currentTheme ==="Theme3" && (
      <BuildArea  theme={<Theme3 componentRef={componentRef} themeData={themeData}  />}  />
     )}
     {showComponent && currentTheme ==="Theme4" && (
      <BuildArea  theme={<Theme4 componentRef={componentRef} themeData={themeData}  />}  />
     )}

     {showComponent && currentTheme ==="Theme5" && (
      <BuildArea  theme={<Theme5 componentRef={componentRef} themeData={themeData}  />}  />
     )}

    </div>
  )
}

export default Home