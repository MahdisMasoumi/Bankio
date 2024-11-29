import React, { useEffect } from "react";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    const allNavLinks = document.querySelectorAll(".nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");

    allNavLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navbarToggler.getAttribute("aria-expanded") === "true") {
          navbarToggler.click();
        }
      });
    });

    return () => {
      allNavLinks.forEach(link => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".links");

    const handleMouseOver = event => {
      links.forEach(link => {
        if (link !== event.target) {
          link.classList.add("faded");
        }
      });
    };

    const handleMouseOut = () => {
      links.forEach(link => {
        link.classList.remove("faded");
      });
    };

    links.forEach(link => {
      link.addEventListener("mouseover", handleMouseOver);
      link.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("mouseover", handleMouseOver);
        link.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return (
    <header className="container-fluid px-5 py-2 border-bottom header">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a
            class="navbar-brand d-flex align-items-center "
            href="main-section"
          >
            <img
              src="img/logo.png"
              alt="Bankist logo"
              className="nav__logo img-fluid"
              id="logo"
              designer="Mahdis"
              data-version-number="3.0"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link links " href="#section--1">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link links" href="#section--2">
                  Operations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link links" href="#section--3">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link account-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#createAccountModal"
                >
                  Open Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; // Default export
