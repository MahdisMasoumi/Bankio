import React from "react";
import "./Modal.css";

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="createAccountModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="createAccountModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <h2 className="modal-title px-5 py-2" id="createAccountModalLabel">
            Open your bank account <br />
            in just
            <span className="highlight1"> 5 minutes</span>
          </h2>
          <div className="modal-body">
            <form id="createAccountForm">
              <div className="form-group row mb-3">
                <label for="name" className="col-sm-5 col-form-label">
                  User Name
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
              </div>
              <div className="form-group row mb-3">
                <label for="email" className="col-sm-5 col-form-label">
                  Email Address
                </label>
                <div className="col-sm-7">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group row mb-3">
                <label for="password" className="col-sm-5 col-form-label">
                  Password
                </label>
                <div className="col-sm-7">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              form="createAccountForm"
              className="btn btn-submit"
            >
              Submit &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
