import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index"; // Make sure this points to your actual contact image

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg} // Replace this with your actual image or photo
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Dhineshkumar S</h3> {/* Your name */}
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p> {/* Your title */}
        <p className="text-base text-gray-400 tracking-wide">
          Passionate about building scalable web applications and optimizing performance. Experienced in both frontend and backend technologies.
        </p> {/* Your description */}
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 6380496449</span> {/* Your phone number */}
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">dkdhineshkumar2904@gmail.com</span> {/* Your email */}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/dhineshkumar-selladurai-718697300/" className="bannerIcon" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a> {/* Your LinkedIn link */}
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
