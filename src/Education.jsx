import React from 'react';
import './Education.css';
import { FaGraduationCap, FaBook, FaEdit, FaBriefcase, FaRocket } from 'react-icons/fa';
import { FaBookSkull } from 'react-icons/fa6';

const timelineData = [
  {
    id: 1,
    year: "2023 – 2026",
    title: "BCA with Data Science & Artificial Intelligence",
    subtitle: "Yenepoya (Deemed to be University), Mangalore",
    details: "CGPA:8.46/10",
    icon: <FaGraduationCap />
  },
  {
    id: 2,
    year: "2021 – 2023",
    title: "12th - State Board",
    subtitle: "K.M.G.V.H.S.S Tavanur | Govt. of Kerala",
    details: "Biology Maths Science ",
    icon: <FaBook />
  },
  {
    id: 3,
    year: "2020 – 2021",
    title: "10th - State Board",
    subtitle: "A.V.H.S.S, Ponnani | Govt. of Kerala",
    details: "SSLC.92%",
    icon: <FaEdit />
  }
  
];

function Education() {
  return (
    <section className="education-section" id="timeline">
      <div className="education-container">
        
        {/* Left Side Header Text */}
        <div className="education-left">
          <span className="subtitle-glow">MY JOURNEY</span>
          <h1 className="glowing-title">
            Education & <br />
            <span className="gradient-text">Achievements</span>
          </h1>
          <p className="education-desc">
            Building my knowledge, skills and expertise through continuous learning, academic growth and practical experience.
          </p>
        </div>

        {/* Right Side Vertical Timeline */}
        <div className="education-right">
          <div className="timeline-line"></div>

          <div className="timeline-items">
            {timelineData.map((item) => (
              <div key={item.id} className="timeline-row">
                
                {/* Year tag */}
                <div className="timeline-year">{item.year}</div>
                
                {/* Center Glowing Dot & Icon */}
                <div className="timeline-icon-box">
                  <div className="timeline-icon">{item.icon}</div>
                </div>

                {/* Right Glass Card */}
                <div className="timeline-card">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-subtitle">{item.subtitle}</p>
                  {item.details && <p className="card-details">{item.details}</p>}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;