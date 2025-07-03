import React, { useContext, useEffect, useState } from 'react';
import { IoMdCloudUpload } from 'react-icons/io';
import { ThemeContext } from '../../context/ThemeContext';
import { AiFillDelete } from "react-icons/ai";


const UserDataCollect = () => {
    const { themeData, checkAward, setCheckAward, setThemeData, checkProj, checkWork, setCheckProj, setCheckWork, currentTheme } = useContext(ThemeContext)

    const [projectCount, setProjectCount] = useState(0)
    const [educationCount, setEducationCount] = useState(0)
    const [workCount, setWorkCount] = useState(0)
    const [projArrTemplate, setProjArrTemplate] = useState([
        { id: 1 }
    ]);
    const [educationArrTemplate, setEducationArrTemplate] = useState([
        { id: 1 }
    ]);
    const [workArrTemplate, setWorkArrTemplate] = useState([
        { id: 1 }
    ]);
    const [projectData, setProjectData] = useState({ 'projectTitles': { pTitle1: "Project Title " }, 'projectDesc': { pDescription1: "Project Description are Shown here , with Bullet Points" } })
    const [educationData, setEducationData] = useState({ 'educationTitles': { eTitle1: "Education Title" }, 'educationDesc': { eDescription1: "Education Description are Shown here , with Bullet Points" } })
    const [workData, setWorkData] = useState({ 'workTitles': { wTitle1: "Work Title" }, 'workDesc': { wDescription1: "Work Description are Shown here , with Bullet Points" } })
    const [personalData, setPersonalData] = useState({ profileImage: 'https://www.w3schools.com/howto/img_avatar.png', name: "Your Name", summary: 'Highly motivated and detail-oriented professional with a strong foundation in software development, problem-solving, and cross-functional collaboration.', profile: "Work Profile", address: "Address Line", phone: "Phone Number", email: "Email Address", skill: 'Your, Skills, are, shown, here', })
    const [awardData, setAwardData] = useState({ awards: 'Your Awards are shown here' })

    const handleChangePersonal = (e) => {
        const { name, value } = e.target
        setPersonalData({ ...personalData, [name]: value })
        if (e.target.name === 'profileImage') {
            setPersonalData({ ...personalData, profileImage: URL.createObjectURL(e.target.files[0]) })
        }
    }

    const deleteFormData = (id, type) => {
        // Map type to state setters
        let setTemplate, setCount, setData;

        let titleKey = '';
        let descKey = '';

        switch (type) {
            case 'education':
                setTemplate = setEducationArrTemplate;
                setCount = setEducationCount;
                setData = setEducationData;
                titleKey = `eTitle${id}`;
                descKey = `eDescription${id}`;
                break;

            case 'work':
                setTemplate = setWorkArrTemplate;
                setCount = setWorkCount;
                setData = setWorkData;
                titleKey = `wTitle${id}`;
                descKey = `wDescription${id}`;
                break;

            case 'project':
                setTemplate = setProjArrTemplate;
                setCount = setProjectCount;
                setData = setProjectData;
                titleKey = `pTitle${id}`;
                descKey = `pDescription${id}`;
                break;

            default:
                console.warn("Invalid type for deleteFormData:", type);
                return;
        }

        // 1. Remove from template array
        setTemplate(prev => {
            const updated = prev.filter(item => item.id !== id);
            setCount(updated.length);
            return updated;
        });

        // 2. Remove from corresponding data
        setData(prev => {
            const updatedTitles = { ...prev[`${type}Titles`] };
            const updatedDesc = { ...prev[`${type}Desc`] };
            delete updatedTitles[titleKey];
            delete updatedDesc[descKey];

            return {
                ...prev,
                [`${type}Titles`]: updatedTitles,
                [`${type}Desc`]: updatedDesc,
            };
        });
    };


    /* Add the Education  */
    const handleChangeEducation = (e) => {
        const { name, value, id } = e.target
        let tempEducationData = { ...educationData }

        if (name.includes('eName')) {
            tempEducationData["educationTitles"][id] = value;
        } else {
            tempEducationData["educationDesc"][id] = value;
        }
        setEducationData({ ...educationData }, tempEducationData)
    }

    const handleEducationClick = (e) => {
        e.preventDefault();
        const newId = Date.now();

        setEducationArrTemplate(prev => [...prev, { id: newId }]);
        setEducationCount(prev => prev + 1);
    };

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
        // setThemeData({ ...themeData, projectData: projectData })
    }

    const handleProjectClick = (e) => {
        e.preventDefault();
        const newId = Date.now();

        setProjArrTemplate(prev => [...prev, { id: newId }]);
        setProjectCount(prev => prev + 1);
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

        setWorkData({ ...workData }, tempWorkData);
    };

    const handleWorkClick = (e) => {
        e.preventDefault();
        const newId = Date.now();

        setWorkArrTemplate(prev => [...prev, { id: newId }]);
        setWorkCount(prev => prev + 1);
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

    }, [personalData, setThemeData, projectData, educationData, workData, awardData])

    return (
        <div id="form-collect" className='md:w-3/12 w-full'>
            {/* Personal Details Area  */}
            <div className="mb-2">
                <h4 className="text-lg font-semibold mb-2">Personal Details</h4>
                <hr />
                {currentTheme == "Theme2" && <div className="my-2">
                    <div className="file flex justify-between">
                        <label htmlFor='input-file' className="cursor-pointer inline-flex items-center gap-2">
                            <i className="material-icons"><IoMdCloudUpload size={30} /></i> Select a file
                        </label>
                        <input accept="image/*" name='profileImage' onChange={handleChangePersonal} id='input-file' type='file' className="hidden" />
                        <img className="blah mt-2" src={personalData.profileImage} alt="your profile preview" width={50} />
                    </div>
                </div>}

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
            <div className="mb-2 mt-4">

                <h4 className="text-lg font-semibold mb-2">Technical Skills</h4>
                <hr />
                <div className="my-2 mt-4">
                    <input name='skill' onChange={handleChangePersonal} type='text' placeholder='Separate skills by comma' className="w-full p-2 border rounded" />
                </div>
            </div>

            {/* Education Area  */}
            <div className="mb-2 mt-4">

                <h4 className="text-lg font-semibold mb-2">Education</h4>
                <hr />
                <div className="my-2">
                    <button onClick={handleEducationClick} className="my-3 w-full bg-teal-600 text-white font-medium py-2 px-4 rounded hover:bg-teal-700 transition cursor-pointer">
                        Add Education
                    </button>
                    {
                        (educationCount >= 0) ? educationArrTemplate.map((item) => {
                            const id = item.id;
                            return (
                                <div key={id} className="my-2">
                                    <div className="flex justify-between">
                                        <label htmlFor={`eTitle${id}`} className="block text-sm font-medium text-gray-700 mb-1">
                                            Title
                                        </label>
                                        <AiFillDelete onClick={() => deleteFormData(id, "education")} className="cursor-pointer text-red-500" />
                                    </div>
                                    <input
                                        id={`eTitle${id}`}
                                        name="eName"
                                        onChange={handleChangeEducation}
                                        type="text"
                                        placeholder="Enter Title"
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                    />

                                    <div className="my-2">
                                        <label htmlFor={`eDescription${id}`} className="block text-sm font-medium text-gray-700 mb-1">
                                            Description
                                        </label>
                                        <textarea
                                            id={`eDescription${id}`}
                                            name="eDescription"
                                            onChange={handleChangeEducation}
                                            placeholder="Use comma to separate Description"
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        ></textarea>
                                    </div>
                                </div>
                            );
                        })
                            : null
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
                        <div className="relative w-11 h-6 bg-gray-300 rounded-full peer 
                        dark:bg-gray-700 peer-checked:bg-teal-500 dark:peer-checked:bg-teal-500
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                        after:transition-all after:duration-200
                        peer-checked:after:translate-x-full peer-checked:after:border-white
                        rtl:peer-checked:after:-translate-x-full dark:border-gray-600">
                        </div>
                    </label>


                </div>

                <hr className="my-2" />

                <button
                    disabled={checkProj}
                    onClick={handleProjectClick}
                    className={`my-3 w-full text-white font-medium py-2 px-4 rounded transition  ${checkProj
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-teal-600 hover:bg-teal-700 cursor-pointer'
                        }`}
                >
                    Add Projects
                </button>

                {projectCount >= 0
                    ? projArrTemplate.map((item) => {
                        const id = item.id;
                        return (<div key={id}>
                            <div className="flex justify-between">
                                <label htmlFor={`pTitle${id}`} className="block text-sm font-medium text-gray-700 mb-1">
                                    Project Title
                                </label>
                                <AiFillDelete onClick={() => deleteFormData(id, "project")} className="cursor-pointer text-red-500" />
                            </div>
                            <div className="my-2">
                                <input disabled={checkProj} id={`pTitle${id}`} name='pName' onChange={handleChangeProject} type='text' placeholder='Enter Project Title' className="w-full p-2 border rounded" />
                            </div>
                            <div className="my-2">
                                <textarea disabled={checkProj} id={`pDescription${id}`} name='pDescription' onChange={handleChangeProject} placeholder='Use comma to separate Description' className="w-full p-2 border rounded"></textarea>
                            </div>
                        </div>
                        );

                    })
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
                        <div className="relative w-11 h-6 bg-gray-300 rounded-full peer 
                        dark:bg-gray-700 peer-checked:bg-teal-500 dark:peer-checked:bg-teal-500
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                        after:transition-all after:duration-200
                        peer-checked:after:translate-x-full peer-checked:after:border-white
                        rtl:peer-checked:after:-translate-x-full dark:border-gray-600">
                        </div>
                    </label>
                </div>

                <hr className="my-2" />

                <button
                    disabled={checkWork}
                    onClick={handleWorkClick}
                    className={`my-3 w-full text-white font-medium py-2 px-4 rounded transition ${checkWork
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-teal-600 hover:bg-teal-700 cursor-pointer'
                        }`}
                >
                    Add Experience
                </button>

                {workCount >= 0 &&
                    workArrTemplate.map((item) => {
                        const id = item.id;
                        return (
                            <div key={id}>
                                <div className="my-2">
                                    <div className="flex justify-between">
                                        <label htmlFor={`wTitle${id}`} className="block text-sm font-medium text-gray-700 mb-1">
                                            Job Title
                                        </label>
                                        <AiFillDelete onClick={() => deleteFormData(id, "work")} className="cursor-pointer text-red-500" />
                                    </div>
                                    <input
                                        id={`wTitle${id}`}
                                        name="wName"
                                        type="text"
                                        onChange={handleChangeWork}
                                        placeholder="Enter Job Title"
                                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />

                                </div>

                                <div className="my-2">
                                    <label htmlFor={`wDescription${id}`} className="block text-sm font-medium text-gray-700 mb-1">
                                        Description
                                    </label>
                                    <textarea
                                        id={`wDescription${id}`}
                                        name="wDescription"
                                        onChange={handleChangeWork}
                                        placeholder="Use comma to separate Description"
                                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    ></textarea>
                                </div>
                            </div>
                        )
                    })

                }
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
                        <div className="relative w-11 h-6 bg-gray-300 rounded-full peer 
                        dark:bg-gray-700 peer-checked:bg-teal-500 dark:peer-checked:bg-teal-500
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                        after:transition-all after:duration-200
                        peer-checked:after:translate-x-full peer-checked:after:border-white
                        rtl:peer-checked:after:-translate-x-full dark:border-gray-600">
                        </div>
                    </label>
                </div>

                <hr className="my-2" />

                <div className="my-2">
                    <label htmlFor="awards" className="block text-sm font-medium text-gray-700 mb-1">
                        Achievements
                    </label>
                    <textarea
                        id="awards"
                        name="awards"
                        disabled={checkAward}
                        onChange={handleChangeAwards}
                        placeholder="Use comma to separate Achievement"
                        required
                        className={`w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 ${checkAward ? 'bg-gray-100 cursor-not-allowed text-black' : ''
                            }`}
                    ></textarea>
                </div>
            </div>
        </div>
    )
}


export default UserDataCollect