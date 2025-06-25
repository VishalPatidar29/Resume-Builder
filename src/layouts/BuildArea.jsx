import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import PropagateLoader from "react-spinners/PropagateLoader";
import UserDataCollect from "../Components/UserDataCollect/UserDataCollect";

function BuildArea(props) {
  const { showComponent, setShowComponent, loading , handlePrint} = useContext(ThemeContext);

  const handleSelectNewTemplate = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      {loading && <PropagateLoader id="spinner" color="#319795" size={30} />}

      <div
        id="main-box"
        className="flex justify-content-between gap-6 flex-wrap mt-4 mx-2"
      >
        <UserDataCollect />
        <div id="theme-box-border" className="w-8/12">
          {props.theme}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="mx-2 my-5  bg-teal-600 text-white font-medium py-2 px-4 rounded hover:bg-teal-700 transition cursor-pointer" onClick={handlePrint} >
          Print
        </button>
        <button
          className="mx-2 my-5  bg-teal-600 text-white font-medium py-2 px-4 rounded hover:bg-teal-700 transition cursor-pointer"
          onClick={handleSelectNewTemplate}>
          Select Another Template
        </button>
      </div>
    </div>
  );
}

export default BuildArea;
