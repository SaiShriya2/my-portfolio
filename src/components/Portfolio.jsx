import React from "react";
import "./Portfolio.css";
import { FaGithub } from "react-icons/fa";
import profileImage from '../assets/profile.jpg';
import resume from '../assets/L SAI SHRIYA.pdf';
import { FaChartBar, FaHeartbeat, FaUniversity, FaCarCrash } from 'react-icons/fa';


// Define your skills array
const skills = [
  "Power Apps", "Power Automate", "C#", ".NET", "Microsoft Azure",
  "Power BI", "SQL", "Power Fx", "GitHub Actions"
];

// Define your projects array with correct image paths (in public/assets/)
const projects = [
  {
    title: "HR Analytics Dashboard",
    description: "Interactive Power BI dashboard providing insights on workforce demographics, attrition trends, hiring patterns, and departmental analysis to support data-driven HR decisions.",
    technologies: ["Power BI Desktop", "Power Query", "DAX"],
    github: "https://github.com/SaiShriya2/HR-Analytics-Dashboard",
    icon: <FaChartBar color="#682cf6" />
  },
  {
    title: "Heart Disease Prediction using Machine Learning",
    description: "Machine learning project that predicts heart disease risk based on patient medical data using models like Logistic Regression, Random Forest, and SVM, aiding early diagnosis.",
    technologies: ["Python", "Scikit-learn", "Google Colab", "Pandas", "Matplotlib"],
    github: "https://github.com/SaiShriya2/Heart_disease_prediction",
     icon: <FaHeartbeat color="#E74C3C" />
  },
  {
    title: "Loan Portfolio & Risk Analysis",
    description: "Power BI report analyzing loan portfolio performance, credit risks, customer demographics, and yearly trends to optimize lending strategies across multiple countries.",
    technologies: ["Power BI Desktop", "Power BI Service", "DAX"],
    github: "https://github.com/SaiShriya2/LoanBankingDashBoard",
    icon: <FaUniversity color="#2980B9" />
  },
  {
    title: "Road Accidents Analysis Dashboard",
    description: "Power BI dashboard visualizing road accident data to identify trends, accident-prone areas, and contributing factors to improve road safety through data insights.",
    technologies: ["Power BI Desktop", "DAX", "Data Visualization"],
    github: "https://github.com/SaiShriya2/RoadAccidentDashboard",
    icon: <FaCarCrash color="#f39c12" />
  }
];

export default function Portfolio() {
  return (
    <div className="portfolio-bg">

      {/* Hero/Main Intro Section */}
      <section className="hero-main">
        <div className="hero-col">
          <h2 className="greet">Hi, I'm Sai Shriya Lingala</h2>
          <h1 className="title">
            Software Engineer & Data Enthusiast
          </h1>
          <div className="subtitle">
            Delivering high-quality analytics, automation, and cloud solutions.<br />
            Passionate about driving business impact through technology.
          </div>
          <div className="hero-btn-grp">
            <a href="#contact-section" className="hero-btn">Contact Me</a>
            <a href="#projects-section" className="hero-btn alt">Projects</a>
          </div>
        </div>
        <div className="hero-col hero-avatar">
          <div className="hero-image-motion-container">
              <div className="hero-image-container">
  <img src={profileImage} alt="profile" className="profile-round" />

  {/* First floating SVG blob */}
  <svg
    className="floating-shape shape1"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#D0E2FF"
      d="M50.7,-38.7C66.6,-20.5,81,0.6,78,19.3C74.9,38,54.4,54.2,31.7,64.7C9,75.3,-16,80.1,-37.6,72C-59.2,63.9,-77.4,42.9,-79.3,21.8C-81.2,0.7,-66.6,-20.4,-50.7,-38.6C-34.7,-56.8,-17.3,-72.1,0,-72.1C17.4,-72.1,34.8,-56.9,50.7,-38.7Z"
      transform="translate(100 100)"
    />
  </svg>

  {/* Second floating SVG blob overlaid partially on the first */}
  <svg
    className="floating-shape shape2"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#D0E2FF"
      d="M23.8,-21.8C35.3,-12.3,52.2,-6.1,54.9,2.7C57.5,11.5,46,23,34.5,38.1C23,53.2,11.5,72,-4.7,76.7C-21,81.5,-41.9,72.2,-48.1,57.1C-54.3,41.9,-45.6,21,-43.2,2.4C-40.9,-16.2,-44.7,-32.4,-38.5,-42C-32.4,-51.5,-16.2,-54.5,-5,-49.5C6.1,-44.5,12.3,-31.4,23.8,-21.8Z"
      transform="translate(100 100)"
    />
  </svg>
</div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills-section" className="skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-list">
          {skills.map((skill, idx) => (
            <span className="skill-chip" key={idx}>{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="projects-section">
  <h2 className="section-title">My Projects</h2>
  <div className="projects-grid">
    {projects.map((proj, idx) => (
      <div className="project-card" key={idx}>
        <span className="project-icon">{proj.icon}</span>
        <div className="project-info">
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <div className="tech-list">
            {proj.technologies.map((tech, i) => (
              <span className="tech-item" key={i}>{tech}</span>
            ))}
          </div>
          <a
            href={proj.github}
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
            title="View on GitHub"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* About Section */}
      <section id="about-section" className="about-section">
        <h2>From Data Analytics<br />to Cloud Automation</h2>
        <p>
          I love creating low-code apps, building insightful dashboards, automating business processes, and coding robust solutions with cloud and data technologies.
          </p>
          <p>
           Power Platform Business Analyst with 1.5 years of experience designing and delivering end-to-end solutions using Microsoft Power Apps, Power Automate, and SharePoint in Agile and DevOps settings. Skilled in transforming complex business and Risk & Compliance requirements into scalable low-code applications that enhance process efficiency by up to 75%. 
         </p>
         <p>
          Experienced in client engagement, requirements analysis, and cross-functional collaboration to drive automation, streamline workflows, and support data-driven decision-making. Proven ability to deliver secure, compliant solutions that align with business goals.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="contact-section">
        <h1 class="contact-header">Contact Information</h1>
        <div className="contact-links">
          <a href="mailto:saishriyalingala01@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://github.com/SaiShriya2" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/saishriyalingala/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href= {resume} download="SaiShriyaLingala.pdf">Download Resume</a>
        </div>
      </section>
    </div>
  );
}


