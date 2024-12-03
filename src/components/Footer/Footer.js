import React from "react";
import "./Footer.css";

const Footer = () => {
  const footerLinks = [
    {
      id: 1,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mahdismasoumi/",
    },
    {
      id: 2,
      label: "GitHub",
      url: "https://github.com/MahdisMasoumi",
    },
    {
      id: 3,
      label: "Portfolio",
      url: "https://mahdis-masoumi.vercel.app/about",
    },
  ];

  return (
    <footer className="footer py-2">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <ul className="footer__nav d-flex flex-nowrap justify-content-center list-unstyled">
              {footerLinks.map(link => (
                <li key={link.id} className="footer__item">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="footer__link"
                    href={link.url}
                    aria-label={`Visit ${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12">
            <div className="text-center">
              <img
                src="img/logom.png"
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
