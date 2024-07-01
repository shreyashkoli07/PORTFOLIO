import React, { useState } from "react";
import "./home.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoBagHandle } from "react-icons/io5";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLinkClick = () => {
    setIsCollapsed(true);
  };

  return (
    <>
      <div
        className="navbar_main sticky-top navbar-inverse"
        style={{ position: "sticky" }}
      >
        <nav className="navbar navbar-expand-lg sticky-top navbar-inverse">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded={!isCollapsed}
              aria-label="Toggle navigation"
              onClick={handleCollapse}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${
                isCollapsed ? "" : "show"
              }`}
              id="navbarTogglerDemo01"
            >
              <h3>
                <FaChevronLeft />
                PORTFOLIO<span style={{ color: "#2FD911" }}>/</span>
                <FaChevronRight />
              </h3>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-50 mr-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="navbar_link"
                    onClick={handleLinkClick}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="navbar_link"
                    onClick={handleLinkClick}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/projects"
                    className="navbar_link"
                    onClick={handleLinkClick}
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="navbar_link"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <h6 style={{ display: "flex" }}>
                <NavLink
                  to="/hire"
                  className="hire_link"
                  onClick={handleLinkClick}
                >
                  Hire Me
                  <IoBagHandle className="hireme_logo" />
                </NavLink>
              </h6>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
