import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">
              Bole Bulbula
              <br />
              Addis Ababa, Ethiopia
              <br />
              +251-941-18-21-21
            </p>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Connect with Me</h4>
            <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/zekarias-mesfin-51b74b1b9/">
            <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/zakmafia">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/zach_maf/">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="https://x.com/zekariasmesfin1">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">About Me</h4>
            <p className="lead mb-0">
              Full-Stack Software Developer | Python
              Developer.
            </p>
            <a
                href="#"
              >
                zekariasmesfin100@gmail.com
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
