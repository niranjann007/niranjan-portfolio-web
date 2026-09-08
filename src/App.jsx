import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import { Typewriter } from 'react-simple-typewriter'; // 👈 Typing Effect package
import './App.css';
import './About.css';
import './Skills.css';
import './Projects.css';
import './Education.css';
import './Certifications.css';
import './Contact.css';
import Navbar from './Navbar';
import Certifications from './Certifications';
import Contact from './Contact';
import Projects from './Projects';
import Education from './Education';
import About from './About';
import Skills from './Skills'; 
import { BiDownload } from 'react-icons/bi';
import bubbleVideo from './assets/bubble.mp4';
import aiGlowVideo from './assets/ai-glow.mp4';
import AIAssistant from './components/AIAssistant';

function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const preloadVideo = (src) => {
    return new Promise((resolve) => {
      const video = document.createElement("video");

      video.src = src;
      video.preload = "auto";
      video.muted = true;
      video.playsInline = true;

      let finished = false;

      const finish = () => {
        if (finished) return;
        finished = true;

        clearTimeout(timeout);

        video.removeEventListener("canplaythrough", finish);
        video.removeEventListener("error", finish);

        resolve();
      };

      video.addEventListener("canplaythrough", finish, { once: true });
      video.addEventListener("error", finish, { once: true });

      // Maximum 15 seconds  waiting for video to load, then resolve anyway
      const timeout = setTimeout(finish, 15000);

      video.load();
    });
  };

  const loadEverything = async () => {
    // first page resources load 
    if (document.readyState !== "complete") {
      await new Promise((resolve) => {
        window.addEventListener("load", resolve, { once: true });
      });
    }

    // waiting Important videos ready  
    await Promise.all([
      preloadVideo(bubbleVideo),
      preloadVideo(aiGlowVideo),
    ]);

    // all ready
    setLoading(false);
  };

  loadEverything();
}, []);

  return (
    loading ? (
      <Loader />
    ) : (
      <div className="portfolio-app" id="home">
        {/* Background Neon Glow Effects */}
        <div className="glow-top-left"></div>
        <div className="glow-center-right"></div>

        <div className="button-group"></div>

        {/* Social Links Sidebar (Right Side) */}
        <div className="social-sidebar">
          <a href="https://www.linkedin.com/in/niranjan-pp" title="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://github.com/niranjann007" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          </a>
          <a href="https://instagram.com/niranjann_._" title="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="mailto:ninjuniranjan007@gmail.com" title="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>

        {/* Hero Content Main Area */}
        <main className="hero-container">
          {/* Left Side Text Block */}
          <div className="hero-text">
            <span className="greeting">Hi, I&apos;m</span>
            
            {/* 1. name typing */}
            <h1 className="name">
              <Typewriter
                words={['NIRANJAN PP']}
                loop={1} 
                cursor={false}
                typeSpeed={120}
              />
            </h1>

            {/* (slide-in-left) */}
            <h3 className="sub-title slide-in-left">
              Data Science <span className="bar">|</span> AI & Machine Learning <span className="bar">|</span> Data Analytics
            </h3>

            <p className="description slide-in-left">
              Passionate about turning data into insights and building intelligent solutions with machine Learning, Artificial Intelligence and modern data technologies.
            </p>

            {/* 3. animation (pop-in) */}
            <div className="btn-group pop-in">
              <a href="#projects">
                <button className="btn-glow">Explore My Work</button>
              </a>

              <a href="/resume.pdf" download="Niranjan_Resume.pdf">
                <button className="btn-outline">
                  Download Resume <span><BiDownload/></span>
                </button>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <video
              src={bubbleVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="bubble-hero-video"
              onEnded={(e) => {
               e.currentTarget.currentTime = 0;
              e.currentTarget.play();
           }}
          />
          </div>
        </main>

        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications/>
        <Contact />
        <AIAssistant />

        {/* Bottom Scroll Arrow */}
        <div className="scroll-indicator">
          <div className="scroll-button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
          </div>
        </div>
      </div>
    )
  );
}

export default App;