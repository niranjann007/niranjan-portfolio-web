import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const certificationsData = [
  {
    id: 1,
    title: "Google Advanced Data Analytics Professional Certificate",
    category: "Data Analysis",
    description: "Advanced data analytics concepts including Python, statistics, regression, machine learning, and data-driven problem solving.",
    tags: ["Python", "Data Analytics", "Statistics","Machine Learning" ,"Pandas","Regression"],
    view: "https://coursera.org/share/ff1b8fa5cb9b119114eb5d575eeb6671"
  }
  ,
  {
    id: 2,
    title: "Microsoft Power BI Data Professional Certification",
    category: "Business Intelligence",
    description: "Developed skills in data preparation, modeling, visualization, dashboards, and business intelligence using Microsoft Power BI.",
    tags: ["Power BI", "DAX", "Data Visualization","Business Intelligence","Data Modeling"],
    view: "https://coursera.org/share/41cbc16b7af04342a7e4c1cd46f9b759"
  }
  ,
  {
    id: 3,
    title: "Introduction to Artificial Intelligence – Infosys SpringBoard",
    category: "Artificial Intelligence",
    description: "Gained foundational knowledge of artificial intelligence, including AI concepts, applications, machine learning fundamentals, and intelligent systems.",
    tags: ["Artificial Intelligence", "Machine Learning", "AI Fundamentals"],
    view: "https://drive.google.com/file/d/1QL0hCHGH0YOuVZbFznovhhxPTWpHTxu3/view?usp=drivesdk"
  },
  {
    id: 4,
    title: "Deep Learning Specialization – Illinois Institute of Technology",
    category: "Deep Learning",
    description: "Studied deep learning fundamentals, neural networks, model training, optimization, and modern approaches to building intelligent systems.",
    tags: ["Deep Learning", "Neural Networks", "PyTorch","TensorFlow","Machine Learning"],
    view: "https://coursera.org/share/1c6ba473dbfe84ddc42ba124eb9bb97b"
  }
  ,
  {
    id: 5,
    title: "Data Analysis with R – Duke University",
    category: "Statistical Data Analysis",
    description: "Learned to analyze, transform, visualize, and interpret datasets using R and statistical data analysis techniques.",
    tags: ["R Programming", "Data Analysis", "Data Visualization"],
    view: "https://coursera.org/share/019293a639e6be4bf0d-c67e2d1910ee5"
  }
  ,
  {
    id: 6,
    title: "Certified AI Prompter",
    category: "Generative AI",
    description: "Developed practical skills in prompt design and effective interaction with generative AI systems for productivity, problem solving, and AI-assisted workflows.",
    tags: ["Prompt Engineering", "Generative AI", "LLM", "AI Productivity"],
    view: "https://drive.google.com/file/d/1BmrlRzBevT-zxAF4ya7oTR5v2LuHokRB/view?usp=drivesdk"
  }
  ,
  {
    id: 7,
    title: "IoT Gas Leakage Detection & Alert System",
    category: "BCA Thesis Project",
    description: "Developed an IoT-based gas leakage detection and alert system using Arduino, MQ sensors and Blynk for real-time monitoring and instant safety alerts.",
    tags: ["Arduino", "IoT", "MQ-5","Blynk"],
    view: "https://drive.google.com/drive/folders/1aO1xKAQHEmnaagaGIoJYQ5iEWdPa6fEf"
  }
];

function Certification() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % certificationsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + certificationsData.length) % certificationsData.length);
  };

  const getCardOffset = (index) => {
    const total = certificationsData.length;
    let diff = index - activeIndex;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  return (
    <section className="certification-section" id="certifications">
      <div className="certification-container">
        
        {/* Header */}
        <div className="certification-header">
          <span className="subtitle-glow">MY ACHIEVEMENTS</span>
          <h1 className="glowing-title">
            Professional <span className="gradient-text">Certifications</span>
          </h1>
          <p className="section-subtitle">
            Professional certifications and achievements that validate my technical expertise.
          </p>
        </div>

        {/* Globe 3D Carousel Slider */}
        <div className="carousel-wrapper">
          
          <button className="nav-btn prev-btn" onClick={handlePrev}>
            <FaChevronLeft />
          </button>

          <div className="carousel-3d-container">
            {certificationsData.map((certification, index) => {
              const offset = getCardOffset(index);
              
              // 🌐 Globe Rotation Math
              // The angle at which each card rotates as it moves to the sides (Rotation)
              const rotateY = offset * -35; 
              
              // The depth of the globe at which cards move behind (TranslateZ)
              const translateZ = -Math.abs(offset) * 150;
              
              // The horizontal spacing
              const translateX = offset * 200;

              return (
                <motion.div
                  key={certification.id}
                  className={`card-3d ${offset === 0 ? 'active-card' : ''}`}
                  animate={{
                    x: translateX,
                    z: translateZ,
                    rotateY: rotateY,
                    scale: offset === 0 ? 1 : 0.82,
                    opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.25,
                  }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="card-glass-content">
                    <div className="card-top-icon">
                      <FaCode />
                    </div>

                    <span className="card-cat">{certification.category}</span>
                    <h3 className="card-head">{certification.title}</h3>
                    <p className="card-desc">{certification.description}</p>

                    <div className="card-tags">
                      {certification.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    {offset === 0 && (
                      <div className="card-actions">
                 <a href={certification.view} 
                 className="btn-link active-link">
    <FaExternalLinkAlt /> View
  </a>
</div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button className="nav-btn next-btn" onClick={handleNext}>
            <FaChevronRight />
          </button>

        </div>

        {/* Pagination Dots */}
        <div className="carousel-dots">
          {certificationsData.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === activeIndex ? 'active-dot' : ''}`}
              onClick={() => setActiveIndex(idx)}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certification;