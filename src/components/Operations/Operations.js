import React from "react";
import "./Operations.css";

const Operations = () => {
  return (
    <section className="section" id="section--2">
      <div className="container">
        <div>
          <h2 className="section__header">Operations</h2>
          <h5 className="section__description">
            Everything as simple as possible, but no simpler.
          </h5>
        </div>

        <div className="row gx-5 gy-4 px-3">
          <div className="col-12 ashghar">
            <div className="operations__content operations__content--1 shadow-sm">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h5 className="operations__header">
                    Transfer money to anyone, instantly! No fees, no BS.
                  </h5>
                  <p className="operations__p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-md-6 text-center">
                  <img
                    src="img/transfer.png"
                    className="operations-image img-fluid"
                    alt="Transfer money"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 ashghar">
            <div className="operations__content operations__content--2 shadow-sm">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h5 className="operations__header">
                    Buy a home or make your dreams come true, with instant
                    loans.
                  </h5>
                  <p className="operations__p">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="col-md-6 text-center">
                  <img
                    src="img/home.jpg"
                    className="operations-image img-fluid"
                    alt="Buy a home"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 ashghar">
            <div className="operations__content operations__content--3 shadow-sm">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h5 className="operations__header">
                    No longer need your account? No problem! Close it instantly.
                  </h5>
                  <p className="operations__p">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="col-md-6 text-center">
                  <img
                    src="img/account.png"
                    className="operations-image img-fluid"
                    alt="Close account"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operations;
