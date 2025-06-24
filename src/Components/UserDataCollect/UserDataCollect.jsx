import React, { useContext, useEffect, useState } from 'react'
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

    /* Add the Projects  */
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

    /* Add the Education  */
    const handleChangeEducation = (e) => {
        const { name, value, id } = e.target
        let tempEducationData = educationData
        if (name.includes('eName')) {
            tempEducationData["educationTitles"][id] = value;
        } else {
            tempEducationData["educationDesc"][id] = value;
        }
        setEducationData({ ...educationData }, tempEducationData)
    }

    const handleEducationClick = (e) => {
        e.preventDefault();
        let i = educationCount;

        ++i;
        const template = (<>
            <div className="my-2">
                <label htmlFor={`eTitle${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Title <span className="text-red-500">*</span>
                </label>
                <input
                    id={`eTitle${i}`}
                    name="eName"
                    onChange={handleChangeEducation}
                    type="text"
                    placeholder="Enter Title"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
            </div>

            <div className="my-2">
                <label htmlFor={`eDescription${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Description <span className="text-red-500">*</span>
                </label>
                <textarea
                    id={`eDescription${i}`}
                    name="eDescription"
                    onChange={handleChangeEducation}
                    placeholder="Use comma to separate Description"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
            </div>
        </>);

        let arr = educationArrTemplate
        arr.push(template)
        setEducationArrTemplate(arr)
        setEducationCount(i)
    }

    /* Add the Work Experience  */
    const handleChangeWork = (e) => {
        const { name, value, id } = e.target;
        const tempWorkData = { ...workData };

        if (name.includes('wName')) {
            tempWorkData.workTitles[id] = value;
        } else {
            tempWorkData.workDesc[id] = value;
        }

        setWorkData(tempWorkData);
    };

    const handleWorkClick = (e) => {
        e.preventDefault();
        let i = workCount + 1;

        const template = (
            <div key={i}>
                <div className="my-2">
                    <label htmlFor={`wTitle${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                        Job Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        id={`wTitle${i}`}
                        name="wName"
                        type="text"
                        onChange={handleChangeWork}
                        placeholder="Enter Job Title"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>

                <div className="my-2">
                    <label htmlFor={`wDescription${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                        Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id={`wDescription${i}`}
                        name="wDescription"
                        onChange={handleChangeWork}
                        placeholder="Use comma to separate Description"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    ></textarea>
                </div>
            </div>
        );

        const arr = [...workArrTemplate, template];
        setWorkArrTemplate(arr);
        setWorkCount(i);
    };

    /* Add the AWARDS & ACHIEVEMENTS  */
    const handleChangeAwards = (e) => {
        const { name, value } = e.target;

        setAwardData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    useEffect(() => {
        setThemeData({ ...themeData, personalData, projectData, educationData, workData, awardData })

    }, [themeData, personalData, setThemeData, projectData, educationData, workData, awardData])

    return (
        <div id="form-collect">
            {/* Personal Details Area  */}
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
                    <input name='name' onChange={handleChangePersonal} type='text' placeholder='Enter Your Name' className="w-full p-2 border rounded" />
                </div>
                <div className="my-2">
                    <input name='summary' onChange={handleChangePersonal} type='text' placeholder='Your Summary' className="w-full p-2 border rounded" />
                </div>
                <div className="my-2">
                    <input name='profile' onChange={handleChangePersonal} type='text' placeholder='Work Profile' className="w-full p-2 border rounded" />
                </div>
                <div className="my-2">
                    <input name='address' onChange={handleChangePersonal} type='text' placeholder='Address' className="w-full p-2 border rounded" />
                </div>
                <div className="my-2">
                    <input name='phone' onChange={handleChangePersonal} type='tel' placeholder='Phone number' className="w-full p-2 border rounded" />
                </div>
                <div className="my-2">
                    <input name='email' onChange={handleChangePersonal} type='email' placeholder='Enter your Email' className="w-full p-2 border rounded" />
                </div>
            </div>

            {/* Skills Area  */}
            <div className="mb-2">

                <h4 className="text-lg font-semibold mb-2">Technical Skills</h4>
                <div className="my-2">
                    <input name='skill' onChange={handleChangePersonal} type='text' placeholder='Separate skills by comma' className="w-full p-2 border rounded" />
                </div>
            </div>

            {/* Education Area  */}
            <div className="mb-2">

                <h4 className="text-lg font-semibold mb-2">Education</h4>
                <div className="my-2">
                    <button onClick={handleEducationClick} className="my-3 w-full bg-teal-600 text-white font-medium py-2 px-4 rounded hover:bg-teal-700 transition">
                        Add Education
                    </button>
                    {
                        (educationCount > 0) ? educationArrTemplate.map((element, index) => <div key={index}>{element}</div>) : null
                    }

                </div>
            </div>

            {/* Projects Area */}
            <div id="form-personal" className="mb-2">
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold my-2">Projects</h4>
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={!checkProj}
                            onChange={() => setCheckProj(!checkProj)}
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-checked:bg-teal-500 rounded-full peer relative transition duration-200">
                            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-full"></div>
                        </div>
                    </label>
                </div>

                <hr className="my-2" />

                <button
                    disabled={checkProj}
                    onClick={handleProjectClick}
                    className={`my-3 w-full text-white font-medium py-2 px-4 rounded transition ${checkProj
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-teal-600 hover:bg-teal-700'
                        }`}
                >
                    Add Projects
                </button>

                {projectCount > 0
                    ? projArrTemplate.map((element, index) => <div key={index}>{element}</div>)
                    : null}
            </div>

            {/* Work Experience Area */}
            <div id="form-personal" className="mb-2">
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold my-2">Work Experience</h4>
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={!checkWork}
                            onChange={() => setCheckWork(!checkWork)}
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-checked:bg-teal-500 rounded-full peer relative transition duration-200">
                            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-full"></div>
                        </div>
                    </label>
                </div>

                <hr className="my-2" />

                <button
                    disabled={checkWork}
                    onClick={handleWorkClick}
                    className={`my-3 w-full text-white font-medium py-2 px-4 rounded transition ${checkWork
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-teal-600 hover:bg-teal-700'
                        }`}
                >
                    Add Experience
                </button>

                {workCount > 0 &&
                    workArrTemplate.map((element, index) => (
                        <div key={index}>{element}</div>
                    ))}
            </div>

            {/* Awards & Achievement */}
            <div id="form-personal" className="mb-2">
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold my-2">Awards & Achievement</h4>
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={!checkAward}
                            onChange={() => setCheckAward(!checkAward)}
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-checked:bg-teal-500 rounded-full peer relative transition duration-200">
                            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-full"></div>
                        </div>
                    </label>
                </div>

                <hr className="my-2" />

                <div className="my-2">
                    <label htmlFor="awards" className="block text-sm font-medium text-gray-700 mb-1">
                        Achievements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="awards"
                        name="awards"
                        disabled={checkAward}
                        onChange={handleChangeAwards}
                        placeholder="Use comma to separate Achievement"
                        required
                        className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 ${checkAward ? 'bg-gray-100 cursor-not-allowed' : ''
                            }`}
                    ></textarea>
                </div>
            </div>
        </div>
    )
}


export default UserDataCollect