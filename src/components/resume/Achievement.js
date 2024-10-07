import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Section 1: Achievements */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Solved 1000+ Coding Problems"
            subTitle="LeetCode, GeeksforGeeks, Coding Ninjas"
            result="Success"
            des="Achieved proficiency in data structures and algorithms by solving over 1000 coding problems across various competitive programming platforms."
          />
          <ResumeCard
            title="CISCO Ideathon Finalist"
            subTitle="CISCO Ideathon - (August 2023)"
            result="Finalist"
            des="Secured a finalist position in the prestigious CISCO Ideathon, demonstrating problem-solving and innovation skills in a competitive environment."
          />
          <ResumeCard
            title="Hackathon Participation"
            subTitle="Manthon and Smart India Hackathon"
            result="Participation"
            des="Actively participated in various hackathons like Manthon and Smart India Hackathon, gaining experience in building innovative solutions in a team environment."
          />
        </div>
      </div>

      {/* Section 2: Honors & Awards */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Honors & Awards</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="SQL Badge"
            subTitle="LeetCode - (2023)"
            result="Awarded"
            des="Earned a SQL badge on LeetCode by demonstrating advanced query skills and solving complex database-related challenges."
          />
          <ResumeCard
            title="State Level Quiz Champion"
            subTitle="Zandar Mandar Thulir Quiz - (2018)"
            result="Champion"
            des="Secured the first place in a state-level quiz competition, showcasing in-depth knowledge across various subjects."
          />
          <ResumeCard
            title="Second Prize in Tamil Speech Competition"
            subTitle="(September 2018)"
            result="Second Place"
            des="Awarded second place in a Tamil speech competition, highlighting excellent communication and presentation skills."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
