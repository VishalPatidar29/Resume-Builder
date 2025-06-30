import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

function Theme5(props) {

    const { componentRef, themeData } = props;
    const { name, address, phone, email, profile, summary, skill } = themeData.personalData;
    const { checkProj, checkWork, checkAward } = useContext(ThemeContext);
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;


    return (
   <div className='border border-gray-300 dark:border-white'>
  <div ref={componentRef} className="font-sans text-gray-800 dark:text-white break-all">
    <div id="theme5" >

      <div className="bg-[#3d3e42] text-white text-center py-6 mb-6 flex justify-center">
        <div className='border-2 border-[#8e8f93] w-max px-26 py-4'>
          <h1 className="text-2xl font-semibold text-[#e7e8ec]">{name}</h1>
          <p className=' w-[80px] border-1 border-gray-300 m-auto'></p>
          <p className="text-md mt-2 text-[#e7e8ec]">{profile}</p>
        </div>
      </div>

      <div className='flex p-10 pt-0'>

        {/* DETAILS */}
        <div className='w-3/12'>
          <div className="mb-6">
            <h3 className="text-md font-semibold pb-1 mb-2 dark:text-white">DETAILS</h3>
            <p className="text-sm dark:text-white">{email}</p>
            <p className="text-sm dark:text-white">{phone}</p>
            <p className="text-sm dark:text-white">{address}</p>
          </div>

          {/* SKILLS */}
          <div className="mb-6">
            <h3 className="text-md font-semibold pb-1 mb-2 dark:text-white">SKILLS</h3>
            <ul className="list-disc list-inside text-base mb-5 dark:text-white">
              {skill.split(",").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* LANGUAGES */}
       {/*    <div className="mb-6">
            <h3 className="text-md font-semibold pb-1 mb-2 dark:text-white">LANGUAGES</h3>
            <ul className="list-disc list-inside text-sm dark:text-white">
              <li>English - Proficient</li>
              <li>Hindi - Intermediate</li>
              <li>French - Elementary</li>
            </ul>
          </div> */}
        </div>

        <div className="border border-gray-300 mr-10 ml-4 dark:border-white"></div>

        {/* Right Content */}
        <div className="col-span-2 space-y-6 w-9/12">
          {/* PROFILE */}
          <div>
            <h2 className="text-lg font-semibold pb-1 mb-2 dark:text-white">PROFILE</h2>
            <p className="text-sm leading-relaxed dark:text-white">{summary}</p>
          </div>

          {/* EMPLOYMENTS */}
          {!checkWork && (
            <div>
              <h2 className="text-lg font-semibold pb-1 mb-2 dark:text-white">EMPLOYMENTS</h2>
              {Object.entries(workTitles).map(([key, title], index) => (
                <div key={index} className="mb-3">
                  <h4 className="text-md font-serif font-semibold mb-1 dark:text-white">{title}</h4>
                  <ul className="list-disc list-inside text-sm dark:text-white">
                    {Object.entries(workDesc)[index]?.[1]
                      .split(',')
                      .map((el, i) => (
                        <li key={i}>{el.trim()}</li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* EDUCATION */}
          <div>
            <h2 className="text-lg font-semibold pb-1 mb-2 dark:text-white">EDUCATIONS</h2>
            {Object.entries(educationTitles).map(([key, title], index) => (
              <div key={index} className="mb-3">
                <h4 className="text-md font-serif font-semibold mb-1 dark:text-white">{title}</h4>
                <ul className="list-disc list-inside text-sm dark:text-white">
                  {Object.entries(educationDesc)[index]?.[1]
                    .split(',')
                    .map((el, i) => (
                      <li key={i}>{el.trim()}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          {/* PROJECTS */}
          {!checkProj && (
            <div>
              <h2 className="text-lg font-semibold pb-1 mb-2 dark:text-white">PROJECTS</h2>
              {Object.entries(projectTitles).map(([key, title], index) => (
                <div key={index} className="mb-3">
                  <h4 className="text-md font-serif font-semibold mb-1 dark:text-white">{title}</h4>
                  <ul className="list-disc list-inside text-sm dark:text-white">
                    {Object.entries(projectDesc)[index]?.[1]
                      .split(',')
                      .map((el, i) => (
                        <li key={i}>{el.trim()}</li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* AWARDS */}
          {!checkAward && (
            <div>
              <h2 className="text-lg font-semibold pb-1 mb-2 dark:text-white">AWARDS</h2>
              <ul className="list-disc list-inside text-sm dark:text-white">
                {awards.split(',').map((el, i) => (
                  <li key={i}>{el.trim()}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Theme5