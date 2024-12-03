import React from "react";
import "./Operations.css";

const operationsData = [
  {
    id: 1,
    bgColorClass: "operations__content--1",
    imgSrc: "img/transfer.png",
    imgAlt: "Transfer money",
    header: "Transfer money to anyone, instantly! No fees, no BS.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut.",
  },
  {
    id: 2,
    bgColorClass: "operations__content--2",
    imgSrc: "img/home.png",
    imgAlt: "Buy a home",
    header: "Buy a home or make your dreams come true, with instant loans.",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    bgColorClass: "operations__content--3",
    imgSrc: "img/account.png",
    imgAlt: "Close account",
    header: "No longer need your account? No problem! Close it instantly.",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Operations = () => {
  return (
    <section className="section" id="section--2">
      <div className="container ">
        <div className="text-center">
          <h2 className="section__header ">
            Simplicity in Every
            <span className="highlight">Operation</span>.
          </h2>
          <h5 className="section__description">
            Everything as simple as possible, but no simpler.
          </h5>
        </div>

        <div className="row gx-5 gy-4 px-3 ">
          {operationsData.map((operation, index) => (
            <div
              key={operation.id}
              className={` col-12 ashghar ${index === operationsData.length}`}
            >
              <div className={`operations__content ${operation.bgColorClass} `}>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h5 className="operations__header">{operation.header}</h5>
                    <p className="operations__p">{operation.description}</p>
                  </div>
                  <div className="col-md-6 text-center">
                    <img
                      src={operation.imgSrc}
                      className="operations-image img-fluid"
                      alt={operation.imgAlt}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Operations;
