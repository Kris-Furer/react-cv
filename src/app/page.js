'use client';
import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import reset from "./reset.css";
import JobSection from './components/JobSection';
import EducationSection from './components/EducationSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const getContent = () => {
    switch (activeSection) {
      case 'home':
        return 'Home Time!';
      case 'work-experience':
        return <JobSection />;
      case 'education':
        return <EducationSection />;
      default:
        return 'Content for default case';
    }
  };

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="container">
      <div className="side-nav">
        <div className="side-nav-inner">
          <img className="profile" src="/img/kfurer.jpg" alt="" />
          <nav>
            <button onClick={() => handleSetActiveSection('home')}>
              <h1>Kris Furer</h1>
            </button>
            <button onClick={() => handleSetActiveSection('education')}>
              <h2>Education</h2>
            </button>
            <button onClick={() => handleSetActiveSection('work-experience')}>
              <h2>Work Experience</h2>
            </button>
            <button onClick={() => handleSetActiveSection('references')}>
              <h2>References</h2>
            </button>
            <button onClick={() => handleSetActiveSection('projects')}>
              <h2>Projects</h2>
            </button>
            <button onClick={() => handleSetActiveSection('skills')}>
              <h2>Skills</h2>
            </button>
            <button onClick={() => handleSetActiveSection('contact')}>
              <h2>Contact</h2>
            </button>
          </nav>
        </div>
      </div>
      <div className="content-container">
        <div className="content">
          {getContent()}
        </div>
      </div>
    </div>
  );
}
