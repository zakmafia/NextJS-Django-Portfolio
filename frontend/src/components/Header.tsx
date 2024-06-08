import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from 'react-type-animation';
const Header: React.FC = () => {
  return (
    <header className="masthead bg-secondary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5" src="static/img/zak-profile.jpg" alt="..." />
        <h1 className="masthead-heading text-uppercase mb-0">Hello I'm Zekarias Mesfin</h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><FontAwesomeIcon icon={faStar}/></div>
          <div className="divider-custom-line"></div>
        </div>
        <TypeAnimation preRenderFirstString={true} className="masthead-subheading font-weight-light mb-0" sequence={[2500, "I'm a Full-Stack Software Developer", 2500, "I'm a Python Developer"] } speed={50} repeat={Infinity}/>
      </div>
    </header>
  );
};

export default Header;
