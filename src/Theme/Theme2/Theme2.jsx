import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

function Theme2(props) {

  const { componentRef, themeData } = props;
  const { name, address, phone, email, profile, profileImage, summary, skill } = themeData.personalData;

  const { checkProj, checkWork, checkAward } = useContext(ThemeContext)
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { workTitles, workDesc } = themeData.workData;
  const { awards } = themeData.awardData;


  return (
    <div className='border border-gray-300 dark:border-white'>
      <div id="section-to-print" ref={componentRef} className="p-10">
        <div id="theme2">
          <header className="text-center m-2 flex justify-between items-center">
            <div className="text-left w-9/12" >
              <h2 className="text-3xl font-bold mb-2">{name}</h2>
              <p className="font-medium text-xl mt-1 mb-2">{profile}</p>
              <p className="text-sm mt-1 mb-2">{summary}</p>
            </div>
            <div className="mx-2 mb-2 flex justify-end w-3/12">
              <img
                id="resume-avatar"
                className="rounded-full w-[150px] h-[150px] object-cover"
                src={profileImage}
                alt="Profile Picture"
              />
            </div>
          </header>

          <div className="w-full border border-gray-300 mx-auto"></div>

          <section className="flex mt-3">
            {/* Left Partition */}
            <div className="w-4/12">
              <h2 className="text-2xl font-bold my-2">Contact</h2>
              <div className="mt-3">
                <h3 className="text-md font-semibold my-2">Phone</h3>
                <p className="text-sm">{phone}</p>
                <h3 className="text-md font-semibold my-2">Email</h3>
                <p className="text-sm">{email}</p>
                <h3 className="text-md font-semibold my-2">Address</h3>
                <p className="text-sm w-[190px]">{address}</p>
              </div>

              <div className="mt-5">
                <h2 className="text-2xl font-bold my-2">Skills</h2>
                <div className="mt-3 flex flex-wrap ">
                  {skill.split(',').map((item, index) => (
                    <div key={index} className="w-max bg-gray-200 text-sm px-2 py-1 rounded mx-1 my-1 dark:text-black">
                      {item.trim()}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-gray-300 mr-10 ml-2"></div>

            {/* Right Partition */}
            <div className="w-8/12">
              <div id="education-area">
                <h2 className="text-2xl font-bold my-2">Education</h2>
                {Object.entries(educationTitles).map((element, index) => (
                  <div key={index} className="mt-3">
                    <h3 className="text-md font-semibold my-2">{element[1]}</h3>
                    <ul className="list-disc list-inside">
                      {Object.entries(educationDesc)[index]?.[1].split(',').map((el, i) => (
                        <li key={i}>{el}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {!checkProj && (
                <div id="project-area">
                  <h2 className="text-2xl font-bold mt-4">Projects</h2>
                  {Object.entries(projectTitles).map((element, index) => (
                    <div key={index} className="mt-1">
                      <h3 className="text-md font-semibold my-2">{element[1]}</h3>
                      <ul className="list-disc list-inside">
                        {Object.entries(projectDesc)[index]?.[1].split(',').map((el, i) => (
                          <li key={i}>{el}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {!checkWork && (
                <div id="experience-area">
                  <h2 className="text-2xl font-bold mt-4">Work Experience</h2>
                  {Object.entries(workTitles).map((element, index) => (
                    <div key={index} className="mt-1">
                      <h3 className="text-md font-semibold my-2">{element[1]}</h3>
                      <ul className="list-disc list-inside">
                        {Object.entries(workDesc)[index]?.[1].split(',').map((el, i) => (
                          <li key={i}>{el}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {!checkAward && (
                <div id="award-area">
                  <h2 className="text-2xl font-bold mt-4">Awards & Achievement</h2>
                  <ul className="list-disc list-inside mt-1">
                    {awards.split(',').map((element, index) => (
                      <li key={index}>{element.trim()}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Theme2