import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "Fake News Detection Using Social Media Data",
    category: "TCS iON | Machine Learning/NLP",
    description: "An end-to-end Machine Learning system that classifies news articles as real or fake using NLP techniques. The project uses TF-IDF for feature extraction and Naive Bayes and Logistic Regression for classification, with a real-time Streamlit deployment.",
    tags: ["Python", "Pandas", "NLTK", "Streamlit"],
    github: "https://github.com/niranjann007/Veritas-AI-Fake-News-Detection",
    demo: "https://veritas-ai-fake-news-detection-system.streamlit.app/"
  },
  {
    id: 2,
    title: "YouTube Trending Video Analytics",
    category: "Data Analytics",
    description: "Analyzed YouTube trending data to uncover audience engagement, category trends and performance insights. Cleaned and transformed datasets using Python/Pandas then built an interactive Power BI dashboard to visualize key metrics and support data-driven decisions.",
    tags: ["Python", "Pandas", "Power BI"],
    github: "https://github.com/niranjann007/YouTube-Trending-Video-Analysis",
    demo: "https://drive.google.com/file/d/1rhzgj4ZFYIrwHGin1mKOQW_Ob1cmI9Wd/view?usp=drivesdk"
  },
  {
    id: 3,
    title: "IoT-Based Gas Leakage Detection & Alert System",
    category: "IoT & Embedded Systems",
    description: "Developed a real-time IoT-based gas leakage detection system using gas sensors and a microcontroller to monitor hazardous gas levels. Implemented automated alerts using buzzer and LED indicators for immediate hazard detection and safety response.",
    tags: ["IoT", "Arduino", "Automation", "Real-Time Monitoring"],
    demo: "https://drive.google.com/drive/folders/1aO1xKAQHEmnaagaGIoJYQ5iEWdPa6fEf"
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        
        {/* Header */}
        <div className="projects-header">
          <span className="subtitle-glow">MY FEATURED WORK</span>
          <h1 className="glowing-title">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="section-subtitle">
            A showcase of my recent work, projects and technical achievements
          </p>
        </div>

        {/* Scrollable Horizontal Line / Grid */}
        <div className="projects-scroll-wrapper">
          {projectsData.map((project) => (
            <div key={project.id} className="simple-project-card">
              
              <div className="card-top-icon">
                <FaCode />
              </div>

              <span className="card-cat">{project.category}</span>
              <h3 className="card-head">{project.title}</h3>
              <p className="card-desc">{project.description}</p>

              <div className="card-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {/* Dynamic Action Buttons */}
              <div className="card-actions">
                {project.github && (
                  <a href={project.github} className="btn-link" target="_blank" rel="noreferrer">
                    <FaGithub /> Code
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    className={`btn-link active-link ${!project.github ? 'full-width-btn' : ''}`} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt /> {project.github ? "Demo" : "View Project"}
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;