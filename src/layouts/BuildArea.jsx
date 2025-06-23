import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import PropagateLoader from "react-spinners/PropagateLoader";
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';

function BuildArea(props) {

 const {showComponent, setShowComponent, loading} = useContext(ThemeContext);

 const handleSelectNewTemplate = () => {
        setShowComponent(!showComponent)
    }


  return (
  
    <div>
    {loading && <PropagateLoader id='spinner' color="#319795" size={30} />}
    
            <div id='main-box' className="flex justify-content-between gap-6 flex-wrap mt-4 mx-2">
                <UserDataCollect />
                <div id='theme-box-border'>
                    {props.theme}
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <button className='mx-2 my-5' >Print</button>
                <button className='mx-2 my-5'  onClick={handleSelectNewTemplate}>Select Another Template</button>
            </div>
    
    </div>






  )
}

export default BuildArea