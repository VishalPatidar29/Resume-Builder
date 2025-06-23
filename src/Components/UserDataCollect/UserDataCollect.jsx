import React, {useContext, useEffect, useState} from 'react'
import { IoMdCloudUpload } from 'react-icons/io'
import { ThemeContext } from '../../context/ThemeContext'

const UserDataCollect = () => {
    const { themeData, checkAward, setCheckAward, setThemeData, checkProj, checkWork, setCheckProj, setCheckWork } = useContext(ThemeContext)

    const [projectCount, setProjectCount] = useState(0)
    const [educationCount, setEducationCount] = useState(0)
    const [workCount, setWorkCount] = useState(0)
    const [projArrTemplate, setProjArrTemplate] = useState([])
    const [educationArrTemplate, setEducationArrTemplate] = useState([])
    const [workArrTemplate, setWorkArrTemplate] = useState([])
    const [projectData, setProjectData] = useState({ 'projectTitles': { pTitle1: "Project Title " }, 'projectDesc': { pDescription1: "Project Description are Shown here , with Bullet Points" } })
    const [educationData, setEducationData] = useState({ 'educationTitles': { eTitle1: "Education Title" }, 'educationDesc': { eDescription1: "Education Description are Shown here , with Bullet Points" } })
    const [workData, setWorkData] = useState({ 'workTitles': { wTitle1: "Work Title" }, 'workDesc': { wDescription1: "Work Description are Shown here , with Bullet Points" } })
    const [personalData, setPersonalData] = useState({ profileImage: 'https://www.w3schools.com/howto/img_avatar.png', name: "Your Name", summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli', profile: "Work Profile", address: "Address Line", phone: "Phone Number", email: "Email Address", skill: 'Your, Skills, are, shown, here', })
    const [awardData, setAwardData] = useState({ awards: 'Your Awards are shown here' })

    const handleChangePersonal = (e) => {
        const { name, value } = e.target
        setPersonalData({ ...personalData, [name]: value })
        if (e.target.name === 'profileImage') {
            setPersonalData({ ...personalData, profileImage: URL.createObjectURL(e.target.files[0]) })
        }
    }

    const handleChangeProject = (e) => {
        const { name, value, id } = e.target
        let tempProjectData = projectData
        if (name.includes('pName')) {
            tempProjectData["projectTitles"][id] = value;
        } else {
            tempProjectData["projectDesc"][id] = value;
        }
        setProjectData({ ...projectData, tempProjectData })
        setThemeData({ ...themeData, projectData: projectData })
    }

    const handleProjectClick = (e) => {
        e.preventDefault();
        let i = projectCount
        ++i;
        const template = (
            <>
                <div className="my-2">
                    <input disabled={checkProj} id={`pTitle${i}`} name='pName' onChange={handleChangeProject} type='text' placeholder='Enter Project Title' className="w-full p-2 border rounded" />
                </div>
                <div className="my-2">
                    <textarea disabled={checkProj} id={`pDescription${i}`} name='pDescription' onChange={handleChangeProject} placeholder='Use comma to separate Description' className="w-full p-2 border rounded"></textarea>
                </div>
            </>
        )
        let arr = projArrTemplate
        arr.push(template)
        setProjArrTemplate(arr)
        setProjectCount(i)
    }

       useEffect(() => {
        setThemeData({ ...themeData, personalData, projectData, educationData, workData, awardData })
       
    }, [themeData, personalData, setThemeData, projectData, educationData, workData, awardData])
    // Similar replacements for education, work, and awards handlers...

    return (
        <div id="form-collect">
            <div className="mb-2">
                <h4 className="text-lg font-semibold mb-2">Personal Details</h4>
                <hr />

                <div className="my-2">
                    <div className="file">
                        <label htmlFor='input-file' className="cursor-pointer inline-flex items-center gap-2">
                            <i className="material-icons"><IoMdCloudUpload size={30} /></i> Select a file
                        </label>
                        <input accept="image/*" name='profileImage' onChange={handleChangePersonal} id='input-file' type='file' className="hidden" />
                        <img className="blah mt-2" src={personalData.profileImage} alt="your profile preview" />
                    </div>
                </div>
                <div className="my-2">
                    <input name='name' onChange={handleChangePersonal} type='text' placeholder='Your Name' className="w-full p-2 border rounded" />
                </div>
           {/*      <!-- Repeat for other personal inputs --> */}
            </div>

        {/*     <!-- Repeat similar sections for Skills, Education, Projects, Work Experience, Awards --> */}
        </div>
    )
}


export default UserDataCollect