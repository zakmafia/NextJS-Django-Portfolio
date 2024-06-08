import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const SkillsSection: React.FC = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Skills
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card mb-4">
                <div className="card-header">Programming Languages</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Python</li>
                  <li className="list-group-item">JavaScript</li>
                  <li className="list-group-item">TypeScript</li>
                  <li className="list-group-item">HTML</li>
                  <li className="list-group-item">CSS3</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card mb-4">
                <div className="card-header">Frameworks & Libraries</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Django</li>
                  <li className="list-group-item">Flask</li>
                  <li className="list-group-item">React / Redux</li>
                  <li className="list-group-item">NextJS</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card mb-4">
                <div className="card-header">Tools</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Git</li>
                  <li className="list-group-item">GitHub</li>
                  <li className="list-group-item">VSCode</li>
                  <li className="list-group-item">Pycharm</li>
                  <li className="list-group-item">Vercel</li>
                  <li className="list-group-item">AWS</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card mb-4">
                <div className="card-header">Methodologies</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Test Driven Development</li>
                  <li className="list-group-item">Agile Methodology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
