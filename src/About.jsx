import React, { useEffect, useState, useRef } from 'react';
import './About.css';
import { Mail, Phone, MapPinned, FolderBookmark } from "lucide-react"; // 👈 FolderBookmarkIcon ഫിക്സ് ചെയ്തു
import { BiDownload } from 'react-icons/bi';
import profileImag from "./assets/my-photo.jpg"; 

/* Counter Component for Animated Counting */
function Counter({ end, suffix = "" }) {
const [count, setCount] = useState(0);
const [isVisible, setIsVisible] = useState(false);
const counterRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    },
    {
      threshold: 0.2
    }
  );

  if (counterRef.current) {
    observer.observe(counterRef.current);
  }

  return () => observer.disconnect();
}, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1600;
    const incrementTime = 25;
    const increment = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}


function About() {
  const [isVisible, setIsVisible] = useState(false);
const aboutRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.2 }
  );

  if (aboutRef.current) {
    observer.observe(aboutRef.current);
  }

  return () => {
    if (aboutRef.current) {
      observer.unobserve(aboutRef.current);
    }
  };
}, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    /* here give id="about" */
    <section
  className={`about-section ${isVisible ? "about-visible" : ""}`}
  id="about"
  ref={aboutRef}
>
      <div className="about-container">
        
        {/* Left Side Info Cards */}
        <div className="about-left">

  <span className="section-subtitle about-reveal reveal-1">
    ABOUT ME
  </span>

  <h2 className="about-title about-reveal reveal-2">
    Hello! I&apos;m<br />
    <span className="highlight-text">Niranjan PP</span>
  </h2>

  <p className="about-description about-reveal reveal-3">
    I’m a BCA graduate specializing in AI & Data Science with a strong 
    foundation in Data Analytics, Machine Learning and Artificial Intelligence. 
    I enjoy transforming data into meaningful insights and building intelligent solutions for real-world problems

    I’m continuously strengthening my skills in Python, SQL, Data Analytics,
    Machine Learning and AI through practical projects and hands-on learning.
    My goal is to build a career as a Data Scientist, AI/ML Engineer and
    Data Analyst while creating impactful, data-driven solutions.
  </p>

  <div className="contact-info-card" onMouseMove={handleMouseMove}>
            <div className="info-item">
              <div className="icon-box"><MapPinned /></div>
              <div>
                <span className="label">Location</span>
                <p className="value">Malappuram, Kerala, India</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><Mail /></div>
              <div>
                <span className="label">Email</span>
                <p className="value">ninjuniranjan007@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><Phone /></div>
              <div>
                <span className="label">Phone</span>
                <p className="value">+91 7736203647</p>
              </div>
            </div>
          </div>

  <a href="/resume.pdf" download="Niranjan_PP_Resume.pdf"
     className="about-reveal reveal-5">
    <button className="download-btn">
      <span><FolderBookmark /></span>
      Download Resume
      <span><BiDownload /></span>
    </button>
  </a>

</div>

        {/* Right Side Glowing Profile Image */}
        <div className="about-right about-reveal reveal-image">
          <div className="profile-glow-circle">
            <div className="profile-image-container">
              <img
                src={profileImag} 
                alt="Niranjan PP" 
                className="profile-img"
              />
            </div>
            <div className="outer-glow-ring"></div>
            <div className="bottom-pedestal"></div>
          </div>
        </div>

      </div>

      {/* Bottom Stats Banner */}
      <div className="stats-container about-reveal reveal-stats">

        <div className="stat-box">
          <h3>
            <Counter end={3} suffix="+" />
          </h3>
          <p>Projects Completed</p>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-box">
          <h3>
            <Counter end={5} suffix="+" />
          </h3>
          <p>Technologies</p>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-box">
          <h3>
            <Counter end={6} suffix="+" />
          </h3>
          <p>Certifications</p>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-box">
          <h3>
            <Counter end={100} suffix="%" />
          </h3>
          <p>Dedication</p>
        </div>

      </div>
    
    </section>
  );
}

export default About;