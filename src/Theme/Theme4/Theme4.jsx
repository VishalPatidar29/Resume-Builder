import React, { useContext } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

function Theme4(props) {
    const { componentRef, themeData } = props;
    const { name, address, phone, email, profile, summary, skill } = themeData.personalData;
    const { checkProj, checkWork, checkAward } = useContext(ThemeContext);
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;

    return (
        <div className='border border-gray-300 dark:border-white'>
            <div ref={componentRef} >
                <div id="theme4" className="font-sans text-gray-800 p-10">
                    <div className="flex">
                        <div className="w-4/12 bg-sky-300 p-5">
                            <h1 className="text-4xl font-bold mb-3">{name}</h1>
                            <p className="flex items-center mb-2 break-words">
                                <FaEnvelope className="mr-2" /> {email}
                            </p>
                            <p className="flex items-center mb-2  break-words">
                                <FaPhone className="mr-2" /> {phone}
                            </p>
                            <p className="flex items-center mb-2  break-words">
                                <FaMapMarkerAlt className="mr-2" /> {address}
                            </p>
                            <p className="flex items-center mb-2  break-words">
                                <FaBriefcase className="mr-2" /> {profile || "Work Profile"}
                            </p>
                        </div>

                        <div className="bg-blue-100 p-5 w-8/12">
                            <h2 className="text-2xl mb-3">Professional Summary</h2>
                            <p className="text-base break-words  leading-relaxed">{summary || "summary"}</p>
                        </div>

                    </div>



                    <div className="flex">

                        <div className="bg-blue-100 p-5 w-4/12">
                            <h2 className="text-xl mb-3">Skills</h2>
                            <ul className="list-disc list-inside text-base mb-5">
                                {skill.split(",").map((item, index) => (
                                    <li key={index} className="mb-2">{item}</li>
                                ))}
                            </ul>

                            <h2 className="text-xl mb-3">Education</h2>
                            {Object.entries(educationTitles).map(([key, value], index) => (
                                <div key={index} className="mb-4">
                                    <p className="font-bold text-base mb-2">{value}</p>
                                    <ul className="list-disc list-inside">
                                        {educationDesc[`eDescription${index + 1}`]?.split(',').map((el, i) => (
                                            <li key={i} className="mb-2">{el}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white p-5 col-span-1 w-8/12">
                            {!checkWork && (
                                <>
                                    <h2 className="text-xl mb-3">Professional Experience</h2>
                                    {Object.entries(workTitles).map(([key, value], index) => (
                                        <div key={index} className="mb-4">
                                            <h3 className="text-base font-bold mb-2">{value}</h3>
                                            <ul className="list-disc list-inside">
                                                {workDesc[`wDescription${index + 1}`]?.split(',').map((desc, idx) => (
                                                    <li key={idx} className="mb-1">{desc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}


                                </>)}


                            {!checkProj && (
                                <>
                                    <h2 className="text-xl mt-5 mb-3">Projects</h2>
                                    {Object.entries(projectTitles).map(([key, value], index) => (
                                        <div key={index} className="mb-4">
                                            <h3 className="text-base font-bold mb-2">{value}</h3>
                                            <ul className="list-disc list-inside">
                                                {projectDesc[`pDescription${index + 1}`]?.split(',').map((desc, idx) => (
                                                    <li key={idx} className="mb-1">{desc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </>
                            )}

                            {!checkAward && (
                                <>
                                    <h2 className="text-xl mt-5 mb-3">Awards</h2>
                                    <ul className="list-disc list-inside">
                                        {awards?.split(',').map((item, index) => (
                                            <li key={index} className="mb-1">{item}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Theme4;
