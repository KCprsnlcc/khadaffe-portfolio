import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import AnimatedSVG from "./AnimatedSVG";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      {/* Header with Animated SVG */}
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <AnimatedSVG />
        <h1>Khadaffe Sulaiman</h1>
        <p className="subtitle">Developer | Data Analyst</p>
      </motion.header>

      {/* About Me Section */}
      <motion.section
        className="section about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <p>
          I am a passionate IT professional with a keen interest in combining data analysis and software development to tackle complex challenges. I continuously strive to improve my technical skills while creating digital experiences that truly resonate.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="section skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <h2>Skills</h2>
        <ul>
          <li>JavaScript, HTML, CSS</li>
          <li>React.js</li>
          <li>Python & Django</li>
          <li>MySQL</li>
          <li>Data Analysis</li>
        </ul>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="section experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Experience</h2>
        <p>
          With a strong background in IT and hands-on project experience, I have been involved in various initiatives that bridge the gap between development and data analysis. My experiences have equipped me with a solid foundation in IT and problem-solving.
        </p>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="section projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
      >
        <h2>Projects</h2>
        <p>
          I have worked on various projects available on my GitHub. Check out my portfolio for a glimpse into my work and contributions.
        </p>
        <p>
          <FaGithub />{" "}
          <a
            href="https://github.com/KCprsnlcc"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="section contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2>Contact</h2>
        <p>
          <FaEnvelope /> kcpersonalacc@gmail.com
        </p>
        <p>
          <FaLinkedin />{" "}
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </motion.section>
    </div>
  );
};

export default App;
