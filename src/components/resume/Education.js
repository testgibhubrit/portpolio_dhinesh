import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Engineering in Computer Science"
            subTitle="Sri Krishna College of Engineering and Technology (2020 - 2024)"
            result="9.14/10"
            des="Studied core subjects including Data Structures, Analysis of Algorithms, and Databases. Gained practical experience in software development, full stack development, and algorithm optimization."
          />
        </div>
      </div>

      {/* part two */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Internship Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Backend Developer Intern"
            subTitle="Siemens Digital Industry Software - (June 2024 - Present)"
            result="Chennai, India"
            des="Worked on optimizing backend systems by replacing outdated libraries and improving application performance by 25%. Developed mathematical expression evaluators for complex computations."
          />
          <ResumeCard
            title="Full Stack Developer Intern"
            subTitle="Siemens Digital Industry Software - (Dec 2023 - Jun 2024)"
            result="Chennai, India"
            des="Led frontend migration to React.js and improved API performance with Java and Spring Boot. Worked on version control and API development, contributing to enhanced system efficiency."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
