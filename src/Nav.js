import React, { Component } from "react";
import "./nav.css";
import security from "./security.png";
class Nav extends Component {
  render() {
    return (
      <div>
        <div className="navigation-wrap bg-light start-header start-style">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-md navbar-light">
                  <a className="navbar-brand" href="#" target="_blank">
                    <img src={security} alt="" />
                  </a>
                  Safety First
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto py-4 py-md-0">
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="/"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="/services">
                          Portfolio
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="#">
                          Agency
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          href="#"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Services
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </div>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="#">
                          Journal
                        </a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="#">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
