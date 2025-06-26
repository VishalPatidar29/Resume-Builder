import React from 'react'

function About() {
  return (
   <div className="flex flex-col items-center text-center py-16 px-4">
  <h1 className="text-5xl font-bold mb-4 ">Resume Builder</h1>
  <h2 className="text-2xl mb-10">
    Build the Resume That Gets <br /> You Hired!
  </h2>

  <div className=" shadow-lg rounded-xl p-8 max-w-4xl w-full flex justify-between items-center space-x-6 dark:bg-[#111828]">
    <div className="flex-1">
      <p className=" text-lg leading-relaxed mb-4">
        A resume builder website is a web-based tool that allows users to
        create and customize a professional resume to their desired
        specifications. These websites typically provide templates for creating
        a resume.
      </p>
      <p className="text-gray-900 font-semibold dark:text-white">
        <strong>Vishal Patidar</strong>{" "}
        <span className="font-normal">- Software Engineer</span>
      </p>
    </div>

    <div className="w-40 h-40 shrink-0">
      <img
        src="/src/assets/My-photo.png"
        alt="Vishal Patidar"
        className="w-full h-full object-cover rounded-full border border-gray-200 shadow-sm"
      />
    </div>
  </div>
</div>

  )
}

export default About