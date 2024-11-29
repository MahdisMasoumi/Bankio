import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="section" id="section--1">
      <div className="container">
        <div className="mb-5">
          <h2 className="section__header">Features</h2>
          <h5 className="section__description">
            Everything you need in a modern bank and more.
          </h5>
        </div>

        <div className="row gx-5 align-items-center">
          <div className="col-12 col-md-6 features__image-last">
            <img
              src="/img/digital.png"
              data-src="/img/digital.png"
              alt="Digital banking illustration"
              className="img-fluid rounded lazy-img"
            />
          </div>
          <div className="col-12 col-md-6 features__text-first">
            <div className="features__feature text-center text-md-start">
              <div className="features__icon mb-3">
                <svg>
                  <use href="/img/icons.svg#icon-monitor"></use>
                </svg>
              </div>
              <h5 className="features__header">100% digital bank</h5>
              <p className="features__p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                alias sint quos? Accusantium a fugiat porro reiciendis saepe
                quibusdam debitis ducimus.
              </p>
            </div>
          </div>
        </div>

        <div className="row gx-5 align-items-center flex-md-row-reverse mt-5">
          <div className="col-12 col-md-6 features__image-last">
            <img
              src="/img/grow.jpg"
              data-src="/img/grow.jpg"
              alt="Plant"
              className="img-fluid rounded lazy-img features__img"
            />
          </div>
          <div className="col-12 col-md-6 features__text-first">
            <div className="features__feature text-center text-md-start">
              <div className="features__icon mb-3">
                <svg>
                  <use href="/img/icons.svg#icon-trending-up"></use>
                </svg>
              </div>
              <h5 className="features__header">Watch your money grow</h5>
              <p className="features__p">
                Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
                inventore ab? Nulla incidunt eius numquam sequi iste pariatur
                quibusdam!
              </p>
            </div>
          </div>
        </div>

        <div className="row gx-5 align-items-center mt-5">
          <div className="col-12 col-md-6 features__image-last">
            <img
              src="/img/card.png"
              data-src="/img/card.png"
              alt="Credit card"
              className="img-fluid rounded lazy-img"
            />
          </div>
          <div className="col-12 col-md-6 features__text-first">
            <div className="features__feature text-center text-md-start">
              <div className="features__icon mb-3">
                <svg>
                  <use href="/img/icons.svg#icon-credit-card"></use>
                </svg>
              </div>
              <h5 className="features__header">Free debit card included</h5>
              <p className="features__p">
                Quasi, fugit in cumque cupiditate reprehenderit debitis animi
                enim eveniet consequatur odit quam quos possimus assumenda dicta
                fuga inventore ab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
