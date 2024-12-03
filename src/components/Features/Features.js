import React from "react";
import "./Features.css";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      imgSrc: "/img/digital.png",
      imgAlt: "Digital banking illustration",
      iconHref: "/img/icons.svg#icon-monitor",
      title: (
        <>
          <span className="title1">100%</span> digital bank
        </>
      ),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam debitis ducimus.",
      color: "#bc893d",
      backgroundColor: "#eaf4f55c",
      boxShadow: "rgba(144, 151, 153, 0.2)",
    },
    {
      id: 2,
      imgSrc: "/img/grow.jpg",
      imgAlt: "Plant",
      iconHref: "/img/icons.svg#icon-trending-up",
      title: (
        <>
          Watch your money <span className="title2">grow</span>
        </>
      ),
      description:
        "Nesciunt quos autem dolorum voluptates cum dolores dicta fuga inventore ab? Nulla incidunt eius numquam sequi iste pariatur quibusdam!",
      color: "#477c43",
      backgroundColor: "#c0c1c33a",
      boxShadow: "rgba(12, 50, 8, 0.2)",
    },
    {
      id: 3,
      imgSrc: "/img/card.png",
      imgAlt: "Credit card",
      iconHref: "/img/icons.svg#icon-credit-card",
      title: (
        <>
          <span className="title3">Free</span> debit card included
        </>
      ),
      description:
        "Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim eveniet consequatur odit quam quos possimus assumenda dicta fuga inventore ab.",
      color: "#494790",
      backgroundColor: "#b5a9ac3a",
      boxShadow: "rgba(95, 88, 94, 0.2)",
    },
  ];

  return (
    <section className="section" id="section--1">
      <div className="container text-center">
        <div className="mb-5">
          <h2 className="section__header ">
            All the <span className="highlight">Features</span> You Need.
          </h2>
          <h5 className="section__description">
            Everything you need in a modern bank and more.
          </h5>
        </div>

        {featuresData.map((feature, index) => (
          <div
            key={feature.id}
            className={`row gx-5 gy-5 align-items-center ${
              index % 2 === 1 ? "flex-md-row-reverse" : ""
            } mt-5`}
          >
            {/* Image */}
            <div className="col-12 col-md-6 features__image-last">
              <img
                src={feature.imgSrc}
                alt={feature.imgAlt}
                className="img-fluid rounded lazy-img features__img"
              />
            </div>

            {/* Text */}
            <div className="col-12 col-md-6 features__text-first">
              <div className="features__feature text-center text-md-start">
                <div
                  className="features__icon mb-3"
                  style={{
                    color: feature.color,
                    backgroundColor: feature.backgroundColor,
                    boxShadow: `3px 4px 10px ${feature.boxShadow}`,
                  }}
                >
                  <svg>
                    <use href={feature.iconHref}></use>
                  </svg>
                </div>
                <h5 className="features__header">{feature.title}</h5>
                <p className="features__p">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
