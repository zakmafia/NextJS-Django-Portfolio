import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from "@fortawesome/free-solid-svg-icons";
const PortfolioSection: React.FC = () => {
  return (
    <>
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><FontAwesomeIcon icon={faStar}/></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            {renderPortfolioItems()}
          </div>
        </div>
      </section>

      {renderPortfolioModals()}
    </>
  );
}

const renderPortfolioItems = () => {
  const items = [
    { id: 1, image: "static/img/portfolio/cabin.png", modalTarget: "#portfolioModal1" },
    { id: 2, image: "static/img/portfolio/cake.png", modalTarget: "#portfolioModal2" },
    { id: 3, image: "static/img/portfolio/circus.png", modalTarget: "#portfolioModal3" },
    { id: 4, image: "static/img/portfolio/game.png", modalTarget: "#portfolioModal4" },
    { id: 5, image: "static/img/portfolio/safe.png", modalTarget: "#portfolioModal5" },
    { id: 6, image: "static/img/portfolio/submarine.png", modalTarget: "#portfolioModal6" }
  ];

  return items.map(item => (
    <div key={item.id} className="col-md-6 col-lg-4 mb-5">
      <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={item.modalTarget}>
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={item.image} alt="..." />
      </div>
    </div>
  ));
}

const renderPortfolioModals = () => {
  const modals = [
    { id: 1, title: "Log Cabin", image: "static/img/portfolio/cabin.png", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." },
    { id: 2, title: "Tasty Cake", image: "static/img/portfolio/cake.png", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." },
    { id: 3, title: "Circus Tent", image: "static/img/portfolio/circus.png", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." },
    { id: 4, title: "Controller", image: "static/img/portfolio/game.png", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." },
    { id: 5, title: "Locked Safe", image: "static/img/portfolio/safe.png", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." },
    { id: 6, title: "Submarine", image: "static/img/portfolio/submarine.png", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." }
  ];

  return modals.map(modal => (
    <div key={modal.id} className="portfolio-modal modal fade" id={`portfolioModal${modal.id}`} tabIndex={-1} aria-labelledby={`portfolioModal${modal.id}`} aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{modal.title}</h2>
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                  </div>
                  <img className="img-fluid rounded mb-5" src={modal.image} alt="..." />
                  <p className="mb-4">{modal.content}</p>
                  <button className="btn btn-primary" data-bs-dismiss="modal">
                    <i className="fas fa-xmark fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default PortfolioSection;
