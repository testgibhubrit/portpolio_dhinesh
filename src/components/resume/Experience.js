import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Backend Developer Intern"
            subTitle="Siemens Digital Industry Software - (June 2024 - Present)"
            result="Chennai, India"
            des="Optimized performance by eliminating external interface dependencies and modernized the codebase by replacing outdated libraries with efficient C libraries. Developed a mathematical evaluator to compute expressions with complex types and recursive evaluations."
          />
          <ResumeCard
            title="Full Stack Developer Intern"
            subTitle="Siemens Digital Industry Software - (Dec 2023 - June 2024)"
            result="Chennai, India"
            des="Led the migration of Vaadin frontend to React, improving screen load speeds by 30%. Worked on backend services using Java and Spring Boot, implemented REST APIs, and managed version control systems including branching and role-based access control."
          />
        </div>
      </div>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Project Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Medicinal Plant Recognition System"
            subTitle="(Sep 2022 - Dec 2022)"
            result="Deep Learning, Python"
            des="Developed a deep learning-driven multilingual system to recognize and categorize medicinal plants with extensive details, using Google Colab and Kaggle for training and deployment."
          />
          <ResumeCard
            title="Medico Tracker"
            subTitle="(Dec 2023 - May 2024)"
            result="Full Stack Development"
            des="Built a web application to facilitate blood donation and rehabilitation services. Developed using React.js for the frontend and Spring Boot for the backend with a MySQL database."
          />
          <ResumeCard
            title="Guess The Word"
            subTitle="(August 2024)"
            result="Java, Spring Boot"
            des="Created a word guessing game using Spring Boot, Java, SQL, and Thymeleaf. The game features random word generation, limited trials, and a restart option."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
