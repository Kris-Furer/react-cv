'use client';
import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import reset from "./reset.css";
import JobSection from './components/JobSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import HomeSection from './components/HomeSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';



export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const getContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'work-experience':
        return <JobSection />;
      case 'education':
        return <EducationSection />;
      case 'contact':
        return <ContactSection />;
        case 'projects':
        return <ProjectSection />;
        case 'skills':
          return <SkillsSection />;
        
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
          <div className="profile-container">

          <Image className="profile" src="/img/kfurer.jpg" alt="" width={500} height={500}/>
          </div>
          
            <button onClick={() => handleSetActiveSection('home')}>
              <h1>Kris Furer</h1>
              <p class='sub-heading'>Web Design & Development</p>
            </button>
            <nav>
            <button onClick={() => handleSetActiveSection('home')}>
              About
            </button>
            
            <button onClick={() => handleSetActiveSection('education')}>
              Education
            </button>
            <button onClick={() => handleSetActiveSection('work-experience')}>
              Work Experience
            </button>
            <button onClick={() => handleSetActiveSection('projects')}>
              Projects
            </button>
            <button onClick={() => handleSetActiveSection('skills')}>
              Skills
            </button>
            <button onClick={() => handleSetActiveSection('contact')}>
              Contact
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
