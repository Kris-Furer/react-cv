import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SocialSection = () => {
    return (
        <div>
            <div className="social-section desktop">
                <a href="https://www.linkedin.com/in/kris-furer/">
                <FaLinkedin size={30} />
                
                </a>
                <a href='https://github.com/Kris-Furer' >
                <FaGithub size={30} />
                </a>
            </div>
        </div>
    );
}

export default SocialSection;
