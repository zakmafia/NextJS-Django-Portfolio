import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const AboutSection: React.FC = () => {
  return (
    <section className="page-section bg-secondary text-white mb-0" id="about">
      <div className="container-fluid">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 mx-auto">
            <p className="lead">
              Hello! I'm Zekarias Mesfin, a seasoned full-stack developer with a
              focus on Django and Next.js. With over 4 years of hands-on
              experience, my coding journey, which began in university, has been
              a passionate pursuit of knowledge and skill enhancement. <br /><br />My
              diverse skill set encompasses HTML, CSS, Bootstrap, JavaScript,
              React, Django, Node.js, Python, and Next.js. My recent achievement
              of AWS certification has not only fueled my interest in cloud
              computing but also expanded my technical capabilities. This
              certification stands as a testament to my dedication to staying
              abreast of the latest technologies.
            </p>
          </div>
          <div className="col-lg-4 mx-auto">
            <p className="lead">
              Outside of my professional sphere, I have a deep-rooted interest
              in football, chess, and music. These hobbies serve as a source of
              relaxation, while also fostering my creativity and strategic
              thinking. They provide me with a fresh perspective when it comes
              to problem-solving in coding. <br /><br />Armed with robust development skills
              and an AWS certification, I stand ready to embrace new challenges
              and create something remarkable. I invite you to join me on this
              exciting journey! Let's create something awesome together.
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <a
            className="btn btn-xl btn-outline-light"
            href="https://drive.google.com/file/d/11m8jVY5PTPekUYNAqrhAZa6rVRe-navJ/view?usp=sharing"
            target="blank"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
