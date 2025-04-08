import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin, FaDownload, FaLaptopCode, FaDatabase, FaChartBar, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaAward, FaMoon, FaSun, FaCode, FaStar, FaCodeBranch, FaCertificate } from "react-icons/fa";
import AnimatedSVG from "./AnimatedSVG";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [repos, setRepos] = useState([]);
  
  useEffect(() => {
    // Check if user has a preference stored
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(storedDarkMode === 'true');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }

    // Fetch GitHub repositories
    fetch('https://api.github.com/users/KCprsnlcc/repos')
      .then(response => response.json())
      .then(data => {
        // Sort by stars and filter out forks
        const sortedRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6); // Show top 6 repositories
        setRepos(sortedRepos);
      })
      .catch(error => console.error('Error fetching GitHub repos:', error));
  }, []);
  
  useEffect(() => {
    // Add or remove 'dark-mode' class to body when darkMode changes
    document.body.classList.toggle('dark-mode', darkMode);
    // Store preference
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Theme Toggle Button */}
      <motion.button
        className="theme-toggle"
        onClick={toggleDarkMode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </motion.button>
      
      {/* Header with Animated SVG */}
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <AnimatedSVG />
        <h1>KHADAFFE A. SULAIMAN</h1>
        <p className="subtitle">BS Information Technology Student | Web Developer</p>
        
        {/* Download CV Button */}
        <motion.div 
          className="cv-button-container"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/files/Khadaffe Sulaiman - Resume.pdf" download className="cv-button">
            <FaDownload /> Download Resume
          </a>
        </motion.div>
      </motion.header>

      {/* About Me Section */}
      <motion.section
        className="section about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <div className="content-box">
          <div className="contact-brief">
            <p><FaMapMarkerAlt /> Recodo, Zamboanga City</p>
            <p><FaPhone /> 0932-863-9080</p>
            <p><FaEnvelope /> kcpersonalacc@gmail.com</p>
            <p><FaGithub /> github.com/KCprsnlcc</p>
          </div>
          <div className="objective">
            <h3>Objective</h3>
            <p>
              I'm passionate about combining analysis and development to tackle complex challenges. My focus is on constantly improving both my technical skills and my approach to problem-solving. As I grow as a developer, I aim to create impactful digital experiences that people can truly connect with and benefit from.
            </p>
          </div>
        </div>
      </motion.section>

      {/* GitHub Repositories Section */}
      <motion.section
        className="section github"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <h2>GitHub Projects</h2>
        <div className="content-box">
          <div className="repos-grid">
            {repos.map((repo) => (
              <motion.div
                key={repo.id}
                className="repo-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3><FaCode /> {repo.name}</h3>
                <p className="repo-description">{repo.description || 'No description available'}</p>
                <div className="repo-stats">
                  <span><FaStar /> {repo.stargazers_count}</span>
                  <span><FaCodeBranch /> {repo.forks_count}</span>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="section education"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.85 }}
      >
        <h2>Education</h2>
        <div className="content-box">
          <div className="education-item">
            <h3><FaGraduationCap /> Tertiary</h3>
            <p className="school">Pilar College of Zamboanga City Inc.</p>
            <p className="degree">Bachelor of Science in Information and Technology (BSIT)</p>
            <p className="timeline">S.Y 2021 - Present (Fourth Year Level)</p>
          </div>
          
          <div className="education-item">
            <h3><FaGraduationCap /> Secondary</h3>
            <p className="school">Brent Hospital and Colleges, Inc.</p>
            <p className="degree">Science, Technology, Engineering, and Mathematics (STEM)</p>
            <p className="timeline">S.Y 2018 - 2020</p>
          </div>
          
          <div className="education-item">
            <h3><FaGraduationCap /> Primary</h3>
            <p className="school">Recodo National High School</p>
            <p className="degree">High School</p>
            <p className="timeline">S.Y 2014 - 2018</p>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="section skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <h2>Skills</h2>
        <div className="content-box">
          <div className="skills-container">
            <div className="skill-category">
              <h3><FaLaptopCode /> IT Related Skills</h3>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MySQL</li>
                <li>Python</li>
                <li>Django</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3><FaChartBar /> Other Skills</h3>
              <ul>
                <li>Technical Writing</li>
                <li>Project Management</li>
                <li>Troubleshooting</li>
                <li>Analytical Skills</li>
                <li>Critical Thinking</li>
                <li>Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        className="section achievements"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Achievements & Awards</h2>
        <div className="content-box">
          <div className="achievements-grid">
            <div className="achievement-category">
              <h3><FaAward /> Academic Achievements</h3>
              <ul className="achievement-list">
                <li>Dean's Lister 2nd Year - 1st Semester</li>
                <li>Dean's Lister 1st Year - 1st Semester</li>
                <li>Consistent Top Student in Primary School</li>
              </ul>
            </div>
            <div className="achievement-category">
              <h3><FaAward /> Technical Achievements</h3>
              <ul className="achievement-list">
                <li>Completed Google I/O Extended Zamboanga Peninsula 2024</li>
                <li>Participated in DICT HACK4GOV CYBER CHALLENGE 2023</li>
                <li>Successfully completed multiple technical training programs</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Certificates Section */}
      <motion.section
        className="section certificates"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
      >
        <h2>Certificates</h2>
        <div className="content-box">
          <div className="certificates-grid">
            <div className="certificate-category">
              <h3><FaCertificate /> Recent Certifications</h3>
              <ul className="certificate-list">
                <li>Google I/O Extended Zamboanga Peninsula 2024</li>
                <li>DICT Webinar: Data Analytics in Python Training (06/24)</li>
                <li>PCZC Seminar: Unlocking Code: Exploring the Foundations of Software Development (03/24)</li>
                <li>PCZC Seminar: Empowering Dynamic User Interfaces: Unleashing the Power of ReactJS (01/24)</li>
              </ul>
            </div>
            <div className="certificate-category">
              <h3><FaCertificate /> Technical Certifications</h3>
              <ul className="certificate-list">
                <li>DICT Webinar: Ethical Hacking: Understanding The Thin Line (02/23)</li>
                <li>DICT Webinar: Internet Media & Information Literacy Training (02/23)</li>
                <li>PCZC Seminar: Operating System Basics (01/23)</li>
                <li>PCZC Seminar: Creating User Interface with Adobe XD (04/23)</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Seminars & Trainings Section */}
      <motion.section
        className="section seminars"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
      >
        <h2>Seminars / Webinars / Trainings</h2>
        <div className="content-box">
          <div className="seminars-container">
            <div className="recent-events">
              <h3>Recent Events</h3>
              <ul>
                <li>Google I/O Extended Zamboanga Peninsula 2024</li>
                <li>Google I/O Extended Zamboanga Peninsula 2023</li>
                <li>DICT Webinar: Data Analytics in Python Training (06/24)</li>
                <li>PCZC Seminar: Unlocking Code: Exploring the Foundations of Software Development (03/24)</li>
                <li>PCZC Seminar: Empowering Dynamic User Interfaces: Unleashing the Power of ReactJS (01/24)</li>
                <li>University of Immaculate Conception Webinar: Cyber Wellness (11/23)</li>
                <li>DICT CERT-PH: HACK4GOV CYBER CHALLENGE 2023: Building Cyber Champions</li>
              </ul>
            </div>
            
            <div className="earlier-events">
              <h3>Other Webinars & Trainings</h3>
              <ul>
                <li>DICT Webinar: Ethical Hacking: Understanding The Thin Line (02/23)</li>
                <li>DICT Webinar: Internet Media & Information Literacy Training (02/23)</li>
                <li>PCZC Seminar: Operating System Basics (01/23)</li>
                <li>PCZC Seminar: Creating User Interface with Adobe XD (04/23)</li>
                <li>PCZC Seminar: Atomic Design: Breaking of that Designer-to-Developer Gap Through System Design (04/23)</li>
                <li>PCZC Webinar: Introduction to Web Development (04/22)</li>
                <li>PCZC Webinar: Citing Sources in Academic Papers (04/22)</li>
                <li>DICT Webinar: Digital Productivity (02/22)</li>
                <li>PCZC Webinar: Introduction to PHP & MySQL (01/22)</li>
                <li>PCZC Webinar: Blockchain Technology (01/22)</li>
                <li>DICT Webinar: Digital Transformation Technologies Training (12/21)</li>
                <li>PCZC Webinar on Infographics: A Learning and Marketing Tool for the Information Industry (11/21)</li>
                <li>DICT Webinar: Ethical Hacking: Digital Education for Students (08/21)</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Extracurricular Activities Section */}
      <motion.section
        className="section activities"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.15 }}
      >
        <h2>Extracurricular Activities & Affiliations</h2>
        <div className="content-box">
          <p>
            Pilar Colleges of Zamboanga City, Inc. participated in various team-building activities, including palaro, youth camps, and other related programs.
          </p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="section contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2>Contact</h2>
        <div className="content-box">
          <div className="contact-details">
            <p>
              <FaEnvelope /> <a href="mailto:kcpersonalacc@gmail.com">kcpersonalacc@gmail.com</a>
            </p>
            <p>
              <FaPhone /> <a href="tel:+639328639080">0932-863-9080</a>
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
            <p>
              <FaMapMarkerAlt /> Recodo, Zamboanga City
            </p>
          </div>
        </div>
      </motion.section>
      
      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <p>© 2023 Khadaffe Sulaiman. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default App;
