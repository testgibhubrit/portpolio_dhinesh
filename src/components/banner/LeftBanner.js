import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { SiSpringboot, SiJava, SiMysql, SiReact, SiLeetcode } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Java Backend Developer.", "Problem Solver."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Dhineshkumar S</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I specialize in developing scalable web applications and optimizing performance. 
          With experience in both backend and frontend technologies, I aim to simplify 
          user experiences and solve complex problems through code.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/dhinesh14" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://leetcode.com/dhineshkarthick/" target="blank">
              <span className="bannerIcon">
                <SiLeetcode />
              </span>
            </a> {/* LeetCode profile */}
            <a href="https://www.linkedin.com/in/dhineshkumar-selladurai-718697300/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best Skills
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiJava />
            </span>
            <span className="bannerIcon">
              <SiSpringboot />
            </span>
            <span className="bannerIcon">
              <SiMysql />
            </span>
            <span className="bannerIcon">
              <SiReact />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
