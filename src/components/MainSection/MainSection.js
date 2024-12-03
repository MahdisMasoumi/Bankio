import "./MainSection.css";
import React from "react";

const MainSection = () => {
  const scrollToSection = () => {
    const section1 = document.querySelector("#section--1");
    if (section1) {
      section1.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section" id="main-section">
      <div className="container text-center main-section">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-md-start mb-4 mb-md-0">
            <h1>
              When <span className="highlight">banking</span> meets
              <span className="highlight"> minimalist</span>
            </h1>
            <h4 className="mt-4">
              A simpler banking experience for a simpler life.
            </h4>
            <div>
              <button className="btn--scroll-to mt-5" onClick={scrollToSection}>
                Learn more ↓
              </button>
            </div>
          </div>

          <div className="col-12 col-md-6 hai ">
            <img
              src="/img/bank.png"
              className="img-fluid img-main"
              alt="Minimalist bank items"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
