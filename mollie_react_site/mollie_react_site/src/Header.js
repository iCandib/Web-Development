import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <header className="header-container">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="group-name" href="index.html">
              <img
                className="large-logo"
                src="images/large_logo.png"
                alt="large-logo"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle nav-link"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      About
                    </button>

                    <ul className="dropdown-menu">
                      <li>
                        <a className="nav-link dropdown-item" href="about_me.html">
                          About Mollie
                        </a>
                      </li>
                      <hr id="about" />
                      <li>
                        <a
                          className="nav-link dropdown-item"
                          href="areas_of_focus.html"
                        >
                          Areas of Focus
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle nav-link"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </button>



                    <ul className="dropdown-menu">
                      <li className="list_services">
                        <a
                          className="nav-link dropdown-item"
                          href="services_individual.html"
                        >
                          Psychotherapy
                        </a>
                      </li>
                      <hr id="services" />
                      <li className="list_services">
                        <a
                          className="nav-link dropdown-item"
                          href="services_supervision.html"
                        >
                          Clinical Supervision
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle nav-link"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Resources
                    </button>

                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="nav-link dropdown-item"
                          id="resources"
                          href="billing.html"
                        >
                          Billing + Insurance
                        </a>
                      </li>
                      <hr id="resources" />
                      <li>
                        <a
                          className="nav-link dropdown-item"
                          id="resources"
                          href="blogs.html"
                        >
                          Blogs
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="faq.html">FAQ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="consultation.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
