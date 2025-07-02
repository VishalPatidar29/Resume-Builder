import React from 'react';
import { TbClipboardText } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"


function Footer() {
  const date = new Date();

  return (
    <footer className="bg-[#009689] dark:bg-gray-900 text-gray-700 dark:text-gray-200 md:px-6 lg:px-8 xl:px-18 px-4 py-3">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left space-y-4 md:space-y-0">


        <TbClipboardText color="white" size="40px" />


        <p className="text-sm text-white">© {date.getFullYear()} Resume Builder, All rights reserved</p>

        <div className="flex space-x-6">
          <a   target='_blank'
            href="https://github.com/VishalPatidar29"
            aria-label="Github"
            className="text-black dark:text-white text-xl"
          >
            <FaGithub />
          </a>
          <a target='_blank'
            href="https://www.linkedin.com/in/vishal-patidar-902191191"
            aria-label="FaLinkedin "
            className="text-black dark:text-white text-xl"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>

  )
}

export default Footer