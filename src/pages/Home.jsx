import React, { useContext } from 'react';
import Introduction from '../Components/Intro/Introduction';
import { ThemeContext } from '../context/ThemeContext';
import BuildArea from '../layouts/BuildArea';
import Theme1 from '../Theme/Theme1/Theme1';

function Home() {
 
const {showComponent, currentTheme, componentRef, themeData} = useContext(ThemeContext)
  return (
    <div>
     { !showComponent &&  <Introduction />}

     {showComponent && currentTheme ==="Theme1" && (
      <BuildArea  theme={<Theme1 componentRef={componentRef} themeData={themeData}  />}  />
     )}


    </div>
  )
}

export default Home