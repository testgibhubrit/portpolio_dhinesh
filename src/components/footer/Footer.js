import React from 'react';
import { FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center justify-center border-b-[1px] font-titleFont border-b-black"
>
      {/* Logo and Social Links */}
      <div className="w-full h-full flex flex-col items-center gap-8"> {/* Center align */}
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/dhineshkumar-selladurai-718697300/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a> {/* Your LinkedIn link */}
          <a href="https://leetcode.com/dhineshkarthick/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaCode />
          </a> {/* Your LeetCode link */}
          <a href="https://github.com/dhinesh14" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a> {/* Your GitHub link */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
