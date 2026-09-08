import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Skills.css";

import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPalette,
  FaCode,
  FaTable,
  FaVideo,
} from "react-icons/fa";
import { SiMysql, SiPandas, SiNumpy } from "react-icons/si";
import { MdAnalytics } from "react-icons/md";

const skillsData = [
  { name: "Python", icon: FaPython, color: "#4FC3F7", level: 80, exp: "2+ yrs", topics: ["Data Analysis", "AI/ML", "Automation"] },
  { name: "SQL", icon: SiMysql, color: "#FFB74D", level: 78, exp: "1 yr", topics: ["Queries", "Joins", "Optimization"] },
  { name: "Power BI", icon: MdAnalytics, color: "#FFD54F", level: 75, exp: "1 yr", topics: ["DAX", "Dashboards", "Reports"] },
  { name: "React", icon: FaReact, color: "#61DAFB", level: 72, exp: "1 yr", topics: ["Hooks", "Components", "UI/UX"] },
  { name: "Excel", icon: FaTable, color: "#217346", level: 85, exp: "1 yr", topics: ["Pivot Tables", "VLOOKUP", "Dashboards"] },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 85, exp: "2 yrs", topics: ["Semantic", "DOM", "Accessibility"] },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 80, exp: "2 yrs", topics: ["Flexbox", "Grid", "Animations"] },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 75, exp: "1.5 yrs", topics: ["ES6+", "Async", "DOM"] },
  { name: "Git", icon: FaGitAlt, color: "#F05032", level: 70, exp: "1 yr", topics: ["Branches", "Merge", "Workflow"] },
  { name: "GitHub", icon: FaGithub, color: "#ffffff", level: 75, exp: "1 yr", topics: ["Repos", "Actions", "CI/CD"] },
  { name: "Pandas", icon: SiPandas, color: "#150458", level: 78, exp: "1.5 yr", topics: ["Dataframes", "Cleaning", "Analysis"] },
  { name: "NumPy", icon: SiNumpy, color: "#4FC3F7", level: 75, exp: "1.5 yr", topics: ["Arrays", "Math", "Matrices"] },
  { name: "Data Viz", icon: FaPalette, color: "#FF6F61", level: 80, exp: "2 yrs", topics: ["Charts", "KPIs", "Storytelling"] },
  { name: "Web Dev", icon: FaCode, color: "#4CAF50", level: 75, exp: "1 yr", topics: ["Frontend", "Responsive", "UI"] },
  { name: "CapCut", icon: FaVideo, color: "#ffffff", level: 85, exp: "3 yrs", topics: ["Editing", "Motion", "Effects"] },
  { name: "Canva", icon: FaPalette, color: "#00c4cc", level: 90, exp: "3 yrs", topics: ["Design", "Branding", "UI"] }
];

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h1 className="section-title">My <span>Skills</span></h1>
          <p className="section-subtitle">technologies and tools i work with</p>
        </div>

        <div className="expand-skills-grid">
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            const isHovered = hoveredSkill === skill.name;

            return (
              <motion.div
                key={skill.name}
                className="expand-card"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                animate={{ height: isHovered ? "170px" : "68px" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {/* Always Visible Top Bar */}
                <div className="card-top">
                  <Icon className="card-icon" style={{ color: skill.color }} />
                  <span className="card-title">{skill.name}</span>
                </div>

                {/* Expandable Details on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="card-details"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="details-exp">
                        <span>🕒 {skill.exp}</span>
                        <span className="level-text">{skill.level}%</span>
                      </div>

                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                        ></div>
                      </div>

                      <div className="topics-list">
                        {skill.topics.map((t) => (
                          <span key={t} className="topic-badge">{t}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;