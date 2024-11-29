import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 mb-1">
            <ul className="footer__nav d-flex flex-wrap justify-content-center list-unstyled">
              <li className="footer__item px-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link"
                  href="https://www.linkedin.com/in/mahdismasoumi/"
                >
                  LinkedIn
                </a>
              </li>
              <li className="footer__item px-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link"
                  href="https://github.com/MahdisMasoumi"
                >
                  GitHub
                </a>
              </li>
              <li className="footer__item px-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link"
                  href="https://mahdis-masoumi.vercel.app/about"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <div className="text-center">
              <img
                src="img/mahdis.png"
                alt="Logo"
                className="footer__logo img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
