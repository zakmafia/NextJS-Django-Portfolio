'use client'
export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
          <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img className="masthead-avatar mb-5" src="static/img/avataaars.svg" alt="..." />
          <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="static/img/portfolio/cabin.png" alt="..." />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="static/img/portfolio/cake.png" alt="..." />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="static/img/portfolio/circus.png" alt="..." />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="static/img/portfolio/game.png" alt="..." />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="static/img/portfolio/safe.png" alt="..." />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src="static/img/portfolio/submarine.png" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-lg-4 me-auto">
              <p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
              <i className="fas fa-download me-2"></i>
              Free Download!
            </a>
          </div>
        </div>
      </section>
      <section className="page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div className="form-floating mb-3">
                  <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                  <label htmlFor="name">Full name</label>
                  <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                  <label htmlFor="email">Email address</label>
                  <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                  <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                  <label htmlFor="phone">Phone number</label>
                  <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                </div>
                <div className="form-floating mb-3">
                  <textarea className="form-control" id="message" placeholder="Enter your message here..." style={{height: "10rem"}} data-sb-validations="required"></textarea>
                  <label htmlFor="message">Message</label>
                  <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                </div>
                <br />
                <div id="submitSuccessMessage" className="d-none">
                  <div className="text-center text-white mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                  </div>
                </div>
                <div id="submitErrorMessage" className="d-none">
                  <div className="text-center text-danger mb-3">Error sending message!</div>
                </div>
                <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">2215 John Daniel Drive<br />Clark, MO 65243</p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
            </div>
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">About Freelancer</h4>
              <p className="lead mb-0">
                Freelance is a free to use, MIT licensed Bootstrap theme created by
                <a href="http://startbootstrap.com">Start Bootstrap</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright py-4 text-center text-white">
        <div className="container"><small>Copyright &copy; Your Website 2023</small></div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} aria-labelledby="portfolioModal1" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src="static/img/portfolio/cabin.png" alt="..." />
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button className="btn btn-primary"  data-bs-dismiss="modal">
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
      <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} aria-labelledby="portfolioModal2" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Tasty Cake</h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src="static/img/portfolio/cake.png" alt="..." />
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button className="btn btn-primary"  data-bs-dismiss="modal">
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
      <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} aria-labelledby="portfolioModal3" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Circus Tent</h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src="static/img/portfolio/circus.png" alt="..." />
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button className="btn btn-primary"  data-bs-dismiss="modal">
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
      <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} aria-labelledby="portfolioModal4" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src="static/img/portfolio/game.png" alt="..." />
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button className="btn btn-primary"  data-bs-dismiss="modal">
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
      <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} aria-labelledby="portfolioModal5" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Locked Safe</h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src="static/img/portfolio/safe.png" alt="..." />
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    <button className="btn btn-primary"  data-bs-dismiss="modal">
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
      <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} aria-labelledby="portfolioModal6" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img className="img-fluid rounded mb-5" src="static/img/portfolio/submarine.png" alt="..." />
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
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
      </div>
  );
}

