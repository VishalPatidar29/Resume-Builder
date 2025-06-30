import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { ImLocation } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import { BsFillTelephoneFill } from 'react-icons/bs'

function Theme1(props) {

  const { themeData, componentRef } = props;
  const { name, profile, address, phone, email, skill,summary} = themeData.personalData;
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { workTitles, workDesc } = themeData.workData;
  const { awards } = themeData.awardData;
  const { checkProj, checkWork, checkAward } = useContext(ThemeContext);

  return (
    <div className='border border-gray-300 dark:border-white'>
    <div id="section-to-print" ref={componentRef} className="p-10 break-all">
      <div id="theme1" >

        {/*  Personal Info  */}
        <header id="info" className="text-center mt-2">
          <h2 className="text-3xl font-bold mb-4">{name}</h2>
          <p className="text-gray-600 my-4">
            <span className="mx-2 inline-flex items-center"><ImLocation className="mr-1" />{address}</span> |
            <span className="mx-2 inline-flex items-center"><GrMail className="mr-1" />{email}</span> |
            <span className="mx-2 inline-flex items-center"><BsFillTelephoneFill className="mr-1" />{phone}</span>
          </p>
          <h3 className="text-lg font-semibold mt-1 mb-3">{profile}</h3>
          <p className='mb-2 text-sm'>{summary}</p>
        </header>

        {/*  Skills */}
        <section id="skills" className="my-4">
          <h3 className="bg-[#D2E4E1] text-gray-800 text-md px-5 py-2 font-semibold">TECHNICAL SKILLS</h3>
          <div id="skills-set" className="flex justify-center items-center">
            <div className="flex flex-wrap gap-2 mt-4">
              {skill.split(',').map((element, index) => (
                <span key={index} className="bg-gray-800 text-white text-sm px-3 py-1 rounded">{element}</span>
              ))}
            </div>
          </div>
        </section>

        {/*  Projects */}
        {!checkProj && (
          <section id="projects" className="my-4">
            <h3 className="bg-[#D2E4E1] text-gray-800 text-md px-5 py-2 font-semibold">PROJECTS</h3>
            <div id="project-set" className="mt-2 px-5">
              {Object.entries(projectTitles).map((element, index) => (
                <div key={index} className="mb-3">
                  <p className="font-medium text-lg py-3">{element[1]}</p>
                  <ul className="list-disc ml-6 text-sm">
                    {Object.entries(projectDesc)[index]?.[1].split(',').map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/*   Education  */}
        <section id="education" className="my-4">
          <h3 className="bg-[#D2E4E1] text-gray-800 text-md px-5 py-2 font-semibold">EDUCATION</h3>
          <div id="education-set" className="mt-2 px-5">
            {Object.entries(educationTitles).map((element, index) => (
              <div key={index} className="mb-3">
                <p className="font-medium text-lg py-3">{element[1]}</p>
                <ul className="list-disc ml-6 text-sm">
                  {Object.entries(educationDesc)[index]?.[1].split(',').map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/*   Work Experience  */}
        {!checkWork && (
          <section id="experience" className="my-4">
            <h3 className="bg-[#D2E4E1] text-gray-800 text-md px-5 py-2 font-semibold">WORK EXPERIENCE</h3>
            <div id="experience-set" className="mt-2 px-5">
              {Object.entries(workTitles).map((element, index) => (
                <div key={index} className="mb-3">
                  <p className="font-medium text-lg py-3">{element[1]}</p>
                  <ul className="list-disc ml-6 text-sm">
                    {Object.entries(workDesc)[index]?.[1].split(',').map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/*   Awards  */}
        {!checkAward && (
          <section id="awards" className="my-4">
            <h3 className="bg-[#D2E4E1] text-gray-800 text-md px-5 py-2 font-semibold">AWARDS & ACHIEVEMENTS</h3>
            <div id="award-set" className="gap-2 mt-4 px-5">
              {awards.split(',').map((element, index) => (
                <li key={index} className="text-sm">{element}</li>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
    </div>
  )
}

export default Theme1