import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function Theme3(props) {

    const { componentRef, themeData } = props;
    const { name, address, phone, email, profile, summary, skill } = themeData.personalData;
    const { checkProj, checkWork, checkAward } = useContext(ThemeContext);
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;

    return (
        <div className='border border-gray-300 dark:border-white'>
            <div id="section-to-print" ref={componentRef} className="p-12 break-all">
                <div id="theme3">
                    <header className="flex justify-between items-center text-center mb-4" >
                        <div className="text-left">
                            <h2 className="text-4xl text-[#822727] font-serif mb-2">{name}</h2>
                            <p className="font-semibold text-md mb-2 font-serif">{profile}</p>
                            <div className="mt-3 font-serif text-sm">
                                <p>{address}</p>
                                <p>{phone}</p>
                                <p>{email}</p>
                            </div>
                        </div>
                    </header>

                    <div className="border border-gray-300 w-full my-6"></div>

                    <section className="mt-3">
                        <div className="flex w-full my-4">
                            <h3 className="font-serif font-bold text-lg w-3/12">Summary</h3>
                            <p className="text-sm font-serif w-9/12">{summary}</p>
                        </div>

                        {!checkWork && (
                            <>
                                <div className="border border-gray-300 w-full my-6"></div>
                                <div className="flex w-full my-4">
                                    <h3 className=" font-serif font-bold text-lg w-3/12">
                                        Experience
                                    </h3>
                                    <div className="w-9/12">
                                        {Object.entries(workTitles).map(([key, title], index) => (
                                            <div key={index} className="mb-3">
                                                <h4 className="text-md font-serif font-semibold mb-1">
                                                    {title}
                                                </h4>
                                                <ul className="list-disc list-inside">
                                                    {Object.entries(workDesc)[index]?.[1].split(',').map((el, i) => (
                                                        <li key={i}>{el}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="border border-gray-300 w-full my-6"></div>

                        <div className="flex w-full my-4">
                            <h3 className=" font-serif font-bold text-lg w-3/12">Education</h3>
                            <div className="w-9/12">
                                {Object.entries(educationTitles).map(([key, title], index) => (
                                    <div key={index} className="mb-3">
                                        <h4 className="text-md font-serif font-semibold mb-1">
                                            {title}
                                        </h4>
                                        <ul className="list-disc list-inside">
                                            {Object.entries(educationDesc)[index]?.[1].split(',').map((el, i) => (
                                                <li key={i}>{el}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {!checkProj && (
                            <>
                                <div className="border border-gray-300 w-full my-6"></div>
                                <div className="flex w-full my-4">
                                    <h3 className="font-serif font-bold text-lg w-3/12">Projects</h3>
                                    <div className="w-9/12">
                                        {Object.entries(projectTitles).map(([key, title], index) => (
                                            <div key={index} className="mb-3">
                                                <h4 className="text-md font-serif font-semibold mb-1">
                                                    {title}
                                                </h4>
                                                <ul className="list-disc list-inside">
                                                    {Object.entries(projectDesc)[index]?.[1].split(',').map((el, i) => (
                                                        <li key={i}>{el}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="border border-gray-300 w-full my-6"></div>

                        <div className="flex w-full my-4">
                            <h3 className="font-serif font-bold text-lg w-3/12">Skills</h3>
                            <div className="w-9/12 grid grid-cols-2 gap-2">
                                {skill.split(",").map((item, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-[6px] h-[6px] bg-black"></div>
                                        <p className="ml-2 text-sm font-serif">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {!checkAward && (
                            <>
                                <div className="border border-gray-300 w-full my-6"></div>
                                <div className="flex w-full my-4">
                                    <h3 className="font-serif font-bold text-lg w-3/12">
                                        Achievement
                                    </h3>
                                    <div className="w-9/12">
                                        {awards.split(",").map((item, index) => (
                                            <div key={index} className="flex items-center">
                                                <div className="w-[6px] h-[6px] bg-black"></div>
                                                <p className="ml-2 text-sm font-serif">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Theme3