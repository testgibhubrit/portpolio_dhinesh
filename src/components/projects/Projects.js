import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Medicinal Plant Recognition System"
          des="Developed a deep learning-driven multilingual system for recognizing and categorizing medicinal plants with extensive details. Used Python, Google Colab, and Kaggle for model training."
          src={projectOne} // Replace with relevant image
        />
        <ProjectsCard
          title="Medico Tracker"
          des="Built a full stack web application to facilitate blood donation and rehabilitation services. The app was developed using React.js, Spring Boot, and MySQL for database management."
          src={projectTwo} // Replace with relevant image
        />
        <ProjectsCard
          title="Guess The Word"
          des="Created a word guessing game using Java, Spring Boot, SQL, and Thymeleaf. Users can guess words within a limited number of trials and restart the game with new random words."
          src={projectThree} // Replace with relevant image
        />
      </div>
    </section>
  );
}

export default Projects;
