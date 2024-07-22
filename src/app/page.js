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
import SocialSection from './components/SocialSection';
import { GiHamburgerMenu } from "react-icons/gi";



export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState('');


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
  const handleSetActiveSection = (section, event) => {
    setActiveSection(section);
  };

  const openMobile = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  

  return (
    <div className="container">
      <div className={` side-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="side-nav-inner">
          <div className="profile-container">

            <Image className="profile desktop" src="/img/kfurer.jpg" alt="" width={500} height={500} />
          </div>

          <button onClick={() => handleSetActiveSection('home', event)}>
            <h1>Kris Furer</h1>
            <p className='sub-heading'>Web Design & Development</p>
          </button>
          <nav className='desktop'>
            <button 
              className={activeSection === 'home' ? 'active' : ''} 
              onClick={() => handleSetActiveSection('home')}
            >
              About
            </button>
            <button 
              className={activeSection === 'education' ? 'active' : ''} 
              onClick={() => handleSetActiveSection('education')}
            >
              Education
            </button>
            <button 
              className={activeSection === 'work-experience' ? 'active' : ''} 
              onClick={() => handleSetActiveSection('work-experience')}
            >
              Work Experience
            </button>
            <button 
              className={activeSection === 'projects' ? 'active' : ''} 
              onClick={() => handleSetActiveSection('projects')}
            >
              Projects
            </button>
            <button 
              className={activeSection === 'skills' ? 'active' : ''} 
              onClick={() => handleSetActiveSection('skills')}
            >
              Skills
            </button>
            <button 
              className={activeSection === 'contact' ? 'active' : ''} 
              onClick={() => handleSetActiveSection('contact')}
            >
              Contact
            </button>
          </nav>

        </div>
        < SocialSection className="desktop" />
        <GiHamburgerMenu  className="mobile" onClick={() => openMobile()} size={30}/>

      </div>


      <div className="content-container">
        <div className="content">
          {getContent()}
        </div>
      </div>
    </div>
  );
}
